<?php require_once('requiredAjaxCallCode.php'); ?>

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
   

