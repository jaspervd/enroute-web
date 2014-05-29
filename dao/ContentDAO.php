<?php
require_once '../classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';

class ContentDAO {
    public $pdo;

    public function __construct() {
        $this->pdo = DatabasePDO::getInstance();
    }

    public function getContentById($id) {
        $sql = "SELECT * FROM `enroute_content` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('id', $id);
        if ($stmt->execute()) {
            $content = $stmt->fetch(PDO::FETCH_ASSOC);
            return $content;
        }
        return array();
    }

    public function getContentByDay($day_id) {
        $sql = "SELECT * FROM `enroute_content` WHERE `day_id` = :day_id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        if ($stmt->execute()) {
            $content = $stmt->fetch(PDO::FETCH_ASSOC);
            return $content;
        }
        return array();
    }

    public function insertContent($day_id, $url, $type) {
        $sql = "INSERT INTO `enroute_tickets` (`day_id`, `url`, `type`) VALUES (:day_id, :url, :type)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        $stmt->bindValue('url', $url);
        $stmt->bindValue('type', $type);
        if ($stmt->execute()) {
            return $this->getContentById($this->pdo->lastInsertId());
        }
        return false;
    }
}