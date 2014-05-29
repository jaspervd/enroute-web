<?php
require_once 'classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';

class DaysDAO {
    public $pdo;

    public function __construct() {
        $this->pdo = DatabasePDO::getInstance();
    }

    public function getDayById($id) {
        $sql = "SELECT * FROM `enroute_days` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('id', $id);
        if ($stmt->execute()) {
            $day = $stmt->fetch(PDO::FETCH_ASSOC);
            return $day;
        }
        return array();
    }

    public function insertDay($day) {
        $sql = "INSERT INTO `enroute_days` (`title`) VALUES (:title)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('title', $day);
        if ($stmt->execute()) {
            return $this->getDayById($this->pdo->lastInsertId());
        }
        return false;
    }
}

$daysDAO = new DaysDAO();

for ($i = 0; $i < 42; $i++) {
    $day = date('Y-m-j', strtotime('next Monday +' . $i .'days'));
    if(date('N', strtotime($day)) < 6) {
        $daysDAO->insertDay(date('Y-m-j', strtotime('next Monday +' . $i .'days')));
    }
}