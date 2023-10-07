<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="utf-8">
        <title>Snake</title>
        <link rel="icon" type="image/x-icon" href="../../img/logo_snake.png">
        
        <link rel="shortcut icon" href="#">
        <link rel="stylesheet" href="../../css/login_stile.css" type="text/css" >
        <script src="../../js/valid.js"></script>

    </head>

<body>      

        <!--controllo php-->
        <?php
                if(isset($_GET['error'])){

                        if($_GET['error']=='accesso')
                            echo ('<h3 id="controllo">La password deve contenere almeno una lettera maiuscola, un numero e un carattere speciale</h3>');
                        else
                            echo ('<h3 id="controllo">username già esistente</h3>');
                }
                
               
        ?>


        <!--controllo js-->
        <p id="controllo"></p>


        <form action="registrazione_control.php" method="POST">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" required>
                
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>

                
                <label for="conferma_password">Conferma Password</label>
                <input type="password" name="conferma_password" id="conferma_password" required>

                <input type="submit" value="Registra">
        </form>
        <p>Hai già un account?</p>
        <a href="./login.php" title="Accedi" class="login">Accedi</a>
</body>
</html>