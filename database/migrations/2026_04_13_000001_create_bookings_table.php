<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('locale', 5);
            $table->string('customer_name', 120);
            $table->string('phone', 40);
            $table->string('service_slug', 80);
            $table->string('service_title', 255);
            $table->string('service_price', 80)->nullable();
            $table->string('masseuse', 80);
            $table->dateTime('booked_at');
            $table->text('notes')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
