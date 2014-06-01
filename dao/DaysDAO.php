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
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function getDayByDate($date) {
        $sql = "SELECT * FROM `enroute_days` WHERE `title` = :date";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('date', $date);
        if ($stmt->execute()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
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
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return array();
    }
}