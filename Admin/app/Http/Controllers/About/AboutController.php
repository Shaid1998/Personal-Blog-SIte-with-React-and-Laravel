<?php

namespace App\Http\Controllers\About;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\About;

class AboutController extends Controller
{
    public function sendContact(Request $request){
        $result = About::insert([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        if($result == true){
            return 1;
        }else{
            return 0;
        }
    }//End Method

    public function MotivationAndGoal(){
        $result = About::all();
        return $result;
    }
}
