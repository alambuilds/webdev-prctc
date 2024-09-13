<?php
require_once 'inc/session.php';
require_once 'inc/connection.php';
require_once 'inc/header.php';
require_once 'inc/nav.php';
?>

<div class="container mt-3 mb-2">
    <div id="msg"></div>
    <div class="row mb-2">
        <div class="col">
            <input type="text" class="form-control" placeholder="enter invoice no" id="invno">
        </div>
    </div>
    <div class="row mb-2">
        <div class="col">
            <select id="select_vendor" class="form-control">
                <option value="">select vendor...</option>
                <?php
                    $sql = "SELECT * FROM `vendors` WHERE `status` = '1'";
                    $res = mysqli_query($con , $sql);
                    while( $row = mysqli_fetch_assoc($res) ) {
                        echo '<option value="'. $row['id'] .'-'. $row['mobile'] .'-'. $row['address'] .' ">'. $row['shop_name'] .'</option>';
                    }
                ?>
            </select>
            <input type="text" id="vid" hidden>
        </div>
        <div class="col">
            <input type="text" class="form-control" id="mobile" readonly>
        </div>
        <div class="col">
            <input type="text" class="form-control" id="address" readonly>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col">
            <select id="select_product" class="form-control">
                <option value="">select product...</option>
                <?php
                    $sql = "SELECT * FROM `products` WHERE `status` = '1'";
                    $res = mysqli_query($con , $sql);
                    while( $row = mysqli_fetch_assoc($res) ) {
                        echo '<option value="'. $row['id'] .'">'. $row['name'] .'</option>';
                    }
                ?>
                <input type="text" id="pid" hidden>
            </select>
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter price" id="cp">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter qty" id="pqty" onkeyup="calculate_total()">
        </div>
    </div>
    <div class="row mb-2">
        <div class="col">
        </div>
        <div class="col">
            <span id="total"></span>
            <button class="btn btn-primary w-100" onclick="purchase()">purchase</button>
        </div>
        <div class="col">
        </div>
    </div>
    
</div>



<?php
require_once 'inc/footer.php';
?>