<?php
 
 $to = "amreenirsa@gmail.com ";
 
 $subject = "An Inquiry1";

 $username = $_REQUEST['name'];
 
 $number = $_REQUEST['number'];
 
 $message = $_REQUEST['msg'];
 
 $message="UserName: $username \n\n  Number: $number  \n\n  Message: $message  ";
 
 $headers = "From: $number,";
 
 $sent = mail($to, $subject, $message, $headers);
 
 if($sent)
 
 {echo "successfully sent"; }
 
 else
 
 {echo "your msg is not sent, there is some error!"; }
 
 ?>