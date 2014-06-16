-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Genereertijd: 16 jun 2014 om 23:16
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
-- Tabelstructuur voor tabel `enroute_biggiesmalls`
--

DROP TABLE IF EXISTS `enroute_biggiesmalls`;
CREATE TABLE `enroute_biggiesmalls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_id` int(11) NOT NULL,
  `url` text NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `approved` tinyint(4) NOT NULL DEFAULT '0',
  `uploaded_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_3` (`id`),
  KEY `id` (`id`),
  KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `enroute_buildings`
--

DROP TABLE IF EXISTS `enroute_buildings`;
CREATE TABLE `enroute_buildings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_id` int(11) NOT NULL,
  `video_urls` text NOT NULL,
  `audio_urls` text NOT NULL,
  `approved` tinyint(1) DEFAULT '0',
  `uploaded_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `enroute_days`
--

DROP TABLE IF EXISTS `enroute_days`;
CREATE TABLE `enroute_days` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` date NOT NULL,
  `type` enum('scholen','publiek') NOT NULL DEFAULT 'scholen',
  `tickets_available` int(2) NOT NULL DEFAULT '25',
  `price` decimal(2,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=31 ;

--
-- Gegevens worden uitgevoerd voor tabel `enroute_days`
--

INSERT INTO `enroute_days` (`id`, `title`, `type`, `tickets_available`, `price`) VALUES
(1, '2014-06-02', 'scholen', 25, 0),
(2, '2014-06-03', 'scholen', 25, 0),
(3, '2014-06-04', 'scholen', 25, 0),
(4, '2014-06-05', 'scholen', 25, 0),
(5, '2014-06-06', 'scholen', 25, 0),
(6, '2014-06-09', 'publiek', 25, 10),
(7, '2014-06-10', 'publiek', 25, 10),
(8, '2014-06-11', 'publiek', 25, 10),
(9, '2014-06-12', 'scholen', 25, 0),
(10, '2014-06-13', 'scholen', 25, 0),
(11, '2014-06-16', 'scholen', 25, 0),
(12, '2014-06-17', 'scholen', 25, 0),
(13, '2014-06-18', 'scholen', 25, 0),
(14, '2014-06-19', 'scholen', 25, 0),
(15, '2014-06-20', 'scholen', 25, 0),
(16, '2014-06-23', 'publiek', 25, 10),
(17, '2014-06-24', 'publiek', 25, 10),
(18, '2014-06-25', 'publiek', 25, 10),
(19, '2014-06-26', 'scholen', 25, 0),
(20, '2014-06-27', 'scholen', 25, 0),
(21, '2014-06-30', 'scholen', 25, 0),
(22, '2014-07-01', 'scholen', 25, 0),
(23, '2014-07-02', 'scholen', 25, 0),
(24, '2014-07-03', 'scholen', 25, 0),
(25, '2014-07-04', 'scholen', 25, 0),
(26, '2014-07-07', 'scholen', 25, 0),
(27, '2014-07-08', 'scholen', 25, 0),
(28, '2014-07-09', 'scholen', 25, 0),
(29, '2014-07-10', 'scholen', 25, 0),
(30, '2014-07-11', 'scholen', 25, 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `enroute_tickets`
--

DROP TABLE IF EXISTS `enroute_tickets`;
CREATE TABLE `enroute_tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tickets` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
