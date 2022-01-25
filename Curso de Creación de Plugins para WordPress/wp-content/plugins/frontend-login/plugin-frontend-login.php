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


define( 'PLZ_PATH', plugin_dir_path( __FILE__ ) );

 // Shortcodes
require_once PLZ_PATH."/public/shortcode/form-registro.php";
require_once PLZ_PATH."/public/shortcode/form-login.php";

// API REST
require_once PLZ_PATH."/includes/API/api-register.php";
require_once PLZ_PATH."/includes/API/api-login.php";

// User role
function plz_plugin_activate(){
    add_role('cliente', 'Cliente', "read_posts");
}
register_activation_hook(__FILE__, 'plz_plugin_activate');

function plz_plugin_desactivate(){
    remove_role('cliente');
}
register_deactivation_hook(__FILE__, 'plz_plugin_desactivate');