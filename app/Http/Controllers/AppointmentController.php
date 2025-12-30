<?php

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'appointment_date' => 'required|date',
            'appointment_time' => 'required',
        ]);

        Appointment::create([
            ...$validated,
            'status' => 'pending'
        ]);

        return redirect()->back()->with('success', 'Appointment booked!');
    }
}

?>