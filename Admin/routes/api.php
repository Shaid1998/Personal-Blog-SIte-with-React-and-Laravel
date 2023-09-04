<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Blog\BlogController;
use App\Http\Controllers\Footer\FooterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Blog Route
Route::get('/allblog', [BlogController::class,'onAllSelect']);
Route::get('/resentblog', [BlogController::class,'onSelectFour']);

//footer Route
Route::get('/footer', [FooterController::class,'onAllSelect']);

