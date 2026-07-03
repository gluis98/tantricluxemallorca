<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\Response;

class MaintenanceController extends Controller
{
    public function show(): Response
    {
        if (! config('maintenance.enabled')) {
            return redirect('/es');
        }

        return response()
            ->view('maintenance', [], Response::HTTP_SERVICE_UNAVAILABLE)
            ->header('Retry-After', '3600');
    }
}
