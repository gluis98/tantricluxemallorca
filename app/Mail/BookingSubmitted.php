<?php

namespace App\Mail;

use App\Models\Booking;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BookingSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Booking $booking)
    {
    }

    public function build()
    {
        return $this->locale($this->booking->locale)
            ->subject(trans('bookingPage.email_subject', [], $this->booking->locale))
            ->view('emails.booking-submitted');
    }
}
