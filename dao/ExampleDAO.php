<?php
require_once '../classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';

class ExampleDAO {
    public $pdo;

    public function __construct() {
        $this->pdo = DatabasePDO::getInstance();
    }
}