<?php
require_once 'inc/session.php';
require_once 'inc/connection.php';
require_once 'inc/header.php';
require_once 'inc/nav.php';
?>

<div class="container mt-3 mb-2">
    <div id="msg"></div>
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="enter name" id="name">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter sku" id="sku">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter sale price" id="sp">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter fake price" id="fp">
        </div>
        <div class="col">
            <button class="btn btn-success" onclick="add_product()"> ADD <i class="bi bi-plus"></i> </button>
        </div>
    </div>
</div>


<div class="container-fluid mt-3 mb-2" id="product_list"></div>

<?php
require_once 'inc/footer.php';
?>
<script>
    load_product();
</script>