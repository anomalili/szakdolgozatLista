<?php

use App\Http\Controllers\SzakdogaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/szakdogak', [SzakdogaController::class, 'index']);
Route::post('/szakdogak', [SzakdogaController::class, 'store']);
//Route::put('/szakdogak/{id}', [SzakdogaController::class, 'update'])->name('frissit');
Route::put('/szakdogak/{id}', [SzakdogaController::class, 'update'])->name('szakdoga.update');
Route::delete('/szakdogak/{id}', [SzakdogaController::class, 'destroy']);
