<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'locale',
        'customer_name',
        'phone',
        'service_slug',
        'service_title',
        'service_price',
        'masseuse',
        'booked_at',
        'notes',
        'ip_address',
    ];

    protected $casts = [
        'booked_at' => 'datetime',
    ];
}
