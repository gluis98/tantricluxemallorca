<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;

class HomeController extends Controller
{
    public function index($locale = 'es')
    {
        App::setLocale($locale);

        return view('home', [
            'locale'     => $locale,
            'heroSlides' => $this->resolveHeroSlides(),
        ]);
    }

    /**
     * Lee public_html/images/masseurs/ o public/images/masseurs/ (en ese orden)
     * y devuelve un slide por cada subcarpeta que tenga 1.jpg o 1.jpeg.
     * Si una candidata existe pero está vacía, continúa con la siguiente.
     * Para añadir una nueva masajista basta con crear su carpeta y subir 1.jpg.
     */
    private function resolveHeroSlides(): array
    {
        $candidates = [
            base_path('public_html/images/masseurs'),
            public_path('images/masseurs'),
        ];

        $firstNames = ['1.jpg', '1.jpeg'];

        foreach ($candidates as $masseursDir) {
            if (!is_dir($masseursDir)) {
                continue;
            }

            $slides = [];

            foreach (scandir($masseursDir) as $entry) {
                if ($entry === '.' || $entry === '..') {
                    continue;
                }

                $dirPath = $masseursDir . DIRECTORY_SEPARATOR . $entry;
                if (!is_dir($dirPath)) {
                    continue;
                }

                foreach ($firstNames as $filename) {
                    if (file_exists($dirPath . DIRECTORY_SEPARATOR . $filename)) {
                        $slides[] = [
                            'name' => $entry,
                            'src'  => 'images/masseurs/' . $entry . '/' . $filename,
                        ];
                        break;
                    }
                }
            }

            // Si encontramos slides en esta carpeta, usarla y parar
            if (!empty($slides)) {
                return $slides;
            }
        }

        return [];
    }
}
