<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venda extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'address',
        'fone',
        'valor',
        'desconto',
        "venda_produto_id"
    ];

   public function vendaProduto()
   {
       return $this->hasOne(VendaProduto::class, 'id', 'venda_produto_id'); //  
   }
}
