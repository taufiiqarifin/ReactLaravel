React + Laravel Project Setup
Date: 28-Jun-2025

This project uses Laravel as the backend API and React as the frontend (via Laravel Breeze scaffolding). Additional packages used include Spatie Permission, Media Library, and Activity Log.

📁 Project Initialization

composer create-project laravel/laravel ReactBackend
cd ReactBackend <br>
⚙️ Install Laravel Breeze (React Frontend)

composer require laravel/breeze --dev
php artisan breeze:install react
npm install
npm run dev
🔐 Install Spatie Laravel Permission

composer require spatie/laravel-permission
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
php artisan migrate <br>
🖼️ Install Spatie Media Library

composer require spatie/laravel-medialibrary
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="migrations"
php artisan migrate<br>
📋 Install Spatie Activity Log

composer require spatie/laravel-activitylog
php artisan vendor:publish --provider="Spatie\Activitylog\ActivitylogServiceProvider" --tag="activitylog-migrations"
php artisan migrate

🧩 Custom Components<br>
🎯 Create Role & Permission Seeder<br>

php artisan make:seeder RolePermissionSeeder<br>
✅ Create CheckPermission Middleware

php artisan make:middleware CheckPermission<br>
🚀 Running the Development Servers<br>
Terminal 1 – Laravel Backend:

php artisan serve
Terminal 2 – React Frontend:

npm run dev<br>
🌱 Seed the Database<br>

php artisan db:seed --class=RolePermissionSeeder
