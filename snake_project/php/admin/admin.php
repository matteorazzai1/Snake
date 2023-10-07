
<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="utf-8">
        <title>Snake</title>
        <link rel="icon" type="image/x-icon" href="../../img/logo_snake.png">
        
        <link rel="shortcut icon" href="#">
        <link rel="stylesheet" href="../../css/style_pageAdmin.css" type="text/css" media="screen">
    </head>

<body>      

        <div id="sx">

            <?php

                    include '../dbconnection.php';

                    session_start();

                    $username=$_SESSION['username'];

                    $sql_admin="SELECT * FROM admins WHERE BINARY username_admin='$username'";

                    $result_admin=$connessione->query($sql_admin);

                    if($result_admin->num_rows==0){
                            header("location: ../gioco_php/gioco.php");
                    }

                    echo "<h2> Ciao " . $_SESSION['username']. "</h2>";
            ?>

            

            <a href="../gioco_php/gioco.php">GIOCA</a>

        </div>

        <div id="centro">
            <div id="tabella_utenti">

            </div>

            
        </div>

        <div id="dx">
                <a href="../login_registrazione/logout.php">Disconnettiti</a>

        </div>

        <script src="../../js/admin_session.js"></script>
</body>
</html>


