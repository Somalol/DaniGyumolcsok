<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Termekek extends Model
{
    //Új termék felvitele
    public static function UjTermek($nev, $leiras, $ar, $mert, $kiszereles, $kategoria_id, $kep)
    {
        return DB::table("termekek")
            ->insert([
                "nev" => $nev,
                "leiras" => $leiras,
                "ar" => $ar,
                "mertekegyseg_id" => $mert,
                "kiszereles" => $kiszereles,
                "kategoria_id" => $kategoria_id,
                "kepURL" => $kep
            ]);
    }

    //Minden termék lekérése
    public static function OsszesTermek()
    {
        return DB::table("termekek")
            ->select("termekek.id", "termekek.nev as termek", "termekek.leiras", "termekek.ar", "termekek.kiszereles", "mertekegysegek.nev as mertekegyseg", "mertekegysegek.rovidites","termekek.kepURL")
            ->join("mertekegysegek", "termekek.mertekegyseg_id", "=", "mertekegysegek.id")
            ->orderBy("termekek.id")
            ->get();
    }

    //Termék adatának módosítása
    public static function TermekModositas($id, $modositandoAdat, $ujErtek)
    {
        return DB::table("termekek")
            ->where("id", $id)
            ->update([
                $modositandoAdat => $ujErtek
            ]);
    }

    //Termék törlése
    public static function TermekTorles($id)
    {
        return DB::table("termekek")
            ->where("id", $id)
            ->delete(); 
    }
}
