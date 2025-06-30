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
        $mert = $req->input("mertekegyseg_id");
        $kiszereles = $req->input("kiszereles");
        $kategoria_id = $req->input("kategoria_id");
        $kep = $req->input("kep");

        if(empty($nev) || empty($leiras) || empty($ar) || empty($mert) || empty($kiszereles) || empty($kategoria_id) || empty($kep))
        {
            return response()->json(["error" => "Minden mező kitöltése kötelező!"], 400);
        }

        $eredmeny = Termekek::UjTermek($nev, $leiras, $ar, $mert, $kiszereles, $kategoria_id, $kep);

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

    //Termék adatának módosítása
    public function termekModositas(Request $req)
    {
        $id = $req->input("id");
        $modositandoAdat = $req->input("modositandoAdat");
        $ujErtek = $req->input("ujErtek");

        if(empty($id) || empty($modositandoAdat) || empty($ujErtek)) {
            return response()->json(["valasz" => "Minden mező kitöltése kötelező!"], 400);
        }

        $eredmeny = Termekek::TermekModositas($id, $modositandoAdat, $ujErtek);

        if($eredmeny == 0) {
            return response()->json(["valasz" => "A termék módosítása sikertelen!"], 400);
        } else {
            return response()->json(["valasz" => "A termék módosítása sikeres!"]);
        }
    }

    //Termék törlése
    public function termekTorles(Request $req)
    {
        $id = $req->input("id");

        if(empty($id)) {
            return response()->json(["valasz" => "A termék azonosítója kötelező!"], 400);
        }

        $eredmeny = Termekek::TermekTorles($id);

        if($eredmeny == 0) {
            return response()->json(["valasz" => "A termék törlése sikertelen!"], 400);
        } else {
            return response()->json(["valasz" => "A termék törlése sikeres!"]);
        }
    }
}
