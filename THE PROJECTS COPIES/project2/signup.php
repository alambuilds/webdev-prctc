<?php
    require_once 'inc/header.php';
    
?>

    <div class="containerfrmcls">
        <h1>SIGNUP</h1>
        <hr>
        <form action="backend/signup_process.php" method="POST">
            <input type="text" class=" form-control mb-3" name="username" placeholder="enterusername">
            <input type="password" class="form-control mb-3" name="password" placeholder="enterpassword">
            <input type="text" class="form-control mb-3" name="name" placeholder="enterpassword">
            <button type="submit" class="btn btn-primary" >LOGIN</button>
        </form>
        <a href="index.php" class="alink">already have a accoubt</a>
    </div>
 
  

    <?php
    require_once 'inc/footer.php';
    
?>