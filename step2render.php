<?php
$parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
require_once( $parse_uri[0] . 'wp-load.php' );
?>

<div class="step-2__container">
    <h3> Zgłoś naprawę - step 2</h3>
    <div class="options-container">
        <?php function step2() {
            
            $data = json_decode(file_get_contents('php://input'), true);

            $args = array(  
                'post_type' => 'sprzet',
                'post_status' => 'publish',
                'posts_per_page' => -1,

            );
            $loop = new WP_Query( $args );
            while ( $loop->have_posts() ) : $loop->the_post(); ?>
                <div class="step-2__option ms-form__option"  id="<?php echo get_the_category()[0]->cat_ID; ?>">
                    <?php echo the_title(); ?>
                </div>
              
            <?php  endwhile; ?>
            <?php wp_reset_postdata(); 
        }
        step2(); ?>
    </div>
    <button onClick="goToStep(1)">Back - step 1</button>
    <button onClick="goToStep(3)">Next - step 3</button>
</div>