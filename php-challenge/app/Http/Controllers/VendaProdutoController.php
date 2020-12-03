<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VendaProduto;
use App\Models\Produto;
use App\Models\Venda;

use Exception;

class VendaProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {       /* "with('produto')->findOrFail(1);" */
        $vendas = VendaProduto::all();
        return \response()->json(['vendas produto' => $vendas], 200);
        try {
            $venda_id = $request->venda_id;
            
            return \response()->json(['vendas' => $vendas], 200);
        }catch(\Exception $e){
            return \response()->json(['data' => false, 'vendas' => $vendas], 500);
        }
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
       
        /* try { */
            $venda = Venda::create([
                'name' => $request->name,
                'fone' => $request->fone,
                'email' => $request->email,
                'address' => $request->address,
            ]);
            $vendaProduto = VendaProduto::create([
                'status' => $request->status,
                'venda_id' => $venda->id,
        ]);
            return response()->json(['venda produto' => $vendaProduto, 'venda' => $venda], 200);
       /*  }catch(\Exception $e){ */
            return response()->json(['data' => false], 500);
       /*  } */
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
