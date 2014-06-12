<?php
error_reporting(-1);
ini_set("display_errors", 1);

define('WWW_ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
require_once WWW_ROOT . 'classes' . DIRECTORY_SEPARATOR . 'Config.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DaysDAO.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'TicketsDAO.php';
//require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'BiggieSmallsDAO.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'BuildingsDAO.php';
require_once WWW_ROOT . 'includes' . DIRECTORY_SEPARATOR . 'Validate.php';
require_once WWW_ROOT . 'includes' . DIRECTORY_SEPARATOR . 'Upload.php';
require_once WWW_ROOT . 'api' . DIRECTORY_SEPARATOR . 'Slim' . DIRECTORY_SEPARATOR . 'Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$daysDAO = new DaysDAO();
$ticketsDAO = new TicketsDAO();
//$biggieSmallsDAO = new BiggieSmallsDAO();
$buildingsDAO = new BuildingsDAO();

$app->get('/days/?', function () use ($daysDAO) {
    header('Content-Type: application/json');
    echo json_encode($daysDAO->getDays());
    exit();
});

$app->post('/tickets/?', function () use ($app, $ticketsDAO, $daysDAO) {
    header('Content-Type: application/json');
    $post = $app->request->post();
    if (empty($post)) {
        $post = (array)json_decode($app->request()->getBody());
    }

    $errors = array();
    if (!Validate::checkIfActualDay($post['day_id'])) {
        $errors['day'] = 'Het lijkt erop dat de dag dat je gekozen hebt geen échte dag is.';
    }
    if (!Validate::checkLength($post['name'])) {
        $errors['name'] = 'Er wordt verwacht dat je naam minstens 7 karakters lang is.';
    }
    if (!Validate::email($post['email'])) {
        $errors['email'] = 'Dit is geen geldig e-mailadres.';
    }
    if (!Validate::checkIfTicketsAvailable($post['day_id'], $post['tickets'])) {
        $errors['tickets'] = 'Helaas zijn er niet zoveel tickets meer beschikbaar.';
    }
    if (empty($errors)) {
        $daysDAO->updateDayById($post['tickets'], $post['day_id']);
        echo json_encode($ticketsDAO->insertTicket($post['day_id'], $post['name'], $post['email'], $post['tickets']));
    } else {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(array('errors' => $errors));
    }
    exit();
});

$app->get('/buildings/:id/?', function ($id) use ($buildingsDAO) {
    header('Content-Type: application/json');
    echo json_encode($buildingsDAO->getBuildingById($id));
    exit();
});

$app->get('/buildings/day/:day_id/?', function ($day_id) use ($buildingsDAO) {
    header('Content-Type: application/json');
    echo json_encode($buildingsDAO->getBuildingsByDay($day_id));
    exit();
});

$app->post('/buildings/?', function () use ($app, $buildingsDAO, $daysDAO) {
    header('Content-Type: application/json');
    $currentDay = $daysDAO->getDayByDate(date('Y-m-d'));
    if(empty($currentDay)) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode('Can\'t upload on an invalid date.');
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
            echo json_encode('Can\'t upload when arrays are not of equal length.');
        }
    }
    exit();
});

$app->get('/buildings/?', function () use ($buildingsDAO) {
    header('Content-Type: application/json');
    echo json_encode($buildingsDAO->getBuildings());
    exit();
});

$app->delete('/buildings/:id/?', function ($id) use ($buildingsDAO) {
    header('Content-Type: application/json');
    echo json_encode($buildngsDAO->deleteBuilding($id));
    exit();
});

$app->put('/buildings/:id/?', function ($id) use ($app, $buildingsDAO) {
    header('Content-Type: application/json');
    $post = $app->request->post();
    if (empty($post)) {
        $post = (array)json_decode($app->request()->getBody());
    }
    echo json_encode($buildingsDAO->updateBuilding($id, $post['approved']));
    exit();
});

// BiggieSmalls

$app->get('/biggiesmalls/:id/?', function ($id) use ($biggieSmallsDAO) {
    header('Content-Type: application/json');
    echo json_encode($biggieSmallsDAO->getBiggieSmallsById($id));
    exit();
});

$app->get('/biggiesmalls/day/:day_id/?', function ($day_id) use ($biggieSmallsDAO) {
    header('Content-Type: application/json');
    echo json_encode($biggieSmallsDAO->getBiggieSmallsByDay($day_id));
    exit();
});

$app->post('/biggiesmalls/?', function () use ($app, $biggieSmallsDAO, $daysDAO) {
    header('Content-Type: application/json');
    $currentDay = $daysDAO->getDayByDate(date('Y-m-d'));
    if(empty($currentDay)) {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode('Can\'t upload on an invalid date.');
    } else {
        header('Content-Type: application/json');
        $post = $app->request->post();
        if (empty($post)) {
            $post = (array)json_decode($app->request()->getBody());
        }

        $photo = Upload::reArrange($_FILES['photo']);
        $urlPhoto = Upload::file($photo[0], array('biggiesmalls', $currentDay['id']));

        echo json_encode($biggieSmallsDAO->insertBiggieSmalls($currentDay['id'], $urlPhoto, $post['latitude'], $post['longitude']));
    }
    exit();
});

$app->get('/biggiesmalls/?', function () use ($biggieSmallsDAO) {
    header('Content-Type: application/json');
    echo json_encode($biggieSmallsDAO->$getBiggieSmalls());
    exit();
});

$app->delete('/biggiesmalls/:id/?', function ($id) use ($biggieSmallsDAO) {
    header('Content-Type: application/json');
    echo json_encode($biggieSmallsDAO->deleteBiggieSmalls($id));
    exit();
});

$app->put('/biggiesmalls/:id/?', function ($id) use ($app, $biggieSmallsDAO) {
    header('Content-Type: application/json');
    $post = $app->request->post();
    if (empty($post)) {
        $post = (array)json_decode($app->request()->getBody());
    }
    echo json_encode($biggieSmallsDAO->updateBiggieSmalls($id, $post['approved']));
    exit();
});

$app->post('/contact/?', function () use ($app) {
    header('Content-Type: application/json');
    $post = $app->request->post();
    if (empty($post)) {
        $post = (array)json_decode($app->request()->getBody());
    }
    $errors = array();
    if (!Validate::checkLength($post['name'])) {
        $errors['name'] = 'Er wordt verwacht dat je naam minstens 7 karakters lang is.';
    }
    if (!Validate::email($post['email'])) {
        $errors['email'] = 'Dit is geen geldig e-mailadres.';
    }
    if (!Validate::checkWords($post['message'], 2)) {
        $errors['message'] = 'Gelieve hier minstens 2 woorden in te vullen.';
    }
    if (empty($errors)) {
        $subject = '[En Route] Contact';
        $message = '<html>
        <head>
        <title>' . $subject . '</title>
        </head>
        <body>
        <p>' . $post['message'] . '</p>
        <p>Verstuurd op ' . date('Y-m-d H:i:s') . '</p>
        </body>
        </html>';

        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers.= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
        $headers.= 'To: En Route <' . Config::EMAIL . '>' . "\r\n";
        $headers.= 'From: ' . $post['name'] . ' <' . $post['email'] . '>' . "\r\n";
        if (mail(Config::EMAIL, $subject, $message, $headers)) {
            echo 'true';
        } else {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(array('errors', array('mail', 'Er is iets misgegaan tijdens ')));
        }
    } else {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(array('errors' => $errors));
    }

    exit();
});

$app->run();
