<?php
if( !empty($_POST['email']) )
{
	$file = "email_list.txt";
	$fh = fopen($file, 'a');
	if ($fh)
	{
		$data = $_POST['email']."\n";
		fwrite($fh, $data);
		fclose($fh);
	}
}
?>