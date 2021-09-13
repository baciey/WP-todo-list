<?php require_once('requiredAjaxCallCode.php'); ?>

        <?php function step3() {
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
    

