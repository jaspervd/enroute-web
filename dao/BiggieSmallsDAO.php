<?php
require_once '../classes' . DIRECTORY_SEPARATOR . 'DatabasePDO.php';
require_once 'DaysDAO.php';

class BiggieSmallsDAO {
    public $pdo;
    private $daysDAO;

    public function __construct() {
        $this->pdo = DatabasePDO::getInstance();
        $this->daysDAO = new DaysDAO();
    }

    public function getBiggieSmalls() {
        $sql = "SELECT * FROM `enroute_biggiesmalls` ORDER BY `day_id` ASC";
        $stmt = $this->pdo->prepare($sql);
        if ($stmt->execute()) {
            $biggieSmalls = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if(!empty($biggieSmalls)){
                $arr = array();
                foreach($biggieSmalls as $biggieSmalls){
                    $biggieSmalls['day'] = $this->daysDAO->getDayById($biggieSmalls['day_id']);
                    $arr[] = $biggieSmalls;
                }
                return $arr;
            }
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function getBiggieSmallsById($id) {
        $sql = "SELECT * FROM `enroute_biggiesmalls` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('id', $id);
        if ($stmt->execute()) {
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function getBiggieSmallsByDay($day_id) {
        $sql = "SELECT * FROM `enroute_biggiesmalls` WHERE `day_id` = :day_id AND `approved` = 1";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        if ($stmt->execute()) {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        return array();
    }

    public function insertBiggieSmalls($day_id, $url, $latitude, $longitude) {
        $sql = "INSERT INTO `enroute_biggiesmalls` (`day_id`, `url`, `latitude`, `longitude`) VALUES (:day_id, :url, :latitude, :longitude)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue('day_id', $day_id);
        $stmt->bindValue('url', $url);
        $stmt->bindValue('latitude', $latitude);
        $stmt->bindValue('longitude', $longitude);
        if ($stmt->execute()) {
            return $this->getBiggieSmallsById($this->pdo->lastInsertId());
        }
        return false;
    }

    public function deleteBiggieSmalls($id) {
        $sql = "DELETE FROM `enroute_biggiesmalls` WHERE `id` = :id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        return $stmt->execute();
    }

    public function updateBiggieSmalls($id, $approved) {
        $sql = 'UPDATE `enroute_biggiesmalls` SET `approved` = :approved WHERE `id` = :id';
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':approved', $approved);
        if ($stmt->execute()) {
            $biggieSmalls = $this->getBiggieSmallsById($id);
            if (!empty($biggieSmalls)) {
                return $biggieSmalls;
            }
        }
        return false;
    }
}