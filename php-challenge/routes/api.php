<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\VendasController;
use App\Http\Controllers\VendaProdutoController;
use App\Http\Controllers\Auth\UserAuth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



/* AUTH */
Route::post('/verify', [UserAuth::class, 'verify']);

/* USER  * -- TODO: ajustar o middleware*/
Route::group(['middleware'=>['auth:api']], function(){
    Route::get('/user', [UserController::class, 'index']);
 });
Route::post('/user', [UserController::class , 'store']);
Route::get('/user/{id}', [UserController::class, 'show']);
Route::put('/user/{id}', [UserController::class, 'update']);

/* PRODUTO */
Route::post('/produto', [ProdutoController::class , 'store']);
Route::post('/produto/add', [ProdutoController::class , 'addProduto']);
Route::get('/produto', [ProdutoController::class , 'index']);

/* VENDAS */
Route::post('/vendas', [VendasController::class , 'store']);
Route::get('/vendas', [VendasController::class , 'index']);
Route::delete('/vendas', [VendasController::class , 'destroy']);

/* VENDAS PRODUTO CONTROLLER */
Route::post('/carrinho', [VendaProdutoController::class , 'store']);
Route::get('/carrinho', [VendaProdutoController::class , 'index']);
Route::post('/carrinho/finalizar', [VendaProdutoController::class , 'fechametoVenda']);


