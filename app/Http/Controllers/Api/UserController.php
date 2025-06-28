<?php
// app/Http/Controllers/Api/UserController.php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->get();
        return response()->json($users);
    }

    public function show(User $user)
    {
        return response()->json($user->load('roles'));
    }

    public function assignRole(Request $request, User $user)
    {
        $request->validate([
            'role' => 'required|string|exists:roles,name'
        ]);

        // Remove all existing roles and assign the new one
        $user->syncRoles([$request->role]);

        return response()->json([
            'message' => 'Role assigned successfully',
            'user' => $user->load('roles')
        ]);
    }
}