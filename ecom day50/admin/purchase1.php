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
            <select onchange="abc()" id="sv" class="form-control">
                <option value="">select vendor...</option>
                <?php
                    $sql = "SELECT * FROM `vendors` WHERE `status` = '1'";
                    $res = mysqli_query($con , $sql);
                    while( $row = mysqli_fetch_assoc($res) ) {
                        echo '<option value="'. $row['id'] .'">'. $row['shop_name'] .'</option>';
                    }
                ?>
            </select>
        </div>
        <div class="col">
            <input type="text" class="form-control" id="smob" readonly>
        </div>
        <div class="col">
            <input type="text" class="form-control" id="sadd" readonly>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col">
            <select name="" id="" class="form-control">
                <option value="">select product...</option>
                <?php
                    $sql = "SELECT * FROM `products` WHERE `status` = '1'";
                    $res = mysqli_query($con , $sql);
                    while( $row = mysqli_fetch_assoc($res) ) {
                        echo '<option value="">'. $row['name'] .'</option>';
                    }
                ?>
            </select>
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter price" id="cp">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="enter qty" id="pqty">
        </div>
    </div>
    <div class="row mb-2">
        <div class="col">
        </div>
        <div class="col">
            <button class="btn btn-primary w-100">purchase</button>
        </div>
        <div class="col">
        </div>
    </div>
    
</div>



<?php
require_once 'inc/footer.php';
?>

<script>
    function abc () {
        let sv = $("#sv").val();
        console.log(sv);

        // after ajax

        let add = 'ranchi' ;
        let mob = 22445533 ;

        $("#smob").val(mob);
        $("#sadd").val(add);
    }
</script>