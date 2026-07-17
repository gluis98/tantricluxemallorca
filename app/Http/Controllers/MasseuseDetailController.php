<?php

namespace App\Http\Controllers;

use App\Support\MasseuseCatalog;
use Illuminate\Support\Facades\App;

class MasseuseDetailController extends Controller
{
    private function masseusesIndexPath(string $locale): string
    {
        return match ($locale) {
            'es' => 'masajistas',
            'en', 'fr' => 'masseuses',
            'de' => 'masseurinnen',
            'it' => 'massaggiatrici',
            default => 'masajistas',
        };
    }

    public function show(string $locale, string $slug)
    {
        App::setLocale($locale);

        $seed = array_merge(
            trans('masseusesPage.masseuses', [], $locale) ?? [],
            trans('homepage.masseuse_section.featured_cards', [], $locale) ?? []
        );

        $masseuse = MasseuseCatalog::findBySlug($slug, $seed, false);

        if (! $masseuse) {
            abort(404);
        }

        return view('masseuse-detail', [
            'locale' => $locale,
            'slug' => $slug,
            'masseuse' => $masseuse,
            'masseusesIndexPath' => $this->masseusesIndexPath($locale),
        ]);
    }
}
