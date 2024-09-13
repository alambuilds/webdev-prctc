<?php
require_once '../inc/connection.php';

$name = $_REQUEST['name'];
$sku = $_REQUEST['sku'];
$fp = $_REQUEST['fp'];
$sp = $_REQUEST['sp'];

$sql = "INSERT INTO `products` ( `name` , `sku` , `sale_price` , `cost_price` , `fake_price` , `qty` , `status` ) VALUES ( '$name' , '$sku' , '$sp' , '0' , '$fp' , '0' , '1' )";
$res = mysqli_query($con,$sql);

if ($res) {
    echo 1;
} else {
    echo 0;
}
?>