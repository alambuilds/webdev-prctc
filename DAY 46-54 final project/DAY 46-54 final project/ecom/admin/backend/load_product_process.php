<?php
require_once '../inc/connection.php';

$sql = "SELECT * FROM `products` WHERE `status` = '1'";
$res = mysqli_query($con , $sql);
if ( mysqli_num_rows($res) > 0 ) {
    echo '
      <table class="table">
        <thead>
            <tr>
            <th>#</th>
            <th>name</th>
            <th>sku</th>
            <th>sale price</th>
            <th>cost price</th>
            <th>fake price</th>
            <th> action </th>
            </tr>
        </thead>
        <tbody>
    ';
    while( $row = mysqli_fetch_assoc($res) ) {
        echo '
        <tr>
            <th> '.  $row["id"] .' </th>
            <td> '.  $row["name"] .' </td>
            <td> '.  $row["sku"] .' </td>
            <td> '.  $row["sale_price"] .' </td>
            <td> '.  $row["cost_price"] .' </td>
            <td> '.  $row["fake_price"] .' </td>
            <td>
                <a href="product_update.php?id='.  $row["id"] .'" class="btn btn-warning"><i class="bi bi-pencil"></i></a>
                <button class="btn btn-danger" onclick="delete_product('.  $row["id"] .')"><i class="bi bi-trash"></i></button>
            </td>
        </tr>
        ';
    }
    echo '
            </tbody>
        </table>
    ';
} else {
    echo '
        <div class="alert alert-danger">
            no data found
        </div>
    ';
}
?>


    
  