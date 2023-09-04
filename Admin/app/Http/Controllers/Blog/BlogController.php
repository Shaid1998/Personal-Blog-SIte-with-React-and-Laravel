<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;

class BlogController extends Controller
{
    public function onAllSelect(){
        $result = Blog::all();
        return $result;
    }//End Method
    public function onSelectFour(){
        $result = Blog::limit(4)->get();
        return $result;
    }//End Method
}
