<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    // app/Http/Middleware/CheckPermission.php
    public function handle($request, Closure $next, $permission)
    {
        if (!auth()->user()->can($permission)) {
            abort(403, 'Unauthorized');
        }
        return $next($request);
    }
}
