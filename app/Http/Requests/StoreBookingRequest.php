<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Validation\Rule;

class StoreBookingRequest extends FormRequest
{
    protected function prepareForValidation(): void
    {
        $locale = $this->route('locale');
        if (is_string($locale) && $locale !== '') {
            App::setLocale($locale);
        }
    }

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'customer_name' => ['required', 'string', 'max:120'],
            'phone' => ['required', 'string', 'max:40', 'regex:/^[0-9+\s().-]+$/u'],
            'service_slug' => ['required', 'string', 'max:80', Rule::in($this->allowedServiceSlugs())],
            'masseuse' => ['required', 'string', 'max:80', Rule::in($this->allowedMasseuses())],
            'booked_at' => ['required', 'date'],
            'notes' => ['nullable', 'string', 'max:2000'],
        ];
    }

    public function withValidator($validator): void
    {
        $validator->after(function ($validator) {
            $value = $this->input('booked_at');
            if (!$value) {
                return;
            }
            try {
                if (Carbon::parse($value)->lessThanOrEqualTo(now())) {
                    $validator->errors()->add('booked_at', __('bookingPage.validation_booked_at_future'));
                }
            } catch (\Throwable) {
                $validator->errors()->add('booked_at', __('bookingPage.validation_booked_at_invalid'));
            }
        });
    }

    /**
     * @return list<string>
     */
    private function allowedServiceSlugs(): array
    {
        $services = trans('servicesPage.services', [], 'es');

        return collect($services)->pluck('slug')->filter()->values()->all();
    }

    /**
     * @return list<string>
     */
    private function allowedMasseuses(): array
    {
        return ['sin_preferencia', 'Tatiana', 'Anny'];
    }
}
