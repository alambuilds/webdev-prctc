<?php
session_start();
if ( isset($_SESSION["login_status"]) ) {
    if ( $_SESSION["login_status"] != true ) {
        header('location:index.php?msg=session timeout');
    }
} else {
    header('location:index.php?msg=session timeout');
}
?>