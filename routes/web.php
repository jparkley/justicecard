<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JusticeCardController;
use App\Models\JusticeCard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/card/list', [JusticeCardController::class, 'index'])->name('card.list');

Route::group(['middleware' => ['auth']], function() {
    Route::get('/card/add', [JusticeCardController::class, 'add_form'])->name('add.form');
    Route::post('/card/add', [JusticeCardController::class, 'add'])->name('add');
});
