<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        // call passport:routes() here
        // if (! $this->app->routesAreCached()) {
        //     Passport::routes();
        // }
        Passport::loadKeysFrom(__DIR__.'/../secrets/oauth');

        // Passport::useTokenModel(Token::class);
        // Passport::useClientModel(Client::class);
        // Passport::useAuthCodeModel(AuthCode::class);
        // Passport::usePersonalAccessClientModel(PersonalAccessClient::class);
    }
}
