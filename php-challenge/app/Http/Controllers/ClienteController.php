<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Cliente = Cliente::all();
        return response()->json(['cliente', $cliente]);
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
        $email = $request->email;
        $fone = $request->fone;
        $date = $request->date;
        $cliente = Cliente::create([
            'name' => $name,
            'email' => $email,
            'fone' => $fone,
            'date' => $date,
            'address' => $address
        ]);
        return response()->json(['data' => $cliente, 'status' => true], 200);
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
        $cliente = Cliente::find($id);
        return response()->json(['data' => $cliente]);
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
        $cliente = Cliente::where('id', $id)->first();
        if($cliente){
            $user->name = $request->name;
            $user->email = $request->email;
            $user->fone = $request->fone;
            $user->fone = $request->fone;
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
