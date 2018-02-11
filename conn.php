<?php
$db_name="myerp";
$mysql_username = "kumanoj";
$mysql_password = "Microsoft#1234";
$server_name = "166.62.28.108";
$conn = mysqli_connect($server_name, $mysql_username, $mysql_password, $db_name);

// Check connection
if ($conn->connect_error) {
	echo "connection failed";
    die("Connection failed: " . $conn->connect_error);
	
} 

?>