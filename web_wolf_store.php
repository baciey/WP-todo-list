<?php

/*
Plugin Name: Web Wolf store
Description: A place to store custom files
Author: MB WEB WOLF
Version: 1.0
*/

function web_wolf_store() {

    $plugin_dir = '/wp-content/plugins/web_wolf_store/';
         
         wp_enqueue_style( 'custom-css', $plugin_dir . "custom-css.css",false,'1.1','all');
         wp_enqueue_script( 'custom-js', $plugin_dir . "custom-js.js", array ( 'jquery' ), 1.1, true);
 }
 add_action('wp_footer', 'web_wolf_store');

?>
