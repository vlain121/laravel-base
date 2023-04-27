<?php
namespace App\Repositories;

use App\Models\User;
use App\Traits\RepoTrait;

class UserRepository implements UserInterface
{
  use RepoTrait;
  public function getInstance(): User
  {
    return new User();
  }
}
