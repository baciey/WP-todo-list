<?php

/*
Plugin Name: Todo list
Description: Just add a class="todo-list" to your element.
Author: Maciek Baczyński
Version: 1.0
*/

function todo_list() {
     ?>
         <script type="module" src="<?php echo plugins_url( "js/todo_list.js", __FILE__ ); ?>"></script>
         <link rel="stylesheet" href="<?php echo plugins_url( "index.css", __FILE__ ); ?>">
     <?php
 }
 add_action('wp_footer', 'todo_list');

?>