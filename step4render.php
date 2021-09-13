<?php require_once('requiredAjaxCallCode.php'); ?>

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
    


