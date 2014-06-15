<?php
require_once '../classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';
require_once 'DaysDAO.php';

class BuildingsDAO {
    public $pdo;
    private $daysDAO;

    public function __construct() {
        $this->pdo = DatabasePDO::getInstance();
        $this->daysDAO = new DaysDAO();
    }

    public function getBuildings() {
        $sql = "SELECT * FROM `enroute_buildings` ORDER BY `day_id` ASC";
        $stmt = $this->pdo->prepare($sql);
        if ($stmt->execute()) {
            $buildings = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($buildings)){
                $arr = array();
                foreach($buildings as $building){
                    $building['video_urls'] = stripslashes($building['video_urls']);
                    $building['audio_urls'] = stripslashes($building['audio_urls']);
                    $building['day'] = $this->daysDAO->getDayById($building['day_id']);
                    $arr[] = $building;
                }
                return $arr;
            }
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function getBuildingById($id) {
        $sql = "SELECT * FROM `enroute_buildings` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('id', $id);
        if ($stmt->execute()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function getBuildingsByDay($day_id) {
        $sql = "SELECT * FROM `enroute_buildings` WHERE `day_id` = :day_id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        if ($stmt->execute()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function insertBuilding($day_id, $videoUrls, $audioUrls) {
        $sql = "INSERT INTO `enroute_buildings` (`day_id`, `video_urls`, `audio_urls`) VALUES (:day_id, :video_urls, :audio_urls)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        $stmt->bindValue('video_urls', $videoUrls);
        $stmt->bindValue('audio_urls', $audioUrls);
        if ($stmt->execute()) {
            return $this->getBuildingById($this->pdo->lastInsertId());
        }
        return false;
    }

    public function deleteBuilding($id) {
        $sql = "DELETE FROM `enroute_buildings` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        return $stmt->execute();
    }

    public function updateBuilding($id, $approved) {
        $sql = 'UPDATE `enroute_buildings` SET `approved` = :approved WHERE `id` = :id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':approved', $approved);
        if ($stmt->execute()) {
            $building = $this->getBuildingById($id);
            if (!empty($building)) {
                return $building;
            }
        }
        return false;
    }
}