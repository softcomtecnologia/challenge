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
                'status' => 'ADICIONADO',
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
    /* TODO: ENCONTRAR SOMA DOS PRODUTOS E FINALIZAR A VENDA.
     public function fechametoVenda(Request $request)
    {
        $desconto = $request->desconto;
        $desconto = $desconto /1000;
        if(!$desconto){
            $desconto = 0;
        }
        $vendaProduto = VendaProduto::find($request->venda_produto_id   );
        if($vendaProduto == null){
            return response()->json(['status' => false, 'msg' =>  "Não existe nenhum produto vinculado a essa venda", ],404);
        }

        $venda = Venda::find($vendaProduto->venda_id);
        
        if($venda == null){
            return response()->json(['status' => false, 'msg' =>  "Venda não cadastrado", ],404);
        }
        $vendaProduto->status = 'COMPRADO';
        $vendaProduto->desconto - $desconto;
        $vendaProduto->update();

            return response()->json(['valor': $ven, 'desconto' => $desconto ,'venda' => $venda, 'venda produto' => $vendaProduto],200);
    } */


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $venda = Venda::find($id)->first();

        if($venda){
            $vendaProduto = VendaProduto::where('venda_id', $id)->get();
            return response()->json(['vendaProduto' => $vendaProduto, 'id' => $id]);
        }else{
            return response()->json(['error' => 'cadastro']);
        }
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
        $venda = Venda::find($id);
        $produtoId = $request->produto_id;
        $vendaProduto = VendaProduto::where('venda_id', $venda->id)->get();
        foreach($vendaProduto as $produto){
            if($produto->produto_id == $produtoId){
                $produto->amount = $request->amount;
                $produto->value = $request->value;
                $produto->update();
                return response()->json(['data' => true], 200);
            }
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $venda = Venda::find($id);
            $produtoId = $request->produto_id;
            $vendaProduto = VendaProduto::where('venda_id', $venda->id)->first();
        try {
            

            
                if ($vendaProduto) {
                    $vendaProduto->delete();
                    return response()->json(['data' => true],200);
                
            }
        }catch(Exception $e){
            return response()->json(['data' => $e]);
        }
       
        
        
    }
}
