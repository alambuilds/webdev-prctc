<?php
    session_start();                            // server per session create ho rha
    require_once '../inc/connection.php';

    $username = $_REQUEST['username'];  // user se data aa rha hai
    $password = $_REQUEST['password'];  // user se data aa rha hai

    $sql = "SELECT * FROM `users` WHERE `username` = '$username'";   // user ka data server per check ho rha hai
    $res = mysqli_query( $con , $sql ) ;        // user ka data server per check ho rha hai

    if ( mysqli_num_rows($res) > 0 ) {

        $row = mysqli_fetch_assoc($res) ;      // server ke data ko associative array me convert kr rhe
        $db_password = $row["password"] ;   

        if ( $password == $db_password ) {    //  user ka password or server ka password match 
            $_SESSION["userid"] = $row["id"];
            $_SESSION["username"] = $row["username"];
            $_SESSION["name"] = $row["name"];
            $_SESSION["login_status"] = true;
            header('location:../home.php');     // login ke baad home page per redirect ho rha hai
        } else {
            header('location:../index.php?msg=wrong password');
        }
        
    } else {
        header('location:../index.php?msg=user does not exist');
    }
    ?>