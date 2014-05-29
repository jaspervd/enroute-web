<?php
require_once '../classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';

class TicketsDAO {
    public $pdo;

    public function __construct() {
        $this->pdo = DatabasePDO::getInstance();
    }

    public function getTicketById($id) {
        $sql = "SELECT * FROM `enroute_tickets` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('id', $id);
        if ($stmt->execute()) {
            $ticket = $stmt->fetch(PDO::FETCH_ASSOC);
            return $ticket;
        }
        return array();
    }

    public function insertTicket($day_id, $name, $email, $tickets) {
        $sql = "INSERT INTO `enroute_tickets` (`day_id`, `name`, `email`, `tickets`) VALUES (:day_id, :name, :email, :tickets)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        $stmt->bindValue('name', $name);
        $stmt->bindValue('email', $email);
        $stmt->bindValue('tickets', $tickets);
        if ($stmt->execute()) {
            return $this->getTicketById($this->pdo->lastInsertId());
        }
        return false;
    }
}