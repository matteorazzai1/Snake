<?php

        

        include '../dbconnection.php';

        session_start();

        $punteggio=$connessione->real_escape_string($_POST['punteggio']);


        $tempo=date('d-m-Y H:i:s',time());

        $username=$_SESSION['username'];



        $sql="INSERT INTO classifica(username,punteggio,data_partita) VALUES
                ('$username','$punteggio','$tempo')";

        if($connessione->query($sql)==true){
                    echo "riga aggiornata";
                   
        }
        else{
                    echo "errore nella modifica:".$connessione->error;
        }

        $connessione->close();

?>