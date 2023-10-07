<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="utf-8">
        <title>Snake</title>
        <link rel="icon" type="image/x-icon" href="../../img/logo_snake.png">
        
        <link rel="shortcut icon" href="#">
        <link rel="stylesheet" href="../../css/first_page.css" type="text/css" >
    </head>

<body>

<?php

        include '../dbconnection.php';

        $username=$connessione->real_escape_string($_REQUEST['username']);
       $password=$connessione->real_escape_string($_REQUEST['password']);

       $confermaPassword=$connessione->real_escape_string($_REQUEST['conferma_password']);



        if(empty($_POST["username"]) || empty($_POST["password"]) || empty($_POST["conferma_password"])){
                        echo "Uno dei dati richiesti e' mancante";  
        }

        /*   VALIDAZIONE PASSWORD*/

        $cont_numeri=0;

        $cont_maiuscole=0;

        $cont_carSpec=0;

        $ok=0;

        for($i=0;$i<strlen($password);$i++){
                        if(preg_match('/[A-Z]/',$password[$i])!=1){ // qui non deve esserci quel !=1
                                        $cont_maiuscole++;
                        }
                        if(is_numeric($password[$i]))
                                        $cont_numeri++;

                        if(preg_match(('/[!|@|#|$|%|^|&|*|?]/'),$password[$i]))
                                        $cont_carSpec++;

        }

        if($cont_carSpec>0 && $cont_maiuscole>0 && $cont_numeri>0){

                        $ok++;
        }
        else{
                header('location: ./registrazione.php?error=accesso');
        }
        //------------------------------------------------               
               //Controllo che non sia gia' stato utilizzato tale username

                $sql_select="SELECT * FROM utenti WHERE BINARY username='$username'";

                $result=$connessione->query($sql_select);

                if($result->num_rows>0){
                        header('location: ./registrazione.php?error=accesso_user');
                }
                else{
                                $ok++;
                }         
                //----------------------------------
                //controllo che la password e la confermaPassword siano uguali

                if($password==$confermaPassword){
                                $ok++;
                }
                //---------------------------------------
                if($ok==3){
                        $password_crittografata=password_hash($password,PASSWORD_BCRYPT);

                        $sql="INSERT INTO Utenti(username,password) VALUES
                                ('$username','$password_crittografata')";

?>

                                <?php if($connessione->query($sql)==true){  ?>
                                        <h1>Registrazione riuscita</h1>
                                        <a href="./login.php" title="Accedi" class="login">Login</a>
                        <?php }
                                else{
                                        echo "registrazione non riuscita, errore:".$connessione->error;
                                }
                                
        
                }

                $connessione->close();
        ?>

        

</body>
</html>
