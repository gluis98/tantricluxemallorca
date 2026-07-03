<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnforceSiteMaintenance
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! config('maintenance.enabled')) {
            return $next($request);
        }

        $maintenancePath = trim((string) config('maintenance.path', 'mantenimiento'), '/');

        if ($request->is($maintenancePath, $maintenancePath.'/')) {
            return $next($request);
        }

        return redirect('/'.$maintenancePath, 302);
    }
}
