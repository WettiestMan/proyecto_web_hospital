<?php

namespace App\Http\Controllers;

use App\Models\Publicaciones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class PublicacionesController extends Controller
{
    public function index()
    {
        $publicaciones = Publicaciones::all();
        return response()->json($publicaciones, 200);
    }

    public function show($id)
    {
        $publicacion = Publicaciones::find($id);
        if(!$publicacion){
            $data = [
                "message" => "Publicacion no encontrada",
                "status" => 400
            ];
            return response()->json($data,400);
        }
        $data = [
            "Publicacion" => $publicacion,
            "status" => 200
        ];
        return response()->json($data,200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            "titulo" => "required",
            "text" => "required",
            "media" => "required"
        ]);
        if($validator->fails()){
            $data=[
                "message" => "Error en la validacion de los datos",
                "errors" => $validator->errors(),
                "status" => 400
            ];
            return response()->json($data, 400);
        }
        $publicaciones = Publicaciones::create([
            "titulo" => $request->titulo,
            "text" => $request->text,
            "media" => $request->media,
        ]);
        if(!$publicaciones){
            $data = [
                "message" => "Error al crear la publicacion",
                "status" => 400
            ];
            return response()->json($data,400);
        }

        $data = [
            "publicacion" => $publicaciones,
            "status" => 200
        ];

        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $publicacion = Publicaciones::find($id);
        if(!$publicacion){
            $data = [
                "message" => "Publicacion no encontrada",
                "status" => 400
            ];
            return response()->json($data,400);
        }
        $validator = Validator::make($request->all(),[
            "titulo" => "required",
            "text" => "required",
            "media" => "required"
        ]);
        if($validator->fails()){
            $data=[
                "message" => "Error en la validacion de los datos",
                "errors" => $validator->errors(),
                "status" => 400
            ];
            return response()->json($data, 400);
        };
        $publicacion->titulo = $request->titulo;
        $publicacion->text = $request->text;
        $publicacion->media = $request->media;

        $publicacion->save();

        $data = [
            "message" => "Publicacion actualizada",
            "publicacion" => $publicacion,
            "status" => 200
        ];

        return response()->json($data, 200);
    }

    public function delete($id)
    {
        $publicacion = Publicaciones::find($id);
        if(!$publicacion){
            $data = [
                "message" => "Publicacion no encontrada",
                "status" => 400
            ];
            return response()->json($data,400);
        }

        $publicacion->delete();

        $data = [
            "message" => "Publicacion eliminada",
            "status" => 200
        ];
        return response()->json($data,200);
    }
}
