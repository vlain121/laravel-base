<?php
namespace App\Traits;
trait RepoTrait
{
  public function getInstance()
  {}

  public function get($id, $fields = ['*'])
  {
    return $this->getInstance()->select($fields)->where('id', $id)->first();
  }

  public function update($id, $data)
  {
    return $this->getInstance()->where('id', $id)->fill($data)->save();
  }

  public function create($data)
  {
    $model = $this->getInstance();
    $model->fill($data)->save();
    return $model;
  }

  public function delete($id)
  {
    return $this->getInstance()->where('id', $id)->delete();
  }

}
