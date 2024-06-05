<?php

use App\Http\Controllers\FarmacosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/

Route::get('farmacos', [FarmacosController::class, 'index'])->name('farmacos.index');
Route::get('farmacos/{id}', [FarmacosController::class, 'show'])->name('farmacos.show');