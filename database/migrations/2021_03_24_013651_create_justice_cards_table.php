<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJusticeCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('justice_cards', function (Blueprint $table) {
            $table->id();            
            $table->string('title');
            $table->string('subtitle');
            $table->text('url')->nullable();
            $table->text('img_url')->nullable();
            $table->string('category')->nullable();
            $table->string('country')->nullable();
            $table->foreignId('user_id');
            $table->text('description')->nullable();            
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
        Schema::dropIfExists('justice_cards');
    }
}
