<?php
namespace App\Repositories;

use App\Models\UserRole;
use App\Traits\RepoTrait;

class UserRoleRepository implements UserInterface
{
  use RepoTrait;
  public function getInstance(): UserRole
  {
    return new UserRole();
  }
}
