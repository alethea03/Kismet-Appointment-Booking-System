<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;

Route::get('/services', [App\Http\Controllers\ServiceController::class, 'appointments.index']);

Route::post('/appointments', [AppointmentController::class, 'store'])
    ->name('appointments.store');

Route::get('/{any}', function () {
    return view('appointments.index'); // This points to resources/views/app.blade.php
})->where('any', '.*');