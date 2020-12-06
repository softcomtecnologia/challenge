<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserAuth extends Controller
{
    public function verify(Request $request)
    {
        $dados['email'] = $request->email;
        $dados['password'] = $request->password;
        $user = DB::table('users')
            ->where('email', '=', $dados['email'])
            ->where('password', '=', $dados['password'])
            ->first();
        if($user){
            $user = User::where('email', '=', $dados['email'])->first();
            $token = $user->createToken('MyToken')->accessToken;

            return response()->json([ 'name' => $user->name, 'email' => $user->email , 'status' => true, 'token' =>$token],200);
        }
        return response()->json(['token' => null, 'status' => false],404);
    }

    public function logout(Request $request){

    }


}
