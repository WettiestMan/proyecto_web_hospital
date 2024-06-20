<?php

use App\Http\Controllers\FarmacosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicacionesController;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/

Route::get('farmacos', [FarmacosController::class, 'index'])->name('farmacos.index');
Route::get('farmacos/{id}', [FarmacosController::class, 'show'])->name('farmacos.show');

Route::get('publicaciones', [PublicacionesController::class, 'index']);
Route::get('publicaciones/{id}', [PublicacionesController::class, 'show']);
Route::post('publicaciones', [PublicacionesController::class, 'store']);
Route::put('publicacionesupdate/{id}', [PublicacionesController::class, 'update']);
Route::delete('publicacionesdelete/{id}', [PublicacionesController::class, 'destroy']);