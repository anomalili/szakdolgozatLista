<?php

use App\Models\Szakdoga;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szakdogas', function (Blueprint $table) {
            $table->id();
            $table->string("szakdoga_nev");
            $table->string("githublink");
            $table->string("oldallink");
            $table->string("tagokneve");
            $table->timestamps();
        });
        Szakdoga::create(['szakdoga_nev'=>'Szakdoga','githublink'=>'github.com/csodasoldal','oldallink'=>'csodasoldal.hu','tagokneve'=>'Példa Péter, Példány Anna']);
        Szakdoga::create(['szakdoga_nev'=>'Szakdoga','githublink'=>'github.com/csodasoldal','oldallink'=>'csodasoldal.hu','tagokneve'=>'Példa Péter, Példány Anna']);
        Szakdoga::create(['szakdoga_nev'=>'Szakdoga','githublink'=>'github.com/csodasoldal','oldallink'=>'csodasoldal.hu','tagokneve'=>'Példa Péter, Példány Anna']);
        Szakdoga::create(['szakdoga_nev'=>'Szakdoga','githublink'=>'github.com/csodasoldal','oldallink'=>'csodasoldal.hu','tagokneve'=>'Példa Péter, Példány Anna']);
        Szakdoga::create(['szakdoga_nev'=>'Szakdoga','githublink'=>'github.com/csodasoldal','oldallink'=>'csodasoldal.hu','tagokneve'=>'Példa Péter, Példány Anna']);
        Szakdoga::create(['szakdoga_nev'=>'Szakdoga','githublink'=>'github.com/csodasoldal','oldallink'=>'csodasoldal.hu','tagokneve'=>'Példa Péter, Példány Anna']);
        Szakdoga::create(['szakdoga_nev'=>'Szakdoga','githublink'=>'github.com/csodasoldal','oldallink'=>'csodasoldal.hu','tagokneve'=>'Példa Péter, Példány Anna']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szakdogas');
    }
};
