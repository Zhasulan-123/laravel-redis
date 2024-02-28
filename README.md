
## Install Laravel 10 version and Vuejs 3 version and Redis

- Установите Redis

- git clone https://github.com/Zhasulan-123/laravel-redis.git

- cd laravel-redis

- composer install

- cp .env.example .env

- php artisan key:generate

- php artisan migrate

- php artisan migrate --seed

- php artisan serve

- npm install

- npm run dev 

- localhost:8000

- php artisan queue:work

# vuejs настройка api

- resources/js/src/api/http.service.js

- const API_ENDPOINT = 'http://localhost:8000/';

# .env

- CACHE_DRIVER=redis

- QUEUE_CONNECTION=redis

- REDIS_HOST=127.0.0.1
- REDIS_PASSWORD=null
- REDIS_PORT=6379
- REDIS_PREFIX=zhasulan
