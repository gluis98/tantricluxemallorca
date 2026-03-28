<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;

class ServiceDetailController extends Controller
{
    /**
     * Slugs de servicios retirados: 301 al listado del idioma (evita soft 404 con 200).
     *
     * @var list<string>
     */
    private const LEGACY_SERVICE_SLUGS = [
        'golden-relax',
        'golden-sensitivo',
        'experiencia-golden',
        'golden-suite-experiencia',
        'velvet-duet-pareja',
        'golden-sensitive',
        'golden-experience',
        'golden-suite-experience',
        'velvet-duet-couple',
        'golden-sensitiv',
        'golden-erlebnis',
        'golden-suite-erlebnis',
        'velvet-duet-paar',
    ];

    private function servicesIndexPath(string $locale): string
    {
        return match ($locale) {
            'es' => 'servicios',
            'en', 'fr' => 'services',
            'de' => 'leistungen',
            'it' => 'servizi',
            default => 'servicios',
        };
    }

    public function show(string $locale, string $slug)
    {
        if (in_array($slug, self::LEGACY_SERVICE_SLUGS, true)) {
            return redirect('/'.$locale.'/'.$this->servicesIndexPath($locale), 301);
        }

        App::setLocale($locale);

        $services = trans('servicesPage.services', [], $locale) ?? [];
        $service = collect($services)->firstWhere('slug', $slug);

        if (! $service) {
            abort(404);
        }

        return view('service-detail', [
            'locale' => $locale,
            'slug' => $slug,
        ]);
    }
}
