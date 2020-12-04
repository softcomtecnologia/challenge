<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Venda;
use App\Models\VendaProduto;
use App\Models\Produto;
use Carbon\Carbon;

class VendasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request )
    {
        $array = null;
        $cont = 1;
        $vendaProduto = VendaProduto::all();
        foreach($vendaProduto as $value){
                $vendaProduto = $value;
            if($vendaProduto->venda_id == $request->id){
                $array[$cont] = $vendaProduto;
                $cont++; 
            }
        }
        if(!$array){
            $vendaProduto = VendaProduto::all();
            return response()->json(['data', $vendaProduto]);
        }
        return response()->json(['data', $array]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $venda = Venda::create([
                'name' => $request->name,
                'fone' => $request->fone,
                'email' => $request->email,
                'address' => $request->address,
            ]);
     
        return response()->json(['venda' => $venda, 'status' => true], 200);
    } catch (Exception $e) {
        return response()->json(['data' => 'Erro interno','status' => false], 500);
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
