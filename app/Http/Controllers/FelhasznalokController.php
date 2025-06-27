<?php

namespace App\Http\Controllers;

use App\Models\Felhasznalok;
use Illuminate\Http\Request;

class FelhasznalokController extends Controller
{
    ///Regisztráció
    public function Regisztracio(Request $request)
    {
        //Adatok bekérése
        $teljesNev = $request->input("teljesNev");
        $felhaszNev = $request->input("felhaszNev");
        $email = $request->input("email");
        $jelszo = $request->input("jelszo");

        //Adatok meg vannak-e adva
        if($teljesNev == null || $felhaszNev == null || $email == null || $jelszo == null)
        {
            return response()->json(["eredmeny" => "Kérem töltsön ki minden mezőt!"], 400);
        }

        ///Regisztráció
        $eredmeny = Felhasznalok::Regisztracio($teljesNev, $felhaszNev, $email, $jelszo);

        //Ha létezik
        if($eredmeny == null)
        {
            return response()->json(["eredmeny" => "Ilyen felhasználónév/email már létezik!"], 400);
        }

        //Ha sikeres a regisztráció
        return response()->json(["eredmeny" => "Sikeres regisztráció!"]);
    }   
    
    ///Bejelentkezés
    public function Bejelentkezes(Request $request)
    {
        //Adatok bekérése
        $felhaszNev = $request->input("felhaszNev") ?? null;
        $email = $request->input("email") ?? null;
        $jelszo = $request->input("jelszo");

        //Adatok meg vannak-e adva
        if($felhaszNev == null && $email == null || $jelszo == null)
        {
            return response()->json(["eredmeny" => "Kérem töltsön ki minden mezőt!"], 400);
        }

        ///Bejelentkezés
        $eredmeny = Felhasznalok::Bejelentkezes($felhaszNev, $email, $jelszo);

        //ha felhasználónév/jelszó helytelen
        if($eredmeny == null)
        {
            return response()->json(["eredmeny" => "Helytelen felhasználónév/email vagy jelszó! Ha még nincs fiókja regisztráljon!"], 400);
        }

        //Ha sikeres a bejelentkezés
        return response()->json(["eredmeny" => "Sikeres bejelentkezés!"]);
    }
}
