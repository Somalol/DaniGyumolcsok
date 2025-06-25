<?php

namespace App\Http\Controllers;

use App\Models\Rendelesek;
use Illuminate\Http\Request;

class RendelesekController extends Controller
{
    //Rendelés törlése
    public function RendelesTorlese(Request $req)
    {
        $rendelesId = $req->input("rendelesId");

        if(empty($rendelesId))
        {
            return response()->json(["valasz" => "Minden adat megadása kötelező!"], 400);
        }

        $eredmeny = Rendelesek::RendelesTorlese($rendelesId);

        if($eredmeny == -1) {
            return response()->json(["valasz" => "Váratlan hiba történt, kérjük próbálja újra később!"], 418);
        } else if($eredmeny == 0) {
            return response()->json(["valasz" => "Ha ezt a hibaüzenetet éátja kérem vegye fel a kapcsolatot a rendszergazdával!"], 418);
        } else {
            return response()->json(["valasz" => "A rendelését sikeresen törölte!"]);
        }
    }    
}
