<?php
require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DaysDAO.php';
class Validate {
    public static function email($string) {
        // returns true if it's a valid e-mail.. if it's not, blame it on PHP!!!
        return filter_var($string, FILTER_VALIDATE_EMAIL);
    }

    public static function checkLength($string, $minChars = 7, $maxChars = '') {
        if($maxChars != '') {
            // returns true if $string is at least $minChars long and maximum $maxChars
            return (self::length($string) >= $minChars && self::length($string) <= $maxChars);
        } else {
            // returns true if $string is at least $minChars long
            return (self::length($string) >= $minChars);
        }
    }

    public static function checkWords($string, $minWords) {
        // returns true if $string consists of at least $minWords
        return (str_word_count($string) >= $minWords);
    }

    public static function checkIfActualDay($value) {
        // returns true if $value is a day
        $daysDAO = new DaysDAO();
        return count($daysDAO->getDayById($value)) > 0;
    }

    public static function checkIfTicketsAvailable($day, $tickets) {
        // returns true if amount is available
        $daysDAO = new DaysDAO();
        $day = $daysDAO->getDayById($day);
        return $day['tickets_available'] >= $tickets;
    }

    private function length($string) {
        // data is always UTF-8, just for specific length calculation.. http://goo.gl/xXH2My
        return mb_strlen($string, 'UTF-8');
    }
}