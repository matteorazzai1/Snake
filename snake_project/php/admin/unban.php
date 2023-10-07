<?php

        

        include '../dbconnection.php';

        

        $username_unban=$connessione->real_escape_string($_POST['username']);



        $sql="DELETE FROM bannati WHERE username='$username_unban'";

        if($connessione->query($sql)==true){
                    echo "riga aggiornata";
                   
        }
        else{
                    echo "errore nella modifica:".$connessione->error;
        }

        $connessione->close();

?>