<?php 

class User {
    // public 
    // protected 
    // private

    public const PAGINATE = 25;
    
    // var_dump(__DIR__);

    public $username;
    // protected $username
    // private $username

    public function getUserName(){
        return $this->username;
    }


}