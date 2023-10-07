<?php

        session_start();

        if(!isset($_SESSION['loggato']) || $_SESSION['loggato']!==true){
                header("location: ../login_registrazione/login.php");
                exit;
        }
?>


<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="utf-8">
        <title>Snake</title>
        <link rel="icon" type="image/x-icon" href="../../img/logo_snake.png">

        <link rel="shortcut icon" href="#">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="../../css/style.css" type="text/css" media="screen">
    </head>

<body>      

        <div id="sx">

            <?php
                    echo "<h2> Ciao " . $_SESSION['username']. "</h2>";
            ?>

                    <div id="punteggio"></div>

                    <button id="start">GIOCA</button>
        </div>

        <div id="centro">
            <table id="tabella">

            </table>

            <p class="game_over" id="gameOver">GAME OVER</p>

            
        </div>

        <div id="dx">
                <a href="../login_registrazione/logout.php">Disconnettiti</a>

                <div id="classifica"></div>
        </div>

            <script src="../../js/gioco/gioco.js"></script>
            <script src="../../js/gioco/movimento_snake.js"></script>
            <script src="../../js/gioco/bad_snake.js"></script>
            <script src="../../js/gioco/classifica.js"></script>
            <script src="../../js/gioco/insert_classifica.js"></script>
            <script src="../../js/gioco/gestione_muretti.js"></script>

</body>
</html>