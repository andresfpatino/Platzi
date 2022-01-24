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


 // Shortcodes
require_once(plugin_dir_path(__FILE__) . '/public/shortcode/form-registro.php');
require_once(plugin_dir_path(__FILE__) . '/public/shortcode/form-login.php');

// API REST
require_once(plugin_dir_path(__FILE__) . '/includes/API/api-register.php');
require_once(plugin_dir_path(__FILE__) . '/includes/API/api-login.php');