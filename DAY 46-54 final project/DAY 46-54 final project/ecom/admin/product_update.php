<?php
require_once 'inc/session.php';
require_once 'inc/connection.php';
require_once 'inc/header.php';
require_once 'inc/nav.php';
$id = $_GET['id'];
$sql = "SELECT * FROM `products` WHERE `id` = '$id'";
$res = mysqli_query($con , $sql);
$row = mysqli_fetch_assoc($res);
extract($row);
?>

<div class="container mt-3 mb-2">
    <div id="msg"></div>
    <div class="row">
        <input type="text" id="pid" value="<?= $id?>" hidden>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter name" id="name" value="<?= $name ?>">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter sku" id="sku" value="<?= $sku ?>" readonly>
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter sale price" id="sp" value="<?= $sale_price ?>">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter fake price" id="fp" value="<?= $fake_price ?>">
        </div>
        <div class="col">
            <button class="btn btn-success" onclick="update_product()"> UPDATE <i class="bi bi-pencil"></i> </button>
        </div>
    </div>
</div>

<?php
require_once 'inc/footer.php';
?>