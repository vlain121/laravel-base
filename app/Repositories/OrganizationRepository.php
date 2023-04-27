<?php
namespace App\Repositories;

use App\Models\Organization;
use App\Traits\RepoTrait;

class OrganizationRepository implements OrganizationInterface
{
  use RepoTrait;

  public function getInstance(): Organization
  {
    return new Organization();
  }
}
