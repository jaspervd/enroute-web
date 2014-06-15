<?php
error_reporting(-1);
ini_set("display_errors", 1);

define('WWW_ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
require_once WWW_ROOT . 'classes' . DIRECTORY_SEPARATOR . 'Config.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DaysDAO.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'TicketsDAO.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'BuildingsDAO.php';
require_once WWW_ROOT . 'includes' . DIRECTORY_SEPARATOR . 'Validate.php';
require_once WWW_ROOT . 'includes' . DIRECTORY_SEPARATOR . 'Upload.php';
require_once WWW_ROOT . 'includes' . DIRECTORY_SEPARATOR . 'CloudConvert.php';

$daysDAO = new DaysDAO();
$ticketsDAO = new TicketsDAO();
$buildingsDAO = new BuildingsDAO();

if(!empty($_POST['submit'])) {
    header('Content-Type: application/json');
    $currentDay = $daysDAO->getDayByDate('2014-06-16');
    if(empty($currentDay)) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode('Can\'t upload on an invalid date.');
    } else {
        $video = Upload::reArrange($_FILES['video']);
        $audio = Upload::reArrange($_FILES['audio']);
        if(count($video) === count($audio)) {
            $urlsVideo = $urlsAudio = array();
            foreach ($video as $videoFile) {
                $uploadedMov = Upload::file($videoFile, array('building', $currentDay['id']));
                $urlsVideo[] = pathinfo($uploadedMov, PATHINFO_FILENAME);

                $process = CloudConvert::createProcess('mov', 'mp4', Config::CC_APIKEY);
                $process->setOption('callback', Config::CC_CALLBACKURL .'?callback=true&filename=' . pathinfo($uploadedMov, PATHINFO_FILENAME) . '.mp4&original=mov');
                $process->uploadByUrl(Config::ONLINE_URL .'uploads/', basename($uploadedMov), 'mp4');

                $process = CloudConvert::createProcess('mov', 'webm', Config::CC_APIKEY);
                $process->setOption('callback', Config::CC_CALLBACKURL .'?callback=true&filename=' . pathinfo($uploadedMov, PATHINFO_FILENAME) . '.webm&original=mov');
                $process->uploadByUrl(Config::ONLINE_URL .'uploads/', basename($uploadedMov), 'webm');
            }

            foreach ($audio as $audioFile) {
                $uploadedAudio = Upload::file($audioFile, array('building', $currentDay['id']));
                $urlsAudio[] = pathinfo($uploadedAudio, PATHINFO_FILENAME);

                $process = CloudConvert::createProcess('m4a', 'mp3', Config::CC_APIKEY);
                $process->setOption('callback', Config::CC_CALLBACKURL .'?callback=true&filename=' . pathinfo($uploadedAudio, PATHINFO_FILENAME) . '.mp3&original=m4a');
                $process->uploadByUrl(Config::ONLINE_URL .'uploads/', basename($uploadedAudio), 'mp3');

                $process = CloudConvert::createProcess('m4a', 'ogg', Config::CC_APIKEY);
                $process->setOption('callback', Config::CC_CALLBACKURL .'?callback=true&filename=' . pathinfo($uploadedAudio, PATHINFO_FILENAME) . '.ogg&original=m4a');
                $process->uploadByUrl(Config::ONLINE_URL .'uploads/', basename($uploadedAudio), 'ogg');
            }

            echo json_encode($buildingsDAO->insertBuilding($currentDay['id'], json_encode($urlsVideo), json_encode($urlsAudio)));
        } else {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode('Can\'t upload when arrays are not of equal length.');
        }
    }
} else {
    echo Config::ONLINE_URL .'uploads/', basename('salvaiseenja.net');
    echo Config::CC_CALLBACKURL .'?callback=true&filename=' . basename('uploads/lolziefile.m4a') .'.mp3&original=m4a';
    ?>

    <form method="post" enctype="multipart/form-data">
        <input type="file" name="video[]" />
        <input type="file" name="audio[]" /><br />
        <input type="file" name="video[]" />
        <input type="file" name="audio[]" />
        <input type="submit" name="submit" />
    </form>
    <?php
}