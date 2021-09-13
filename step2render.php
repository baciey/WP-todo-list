<?php require_once('requiredAjaxCallCode.php'); ?>

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
   