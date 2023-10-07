<?php


        include '../dbconnection.php';

        

        session_start();
        $admin=$_SESSION['username'];

        $sql="SELECT * FROM utenti WHERE username!='$admin'";

        if($result=$connessione->query($sql)){  
                $data=[];
                    if($result->num_rows >0){
                            

                        while($row=$result->fetch_array()){
    

                            $tmp;
                            $tmp['username']=$row['username'];
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
