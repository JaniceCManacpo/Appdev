<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = 'employee'; // Specify the table name

    protected $fillable = ['first_name', 'last_name', 'email', 'phone', 'address', 'date_of_birth'];
}
