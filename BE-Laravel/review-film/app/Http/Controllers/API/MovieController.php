<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\MovieRequest;

class MovieController extends Controller
{
    public function store(MovieRequest $request) {
        return response()->json([
            "messege" => "Request Berhasil"
        ], 200);
    }
}
