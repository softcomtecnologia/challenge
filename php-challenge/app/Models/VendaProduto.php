<?php

namespace App\Models;
use App\Models\vendaProduto;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VendaProduto extends Model
{
    use HasFactory;
  /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'status',
        'produto_id',
        "venda_id"
     
    ];

    public function produto()
{
	return $this->hasMany(Produto::class, 'id', 'produto_id'); //  
}

public function vendaProduto()
{
	return $this->hasOne(Venda::class, 'id', 'venda_id'); //  
}
    
}
