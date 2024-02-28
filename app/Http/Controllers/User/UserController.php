<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Notifications\NotifyUser;
use App\Models\UserRankingSystems;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Notification;

class UserController extends Controller
{
    public function index()
    {
        $result = Cache::remember('user:all', 60 * 5, function(){
	    	return UserRankingSystems::all();
	    });
        return response()->json($result, 200);
    }

    public function sendNotification()
    {
        $user = UserRankingSystems::find(1);
        $message = "This is your notification message.";

        Notification::send($user, new NotifyUser($message));

        return response()->json(['message' => 'Notification dispatched successfully']);
    }
}