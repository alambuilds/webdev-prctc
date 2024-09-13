<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="home.php">
        <img src="<?= $logo ?>" alt="logo" class="logo">
        <?= $web_name?>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="home.php">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="product.php">products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="vendors.php">vendors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="purchase.php">purchase</a>
        </li>
      </ul>
      <div class="d-flex">
        <button class="btn btn-outline-danger" type="submit">logout</button>
       </div>
    </div>
  </div>
</nav>