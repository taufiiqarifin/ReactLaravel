<?php
// routes/api.php
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RoleController;

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('users', UserController::class);
    Route::apiResource('roles', RoleController::class);
    Route::post('users/{user}/assign-role', [UserController::class, 'assignRole']);
});