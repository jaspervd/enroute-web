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

$daysDAO = new DaysDAO();
$ticketsDAO = new TicketsDAO();
$buildingsDAO = new BuildingsDAO();

if(!empty($_POST['submit'])) {
    header('Content-type: application/json');
    $currentDay = $daysDAO->getDayByDate(date('Y-m-d'));
    if(empty($currentDay)) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(array('error' => 'Can\'t upload on an invalid date.'));
    } else {
        $video = Upload::reArrange($_FILES['video']);
        $audio = Upload::reArrange($_FILES['audio']);
        if(count($video) === count($audio)) {
            $urlsVideo = $urlsAudio = array();
            foreach ($video as $videoFile) {
                $urlsVideo[] = Upload::file($videoFile, array('building', $currentDay['id']));
            }

            foreach ($audio as $audioFile) {
                $urlsAudio[] = Upload::file($audioFile, array('building', $currentDay['id']));
            }

            echo json_encode($buildingsDAO->insertBuilding($currentDay['id'], json_encode($urlsVideo), json_encode($urlsAudio)));
        } else {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(array('error' => 'Can\'t upload when arrays are not of equal length.'));
        }
    }
} else {
    ?>

    <form method="post" enctype="multipart/form-data">
        <input type="file" name="video[]" />
        <input type="file" name="audio[]" />
        <input type="submit" name="submit" />
    </form>
    <?php
}