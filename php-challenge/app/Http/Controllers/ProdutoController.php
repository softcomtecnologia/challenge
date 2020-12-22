<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;
use App\Models\Venda;
use App\Models\VendaProduto;

class ProdutoController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produto = Produto::select('*')
        ->orderBy('name', 'desc')
        ->get();
        return response()->json(['produtos', $produto]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addProduto(Request $request)
    {       
            /* SELECIONA VENDA */
            $getVenda = Venda::find($request->venda_id);

            /* SELECIONA PRODUTO */
            $produto_id = $request->produto_id;
            $getProduto = Produto::find($produto_id);
            $status = $request->status;
            $amount = $request->amount;
            $value = $request->value;
            if(!$getProduto){
                return \response()->json(['status' => FALSE, "erro" => "Não existe venda associada"], 500);
            }
        try {
            $vendaProduto = VendaProduto::create([
                'status' => $status,
                'amount' => $amount,
                'value' => $value,
                'venda_id' => $getVenda->id,
                'produto_id' => $getProduto->id
            ]);
            return response()->json(['venda produto' => $vendaProduto, 'venda' => $getVenda, 'produto adicionado' => $getProduto], 200);
        }catch(Exception $e){
            return \response()->json(['status' => false, "erro" => $e, 'venda_produto' => $vendaProduto], 500);
        }
    
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
        $name = $request->name;
        $value = $request->value;
        $amount = $request->amount;
        $description = $request->description;
        $produto = Produto::create([
            'name' => $name,
            'description' => $description,
            'value' => $value,
            'amount' => $amount
        ]);
        return response()->json(['produto' => $produto, 'status' => true], 200);
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
        $user = User::find($id);
        return response()->json(['user' => $user]);
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
        $user = User::where('id', $id)->first();
        if($user){
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->update();    
        }
        return response()->json(['user' => $user]);
        
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
