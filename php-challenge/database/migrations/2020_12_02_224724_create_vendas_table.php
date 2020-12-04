<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('fone');
            $table->string('email');
            /* $table->unsignedBigInteger('venda_produto_id')->nullable();
            $table->foreign('venda_produto_id')->references('id')->on('venda_produtos'); */  
            $table->string('address')->nullable();
            $table->string('valor')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vendas');
    }
}
