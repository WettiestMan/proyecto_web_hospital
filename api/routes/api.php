<?php

use App\Http\Controllers\FarmacosController;
use App\Http\Controllers\PublicacionesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/

Route::get('farmacos', [FarmacosController::class, 'index'])->name('farmacos.index');
Route::get('farmacos/{id}', [FarmacosController::class, 'show'])->name('farmacos.show');

Route::get('publicaciones', [PublicacionesController::class, 'index'])->name('publicaciones.index');
Route::get('publicaciones/{id}', [PublicacionesController::class, 'show'])->name('publicaciones.show');
Route::post('publicaciones', [PublicacionesController::class, 'store'])->name('publicaciones.store');
Route::put('publicaciones/{id}', [PublicacionesController::class, 'update'])->name('publicaciones.update');
Route::delete('publicaciones/{id}', [PublicacionesController::class, 'delete'])->name('publicaciones.delete');