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
}
