<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>{{ __('bookingPage.email_subject') }}</title>
</head>
<body style="font-family: Georgia, serif; background: #0a0a0a; color: #ededed; padding: 24px;">
    <div style="max-width: 560px; margin: 0 auto; background: #141414; border: 1px solid #b45309; border-radius: 12px; padding: 24px;">
        <h1 style="color: #fbbf24; font-weight: normal; font-size: 22px; margin-top: 0;">{{ __('bookingPage.email_heading') }}</h1>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 8px 0; color: #9ca3af;">{{ __('bookingPage.label_name') }}</td><td style="padding: 8px 0;">{{ $booking->customer_name }}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">{{ __('bookingPage.label_phone') }}</td><td style="padding: 8px 0;">{{ $booking->phone }}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">{{ __('bookingPage.label_service') }}</td><td style="padding: 8px 0;">{{ $booking->service_title }}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">{{ __('bookingPage.label_price') }}</td><td style="padding: 8px 0;">{{ $booking->service_price ?: '—' }}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">{{ __('bookingPage.label_masseuse') }}</td><td style="padding: 8px 0;">{{ $booking->masseuse === 'sin_preferencia' ? __('bookingPage.masseuse_any') : $booking->masseuse }}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">{{ __('bookingPage.label_datetime') }}</td><td style="padding: 8px 0;">{{ $booking->booked_at->timezone(config('app.timezone'))->format('Y-m-d H:i') }}</td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">{{ __('bookingPage.label_locale') }}</td><td style="padding: 8px 0;">{{ $booking->locale }}</td></tr>
            @if($booking->notes)
            <tr><td style="padding: 8px 0; vertical-align: top; color: #9ca3af;">{{ __('bookingPage.label_notes') }}</td><td style="padding: 8px 0;">{{ $booking->notes }}</td></tr>
            @endif
        </table>
        <p style="margin-top: 24px; font-size: 13px; color: #6b7280;">{{ __('bookingPage.email_footer') }}</p>
    </div>
</body>
</html>
