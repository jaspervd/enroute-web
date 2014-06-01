<?php
require_once '../classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';

class ContentDAO {
    public $pdo;

    public function __construct() {
        $this->pdo = DatabasePDO::getInstance();
    }

    public function getContent() {
        $sql = "SELECT * FROM `enroute_content`";
        $stmt = $this->pdo->prepare($sql);
        if ($stmt->execute()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function getContentById($id) {
        $sql = "SELECT * FROM `enroute_content` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('id', $id);
        if ($stmt->execute()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function getContentByDay($day_id) {
        $sql = "SELECT * FROM `enroute_content` WHERE `day_id` = :day_id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        if ($stmt->execute()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function insertContent($day_id, $url, $type) {
        $sql = "INSERT INTO `enroute_content` (`day_id`, `url`, `type`) VALUES (:day_id, :url, :type)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        $stmt->bindValue('url', $url);
        $stmt->bindValue('type', $type);
        if ($stmt->execute()) {
            return $this->getContentById($this->pdo->lastInsertId());
        }
        return false;
    }

    public function deleteContent($id) {
        $sql = "DELETE FROM `enroute_content` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        return $stmt->execute();
    }

    public function updateContent($id, $approved) {
        $sql = 'UPDATE `enroute_content` SET `approved` = :approved WHERE `id` = :id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':approved', $approved);
        if ($stmt->execute()) {
            $content = $this->getContentById($id);
            if (!empty($content)) {
                return $content;
            }
        }
        return false;
    }
}