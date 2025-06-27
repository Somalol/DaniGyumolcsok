<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Termekek extends Model
{
    //Új termék felvitele
    public static function UjTermek($nev, $leiras, $ar, $mert, $kiszereles, $kep)
    {
        return DB::table("termekek")
            ->insert([
                "nev" => $nev,
                "leiras" => $leiras,
                "ar" => $ar,
                "mertekegyseg_id" => $mert,
                "kiszereles" => $kiszereles,
                "kepURL" => $kep
            ]);
    }

    //Minden termék lekérése
    public static function OsszesTermek()
    {
        return DB::table("termekek")
            ->select("termekek.id", "termekek.nev as termek", "termekek.leiras", "termekek.ar", "termekek.kiszereles", "mertekegysegek.nev as mertekegyseg", "termekek.kepURL")
            ->join("mertekegysegek", "termekek.mertekegyseg_id", "=", "mertekegysegek.id")
            ->orderBy("termekek.id")
            ->get();
    }
}
