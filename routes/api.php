<?php

use App\Http\Controllers\FelhasznalokController;
use App\Http\Controllers\RendelesekController;
use App\Http\Controllers\RendelesTetelekController;
use App\Http\Controllers\TermekekController;
use Illuminate\Support\Facades\Route;

//Felhasznalok(Controller) API útvonalai
Route::post("/regisztracio", [FelhasznalokController::class, "Regisztracio"]);
Route::post("/bejelentkezes", [FelhasznalokController::class, "Bejelentkezes"]);

//Rendelesek(Controller) API útvonalai
Route::delete("/rendelestorles", [RendelesekController::class, "RendelesTorlese"]);
Route::post("/rendeleslekeres", [RendelesekController::class, "RendelesLekeres"]);

//Termekek(Controller) API útvonalai
Route::put("/ujtermek", [TermekekController::class, "UjTermek"]);
Route::get("/osszestermek", [TermekekController::class, "osszestermek"]);
Route::post("/termekmodositas", [TermekekController::class, "TermekModositas"]);
Route::delete("/termektorles", [TermekekController::class, "TermekTorles"]);

//RendelesTetelek(Controller) API útvonala
Route::post("/mennyisegmodositas", [RendelesTetelekController::class, "RendelesTetelekMennyisegModositas"]);