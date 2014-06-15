<?php
ini_set('display_errors', 1);
define('WWW_ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
require_once WWW_ROOT . 'includes' . DIRECTORY_SEPARATOR . 'CloudConvert.php';

if (!empty($_REQUEST['callback'])) {
	$process = CloudConvert::useProcess($_REQUEST['url']);
	$status = $process->status();

	if ($status->step == 'finished') {
		$process->download($_GET['filename']);
		unlink(WWW_ROOT . 'uploads'. DIRECTORY_SEPARATOR . pathinfo($_GET['filename'], PATHINFO_FILENAME) .'.'. $_GET['original']);
	} else {
		$log = 'log.txt';
		$fh = fopen($log, 'w');
		fwrite($fh, $status->message);
		fclose($fh);
	}
	$process->delete();
}