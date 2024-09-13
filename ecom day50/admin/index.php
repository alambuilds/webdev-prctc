<?php
require_once 'inc/header.php';
?>


<form class="myform" action="backend/login_process.php" method="POST" >
    <div class="mb-3">
        <img src="<?= $logo ?>" alt="logo">
        <h2>Login</h2>
        <hr>
    </div>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="username" name="username">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name="password">
  </div>
  <a href="home.php" class="btn btn-success">Login</a>
</form>

<?php
require_once 'inc/footer.php';
?>