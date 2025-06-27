<?php

namespace App\Http\Controllers;

use App\Models\RendelesTetelek;
use Illuminate\Http\Request;

class RendelesTetelekController extends Controller
{
    //Rendelés tételek mennyiségének módosítása
    public function RendelesTetelekMennyisegModositas(Request $request)
    {
        $rendelesId = $request->input("rendeles_id");
        $termekId = $request->input("termek_id");
        $mennyiseg = $request->input("mennyiseg");

        if(empty($rendelesId) || empty($termekId) || empty($mennyiseg))
        {
            return response()->json(["error" => "Kérem adjon meg minden adatot!"], 400);
        }

        $eredmeny = RendelesTetelek::RendelesTetelekMennyisegModositas($rendelesId, $termekId, $mennyiseg);
    
        if($eredmeny == 0) {
            return response()->json(["valasz" => "A módodítás sikertelen!"], 400);
        } else {
            return response()->json(["valasz" => "A tétel mennyiségét sikeresen módosította!"], 200);
        }
    }
}
