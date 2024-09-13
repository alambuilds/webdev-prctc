<?php
require_once 'inc/session.php';
require_once 'inc/header.php';

$name = $_SESSION["name"];
?>

<h1>welcome to user profile <?= $name ;?></h1>



<a href="backend/logout_process.php" class="btn btn-danger">logout</a>

<?php
    require_once 'inc/footer.php';
?>