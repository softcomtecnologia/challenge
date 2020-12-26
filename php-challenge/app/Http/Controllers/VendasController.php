<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Venda;
use App\Models\VendaProduto;
use App\Models\Produto;
use Illuminate\Support\Facades\DB;
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
        $venda = Venda::paginate(10);
       
       /*  dd($dbvenda); */
        return response()->json(['venda' => $venda]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function view($id)
    {
        $this->soma($id);
    }

    public function soma($id){
        $dbvenda = DB::table('venda_produtos')
        ->where('venda_id', $id)
        ->select(DB::raw("sum(amount * value) as total"))
        ->first();
        return !is_null($dbvenda) ? $dbvenda->total : 0;
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
    public function destroy(Request $request)
    {
        try {
            $vendas = Venda::find($request->id);
            if (!$vendas) {
                return response()->json(['status' => false, 'msg' => 'Venda não existe !'], 404);
            } else {
                $vendas->destroy($vendas->id);
                return response()->json(['status' => true, 'msg' => 'Venda deletada com sucesso !'], 200);
            }
        }catch(Exception $e){
            return response()->json(['status' => false, 'msg' => 'Erro no interno :'+ $e], 200);
        }

    }
}
