<?php

use App\Http\Controllers\FarmacosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicacionesController;
use App\Http\Controllers\UserController;

/*Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');*/

// Para los fármacos
Route::get('farmacos', [FarmacosController::class, 'index'])->name('farmacos.index');
Route::get('farmacos/{id}', [FarmacosController::class, 'show'])->name('farmacos.show');

// Para las publicaciones
Route::get('publicaciones', [PublicacionesController::class, 'index']);
Route::get('publicaciones/{id}', [PublicacionesController::class, 'show']);
Route::post('publicaciones', [PublicacionesController::class, 'store']);
Route::put('publicacionesupdate/{id}', [PublicacionesController::class, 'update']);
Route::delete('publicacionesdelete/{id}', [PublicacionesController::class, 'destroy']);

// Para la autenticación en la página de publicaciones
Route::post('auth-posts', [UserController::class, 'authenticate']);
Route::post('new-user', [UserController::class, 'create']);