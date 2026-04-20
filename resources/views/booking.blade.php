@extends('layouts.app')

@php
    $bookingPage = trans('bookingPage', [], $locale);
    $common = trans('common', [], $locale);
    $bookingPath = $common['header']['paths']['booking'] ?? '/reserva';
    $intlLocale = match ($locale) {
        'es' => 'es-ES',
        'en' => 'en-GB',
        'de' => 'de-DE',
        'it' => 'it-IT',
        'fr' => 'fr-FR',
        default => 'es-ES',
    };
@endphp

@section('title', $bookingPage['meta_title'] ?? 'Reserva')
@section('description', $bookingPage['meta_description'] ?? '')
@section('keywords', $bookingPage['meta_keywords'] ?? '')
@section('og_title', $bookingPage['meta_title'] ?? '')
@section('og_description', $bookingPage['meta_description'] ?? '')
@section('og_url', url()->current())
@section('canonical', url()->current())

@section('hreflang')
    @include('components.seo.hreflang', ['locale' => $locale])
@endsection

@push('styles')
<style>
/* Solo página reserva: rejillas fijas sin tocar el CSS global */
.booking-layout-3col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: stretch;
  width: 100%;
}
@media (min-width: 1024px) {
  .booking-layout-3col {
    display: grid;
    grid-template-columns: minmax(260px, 1.2fr) minmax(220px, 1fr) minmax(240px, 0.95fr);
    gap: 1.75rem;
    align-items: start;
  }
}
.booking-cal-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}
.booking-cal-month {
  flex: 1 1 0;
  min-width: 0;
  text-align: center;
}
.booking-cal-weekdays {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.25rem;
  width: 100%;
  margin-bottom: 0.5rem;
  text-align: center;
}
.booking-cal-days {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.375rem;
  width: 100%;
}
.booking-cal-days > button,
.booking-cal-days > div:empty {
  min-width: 0;
}
.booking-cal-days > button {
  width: 100%;
}
.booking-time-slots {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  width: 100%;
  min-height: 200px;
}
@media (min-width: 640px) {
  .booking-time-slots {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.booking-datetime-bar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
@media (min-width: 1024px) {
  .booking-datetime-bar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
@endpush

@section('content')
<div class="relative z-10 px-4 md:px-8 py-8 md:py-12">
    <div class="max-w-7xl mx-auto">

        <a href="{{ url('/' . $locale) }}" class="inline-flex items-center gap-2 text-sm text-amber-400/90 hover:text-amber-300 tenali-ramakrishna tracking-wider mb-8 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            {{ $bookingPage['back'] ?? 'Volver' }}
        </a>

        <header class="mb-10 md:mb-12 max-w-3xl">
            <p class="text-xs md:text-sm tracking-[0.3em] text-amber-400/80 tenali-ramakrishna uppercase mb-3">
                {{ $bookingPage['pre_title'] ?? '' }}
            </p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider gradiente-dorado cormorant-garamond mb-4">
                {{ $bookingPage['title'] ?? '' }}
            </h1>
            <p class="text-gray-400 tenali-ramakrishna text-base md:text-lg leading-relaxed">
                {{ $bookingPage['intro'] ?? '' }}
            </p>
        </header>

        @if(session('booking_success'))
            <div class="mb-8 rounded-2xl border border-green-500/40 bg-green-900/20 px-6 py-4 text-center text-green-200 tenali-ramakrishna">
                {{ $bookingPage['success_message'] ?? '' }}
            </div>
        @endif

        @if($errors->any())
            <div class="mb-8 rounded-2xl border border-red-500/40 bg-red-900/20 px-6 py-4 text-red-200 text-sm space-y-1">
                @foreach($errors->all() as $err)
                    <p>{{ $err }}</p>
                @endforeach
            </div>
        @endif

        <form method="post" action="{{ url('/' . $locale . $bookingPath) }}" id="booking-form" class="space-y-6">
            @csrf

            <div class="booking-datetime-bar pb-2 border-b border-amber-900/30">
                <h2 class="text-lg md:text-xl font-light text-amber-200/95 tenali-ramakrishna tracking-wide uppercase">
                    {{ $bookingPage['select_datetime'] ?? '' }}
                </h2>
                <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-gray-400 tenali-ramakrishna">
                    <span class="text-amber-500/80 uppercase tracking-wider text-xs">{{ $bookingPage['timezone_label'] ?? '' }}</span>
                    <span class="text-gray-300">{{ $bookingPage['timezone_value'] ?? '' }}</span>
                </div>
            </div>

            <div class="booking-layout-3col">

                {{-- Calendario --}}
                <div class="bg-gradient-to-br from-amber-900/15 to-black/50 backdrop-blur-sm rounded-2xl border border-amber-900/30 p-5 md:p-6 shadow-xl w-full min-w-0">
                    <div class="booking-cal-header">
                        <button type="button" id="cal-prev" class="p-2 rounded-lg border border-amber-800/40 text-amber-400 hover:bg-amber-900/30 transition-colors" aria-label="{{ $bookingPage['calendar_prev'] ?? '' }}">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                        </button>
                        <h3 id="cal-month-label" class="booking-cal-month text-lg md:text-xl font-light cormorant-garamond text-amber-100 tracking-wide px-2"></h3>
                        <button type="button" id="cal-next" class="p-2 rounded-lg border border-amber-800/40 text-amber-400 hover:bg-amber-900/30 transition-colors" aria-label="{{ $bookingPage['calendar_next'] ?? '' }}">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                    <div class="booking-cal-weekdays text-xs tenali-ramakrishna text-amber-500/70 uppercase tracking-wider" id="cal-weekday-row"></div>
                    <div class="booking-cal-days" id="cal-grid"></div>
                    <p class="mt-4 text-xs text-gray-500 tenali-ramakrishna text-center">{{ $bookingPage['pick_date'] ?? '' }}</p>
                </div>

                {{-- Franjas horarias --}}
                <div class="bg-gradient-to-br from-amber-900/15 to-black/50 backdrop-blur-sm rounded-2xl border border-amber-900/30 p-5 md:p-6 shadow-xl w-full min-w-0">
                    <p class="text-sm text-gray-400 tenali-ramakrishna mb-1">{{ $bookingPage['availability_for'] ?? '' }}</p>
                    <p id="availability-date-label" class="text-lg font-light cormorant-garamond text-amber-200 mb-5 min-h-[1.75rem]">{{ $bookingPage['pick_date'] ?? '' }}</p>
                    <div id="time-slots" class="booking-time-slots"></div>
                    <p class="mt-4 text-xs text-gray-500 tenali-ramakrishna text-center">{{ $bookingPage['pick_time'] ?? '' }}</p>
                </div>

                {{-- Panel detalle + contacto --}}
                <div class="bg-gradient-to-br from-amber-900/20 to-black/60 backdrop-blur-sm rounded-2xl border border-amber-800/35 p-5 md:p-6 shadow-2xl w-full min-w-0 lg:sticky lg:top-28 self-start">
                    <div class="border-b border-amber-400/25 pb-4 mb-5">
                        <h3 class="text-lg font-light cormorant-garamond text-amber-200 tracking-wide">
                            {{ $bookingPage['service_details'] ?? '' }}
                        </h3>
                    </div>

                    <div class="space-y-4 mb-6">
                        <div>
                            <label for="service_slug" class="block text-xs uppercase tracking-wider text-amber-500/80 tenali-ramakrishna mb-2">{{ $bookingPage['label_service'] ?? '' }} *</label>
                            <select name="service_slug" id="service_slug" required
                                    class="w-full px-3 py-2.5 bg-gray-950/60 border border-amber-900/40 rounded-xl text-amber-100 text-sm tenali-ramakrishna focus:border-amber-500/50 focus:outline-none">
                                <option value="">{{ $bookingPage['service_placeholder'] ?? '' }}</option>
                                @foreach($services as $svc)
                                    @php $slug = $svc['slug'] ?? ''; @endphp
                                    <option value="{{ $slug }}"
                                            data-price="{{ e($svc['price'] ?? '') }}"
                                            data-duration="{{ e($svc['duration'] ?? '') }}"
                                            data-title="{{ e($svc['title'] ?? '') }}"
                                            @selected(old('service_slug', $preselectSlug) === $slug)>
                                        {{ $svc['title'] ?? $slug }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <div>
                            <p id="detail-service-title" class="text-base font-medium text-white tenali-ramakrishna leading-snug">{{ $bookingPage['service_placeholder'] ?? '' }}</p>
                            <p id="detail-price" class="text-2xl font-light cormorant-garamond text-amber-300 mt-1">{{ $bookingPage['price_none'] ?? '—' }}</p>
                        </div>

                        <dl class="space-y-3 text-sm tenali-ramakrishna">
                            <div class="flex justify-between gap-3 border-t border-amber-900/25 pt-3">
                                <dt class="text-gray-500">{{ $bookingPage['duration_label'] ?? '' }}</dt>
                                <dd id="detail-duration" class="text-amber-200/90 text-right">—</dd>
                            </div>
                            <div class="flex justify-between gap-3 border-t border-amber-900/25 pt-3">
                                <dt class="text-gray-500">{{ $bookingPage['summary_datetime'] ?? '' }}</dt>
                                <dd id="detail-datetime" class="text-amber-200/90 text-right text-xs leading-snug">{{ $bookingPage['summary_pending'] ?? '' }}</dd>
                            </div>
                            <div class="flex justify-between gap-3 border-t border-amber-900/25 pt-3">
                                <dt class="text-gray-500">{{ $bookingPage['location_label'] ?? '' }}</dt>
                                <dd class="text-amber-200/90 text-right text-xs leading-snug max-w-[14rem]">{{ $bookingPage['location_address'] ?? '' }}</dd>
                            </div>
                            <div class="flex justify-between gap-3 border-t border-amber-900/25 pt-3">
                                <dt class="text-gray-500">{{ $bookingPage['provider_label'] ?? '' }}</dt>
                                <dd class="text-amber-200/90 text-right">{{ $bookingPage['provider_name'] ?? '' }}</dd>
                            </div>
                        </dl>
                    </div>

                    <div class="border-t border-amber-900/30 pt-5 space-y-4">
                        <p class="text-xs uppercase tracking-wider text-amber-500/80 tenali-ramakrishna">{{ $bookingPage['contact_section'] ?? '' }}</p>

                        <div>
                            <label for="customer_name" class="sr-only">{{ $bookingPage['label_name'] ?? '' }}</label>
                            <input type="text" name="customer_name" id="customer_name" value="{{ old('customer_name') }}" required maxlength="120"
                                   placeholder="{{ $bookingPage['label_name'] ?? '' }} *"
                                   class="w-full px-3 py-2.5 bg-gray-950/60 border border-amber-900/40 rounded-xl text-white text-sm placeholder-gray-500 focus:border-amber-500/50 focus:outline-none">
                        </div>
                        <div>
                            <label for="phone" class="sr-only">{{ $bookingPage['label_phone'] ?? '' }}</label>
                            <input type="tel" name="phone" id="phone" value="{{ old('phone') }}" required maxlength="40"
                                   placeholder="{{ $bookingPage['phone_placeholder'] ?? '' }} *"
                                   class="w-full px-3 py-2.5 bg-gray-950/60 border border-amber-900/40 rounded-xl text-white text-sm placeholder-gray-500 focus:border-amber-500/50 focus:outline-none">
                        </div>
                        <div>
                            <label for="masseuse" class="sr-only">{{ $bookingPage['label_masseuse'] ?? '' }}</label>
                            <select name="masseuse" id="masseuse" required
                                    class="w-full px-3 py-2.5 bg-gray-950/60 border border-amber-900/40 rounded-xl text-amber-100 text-sm focus:border-amber-500/50 focus:outline-none">
                                <option value="">{{ $bookingPage['masseuse_placeholder'] ?? '' }}</option>
                                <option value="sin_preferencia" @selected(old('masseuse') === 'sin_preferencia')>{{ $bookingPage['masseuse_any'] ?? '' }}</option>
                                <option value="Tatiana" @selected(old('masseuse') === 'Tatiana')>Tatiana</option>
                                <option value="Leila" @selected(old('masseuse') === 'Leila')>Leila</option>
                            </select>
                        </div>
                        <div>
                            <label for="notes" class="sr-only">{{ $bookingPage['label_notes'] ?? '' }}</label>
                            <textarea name="notes" id="notes" rows="2" maxlength="2000"
                                      placeholder="{{ $bookingPage['notes_placeholder'] ?? '' }}"
                                      class="w-full px-3 py-2.5 bg-gray-950/60 border border-amber-900/40 rounded-xl text-white text-sm placeholder-gray-500 focus:border-amber-500/50 focus:outline-none resize-none">{{ old('notes') }}</textarea>
                        </div>
                    </div>

                    <input type="hidden" name="booked_at" id="booked_at" value="{{ old('booked_at') }}" required>

                    <button type="submit"
                            class="mt-6 w-full tenali-ramakrishna border-2 border-amber-400 bg-gradient-to-r from-amber-700/40 to-amber-900/40 rounded-xl hover:from-amber-600/50 hover:to-amber-800/50 text-amber-100 px-6 py-4 text-sm font-medium tracking-widest transition-all uppercase shadow-lg shadow-amber-950/30">
                        {{ $bookingPage['submit'] ?? '' }}
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>

@push('scripts')
<script>
(function () {
    'use strict';

    var intlLocale = @json($intlLocale);
    var priceNone = @json($bookingPage['price_none'] ?? '—');
    var pickDateMsg = @json($bookingPage['pick_date'] ?? '');
    var summaryPending = @json($bookingPage['summary_pending'] ?? '');
    var oldBookedAt = @json(old('booked_at'));
    var servicePlaceholder = @json($bookingPage['service_placeholder'] ?? '');

    var calGrid = document.getElementById('cal-grid');
    var calMonthLabel = document.getElementById('cal-month-label');
    var calWeekdayRow = document.getElementById('cal-weekday-row');
    var calPrev = document.getElementById('cal-prev');
    var calNext = document.getElementById('cal-next');
    var timeSlotsEl = document.getElementById('time-slots');
    var availabilityDateLabel = document.getElementById('availability-date-label');
    var bookedAtInput = document.getElementById('booked_at');
    var serviceSelect = document.getElementById('service_slug');
    var detailTitle = document.getElementById('detail-service-title');
    var detailPrice = document.getElementById('detail-price');
    var detailDuration = document.getElementById('detail-duration');
    var detailDatetime = document.getElementById('detail-datetime');

    var viewDate = new Date();
    var selectedY = null;
    var selectedM = null;
    var selectedD = null;
    var selectedTime = null;

    function startOfDay(d) {
        var x = new Date(d);
        x.setHours(0, 0, 0, 0);
        return x;
    }

    function todayStart() {
        return startOfDay(new Date());
    }

    function mondayWeekdayIndex(jsDay) {
        return jsDay === 0 ? 6 : jsDay - 1;
    }

    function pad(n) {
        return String(n).padStart(2, '0');
    }

    function formatMonthYear(d) {
        return new Intl.DateTimeFormat(intlLocale, { month: 'long', year: 'numeric' }).format(d);
    }

    function formatLongDate(y, m, d) {
        var dt = new Date(y, m, d);
        return new Intl.DateTimeFormat(intlLocale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(dt);
    }

    function formatSummaryDateTime(y, m, d, timeStr) {
        var dt = new Date(y, m, d);
        var datePart = new Intl.DateTimeFormat(intlLocale, { day: 'numeric', month: 'long', year: 'numeric' }).format(dt);
        return datePart + ', ' + timeStr;
    }

    function ymd(y, m, d) {
        return y + '-' + pad(m + 1) + '-' + pad(d);
    }

    function parseOldBookedAt() {
        if (!oldBookedAt || typeof oldBookedAt !== 'string') return;
        var m = oldBookedAt.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
        if (!m) return;
        selectedY = parseInt(m[1], 10);
        selectedM = parseInt(m[2], 10) - 1;
        selectedD = parseInt(m[3], 10);
        selectedTime = m[4] + ':' + m[5];
        viewDate = new Date(selectedY, selectedM, 1);
    }

    function syncBookedAtInput() {
        if (selectedY == null || selectedTime == null) {
            bookedAtInput.value = '';
            detailDatetime.textContent = summaryPending;
            return;
        }
        bookedAtInput.value = ymd(selectedY, selectedM, selectedD) + 'T' + selectedTime;
        detailDatetime.textContent = formatSummaryDateTime(selectedY, selectedM, selectedD, selectedTime);
    }

    function buildWeekdayHeader() {
        var frag = document.createDocumentFragment();
        var base = new Date(2024, 0, 1);
        for (var i = 0; i < 7; i++) {
            var d = new Date(base);
            d.setDate(base.getDate() + i);
            var label = new Intl.DateTimeFormat(intlLocale, { weekday: 'short' }).format(d);
            var cell = document.createElement('div');
            cell.textContent = label;
            frag.appendChild(cell);
        }
        calWeekdayRow.replaceChildren(frag);
    }

    function renderCalendar() {
        var y = viewDate.getFullYear();
        var m = viewDate.getMonth();
        calMonthLabel.textContent = formatMonthYear(viewDate);

        var first = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0).getDate();
        var lead = mondayWeekdayIndex(first.getDay());
        var t0 = todayStart();
        var frag = document.createDocumentFragment();

        for (var i = 0; i < lead; i++) {
            frag.appendChild(document.createElement('div'));
        }

        for (var day = 1; day <= lastDay; day++) {
            var cell = document.createElement('button');
            cell.type = 'button';
            var cellDate = new Date(y, m, day);
            var isPast = startOfDay(cellDate) < t0;
            var isSel = selectedY === y && selectedM === m && selectedD === day;

            cell.className = 'relative flex flex-col items-center justify-center min-h-[2.5rem] rounded-lg text-sm tenali-ramakrishna transition-all ' +
                (isPast ? 'text-gray-600 cursor-not-allowed opacity-50 ' : 'text-gray-200 hover:bg-amber-900/25 ') +
                (isSel ? '!bg-amber-600 !text-black font-medium hover:!bg-amber-500 ' : '');

            cell.textContent = String(day);
            if (!isPast) {
                var dot = document.createElement('span');
                dot.className = 'absolute bottom-1 w-1 h-1 rounded-full bg-amber-500/70';
                cell.appendChild(dot);
            }

            if (isPast) {
                cell.disabled = true;
            } else {
                (function (yy, mm, dd) {
                    cell.addEventListener('click', function () {
                        selectedY = yy;
                        selectedM = mm;
                        selectedD = dd;
                        selectedTime = null;
                        renderCalendar();
                        renderTimeSlots();
                        syncBookedAtInput();
                    });
                })(y, m, day);
            }
            frag.appendChild(cell);
        }
        calGrid.replaceChildren(frag);
    }

    function generateSlots() {
        var slots = [];
        for (var h = 11; h <= 22; h++) {
            for (var mm of [0, 30]) {
                if (h === 22 && mm === 30) continue;
                slots.push(pad(h) + ':' + pad(mm));
            }
        }
        slots.push('23:00');
        return slots;
    }

    var SLOTS = generateSlots();

    function slotToMinutes(t) {
        var p = t.split(':');
        return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
    }

    function nowToMinutes() {
        var n = new Date();
        return n.getHours() * 60 + n.getMinutes();
    }

    function renderTimeSlots() {
        if (selectedY == null) {
            timeSlotsEl.replaceChildren();
            availabilityDateLabel.textContent = pickDateMsg;
            syncBookedAtInput();
            return;
        }
        availabilityDateLabel.textContent = formatLongDate(selectedY, selectedM, selectedD);

        var now = new Date();
        var isToday = selectedY === now.getFullYear() && selectedM === now.getMonth() && selectedD === now.getDate();
        var curMin = nowToMinutes();
        if (isToday && selectedTime && slotToMinutes(selectedTime) <= curMin) {
            selectedTime = null;
        }

        var frag = document.createDocumentFragment();
        SLOTS.forEach(function (t) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = t;
            var isSel = selectedTime === t;
            var isPastSlot = isToday && slotToMinutes(t) <= curMin;
            if (isPastSlot) {
                btn.disabled = true;
                btn.className = 'py-2.5 px-2 rounded-lg border text-sm tenali-ramakrishna tracking-wide border-amber-900/20 text-gray-600 opacity-45 cursor-not-allowed';
            } else {
                btn.className = 'py-2.5 px-2 rounded-lg border text-sm tenali-ramakrishna tracking-wide transition-all ' +
                    (isSel
                        ? 'border-amber-500 bg-amber-600 text-black font-medium shadow-md shadow-amber-900/40'
                        : 'border-amber-800/50 text-amber-200/90 hover:border-amber-500/60 hover:bg-amber-900/20');
                btn.addEventListener('click', function () {
                    selectedTime = t;
                    renderTimeSlots();
                    syncBookedAtInput();
                });
            }
            frag.appendChild(btn);
        });
        timeSlotsEl.replaceChildren(frag);

        syncBookedAtInput();
    }

    function updateServiceDetails() {
        if (!serviceSelect) return;
        var opt = serviceSelect.options[serviceSelect.selectedIndex];
        if (!opt || !opt.value) {
            detailTitle.textContent = servicePlaceholder;
            detailPrice.textContent = priceNone;
            detailDuration.textContent = '—';
            return;
        }
        detailTitle.textContent = opt.getAttribute('data-title') || opt.textContent;
        var p = opt.getAttribute('data-price');
        detailPrice.textContent = p && p.length ? p : priceNone;
        var dur = opt.getAttribute('data-duration');
        detailDuration.textContent = dur && dur.length ? dur : '—';
    }

    if (calPrev) calPrev.addEventListener('click', function () {
        viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
        renderCalendar();
    });
    if (calNext) calNext.addEventListener('click', function () {
        viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
        renderCalendar();
    });

    if (serviceSelect) {
        serviceSelect.addEventListener('change', updateServiceDetails);
    }

    parseOldBookedAt();

    // Un solo frame de pintura para el primer render del calendario (menos reflows encadenados).
    requestAnimationFrame(function () {
        buildWeekdayHeader();
        renderCalendar();
        renderTimeSlots();
        syncBookedAtInput();
        updateServiceDetails();

        if (selectedY != null) {
            renderTimeSlots();
            syncBookedAtInput();
        }
    });

    document.getElementById('booking-form').addEventListener('submit', function (e) {
        if (!bookedAtInput.value) {
            e.preventDefault();
            detailDatetime.textContent = summaryPending;
        }
    });
})();
</script>
@endpush
@endsection
