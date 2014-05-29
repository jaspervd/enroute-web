<?php
define('WWW_ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DaysDAO.php';
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'TicketsDAO.php';
require_once WWW_ROOT . 'api' . DIRECTORY_SEPARATOR . 'Slim' . DIRECTORY_SEPARATOR . 'Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$daysDAO = new DaysDAO();
$ticketsDAO = new TicketsDAO();

$app->get('/days/?', function () use ($daysDAO) {
    header('Content-Type: application/json');
    echo json_encode($daysDAO->getDays());
    exit();
});

// POST -> /comments
$app->post('/tickets/?', function () use ($app, $ticketsDAO, $daysDAO) {
    header("Content-Type: application/json");
    $post = $app->request->post();
    if (empty($post)) {
        $post = (array)json_decode($app->request()->getBody());
    }
    $daysDAO->updateDayById($post['tickets'], $post['day_id']);
    echo json_encode($ticketsDAO->insertTicket($post['day_id'], $post['name'], $post['email'], $post['tickets']));
});

$app->run();