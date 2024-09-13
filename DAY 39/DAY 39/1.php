<?php
$con = mysqli_connect( 'localhost' , 'root' , '' , 'b3try' );

if (!$con) {
    echo 'db error';
    die();
}

// CREATE

// $sql = "INSERT INTO `students` ( `name` , `age` , `mobile` ) VALUES ( 'manish' , '21' , '666' )";
// $res = mysqli_query( $con , $sql );
// if ($res) {
//     echo 'data inserted';
// } else {
//     echo 'error';
// }


// UPDATE

// $sql = "UPDATE `students` SET `mobile` = '9876' WHERE `id` = '5'";
// $res = mysqli_query($con , $sql);
// if ($res) {
//     echo 'updated';
// } else {
//     echo 'error';
// }

// UPDATE

// $sql = "DELETE FROM `students` WHERE `name` = 'rajesh'";
// $res = mysqli_query($con , $sql);
// if ($res) {
//     echo 'deleted';
// } else {
//     echo 'error';
// }


// READ

$sql = "SELECT * FROM `students`";
$res = mysqli_query($con , $sql);
while ( $row = mysqli_fetch_assoc($res) ) {
    echo $row["name"] . '<br>' ;
}
?>