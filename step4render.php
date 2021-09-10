<?php
$parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
require_once( $parse_uri[0] . 'wp-load.php' );
?>

<div class="step-4__container">
    <h3> Zgłoś naprawę - step 4</h3>
    <div class="options-container">
        <?php function step4() {
            
            $data = json_decode(file_get_contents('php://input'), true);

            $args = array(  
                'post_type' => 'usluga',
                'post_status' => 'publish',
                // 'cat' => $id,
                'posts_per_page' => -1,

            );

            $loop = new WP_Query( $args );
            while ( $loop->have_posts() ) : $loop->the_post(); ?>
                <div class="step-4__option ms-form__option"  id="<?php echo the_ID(); ?>">
                    <?php echo the_title(); ?>
                </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); 
        }
        step4(); ?>
    </div>
    <button onClick="goToStep(3)">Back - step 3</button>
    <button onClick="goToStep(5)">Next - step 5</button>
</div>


