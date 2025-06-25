<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Termekek extends Model
{
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
