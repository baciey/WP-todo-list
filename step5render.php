<?php
$parse_uri = explode( 'wp-content', $_SERVER['SCRIPT_FILENAME'] );
require_once( $parse_uri[0] . 'wp-load.php' );
?>

<div class="step-5__container">
    <h3> Zgłoś naprawę - step 5 Podsumowanie</h3>
    <div class="options-container">
        <?php function step5() { 

            $data = json_decode(file_get_contents('php://input'), true);
            // var_dump($data);

             ?>
            <div>Typ usługi: <?php  echo $data["step1"]["name"] ?></div></br>
            <div>Kategoria produktu: <?php  echo $data["step2"]["name"] ?></div></br>
            <div>Model: <?php  echo $data["step3"]["name"] ?></div></br>
            <div>Forma naprawy: <?php  echo $data["step4"]["name"] ?></div></br>


           
        <?php }
        step5(); ?>
    </div>
    <button onClick="goToStep(4)">Back - step 4</button>
    <button onClick="">Next - wyslij zgłoszenie</button>
</div>

