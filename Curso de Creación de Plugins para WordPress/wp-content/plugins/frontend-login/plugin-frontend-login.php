<?php 

/**
 * Plugin Name:       Frontend Login
 * Plugin URI:        https://github.com/andresfpatino
 * Description:       Curso desarrollo de plugins para WordPress
 * Version:           1.0
 * Author:            Andrés Patiño
 * Author URI:        https://github.com/andresfpatino
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://github.com/andresfpatino
 * Text Domain:       my-basics-plugin
 */


function plz_test(){
    echo "<h1>Mi primer plugin</h1>";
}
add_action("wp_head", "plz_test");