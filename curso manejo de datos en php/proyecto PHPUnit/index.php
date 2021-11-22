<?php

require __DIR__ . '/vendor/autoload.php';

var_dump(App\validate::email('andresfelipepatino5@gmail.com'));


var_dump(App\validate::url('google.com'));


var_dump(App\validate::password('test'));
