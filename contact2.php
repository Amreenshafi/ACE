

<?php
 
 $to = "amreenirsa@gmail.com ";
 
 $subject = "An Inquiry2";

 $username = $_REQUEST['username1'];
 
 $number = $_REQUEST['email'];
 
 $message = $_REQUEST['message'];
 
 $message="UserName: $username \n\n  Number: $number  \n\n  Message: $message  ";
 
 $headers = "From: $number,";
 
 $sent = mail($to, $subject, $message, $headers);
 
 if($sent)
 
 {echo "successfully sent"; }
 
 else
 
 {echo "your msg is not sent, there is some error!"; }
 
 ?>