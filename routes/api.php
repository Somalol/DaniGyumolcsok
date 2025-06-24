<?php

use App\Http\Controllers\FelhasznalokController;
use Illuminate\Support\Facades\Route;

//Felhasznalok(Controller) API útvonalai
Route::post("/regisztracio", [FelhasznalokController::class, "Regisztracio"]);
Route::post("/bejelentkezes", [FelhasznalokController::class, "Bejelentkezes"]);


///TODO
//rendelés törlése
//vendég felhasználó (frontend)
//rendelés mennyiségének módosítása
//új termék felvitele