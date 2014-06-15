<?php
ini_set('display_errors', 1);
define('WWW_ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
require_once WWW_ROOT . 'includes' . DIRECTORY_SEPARATOR . 'CloudConvert.php';

if (!empty($_REQUEST['callback'])) {
	$process = CloudConvert::useProcess($_REQUEST['url']);
	$status = $process->status();

	$log = 'log.txt';
	$fh = fopen($log, 'w');
	fwrite($fh, 'ja ma ik kom er wel in ze, in de callback hier wa info: '. implode(' ', $status));
	fclose($fh);

	if ($status->step == 'finished') {
		$process->download($_GET['filename']);
		unlink(pathinfo($_GET['filename'] .'.'. $_GET['original'], PATHINFO_FILENAME));
		$log = 'log.txt';
		$fh = fopen($log, 'w');
		fwrite($fh, implode(' ', $process));
		fclose($fh);
	} else {
		$log = 'log.txt';
		$fh = fopen($log, 'w');
		fwrite($fh, implode(' ', $status));
		fclose($fh);
	}

	//$process->delete();
} else {
	$log = 'log.txt';
	$fh = fopen($log, 'w');
	fwrite($fh, 'nee man srry geen callback naart schijnt');
	fclose($fh);
}