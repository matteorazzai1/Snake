<?php   
        
        $connessione= new mysqli("localhost","root","","db_progetto");

        if($connessione==false){
                die("Errore di connessione:".$connessione->connect_error);
        }

?>