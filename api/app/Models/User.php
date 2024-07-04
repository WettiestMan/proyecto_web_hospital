<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, HasFactory;

    public $timestamps = false;

    protected $table = 'users';

    protected $fillable = [
        'usuario', 'contrasena'
    ];

    protected $hidden = [
        'contrasena'
    ];
}