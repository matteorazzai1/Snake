
<?php
      

       include '../dbconnection.php';

       $username=$connessione->real_escape_string($_REQUEST['username']);
       $password=$connessione->real_escape_string($_REQUEST['password']);
       

       if($_SERVER["REQUEST_METHOD"]=="POST"){

                $sql_select="SELECT * FROM utenti WHERE BINARY username='$username'";

                $sql_admin="SELECT * FROM admins WHERE username_admin='$username'";

                $sql_ban="SELECT * FROM bannati WHERE username='$username'";

                $result_ban=$connessione->query($sql_ban);

               
                if($result_ban->num_rows==1){
                        $row_ban=$result_ban->fetch_array();
                        echo "qui";

                }

                $result_admin=$connessione->query($sql_admin);

                if($result_admin->num_rows==1){
                                $row_admin=$result_admin->fetch_array();
                }


                                if($result=$connessione->query($sql_select)){
                                            if($result->num_rows==1){
                                                    $row= $result->fetch_array(MYSQLI_ASSOC);
                                                    if(password_verify($password,$row['password'])){    


                                                            session_start();

                                                            $_SESSION['loggato']=true;
                                                            $_SESSION['username']=$row['username'];

                                                         
                                                            //controllo se utente sia admin--------

                                                            if($row_admin['username_admin']==$row['username']){
                                                                    header("location: ../admin/admin.php"); 
                                                            }
                                                            else if($row_ban['username']==$row['username']){
                                                                        header('location: ./login.php?error=ban');
                                                            }
                                                            else{
                                                                        header("location: ../gioco_php/gioco.php"); 
                                                            }
                                                    }
                                                    else{
                                                            
                                                        header('location: ./login.php?error=accesso');  
                                                            
                                                    }
                                            }
                                            else{
                                                
                                                header('location: ./login.php?error=accesso_user');
                                            }
                                }
                                else{
                                        echo "errore in fase di login";
                                }
                $connessione->close();
       }

     
?>
               
