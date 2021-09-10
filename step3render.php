<?php
$parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
require_once( $parse_uri[0] . 'wp-load.php' );
?>

<div class="step-3__container">
    <h3> Zgłoś naprawę - step 3</h3>
    <div class="options-container">
        <?php function step3() {
            // $q = $_REQUEST["q"];
            // $id = intval($q);

            $data = json_decode(file_get_contents('php://input'), true);
            $id = $data["step2"]["id"];


            $args = array(  
                'post_type' => 'model',
                'post_status' => 'publish',
                'cat' => $id,
                'posts_per_page' => -1,
            );

            $loop = new WP_Query( $args );
            while ( $loop->have_posts() ) : $loop->the_post(); ?>
                <div class="step-3__option ms-form__option"  id="<?php echo the_ID(); ?>">
                    <?php echo the_title(); ?>
                </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); 
        }
        step3(); ?>
    </div>
    <button onClick="goToStep(2)">Back - step 2</button>
    <button onClick="goToStep(4)">Next - step 4</button>
</div>

