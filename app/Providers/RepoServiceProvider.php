<?php

namespace App\Providers;

use App\IRepositories\OrganizationInterface;
use App\IRepositories\RoleInterface;
use App\IRepositories\UserInterface;
use App\IRepositories\UserRoleInterface;
use App\Repositories\OrganizationRepository;
use App\Repositories\RoleRepository;
use App\Repositories\UserRepository;
use App\Repositories\UserRoleRepository;
use Illuminate\Support\ServiceProvider;

class RepoServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(UserInterface::class, UserRepository::class);
        $this->app->bind(UserRoleInterface::class, UserRoleRepository::class);
        $this->app->bind(RoleInterface::class, RoleRepository::class);
        $this->app->bind(OrganizationInterface::class, OrganizationRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
