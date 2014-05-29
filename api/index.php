<?php
define('WWW_ROOT', dirname(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DaysDAO.php';
require_once WWW_ROOT . 'api' . DIRECTORY_SEPARATOR . 'Slim' . DIRECTORY_SEPARATOR . 'Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$daysDAO = new DaysDAO();

$app->get('/days/?', function () use ($daysDAO) {
    header('Content-Type: application/json');
    echo json_encode($daysDAO->getDays());
    exit();
});

$app->run();