<?php 

abstract class Base {
    public function get(){
        return 'Base';
    }

    abstract public function store();
}