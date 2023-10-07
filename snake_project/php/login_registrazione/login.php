<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="utf-8">
        <title>Snake</title>
        <link rel="icon" type="image/x-icon" href="../../img/logo_snake.png">
        
        <link rel="shortcut icon" href="#">
        <link rel="stylesheet" href="../../css/login_stile.css" type="text/css" >
    </head>

<body>  
     

        <?php
                if(isset($_GET['error'])){

                        if($_GET['error']=='accesso'){
                            echo ('<h3 id="controllo">password errata</h3>');
                        }
                        else if($_GET['error']=='accesso_user'){
                            echo ('<h3 id="controllo">username non esistente</h3>');
                        }
                        else{    
                            echo ('<h3 id="controllo">accesso negato</h3>');
                        }
                }
                
               
        ?>

    <div>
        <form action="login_control.php" method="POST">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" required>
            
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>

            <input type="submit" value="Accedi">
        </form>
    </div>    
    <p>Non hai un account?</p>
    <a href="./registrazione.php" title="Registrati" class="registrazione">Registrati</a>
</body>
</html>