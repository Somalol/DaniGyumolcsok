<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class Rendelesek extends Model
{
    //Rendelés törlése
    public static function RendelesTorlese($rendelesId)
    {
        //Először a rendelés tételeit töröljük
        $tetelEredmeny = RendelesTetelek::RendelesTetelekTorlese($rendelesId);

        //Ha a tételeket nem sikerült törölni
        if ($tetelEredmeny == 0) {
            return 0;
        }

        //Ha sikerült akkor töröljük a rendelést is
        $eredmeny = DB::table('rendelesek')
            ->where('id', "=", $rendelesId)
            ->delete();

        if ($eredmeny == 0) {
            return -1; //Valami hiba adódott
        } else {
            return $tetelEredmeny; //0: sikertelen, 1: sikeres
        }
    }

    //Rendelés adatainak lekérése szempontok alapján
    public static function RendelesLekeres($felhaszId = null, $startDate = null, $endDate = null)
    {
        //var_dump($startDate . " ---  " . $endDate);
        if ($felhaszId != null) {
            //Ha a felhasználó id alapján keresünk

            return DB::table("rendelesek")
                ->selectRaw("felhasznalok.teljesNev, felhasznalok.email, felhasznalok.telefonszam, felhasznalok.lakcim, rendelesek.datum, rendelesek.allapot, termekek.nev as 'termek', termekek.ar, termekek.kiszereles, mertekegysegek.nev as 'mertek'")
                ->groupByRaw("termekek.id")
                ->join("rendeles_tetelek", "rendelesek.id", "=", "rendeles_tetelek.rendeles_id")
                ->join("felhasznalok", "rendelesek.felhasznalo_id", "=", "felhasznalok.id")
                ->join("termekek", "rendeles_tetelek.termek_id", "=", "termekek.id")
                ->join("mertekegysegek", "termekek.mertekegyseg_id", "=", "mertekegysegek.id")
                ->where("rendelesek.felhasznalo_id", $felhaszId)
                ->get();
        } else if ($startDate != $endDate && !empty($endDate)) {
            //Ha intervallumon keresünk

            return DB::table("rendelesek")
                ->selectRaw("felhasznalok.teljesNev, felhasznalok.email, felhasznalok.telefonszam, felhasznalok.lakcim, rendelesek.datum, rendelesek.allapot, termekek.nev as 'termek', termekek.ar, termekek.kiszereles, mertekegysegek.nev as 'mertek'")
                ->groupByRaw("termekek.id")
                ->join("rendeles_tetelek", "rendelesek.id", "=", "rendeles_tetelek.rendeles_id")
                ->join("felhasznalok", "rendelesek.felhasznalo_id", "=", "felhasznalok.id")
                ->join("termekek", "rendeles_tetelek.termek_id", "=", "termekek.id")
                ->join("mertekegysegek", "termekek.mertekegyseg_id", "=", "mertekegysegek.id")
                ->whereBetween("rendelesek.datum", [$startDate, $endDate])
                ->get();
        } else {
            //Ha egy bizonyos napot keresünk (ez mindig a mai defaultban majd)

            return DB::table("rendelesek")
                ->selectRaw("felhasznalok.teljesNev, felhasznalok.email, felhasznalok.telefonszam, felhasznalok.lakcim, rendelesek.datum, rendelesek.allapot, termekek.nev as 'termek', termekek.ar, termekek.kiszereles, mertekegysegek.nev as 'mertek'")
                ->groupByRaw("termekek.id")
                ->join("rendeles_tetelek", "rendelesek.id", "=", "rendeles_tetelek.rendeles_id")
                ->join("felhasznalok", "rendelesek.felhasznalo_id", "=", "felhasznalok.id")
                ->join("termekek", "rendeles_tetelek.termek_id", "=", "termekek.id")
                ->join("mertekegysegek", "termekek.mertekegyseg_id", "=", "mertekegysegek.id")
                ->whereDate("rendelesek.datum", $startDate)
                ->get();
        }
    }
}
