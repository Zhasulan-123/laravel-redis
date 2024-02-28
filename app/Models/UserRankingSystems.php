<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRankingSystems extends Model
{
    use HasFactory;

    protected $table = 'user_ranking_systems';

    protected $guarded = false;

    protected $fillable = ['name', 'email', 'remember_token'];
}
