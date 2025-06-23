<?php

use App\Http\Controllers\FelhasznalokController;
use Illuminate\Support\Facades\Route;

//Felhasznalok(Controller) API útvonalai
Route::post("/regisztracio", [FelhasznalokController::class, "Regisztracio"]);
Route::post("/bejelentkezes", [FelhasznalokController::class, "Bejelentkezes"]);