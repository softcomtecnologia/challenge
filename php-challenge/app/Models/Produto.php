<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\VendaProduto;

class Produto extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'venda_produto_id',
        'name',
        'value',
        'amount',
        'description',    
    ];

    public function vendaProdutos()
    {
        return $this->hasOne(VendaProduto::class,'id', 'venda_produto_id' ); //  
    }
}
