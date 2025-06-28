<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Create permissions
        Permission::create(['name' => 'manage users']);
        Permission::create(['name' => 'manage posts']);
        Permission::create(['name' => 'view dashboard']);

        // Create roles
        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);

        // Assign permissions to roles
        $adminRole->givePermissionTo(['manage users', 'manage posts', 'view dashboard']);
        $userRole->givePermissionTo(['view dashboard']);
    }
}
