<?php

namespace App\Http\Controllers;

use App\Models\Termekek;
use Illuminate\Http\Request;

class TermekekController extends Controller
{
    //Új termék felvitele
    public function UjTermek(Request $req)
    {
        $nev = $req->input("nev");
        $leiras = $req->input("leiras");
        $ar = $req->input("ar");
        $mert = $req->input("mert");
        $kiszereles = $req->input("kiszereles");
        $kep = $req->input("kep");

        if(empty($nev) || empty($leiras) || empty($ar) || empty($mert) || empty($kiszereles) || empty($kep))
        {
            return response()->json(["error" => "Minden mező kitöltése kötelező!"], 400);
        }

        $eredmeny = Termekek::UjTermek($nev, $leiras, $ar, $mert, $kiszereles, $kep);

        if(!$eredmeny) {
            return response()->json(["valasz" => "A termék hozzáadása sikertelen! Vagy létezik már ilyen termék vagy próbálja újra később!"], 400);
        } else {
            return response()->json(["valasz" => "A termék hozzáadása sikeres!"]);
        }
    }


    // Minden termék lekérése
    public function osszesTermek()
    {
        $termekek = Termekek::OsszesTermek();
        return response()->json($termekek);
    }
}
