<?php


        include '../dbconnection.php';

        $sql="SELECT * FROM classifica ORDER BY punteggio DESC LIMIT 10";

        if($result=$connessione->query($sql)){  
                $data=[];
                    if($result->num_rows >0){
                            $postazione=0;
                          

                            while($row=$result->fetch_array()){

                                    $postazione++;

                               

                            $tmp;
                            $tmp['postazione']=$postazione;
                            $tmp['username']=$row['username'];
                            $tmp['punteggio']=$row['punteggio'];
                            $tmp['data_partita']=$row['data_partita'];
                            array_push($data,$tmp);
                        }

                        echo json_encode($data);  
                    }

                    else{
                                echo json_encode($data);
                                
                    }
        
                }
            else{
                    echo "connessione non riuscita, errore:".$connessione->error;
                }
        
        $connessione->close();
?>
