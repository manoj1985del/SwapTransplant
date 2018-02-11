<?php
require "conn.php";
header('Access-Control-Allow-Origin: *');
			
  $mobile = $_POST['mobile'];
 
  $qry = "SELECT * FROM user_mst WHERE Mobile_No='$mobile' LIMIT 1;";
  $result = mysqli_query($conn, $qry);
   if(mysqli_num_rows($result) > 0)
    {
      echo "This mobile number is already registered with us!!";
    }
	
	
  // mysqli_close($conn);
?>