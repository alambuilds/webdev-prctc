<?php
session_start();
if ( isset($_SESSION["login_status"]) ) {
    if ( $_SESSION["login_status"] == true ) {
        header('location:home.php');
    }
}
    require_once 'inc/header.php';
?>

    <div class="container frmcls">
        <h1>Signup</h1>
        <hr>
        <form action="backend/signup_process.php" method="POST">
            <input type="text" class="form-control mb-3" name="username" placeholder="enter username">
            <input type="password" class="form-control mb-3" name="password" placeholder="enter password">
            <input type="text" class="form-control mb-3" name="name" placeholder="enter password">
            <button type="submit" class="btn btn-primary">SIGNUP</button>
        </form>
        <a href="index.php" class="alink"> already have a account </a>
    </div>

<?php
    require_once 'inc/footer.php';
?>