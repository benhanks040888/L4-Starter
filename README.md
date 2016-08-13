L4-Starter
==========

This is my starter kit for Laravel 4 applications.

### What It Includes

  * [Sentry](https://github.com/cartalyst/sentry): for authentication & authorization system.
  * [Intervention Image](https://github.com/Intervention/image): for image manipulation needs.
  * [Bourbon](http://bourbon.io/): Although most cases are already covered with Autoprefixer, this is still a very good Sass mixin library to have.
  * [Bootstrap](http://getbootstrap.com/): I really should not use CSS frameworks but I work faster with Bootstrap, so...
  * [jQuery](http://jquery.com/): Still #teamjQuery.
  * [Gulp](http://gulpjs.com/): I find it much faster than Grunt.
  * [FontAwesome](http://fortawesome.github.io/Font-Awesome/): I might load it from CDN on production though.


### Get Started

  * Change `AppName` in `composer.json`, `app/start/global.php`, `app/AppName/Services/Validation/Validator.php` and the `AppName` directory in app folder to your application name.
  * Change `username` in `app/database/seeds/SentrySeeder.php` if you want.
  * Run `composer install` in `/app` root.
  * Run `php artisan key:generate`.
  * Run `npm install` in `/public` folder to install Gulp and its plugins.
  * Run `chmod -R 777 app/storage`.
  * Optionally, run `chmod -R 777 public/uploads` if you want to have an upload folder for user-generated-content.
