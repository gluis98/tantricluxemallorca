<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookingRequest;
use App\Mail\BookingSubmitted;
use App\Models\Booking;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;

class BookingController extends Controller
{
    public function create(Request $request, string $locale): View
    {
        App::setLocale($locale);

        $services = array_values(trans('servicesPage.services', [], $locale) ?? []);
        $preselectSlug = $request->query('servicio') ?: $request->query('service');

        return view('booking', [
            'locale' => $locale,
            'services' => $services,
            'preselectSlug' => is_string($preselectSlug) ? $preselectSlug : null,
        ]);
    }

    public function store(StoreBookingRequest $request, string $locale): RedirectResponse
    {
        App::setLocale($locale);

        $validated = $request->validated();
        $services = trans('servicesPage.services', [], $locale) ?? [];
        $svc = collect($services)->firstWhere('slug', $validated['service_slug']);

        $booking = Booking::create([
            'locale' => $locale,
            'customer_name' => $validated['customer_name'],
            'phone' => $validated['phone'],
            'service_slug' => $validated['service_slug'],
            'service_title' => $svc['title'] ?? $validated['service_slug'],
            'service_price' => $svc['price'] ?? null,
            'masseuse' => $validated['masseuse'],
            'booked_at' => $validated['booked_at'],
            'notes' => $validated['notes'] ?? null,
            'ip_address' => $request->ip(),
        ]);

        try {
            $notifyEmail = config('services.booking.notify_email');
            if ($notifyEmail) {
                Mail::to($notifyEmail)->send(new BookingSubmitted($booking));
            }
        } catch (\Throwable $e) {
            Log::error('Booking email failed', ['booking_id' => $booking->id, 'message' => $e->getMessage()]);
        }

        $this->trySendWhatsapp($booking);

        $path = trans('common.header.paths.booking', [], $locale);

        return redirect('/' . $locale . $path)
            ->with('booking_success', true);
    }

    private function trySendWhatsapp(Booking $booking): void
    {
        $apiKey = config('services.booking.callmebot_api_key');
        $phone = config('services.booking.callmebot_phone');
        if (empty($apiKey) || empty($phone)) {
            return;
        }

        $phone = preg_replace('/\s+/', '', (string) $phone);
        $text = $this->whatsappMessage($booking);

        try {
            Http::timeout(15)->get('https://api.callmebot.com/whatsapp.php', [
                'phone' => $phone,
                'apikey' => $apiKey,
                'text' => $text,
            ]);
        } catch (\Throwable $e) {
            Log::warning('Booking WhatsApp (CallMeBot) failed', ['message' => $e->getMessage()]);
        }
    }

    private function whatsappMessage(Booking $booking): string
    {
        $masseuseLabel = $booking->masseuse === 'sin_preferencia'
            ? __('bookingPage.masseuse_any')
            : $booking->masseuse;

        $when = $booking->booked_at->timezone(config('app.timezone'))->format('d/m/Y H:i');

        return implode("\n", array_filter([
            __('bookingPage.whatsapp_notify_title'),
            __('bookingPage.label_name') . ': ' . $booking->customer_name,
            __('bookingPage.label_phone') . ': ' . $booking->phone,
            __('bookingPage.label_service') . ': ' . $booking->service_title,
            __('bookingPage.label_price') . ': ' . ($booking->service_price ?: '—'),
            __('bookingPage.label_masseuse') . ': ' . $masseuseLabel,
            __('bookingPage.label_datetime') . ': ' . $when,
            $booking->notes ? __('bookingPage.label_notes') . ': ' . $booking->notes : null,
        ]));
    }
}
