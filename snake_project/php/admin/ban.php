<?php

        
        include '../dbconnection.php';

        $username_ban=$connessione->real_escape_string($_POST['username']);



        $sql="INSERT INTO bannati(username) VALUES
                ('$username_ban')";

        if($connessione->query($sql)==true){
                    echo "riga aggiornata";
                   
        }
        else{
                    echo "errore nella modifica:".$connessione->error;
        }

        $connessione->close();

?>