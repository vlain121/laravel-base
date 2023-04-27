<?php
namespace App\Repositories;

use App\Models\Role;
use App\Traits\RepoTrait;

class RoleRepository implements UserInterface
{
  use RepoTrait;
  public function getInstance(): Role
  {
    return new Role();
  }
}
