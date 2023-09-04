<?php

namespace App\Http\Controllers\Footer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Footer;

class FooterController extends Controller
{
    public function onAllSelect(){
        $result = Footer::all();
        return $result;
    }//End Method
}
