<?php
require "conn.php";
header('Access-Control-Allow-Origin: *');
require "phpmailer/PHPMailerAutoload.php";

function sendMail($toMail, $toName, $body, $subject){
	$mail = new PHPMailer();

//Enable SMTP debugging. 
$mail->SMTPDebug = 0;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;  

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
                        
//Provide username and password     
$mail->Username = "manoj.noida11@gmail.com";                 
$mail->Password = "Mind$1234";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;                                   

$mail->From = "manoj.noida11@gmail.com";
$mail->FromName = "Manoj Kumar";

//$mail->addAddress("manoj1985del@gmail.com", "Manoj Kumar");
$mail->addAddress($toMail, $toName);

$mail->isHTML(true);

$mail->Subject = $subject;
$mail->Body = $body;

if(!$mail->send()) 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
}
}

						
  $transplanttype = $_POST['transplanttype'];
  $mobile = $_POST['mobile'];
  $email = $_POST['email'];
  $donorname = $_POST['donorname'];
  $donorage = $_POST['donorage'];
  $donorbloodgroup = $_POST['donorbloodgroup'];
  $genderdonor = $_POST['genderdonor'];
  $rxname = $_POST['rxname'];
  $rxage = $_POST['rxage'];
  $rxbloodgroup = $_POST['rxbloodgroup'];
  $genderrx = $_POST['genderrx'];
  $city = $_POST['city'];
  $state = $_POST['state'];
  $pincode = $_POST['pincode'];
  
  $qry = "INSERT INTO `user_mst`(`Mobile_No`, `Transplant_Type`, `Email_Id`, `Donor_Name`, `Donor_Age`, `Donor_Blood_Group`, `Donor_Gender`, `Receiver_Name`, `Receiver_Age`, `Receiver_Blood_Group`, `Receiver_Gender`, `City`, `State`, `PinCode`)" 
  ."VALUES"
  ."('$mobile', '$transplanttype', '$email', '$donorname', $donorage, '$donorbloodgroup', '$genderdonor', '$rxname', $rxage, '$rxbloodgroup', '$genderrx', '$city', '$state', '$pincode');";
 
   $qry= str_replace("~", "+", $qry);
  $result = mysqli_query($conn, $qry);
  
 $body = "<i>Dear $donorname, <br />Thank you for registering with us. Please note registration is free but you will have to make <strong>one time payment of 1000/- INR only once we find a match for you </strong>.
<br />This will be one time charge and we will keep on suggesting you possible pair until you find a suitable one. We will reach you once we find a suitable match for you.
<p><u>Please note that we are merely a match making agency and we will only suggest you the potential pair. Our role is limited to informing you about a potential donor.
We will not suggest you any hospital either. It is upto the consent of both parties where they want to be treated upon. Both parties need to consult with their doctors as proper medical tests are mandatory prior to transplant. We cannot be held responsible for any loss of life.</u></p></i>
<br />
<br />
Thanks,<br />
SwapTransplant.com Team";

$subject = "Swap Transplant:Your profile is registered now";
//sendMail($toMail, $toName, $body, $subject
sendMail($email, $donorname, $body, $subject);


$ownermail = "manoj1985del@gmail.com";
$ownername = "Manoj Kumar";
$body = "Hi Manoj, <p>A new profile has been registered. Following are the details <br />Name : $donorname <br /> Contact : $mobile";
$subject = "Swap Transplant - New profile added";

sendMail($ownermail, $ownername, $body, $subject);
         
 
       
	
   
?>




