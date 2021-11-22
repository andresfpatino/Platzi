<?php 

namespace App; 

class Validate {

    // Validar si es un email correcto
    public static function email($value){
        return (bool) filter_var($value, FILTER_VALIDATE_EMAIL);
    }

    // Validar si es una url
    public static function url($value){
        return (bool) filter_var($value, FILTER_VALIDATE_URL);
    }

    // Validar un password con mínimo ocho caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial
    public static function password($value){
        return (bool) preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/', $value);
    }


}