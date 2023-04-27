<?php

namespace App\Http\Controllers;

use App\Models\Szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{

    public function index(){
        $reg = Szakdoga::all();
        return $reg;
    }


    public function store(Request $request){
        $store = new Szakdoga();
        $store->szakdoga_nev = $request->szakdoga_nev;
        $store->githublink = $request->githublink;
        $store->oldallink = $request->oldallink;
        $store->tagokneve = $request->tagokneve;
        $store->save();
        return redirect('/')->with('success', 'Szakdolgozat sikeresen módosítva');

    }
    public function update(Request $request, $id){
        $update = Szakdoga::find($id);
        $update->szakdoga_nev = $request->szakdoga_nev;
        $update->githublink = $request->githublink;
        $update->oldallink = $request->oldallink;
        $update->tagokneve = $request->tagokneve;
        $update->save();

        return redirect('/')->with('success', 'Szakdolgozat sikeresen módosítva');

    }
    public function destroy($id){
        Szakdoga::find($id)->delete();
    }
}
