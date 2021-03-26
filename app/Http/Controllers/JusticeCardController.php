<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\JusticeCard;
use Illuminate\Http\Request;

class JusticeCardController extends Controller
{
    //
    public function index() {
        $cards = JusticeCard::get();
        return Inertia::render('Card/List/index', [
            'cards' => $cards,
        ]);    
    }

    public function add_form() {
        return Inertia::render('Card/Add/index');
    }

    public function add(Request $request) {
        $validated_data = $this->validate($request, [
            'title' => 'required',
            'subtitle' => 'required',
            'website' => 'required',
            'img_url' => 'required',
            'description' => 'required',
        ]);

        $card = new JusticeCard($validated_data);
        $card->user_id = $request->user()->id;
        $card->save();
        
        return redirect()->route('card.list');
    }    
}
