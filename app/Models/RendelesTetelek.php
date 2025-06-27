<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class RendelesTetelek extends Model
{
    //Rendelés tételek törlése (Rendelesek.php-ban használom)
    public static function RendelesTetelekTorlese($rendelesId)
    {
        //a $rendelesId nem a rendelés tételek egyedi id-ja hanem hogy melyik rendeléshez vannak tételként hozzárendelve
        $affRows = DB::table("rendeles_tetelek")
            ->where("rendeles_id", "=", $rendelesId)
            ->delete();

        //Ha nincs törölt rekord 0-val tér vissza, ha van akkor 1-gyel
        if($affRows == 0) {
            return 0;
        } else {
            return 1;
        }
    }

    //Rendelés tételek mennyiségének módosítása
    public static function RendelesTetelekMennyisegModositas($rendelesId, $termekId, $mennyiseg)
    {
        //a $rendelesId nem a rendelés tételek egyedi id-ja hanem hogy melyik rendeléshez vannak tételként hozzárendelve
        $affRows = DB::table("rendeles_tetelek")
            ->where("rendeles_id", "=", $rendelesId)
            ->where("termek_id", "=", $termekId)
            ->update(["mennyiseg" => $mennyiseg]);

        //Ha nincs módosított rekord 0-val tér vissza, ha van akkor 1-gyel
        if($affRows == 0) {
            return 0;
        } else {
            return 1;
        }
    }
}
