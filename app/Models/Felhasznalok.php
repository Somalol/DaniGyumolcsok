<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Felhasznalok extends Model
{    
    //Felhasználó létezésének igazolása az adatbázisban
    public static function LetezesKereses($felhaszNev, $email)
    {
        if($felhaszNev == null) {
            //Email alapján
            $letezik = DB::table("felhasznalok")
                ->whereLike("email", $email, true)
                ->get();
        } else if($email == null) {
            //Név alapján
            $letezik = DB::table("felhasznalok")
                ->whereLike("felhaszNev", $felhaszNev, true)
                ->get();
        } else {
            $letezik = DB::table("felhasznalok")
                //Név vagy email alapján
                ->whereLike("felhaszNev", $felhaszNev, true, "OR")
                ->whereLike("email", $email, true)
                ->get();
        }

        if($letezik->isEmpty()) {
            return false;
        } else {
            return true;
        }
    }

    //Felhasználó keresése email vagy név alapján az adatbázisban
    public static function FelhasznaloKereses($felhaszNev, $email)
    {
        if($felhaszNev == null) {
            //Email alapján
            $felhasznalo = DB::table("felhasznalok")
                ->whereLike("email", $email, true)
                ->first();
        } else if($email == null) {
            //Név alapján
            $felhasznalo = DB::table("felhasznalok")
                ->whereLike("felhaszNev", $felhaszNev, true)
                ->first();
        } else {
            $felhasznalo = DB::table("felhasznalok")
                //Név vagy email alapján
                ->whereLike("felhaszNev", $felhaszNev, true, "OR")
                ->whereLike("email", $email, true)
                ->first();
        }

        return $felhasznalo;
    }   

    //Regisztráció
    public static function Regisztracio($teljesNev, $felhaszNev, $email, $telszam, $lakcim, $jelszo)
    {
        //Ellenőrizzük, hogy a felhasználó már létezik-e (név vagy email alapján)
        $letezik = self::LetezesKereses($felhaszNev, $email);

        if($letezik)
        {
            return null; //A felhasználó már létezik
        }

        //Ha nem létezik
        $hashJelszo = password_hash($jelszo, PASSWORD_DEFAULT); //Jelszó hashelése
        
        DB::table("felhasznalok")
            ->insert([
                "teljesNev" => $teljesNev,
                "felhaszNev" => $felhaszNev,
                "email" => $email,
                "telefonszam" => $telszam,
                "lakcim" => $lakcim,
                "jelszo" => $hashJelszo
        ]);

        return self::FelhasznaloKereses($felhaszNev, $email); //Felhasználó adatainak visszaadása
    }

    //Bejelentkezés
    public static function Bejelentkezes($felhaszNev = null, $email = null, $jelszo)
    {
        //Ellenőrizzük, hogy a felhasználó létezik-e
        $felhasznalo = self::FelhasznaloKereses($felhaszNev, $email);

        if($felhasznalo == null)
        {
            return null; //A felhasználó nem létezik
        }

        //Jelszó ellenőrzése
        if(!password_verify($jelszo, $felhasznalo->jelszo))
        {
            return null; //Hibás jelszó
        }

        return $felhasznalo; //Sikeres bejelentkezés, visszaadjuk a felhasználó adatait
    }
}
