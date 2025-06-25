<?php

use App\Http\Controllers\FelhasznalokController;
use App\Http\Controllers\RendelesekController;
use Illuminate\Support\Facades\Route;

//Felhasznalok(Controller) API útvonalai
Route::post("/regisztracio", [FelhasznalokController::class, "Regisztracio"]);
Route::post("/bejelentkezes", [FelhasznalokController::class, "Bejelentkezes"]);

//Rendelesek(Controller) API útvonalai
Route::delete("/rendelestorles", [RendelesekController::class, "RendelesTorlese"]);
Route::post("/rendeleslekeres", [RendelesekController::class, "RendelesLekeres"]);

//Termekek(Controller) API útvonalai
Route::get("/osszestermek", [App\Http\Controllers\TermekekController::class, "osszestermek"]);