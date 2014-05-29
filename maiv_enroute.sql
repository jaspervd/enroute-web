-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Genereertijd: 29 mei 2014 om 17:50
-- Serverversie: 5.5.29
-- PHP-versie: 5.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `maiv_enroute`
--
CREATE DATABASE IF NOT EXISTS `maiv_enroute` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `maiv_enroute`;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `enroute_days`
--

DROP TABLE IF EXISTS `enroute_days`;
CREATE TABLE `enroute_days` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` date NOT NULL,
  `type` enum('scholen','publiek') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
