<?php
error_reporting(-1);
ini_set("display_errors", 1);

define('WWW_ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
require_once WWW_ROOT . 'classes' . DIRECTORY_SEPARATOR . 'Config.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DaysDAO.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'TicketsDAO.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'ContentDAO.php';
require_once WWW_ROOT . 'includes' . DIRECTORY_SEPARATOR . 'Validate.php';
require_once WWW_ROOT . 'api' . DIRECTORY_SEPARATOR . 'Slim' . DIRECTORY_SEPARATOR . 'Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$daysDAO = new DaysDAO();
$ticketsDAO = new TicketsDAO();
$contentDAO = new ContentDAO();

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

$app->get('/content/:id/?', function ($id) use ($contentDAO) {
    header('Content-Type: application/json');
    echo json_encode($contentDAO->getContentByDay($id));
    exit();
});

$app->post('/content/?', function () use ($app, $contentDAO, $daysDAO) {
    header('Content-Type: application/json');
    $post = $app->request->post();
    if (empty($post)) {
        $post = (array)json_decode($app->request()->getBody());
    }

    $currentDay = $daysDAO->getDayByDate(date('Y-m-d'));

    $file = $_FILES['enroute_file']['tmp_name'];
    $uploaddir = '../uploads/';
    $filename = time() . '_' . $currentDay['id'] . pathinfo($file, PATHINFO_EXTENSION);
    $uploadfile = $uploaddir . $filename;
    $url = '';

    if (move_uploaded_file($file, $uploadfile)) {
        $url = 'uploads/' . $filename;
    }
    echo json_encode($contentDAO->insertContent($currentDay['id'], $url, $post['type']));
    exit();
});

$app->get('/content/?', function () use ($contentDAO) {
    header('Content-Type: application/json');
    echo json_encode($contentDAO->getContent());
    exit();
});

$app->delete('/content/:id/?', function ($id) use ($contentDAO) {
    header('Content-Type: application/json');
    echo json_encode($contentDAO->deleteContent($id));
    exit();
});

$app->put('/content/:id/?', function ($id) use ($app, $contentDAO) {
    header('Content-Type: application/json');
    $post = $app->request->post();
    if (empty($post)) {
        $post = (array)json_decode($app->request()->getBody());
    }
    echo json_encode($contentDAO->updateContent($id, $post['approved']));
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
        $headers.= 'Content-type: text/html; charset=UTF-8' . "\r\n";
        $headers.= 'To: En Route <' . Config::EMAIL . '>' . "\r\n";
        $headers.= 'From: ' . $post['name'] . ' <' . $post['email'] . '>' . "\r\n";
        if (mail(Config::EMAIL, $subject, $message, $headers)) {
            echo 'true';
        } else {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(array('errors', ['mail', 'Er is iets misgegaan tijdens ']));
        }
    } else {
        header('HTTP/1.1 500 Internal Server Error');
        echo json_encode(array('errors' => $errors));
    }

    exit();
});

$app->run();
