<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'name',
        'email',
        'appointment_date',
        'appointment_time',
        'notes',
        'status'
    ];
}
