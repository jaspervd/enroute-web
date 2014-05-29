<?php
require_once '../classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';

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

    public function updateDayById($tickets, $id) {
        $sql = "UPDATE `enroute_days` SET `tickets_available` = (`tickets_available` - :tickets) WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('tickets', $tickets);
        $stmt->bindValue('id', $id);
        return $stmt->execute();
    }

    public function getDays() {
        $sql = "SELECT * FROM `enroute_days`";
        $stmt = $this->pdo->prepare($sql);
        if ($stmt->execute()) {
            $days = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $days;
        }
        return array();
    }
}