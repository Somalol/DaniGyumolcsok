<?php

namespace App\Http\Controllers;

use App\Models\Termekek;
use Illuminate\Http\Request;

class TermekekController extends Controller
{
    // Minden termék lekérése
    public function osszesTermek()
    {
        $termekek = Termekek::OsszesTermek();
        return response()->json($termekek);
    }
}
