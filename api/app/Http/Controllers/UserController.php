<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    // adds a new user into the user's database
    public function create(Request $request){
        try{
            if(isset($request->name, $request->password)){
                User::factory()->create([
                    'usuario' => $request->name,
                    'contrasena' => $request->password
                ]);

                return new JsonResponse([
                    'message' => 'Operación realizada exitosamente'
                ], 200);
            }

            return new JsonResponse([
                'message' => 'Datos inválidos'
            ], 400);
        } catch (\Exception $ex) {
            return new JsonResponse([
                'message' => "Error interno del servidor ({$ex->getMessage()})"
            ], 500);
        }
    }

    // authenticates a user
    public function authenticate(Request $request){
        try
        {
            file_put_contents('./../../../log.txt', $request);
            if(isset($request->name, $request->password) === false){
                return new JsonResponse([
                    'loggedIn' => 0,
                    'message' => 'Credenciales inválidas'
                ], 401);
            }

            $coincidencia = User::query()->where('usuario', $request->name)->first();

            file_put_contents('./../../../log.txt', $request->name, FILE_APPEND);
            file_put_contents('./../../../log.txt', Hash::make($request->password), FILE_APPEND);
            file_put_contents('./../../../log.txt', $coincidencia, FILE_APPEND);

            if($coincidencia !== null && Hash::check($request->password, $coincidencia->password)) {
                $request->session()->regenerate();
                $sessionid = $request->session()->getId();

                $respuesta = new JsonResponse([
                    'loggedIn' => 1,
                    'message' => null
                ], 200);

                $hambre = Cookie::make(
                    'SESSION_ID',
                    $sessionid,
                    0,
                    '/pub-admin',
                    'localhost:4321',
                    true,
                    true
                );

                $respuesta->withCookie($hambre);
                return $respuesta;
            }

            return new JsonResponse([
                'loggedIn' => 0,
                'message' => 'Credenciales inválidas'
            ], 401);
        }
        catch(\Exception $ex){
            return new JsonResponse([
                'loggedIn' => 0,
                'message' => "Error interno del servidor ({$ex->getMessage()})"
            ], 500);
        }
    }
}
