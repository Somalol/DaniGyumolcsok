<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Rendelesek extends Model
{
    //Rendelés törlése
    public static function RendelesTorlese($rendelesId)
    {
        //Először a rendelés tételeit töröljük
        $tetelEredmeny = RendelesTetelek::RendelesTetelekTorlese($rendelesId);

        //Ha a tételeket nem sikerült törölni
        if($tetelEredmeny == 0)
        {
            return 0;
        }

        //Ha sikerült akkor töröljük a rendelést is
        $eredmeny = DB::table('rendelesek')
            ->where('id', "=", $rendelesId)
            ->delete();

        if($eredmeny == 0) {
            return -1; //Valami hiba adódott
        } else {            
            return $tetelEredmeny; //0: sikertelen, 1: sikeres
        }
    }
}
