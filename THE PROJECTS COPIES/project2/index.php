<?php
    require_once 'inc/header.php';
    
?>

    <div class="containerfrmcls">
        <h1>login</h1>
        <hr>
        <form action="" method="POST">
            <input type="text" class=" form-control mb-3" name="username" placeholder="enter username">
            <input type="password" class="form-control mb-3" name="password" placeholder="enter pssword">
            <button type="submit" class="btn btn-primary" >LOGIN</button>
        </form>
        <a href="signup.php" class="alink">new user? click here</a>
    </div>
   

    <?php
    require_once 'inc/footer.php';
    
?>