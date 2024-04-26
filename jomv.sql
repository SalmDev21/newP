-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 26, 2024 at 10:08 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jomv`
--

-- --------------------------------------------------------

--
-- Table structure for table `achats`
--

DROP TABLE IF EXISTS `achats`;
CREATE TABLE IF NOT EXISTS `achats` (
  `achat_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `Ref` varchar(200) NOT NULL,
  `date_achat` int(11) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL,
  `montant_total` int(11) DEFAULT NULL,
  `img` varchar(30) NOT NULL,
  PRIMARY KEY (`achat_id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=MyISAM AUTO_INCREMENT=214 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `achats`
--

INSERT INTO `achats` (`achat_id`, `nom`, `Ref`, `date_achat`, `quantite`, `montant_total`, `img`) VALUES
(169, 'doigts en gomme	', '2302092 RL	', 580, 0, 10, 'ajout.png'),
(168, 'Doigts en gomme (jaune)', '3722118 RL (jaune)', 1000, 0, 10, ''),
(170, 'Doigts en gomme (noir )		', '382657MG 55 (noir )', 440, 0, 10, ''),
(171, 'Roulement		', '6208', 7, 0, 2, ''),
(172, 'Roulement', '62206', 3, 0, 2, ''),
(173, 'Roulement	', '6010', 40, 0, 2, ''),
(174, 'Roulement6303	', '6303', 6303, 0, 2, ''),
(175, 'Roulement6011', '6011', 1, 0, 2, ''),
(176, 'CourroieA27	 ', '	A27	', 12, 0, 2, ''),
(177, 'Courroie1720 SPZ	', '1720 SPZ', 5, 0, 2, ''),
(178, 'Courroie B76	16', 'B76	16', 16, 0, 2, ''),
(179, 'Courroie B74	', 'B74	', 0, 0, 2, ''),
(180, 'Parahuile	25/52/8	13', '25/52/8	', 13, 0, 2, ''),
(181, 'Parahuile	TC 30/62/10	', 'TC 30/62/10', 0, 0, 2, ''),
(182, 'Parahuile	TS 40/62/7	', 'TS 40/62/7', 3, 0, 2, ''),
(183, 'parahuile	TC 25/52/7', 'TC 25/52/7', 0, 0, 2, ''),
(184, 'parahuile	TC 30/62/7', 'TC 30/62/7', 13, 0, 2, ''),
(185, 'Parahuile	TC 30/62/10', 'TC 30/62/10', 0, 0, 2, ''),
(186, 'parahuile	', 'TC 60/80/10	', 11, 0, 2, ''),
(187, 'parahuile	TC 60/90/10	', 'TC 60/90/10', 4, 0, 2, ''),
(188, 'parahuile	TC 60/90/8', 'TC 60/90/8', 11, 0, 2, ''),
(189, 'Disjoncteur moteur GV2	ME08	', 'GV2	ME08', 1, 0, 2, ''),
(190, 'Disjoncteur moteur GV2	ME16', ' GV2	ME16', 1, 0, 2, ''),
(191, 'Disjoncteur moteur GV2	ME10', 'GV2	ME10', 1, 0, 2, ''),
(192, 'Disjoncteur moteur GV2	ME21	', 'GV2	ME21	', 1, 0, 2, ''),
(193, 'Disjoncteur moteur GV2	ME 14	', 'GV2	ME 14	', 1, 0, 2, ''),
(194, 'Disque abrasif	z 120/ 78', 'z 120/ 78', 17, 0, 2, ''),
(195, 'Cache interrupteur', '	Cache interrupteur	', 5, 0, 2, ''),
(196, 'Interrupteur', 'Interrupteur', 8, 0, 2, ''),
(197, 'Accouplement	', 'Accouplement G38 (TOK)	', 14, 0, 2, ''),
(198, 'Portedoit	', 'Portedoit	', 14, 0, 2, ''),
(199, 'Tube LED', 'Tube LED Luminére double étache	', 21, 0, 2, ''),
(200, 'Toile isolant', 'T.I (grand format )', 5, 0, 2, ''),
(201, 'Forane Réfrigéeant', 'Foran 404 A', 9, 0, 2, ''),
(202, 'Relais de protection thermique	', 'LRD 350', 1, 0, 2, ''),
(203, 'Relais de protection thermique', 'LRD 340', 2, 0, 2, ''),
(204, 'Contacteur tripolaire LC1	', 'D50 AP7', 4, 0, 2, ''),
(205, 'Lame mobile sécateur	', 'Lame mobile', 5, 0, 2, ''),
(206, 'Disque coupe pattes	', 'Disque coupe pattes	', 5, 0, 2, ''),
(207, 'CONTACTEUR ', '25A SCHNEIDER	LC1-D251', 6, 0, 2, ''),
(208, 'CONTACTEUR 18A SCHNEIDER	', 'LC1-D1810', 8, 0, 2, ''),
(209, 'COFFRET POLYESTER 210/280/130', 'CPOL21/28/13	', 5, 0, 2, ''),
(210, 'DISJ IC60N 4 *63A 10 KA C SCHNEIDER', 'A9F79463', 6, 0, 2, ''),
(211, 'TUTAU HELIFLEX VENT 080 RLX50	', '080193203020', 5, 0, 2, ''),
(212, 'COLLIER AVEC BOULON ', '080203203008	', 6, 0, 2, ''),
(213, 'VIS TH 08X030 INOX	', '190613313062', 6, 0, 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `camion`
--

DROP TABLE IF EXISTS `camion`;
CREATE TABLE IF NOT EXISTS `camion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `numc1` varchar(11) NOT NULL,
  `numc2` varchar(11) NOT NULL,
  `numc3` varchar(11) NOT NULL,
  `numc4` varchar(11) NOT NULL,
  `numc5` varchar(11) NOT NULL,
  `liv1` varchar(50) NOT NULL,
  `liv2` varchar(50) NOT NULL,
  `liv3` varchar(20) NOT NULL,
  `liv4` varchar(20) NOT NULL,
  `liv5` varchar(20) NOT NULL,
  `c1` tinyint(1) NOT NULL,
  `c2` tinyint(1) NOT NULL,
  `c3` tinyint(1) NOT NULL,
  `c4` tinyint(1) NOT NULL,
  `c5` tinyint(1) NOT NULL,
  `c6` tinyint(1) NOT NULL,
  `c7` tinyint(1) NOT NULL,
  `c8` tinyint(1) NOT NULL,
  `c9` tinyint(1) NOT NULL,
  `c10` tinyint(1) NOT NULL,
  `c11` tinyint(1) NOT NULL,
  `c12` tinyint(1) NOT NULL,
  `c13` tinyint(1) NOT NULL,
  `c14` tinyint(1) NOT NULL,
  `c15` tinyint(1) NOT NULL,
  `c16` tinyint(1) NOT NULL,
  `c17` tinyint(1) NOT NULL,
  `c18` tinyint(1) NOT NULL,
  `c19` tinyint(1) NOT NULL,
  `c20` tinyint(1) NOT NULL,
  `c21` tinyint(1) NOT NULL,
  `c22` tinyint(1) NOT NULL,
  `c23` tinyint(1) NOT NULL,
  `c24` tinyint(1) NOT NULL,
  `c25` tinyint(1) NOT NULL,
  `nc1` tinyint(1) NOT NULL,
  `nc2` tinyint(1) NOT NULL,
  `nc3` tinyint(1) NOT NULL,
  `nc4` tinyint(1) NOT NULL,
  `nc6` tinyint(1) NOT NULL,
  `nc7` tinyint(1) NOT NULL,
  `nc8` tinyint(1) NOT NULL,
  `nc9` tinyint(1) NOT NULL,
  `nc10` tinyint(1) NOT NULL,
  `nc11` tinyint(1) NOT NULL,
  `nc12` tinyint(1) NOT NULL,
  `nc13` tinyint(1) NOT NULL,
  `nc14` tinyint(1) NOT NULL,
  `nc15` tinyint(1) NOT NULL,
  `nc16` tinyint(1) NOT NULL,
  `nc17` tinyint(1) NOT NULL,
  `nc18` tinyint(1) NOT NULL,
  `nc19` tinyint(1) NOT NULL,
  `nc20` tinyint(1) NOT NULL,
  `nc21` tinyint(1) NOT NULL,
  `nc22` tinyint(1) NOT NULL,
  `nc23` tinyint(1) NOT NULL,
  `nc24` tinyint(1) NOT NULL,
  `nc25` tinyint(1) NOT NULL,
  `obs1` varchar(50) NOT NULL,
  `obs2` varchar(50) NOT NULL,
  `obs3` varchar(50) NOT NULL,
  `obs4` varchar(50) NOT NULL,
  `obs5` varchar(50) NOT NULL,
  `obs6` varchar(50) NOT NULL,
  `obs7` varchar(50) NOT NULL,
  `obs8` varchar(50) NOT NULL,
  `obs9` varchar(50) NOT NULL,
  `obs10` varchar(60) NOT NULL,
  `obs11` varchar(50) NOT NULL,
  `obs12` varchar(50) NOT NULL,
  `obs13` varchar(60) NOT NULL,
  `obs14` varchar(50) NOT NULL,
  `obs15` varchar(80) NOT NULL,
  `obs16` varchar(80) NOT NULL,
  `obs17` varchar(80) NOT NULL,
  `obs18` varchar(80) NOT NULL,
  `obs19` varchar(80) NOT NULL,
  `obs20` varchar(80) NOT NULL,
  `obs21` varchar(80) NOT NULL,
  `obs22` varchar(80) NOT NULL,
  `obs23` varchar(80) NOT NULL,
  `obs24` varchar(80) NOT NULL,
  `obs25` varchar(80) NOT NULL,
  `sig1` varchar(20) NOT NULL,
  `sig2` varchar(20) NOT NULL,
  `sig3` varchar(20) NOT NULL,
  `sig4` varchar(20) NOT NULL,
  `sig5` varchar(20) NOT NULL,
  `sigchef` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `camion`
--

INSERT INTO `camion` (`id`, `date`, `numc1`, `numc2`, `numc3`, `numc4`, `numc5`, `liv1`, `liv2`, `liv3`, `liv4`, `liv5`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `c8`, `c9`, `c10`, `c11`, `c12`, `c13`, `c14`, `c15`, `c16`, `c17`, `c18`, `c19`, `c20`, `c21`, `c22`, `c23`, `c24`, `c25`, `nc1`, `nc2`, `nc3`, `nc4`, `nc6`, `nc7`, `nc8`, `nc9`, `nc10`, `nc11`, `nc12`, `nc13`, `nc14`, `nc15`, `nc16`, `nc17`, `nc18`, `nc19`, `nc20`, `nc21`, `nc22`, `nc23`, `nc24`, `nc25`, `obs1`, `obs2`, `obs3`, `obs4`, `obs5`, `obs6`, `obs7`, `obs8`, `obs9`, `obs10`, `obs11`, `obs12`, `obs13`, `obs14`, `obs15`, `obs16`, `obs17`, `obs18`, `obs19`, `obs20`, `obs21`, `obs22`, `obs23`, `obs24`, `obs25`, `sig1`, `sig2`, `sig3`, `sig4`, `sig5`, `sigchef`) VALUES
(15, '2024-04-10', '12563', '', '', '', '', 'Aymen', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Hygiéne engin', 'Hygiéne engin', 'Hygiéne&nbsp;', 'Hygiéne engin', 'Hygiéne engin', 'Température', 'Température', 'Température&nbsp;', 'Température&nbsp;', 'Température', 'Température&nbsp;', 'Température&nbsp;', 'Température', 'Température', 'Température =', 'Température', 'Températur', 'Température', 'Température', 'Température', 'Température&nbsp;', 'Température&nbsp;', 'Température&nbsp;', 'Température&nbsp;', 'Températur', 'Dalila Hattab', 'Dalila Hattab', 'Dalila Hattab', 'Dalila Hattab', 'Dalila Hattab', ' Ayoub Baccouche');

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(144) NOT NULL,
  `discription` date NOT NULL,
  `prix` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_categorie_achats` (`nom`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `controle`
--

DROP TABLE IF EXISTS `controle`;
CREATE TABLE IF NOT EXISTS `controle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `fourni` varchar(50) NOT NULL,
  `dateHeur` varchar(50) NOT NULL,
  `pro` varchar(50) NOT NULL,
  `numfich` varchar(50) NOT NULL,
  `numplom` varchar(50) NOT NULL,
  `lot` varchar(50) NOT NULL,
  `duree` varchar(50) NOT NULL,
  `qtep` varchar(50) NOT NULL,
  `qtekg` varchar(50) NOT NULL,
  `numfac` varchar(50) NOT NULL,
  `numcamion` varchar(50) NOT NULL,
  `origine` varchar(50) NOT NULL,
  `c1` tinyint(1) NOT NULL,
  `c2` tinyint(2) NOT NULL,
  `c3` tinyint(1) NOT NULL,
  `c4` tinyint(1) NOT NULL,
  `nc1` tinyint(1) NOT NULL,
  `nc2` tinyint(1) NOT NULL,
  `nc3` tinyint(1) NOT NULL,
  `nc4` tinyint(1) NOT NULL,
  `obs1` varchar(50) NOT NULL,
  `obs2` varchar(50) NOT NULL,
  `obs3` varchar(50) NOT NULL,
  `obs4` varchar(50) NOT NULL,
  `accepSous` varchar(50) NOT NULL,
  `accep` varchar(50) NOT NULL,
  `refus` varchar(50) NOT NULL,
  `obsAccS` varchar(50) NOT NULL,
  `obsAcc` varchar(50) NOT NULL,
  `obsRefus` varchar(50) NOT NULL,
  `sig` varchar(50) NOT NULL,
  `sigChef` varchar(50) NOT NULL,
  `age` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `ref` varchar(50) NOT NULL,
  `refb` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=68 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `controle`
--

INSERT INTO `controle` (`id`, `date`, `fourni`, `dateHeur`, `pro`, `numfich`, `numplom`, `lot`, `duree`, `qtep`, `qtekg`, `numfac`, `numcamion`, `origine`, `c1`, `c2`, `c3`, `c4`, `nc1`, `nc2`, `nc3`, `nc4`, `obs1`, `obs2`, `obs3`, `obs4`, `accepSous`, `accep`, `refus`, `obsAccS`, `obsAcc`, `obsRefus`, `sig`, `sigChef`, `age`, `nom`, `ref`, `refb`) VALUES
(64, '1080-10-05', '0vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh0', '000vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '025220', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', 0, 0, 0, 0, 0, 0, 0, 0, '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '000', '0', '0', '0', '0', '00vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh0'),
(63, '1080-10-05', '0vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh0', '000vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '025220', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', 0, 0, 0, 0, 0, 0, 0, 0, '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '000', '0', '0', '0', '0', '00', '0', '0', '0', '0vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh0'),
(62, '1080-10-05', '0vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh0', '000vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '025220', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', 0, 0, 0, 0, 0, 0, 0, 0, '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '000', '0', '0', '0', '0', '00', '0', '0', '0', '0', '', '00', '0', '0'),
(61, '1080-10-05', '0', '00', '0', '0', '', '00', '00', '0', '00', '0', '0', '00', 0, 0, 0, 0, 0, 0, 0, 0, '00', '0', '000', '0', '0', '0', '0', '00', '0', '0', '0', '0', '', '00', '0', '0'),
(65, '1080-10-05', '0vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh0', '000vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '025220', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', 0, 0, 0, 0, 0, 0, 0, 0, '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh0000', '0vhgfdcgvhvgcfcgvh00', '0', '0', '0', '00vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh0', '0vhgfdcgvhvgcfcgvh00', '0vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh00', '00vhgfdcgvhvgcfcgvh0', '00vhgfdcgvhvgcfcgvh0'),
(66, '2024-04-04', '00', '00', '00', '0', '0', '00', '0', '000', '0', '0', '00', '0', 0, 0, 0, 0, 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '00', '0', '00', '00', '0', '0', '0', '0', '00'),
(67, '2024-04-11', '0', '0', '0', '00', '0', '0', '0', '0', '0', '00', '0', '0', 0, 0, 0, 0, 0, 0, 0, 0, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '00', '0', '0', '00', '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `decoupe`
--

DROP TABLE IF EXISTS `decoupe`;
CREATE TABLE IF NOT EXISTS `decoupe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `chef` varchar(30) NOT NULL,
  `art` varchar(30) NOT NULL,
  `qte` varchar(30) NOT NULL,
  `date1` varchar(30) NOT NULL,
  `lot` varchar(30) NOT NULL,
  `nb1` varchar(30) NOT NULL,
  `nb2` varchar(30) NOT NULL,
  `nb3` varchar(30) NOT NULL,
  `nb4` varchar(30) NOT NULL,
  `nb5` varchar(30) NOT NULL,
  `nb6` varchar(30) NOT NULL,
  `nb7` varchar(30) NOT NULL,
  `poi1` varchar(30) NOT NULL,
  `poi2` varchar(30) NOT NULL,
  `poi3` varchar(30) NOT NULL,
  `poi4` varchar(30) NOT NULL,
  `poi5` varchar(30) NOT NULL,
  `poi6` varchar(30) NOT NULL,
  `poi7` varchar(30) NOT NULL,
  `lot1` varchar(30) NOT NULL,
  `lot2` varchar(30) NOT NULL,
  `lot3` varchar(30) NOT NULL,
  `lot4` varchar(30) NOT NULL,
  `lot5` varchar(30) NOT NULL,
  `lot6` varchar(30) NOT NULL,
  `lot7` varchar(30) NOT NULL,
  `qte1` varchar(30) NOT NULL,
  `qte2` varchar(30) NOT NULL,
  `qte3` varchar(30) NOT NULL,
  `qte4` varchar(30) NOT NULL,
  `qte5` varchar(30) NOT NULL,
  `qte6` varchar(30) NOT NULL,
  `qte7` varchar(30) NOT NULL,
  `quali1` varchar(30) NOT NULL,
  `quali2` varchar(30) NOT NULL,
  `quali3` varchar(30) NOT NULL,
  `quali4` varchar(30) NOT NULL,
  `quali5` varchar(30) NOT NULL,
  `quali6` varchar(30) NOT NULL,
  `quali7` varchar(30) NOT NULL,
  `corr1` varchar(30) NOT NULL,
  `corr2` varchar(30) NOT NULL,
  `corr3` varchar(30) NOT NULL,
  `corr4` varchar(30) NOT NULL,
  `corr5` varchar(30) NOT NULL,
  `corr6` varchar(30) NOT NULL,
  `corr7` varchar(30) NOT NULL,
  `nom1` varchar(30) NOT NULL,
  `nom2` varchar(30) NOT NULL,
  `nom3` varchar(30) NOT NULL,
  `nom4` varchar(30) NOT NULL,
  `nom5` varchar(30) NOT NULL,
  `nom6` varchar(30) NOT NULL,
  `nom7` varchar(30) NOT NULL,
  `nom8` varchar(30) NOT NULL,
  `nom9` varchar(30) NOT NULL,
  `nom10` varchar(30) NOT NULL,
  `nom11` varchar(30) NOT NULL,
  `nom12` varchar(30) NOT NULL,
  `ren1` varchar(30) NOT NULL,
  `ren2` varchar(30) NOT NULL,
  `ren3` varchar(30) NOT NULL,
  `ren4` varchar(30) NOT NULL,
  `ren5` varchar(30) NOT NULL,
  `ren6` varchar(30) NOT NULL,
  `ren7` varchar(30) NOT NULL,
  `ren8` varchar(30) NOT NULL,
  `ren9` varchar(30) NOT NULL,
  `ren10` varchar(30) NOT NULL,
  `ren11` varchar(30) NOT NULL,
  `ren12` varchar(30) NOT NULL,
  `sig1` varchar(30) NOT NULL,
  `sig2` varchar(30) NOT NULL,
  `sigchef` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `decoupe`
--

INSERT INTO `decoupe` (`id`, `date`, `chef`, `art`, `qte`, `date1`, `lot`, `nb1`, `nb2`, `nb3`, `nb4`, `nb5`, `nb6`, `nb7`, `poi1`, `poi2`, `poi3`, `poi4`, `poi5`, `poi6`, `poi7`, `lot1`, `lot2`, `lot3`, `lot4`, `lot5`, `lot6`, `lot7`, `qte1`, `qte2`, `qte3`, `qte4`, `qte5`, `qte6`, `qte7`, `quali1`, `quali2`, `quali3`, `quali4`, `quali5`, `quali6`, `quali7`, `corr1`, `corr2`, `corr3`, `corr4`, `corr5`, `corr6`, `corr7`, `nom1`, `nom2`, `nom3`, `nom4`, `nom5`, `nom6`, `nom7`, `nom8`, `nom9`, `nom10`, `nom11`, `nom12`, `ren1`, `ren2`, `ren3`, `ren4`, `ren5`, `ren6`, `ren7`, `ren8`, `ren9`, `ren10`, `ren11`, `ren12`, `sig1`, `sig2`, `sigchef`) VALUES
(1, '2024-04-09', '0', '00', '0', '0', '0', '0', '0', '00', '0', '0', '0', '', '00', '0', '0', '0', '00', '0', '0', '0', '00', '0', '00', '0', '0', '0', '00', '0', '0', '0', '0', '0', '0', '0', '00', '0', '0', '0', '0', '', '0', '00', '0', '0', '0', '0', '0', '0', '0', '00', '0', '0', '0', '00', '0', '0', '0', '00', '0', '0', '0', '0', '00', '0', '0', '0', '00', '0', '0', '', '', 'yyyy', '', 'nnnn'),
(2, '2024-04-08', '0', 'kkkk', '0', '0', '0', '0', '0', '00', '0', '0', '0', '', '00', '0', '0', '0', '00', '0', '0', '0', '00', '0', '00', '0', '0', '0', '00', '0', '0', '0', '0', '0', '0', '0', '00', '0', '0', '0', '0', '', '0', '00', '0', '0', '0', '0', '0', '0', '0', '00', '0', '0', '0', '00', '0', '0', '0', '00', '0', '0', '0', '0', '00', '0', '0', '0', '00', '0', '0', '', '', '', '', ''),
(3, '2024-04-13', 'JBHNJKJNHBGFGVHBJN', 'GFCVGBHJN', 'VCG', 'VB', 'VC VBB', 'V CG', 'BGVHCGVBH', 'HBGVCVBHHBVCVB', '', '', '', '', '&nbsp;VBHBH', 'HBGVCVBHHBVCVB', 'HBGVCVBHHBVCVB', '', '', '', '', 'VHCFVGBH', 'HBVC', 'HBGVCVBHHBVCVB', '', '', '', '', '', '', '', '', '', '', '', 'HBGV', 'BHVCVHBGVCVBHHBVCVB', 'HBGVCVBHHBVCVB', '', '', '', '', 'HBJHGVCFGHH', 'HBGVCVBHHBVCVB', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, '2024-04-11', 'MNJBHCGFVHBN', 'MNBHJGVHB', 'MNBJHVHBN', 'KNKBHVGBN', 'NBHVGCVBN', 'MNBJHGCFDXCGHBJ', '', '', '', 'NJBHVCGFXCGVHBJNK', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(5, '2024-04-11', 'ffbbbbbbb', 'b', 'b', 'b', 'bb', 'bbb', 'h', 'h', 'h', 'h', 'h', 'h', '', 'bh', 'h', 'h', 'h', 'h', 'h', 'bb', 'h', 'h', 'h', 'h', 'hh', 'hh', '', '', '', '', '', '', '', 'b', 'hhhh', 'h', 'hh', 'h', 'h', 'h', 'b', 'hh', 'hh', 'h', 'h', 'h', 'hh', 'h', 'h', 'h', 'hhhhhh', 'hh', 'hhhhhhhh', 'h', 'h', 'hh', 'hh', 'hh', 'h', 'hh', 'h', 'hh', 'h', 'h', '', 'hh', 'hh', 'hh', 'hhhhh', 'h', '', 'hhhjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'hjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'hhjjjjjjjjjjjjjjjjjjjjjjjjjjj');

-- --------------------------------------------------------

--
-- Table structure for table `dine`
--

DROP TABLE IF EXISTS `dine`;
CREATE TABLE IF NOT EXISTS `dine` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `chef` varchar(100) NOT NULL,
  `nature1` varchar(100) NOT NULL,
  `qte1` varchar(100) NOT NULL,
  `date1` varchar(100) NOT NULL,
  `lot1` varchar(100) NOT NULL,
  `nature2` varchar(100) NOT NULL,
  `poi1` varchar(100) NOT NULL,
  `ren` varchar(100) NOT NULL,
  `lot2` varchar(100) NOT NULL,
  `quali1` varchar(100) NOT NULL,
  `corr1` varchar(100) NOT NULL,
  `nature3` varchar(100) NOT NULL,
  `qte2` varchar(100) NOT NULL,
  `date3` varchar(100) NOT NULL,
  `lot3` varchar(100) NOT NULL,
  `nature4` varchar(100) NOT NULL,
  `poi2` varchar(100) NOT NULL,
  `ren0` varchar(100) NOT NULL,
  `lot4` varchar(100) NOT NULL,
  `quali2` varchar(100) NOT NULL,
  `corr2` varchar(100) NOT NULL,
  `nom1` varchar(100) NOT NULL,
  `nom2` varchar(100) NOT NULL,
  `nom3` varchar(100) NOT NULL,
  `nom4` varchar(100) NOT NULL,
  `nom5` varchar(100) NOT NULL,
  `nom6` varchar(100) NOT NULL,
  `nom7` varchar(100) NOT NULL,
  `nom8` varchar(100) NOT NULL,
  `nom9` varchar(100) NOT NULL,
  `nom10` varchar(100) NOT NULL,
  `nom11` varchar(100) NOT NULL,
  `nom12` varchar(100) NOT NULL,
  `nom13` varchar(100) NOT NULL,
  `nom14` varchar(100) NOT NULL,
  `ren1` varchar(100) NOT NULL,
  `ren2` varchar(100) NOT NULL,
  `ren3` varchar(100) NOT NULL,
  `ren4` varchar(100) NOT NULL,
  `ren5` varchar(100) NOT NULL,
  `ren6` varchar(100) NOT NULL,
  `ren7` varchar(100) NOT NULL,
  `ren8` varchar(100) NOT NULL,
  `ren9` varchar(100) NOT NULL,
  `ren10` varchar(100) NOT NULL,
  `ren11` varchar(100) NOT NULL,
  `ren12` varchar(100) NOT NULL,
  `ren13` varchar(100) NOT NULL,
  `ren14` varchar(1000) NOT NULL,
  `sig1` varchar(100) NOT NULL,
  `sig2` varchar(100) NOT NULL,
  `sigchef` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dine`
--

INSERT INTO `dine` (`id`, `date`, `chef`, `nature1`, `qte1`, `date1`, `lot1`, `nature2`, `poi1`, `ren`, `lot2`, `quali1`, `corr1`, `nature3`, `qte2`, `date3`, `lot3`, `nature4`, `poi2`, `ren0`, `lot4`, `quali2`, `corr2`, `nom1`, `nom2`, `nom3`, `nom4`, `nom5`, `nom6`, `nom7`, `nom8`, `nom9`, `nom10`, `nom11`, `nom12`, `nom13`, `nom14`, `ren1`, `ren2`, `ren3`, `ren4`, `ren5`, `ren6`, `ren7`, `ren8`, `ren9`, `ren10`, `ren11`, `ren12`, `ren13`, `ren14`, `sig1`, `sig2`, `sigchef`) VALUES
(1, '2024-04-17', '0000', '00', '0', '0', '00', '00', '0', '0', '0', '00', '0', '0', '00', '0', '0', '0', '0', '0', '00', '0', '00', '0', '00', '00', '0', '0', '0', '00', '0', '00', '0', '0', '00', '0', '0', '00', '0', '0', '0', '0', '0', '0', '0', '0', '00', '0', '0', '00', '0', 'kkk', '00', 'ppp'),
(2, '2024-04-16', 'ssssss', '00', '0', '0', '00', '00', '0', '0', '0', '00', '0', '0', '00', '0', '0', '0', '0', '0', '00', '0', '00', '0', '00', '00', '0', '0', '0', '00', '0', '00', '0', '0', '00', '0', '0', '00', '0', '0', '0', '0', '0', '0', '0', '0', '00', '0', '0', '00', '0', '0', '00', '00'),
(3, '2024-04-12', '00', '0', '0', '00', '0', '0', '0', '', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '0', '', '0', '', '0', '0', '00', '0', '0', '', '0', '0', '0', '00', '00', '00', '000', '0', '0', '', '00', '', '', '0', '00', '0', '0', '0', '0', '0', '00'),
(4, '2024-04-11', 'amine be ayed', '', '', '', '', '<br>', '<br>', '<br>', '<br>', '<br>', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '<br>', '<br>', '<br>', '<br>', '<br>', '<br>', '', '', '', '', '', '', '', '<br>', '<br>', '<br>', '<br>', '<br>', '<br>', '', '', '', '0', 'stock karime', 'stock karime', 'stock karime'),
(5, '2024-04-20', '', '00000', '0000', '00000', '000000', '', '0000', '000000', '000000', '0000', '00000', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '00', '00', '00', '00', '', '', '', '', '', '', '00', '00', '00', '0', '', '', ''),
(6, '2024-04-25', '0', '00', '0', '0', '0', '0', '0', '0', '0', '0', '0', '', '', '', '', '', '', '', '', '', '', '0', '00', '0', '000', '0', '0', '0', '0', '0', '0', '0', '0', '0', '00', '0', '0', '0', '0', '0', '00', '0', '00', '0', '0', '0', '0', '0', '0', '00', '0', '0'),
(7, '2024-05-04', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '', '', '', '', '', '', '', '', '', '', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '', '', '', '', ''),
(8, '2024-05-31', '', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '', '', '', '', '', '', '', '', '', '', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', '<span style=\"text-align: center;\">CUISSE DINDE FRAIS Nature :</span>', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :', 'CUISSE DINDE FRAIS Nature :'),
(9, '2024-04-11', 'lkjgfyghjklm;,kljhgyf', 'jhugyftgvbhjkmljnbgvy', 'joibgctdxcfgbhjmkljbgv', 'jnibgvcfdxrcfgbhjnbhgfc', 'jnibgcfdxfchbjn bgcfx', 'jnbgcfdxcfghbjnbhgcf', 'kmojbhgcffvbhnnkjbhgcfnm', 'lmkjbhgcfvbjnjbhg', 'cfcvbhjmkjbhgvctf', 'vbhnjnjbhgvcvbnbv', 'cxcvbnmnbvcxcvbnmnbvc', '', '', '', '', '', '', '', '', '', '', 'vbnbvcvbn', 'vbnmnbvcvbnbvc', 'cxcvbnmnbvcvbnbvc', 'bvccvbnbvcc', 'cvbnnb', '', '', '', '', '', '', '', '', '', 'mnbvcvbnmnbvc', 'vbnmmnbvcvbnmnbv', 'xcvbnmnbvcvbn', 'vbnmnbvcx', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `expedition`
--

DROP TABLE IF EXISTS `expedition`;
CREATE TABLE IF NOT EXISTS `expedition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `numcamion` varchar(40) NOT NULL,
  `nomchaufeur` varchar(40) NOT NULL,
  `externe` varchar(40) NOT NULL,
  `interne` varchar(40) NOT NULL,
  `client` varchar(40) NOT NULL,
  `article` varchar(40) NOT NULL,
  `qte` varchar(40) NOT NULL,
  `datepro` varchar(40) NOT NULL,
  `lot` varchar(40) NOT NULL,
  `aspect` varchar(40) NOT NULL,
  `EHygiene` varchar(40) NOT NULL,
  `CHygiene` varchar(40) NOT NULL,
  `Elivreur` varchar(40) NOT NULL,
  `Clivreur` varchar(40) NOT NULL,
  `ETemProduit` varchar(40) NOT NULL,
  `CTemProduit` varchar(40) NOT NULL,
  `EtempFrigo` varchar(40) NOT NULL,
  `CtempFrigo` varchar(40) NOT NULL,
  `Eqte` varchar(40) NOT NULL,
  `Cqte` varchar(40) NOT NULL,
  `sigCQH` varchar(40) NOT NULL,
  `sigChefEquipe` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `expedition`
--

INSERT INTO `expedition` (`id`, `date`, `numcamion`, `nomchaufeur`, `externe`, `interne`, `client`, `article`, `qte`, `datepro`, `lot`, `aspect`, `EHygiene`, `CHygiene`, `Elivreur`, `Clivreur`, `ETemProduit`, `CTemProduit`, `EtempFrigo`, `CtempFrigo`, `Eqte`, `Cqte`, `sigCQH`, `sigChefEquipe`) VALUES
(49, '2024-04-11', 'mknjbhg', 'nb', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(48, '2024-04-05', ' bjhv', 'm nb', '0', '0', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `nonpropre`
--

DROP TABLE IF EXISTS `nonpropre`;
CREATE TABLE IF NOT EXISTS `nonpropre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `tem1` varchar(10) NOT NULL,
  `tem2` varchar(10) NOT NULL,
  `tem3` varchar(10) NOT NULL,
  `tem4` varchar(10) NOT NULL,
  `tem5` varchar(10) NOT NULL,
  `tem6` varchar(10) NOT NULL,
  `tem7` varchar(10) NOT NULL,
  `tem8` varchar(10) NOT NULL,
  `tem9` varchar(10) NOT NULL,
  `tem10` varchar(10) NOT NULL,
  `tem11` varchar(10) NOT NULL,
  `tem12` varchar(10) NOT NULL,
  `tem13` varchar(10) NOT NULL,
  `tem14` varchar(10) NOT NULL,
  `tem15` varchar(10) NOT NULL,
  `tem16` varchar(10) NOT NULL,
  `tem17` varchar(10) NOT NULL,
  `tem18` varchar(10) NOT NULL,
  `tem19` varchar(10) NOT NULL,
  `tem20` varchar(10) NOT NULL,
  `tem21` varchar(10) NOT NULL,
  `tem22` varchar(10) NOT NULL,
  `tem23` varchar(10) NOT NULL,
  `tem24` varchar(10) NOT NULL,
  `tem25` varchar(10) NOT NULL,
  `tem26` varchar(10) NOT NULL,
  `tem27` varchar(10) NOT NULL,
  `tem28` varchar(10) NOT NULL,
  `tem29` varchar(10) NOT NULL,
  `tem30` varchar(10) NOT NULL,
  `tem31` varchar(10) NOT NULL,
  `tem32` varchar(10) NOT NULL,
  `tem33` varchar(10) NOT NULL,
  `tem34` varchar(10) NOT NULL,
  `tem35` varchar(10) NOT NULL,
  `tem36` varchar(10) NOT NULL,
  `tem37` varchar(10) NOT NULL,
  `tem38` varchar(10) NOT NULL,
  `heure` varchar(80) NOT NULL,
  `ano` varchar(80) NOT NULL,
  `cause` varchar(80) NOT NULL,
  `corr` varchar(80) NOT NULL,
  `eche` varchar(80) NOT NULL,
  `sig` varchar(60) NOT NULL,
  `sigchef` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nonpropre`
--

INSERT INTO `nonpropre` (`id`, `date`, `tem1`, `tem2`, `tem3`, `tem4`, `tem5`, `tem6`, `tem7`, `tem8`, `tem9`, `tem10`, `tem11`, `tem12`, `tem13`, `tem14`, `tem15`, `tem16`, `tem17`, `tem18`, `tem19`, `tem20`, `tem21`, `tem22`, `tem23`, `tem24`, `tem25`, `tem26`, `tem27`, `tem28`, `tem29`, `tem30`, `tem31`, `tem32`, `tem33`, `tem34`, `tem35`, `tem36`, `tem37`, `tem38`, `heure`, `ano`, `cause`, `corr`, `eche`, `sig`, `sigchef`) VALUES
(20, '2024-04-18', 'NC', 'C', 'C', 'C', 'NC', 'N', 'CN', 'CN', 'NC', 'NC', 'C', 'CC', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'CC', 'C', 'C', 'CC', 'NC', 'NC', 'N', 'CN', 'CN', 'CN', 'N', '15H', 'Action Correctives', 'Action Correctives', 'Action Correctives', 'Action Correctives', 'amira bani', 'ayoub baccouche');

-- --------------------------------------------------------

--
-- Table structure for table `rapa`
--

DROP TABLE IF EXISTS `rapa`;
CREATE TABLE IF NOT EXISTS `rapa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `delai` varchar(50) NOT NULL,
  `delaiD` varchar(50) NOT NULL,
  `elec` varchar(50) NOT NULL,
  `elecD` varchar(50) NOT NULL,
  `test` varchar(50) NOT NULL,
  `testD` varchar(50) NOT NULL,
  `temp` varchar(50) NOT NULL,
  `tempD` varchar(50) NOT NULL,
  `plu` varchar(50) NOT NULL,
  `pluD` varchar(50) NOT NULL,
  `evi` varchar(50) NOT NULL,
  `eviD` varchar(50) NOT NULL,
  `carcase` varchar(50) NOT NULL,
  `carcaseD` varchar(50) NOT NULL,
  `vitesse` varchar(50) NOT NULL,
  `vitesseD` varchar(50) NOT NULL,
  `observation` varchar(800) NOT NULL,
  `accrochage` varchar(50) NOT NULL,
  `accrochageD` varchar(50) NOT NULL,
  `Saigne` varchar(50) NOT NULL,
  `SaigneD` varchar(50) NOT NULL,
  `evisceration` varchar(50) NOT NULL,
  `eviscerationD` varchar(50) NOT NULL,
  `manuelle` varchar(50) NOT NULL,
  `manuelleD` varchar(50) NOT NULL,
  `finition` varchar(50) NOT NULL,
  `finitionD` varchar(50) NOT NULL,
  `nettoyage` varchar(50) NOT NULL,
  `nettoyageD` varchar(50) NOT NULL,
  `pompe` varchar(50) NOT NULL,
  `pompeD` varchar(50) NOT NULL,
  `ressuage` varchar(50) NOT NULL,
  `ressuageD` varchar(50) NOT NULL,
  `dechet` varchar(50) NOT NULL,
  `dechetD` varchar(50) NOT NULL,
  `lavage` varchar(50) NOT NULL,
  `lavageD` varchar(50) NOT NULL,
  `autre` varchar(50) NOT NULL,
  `autreD` varchar(50) NOT NULL,
  `signature` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rapa`
--

INSERT INTO `rapa` (`id`, `date`, `delai`, `delaiD`, `elec`, `elecD`, `test`, `testD`, `temp`, `tempD`, `plu`, `pluD`, `evi`, `eviD`, `carcase`, `carcaseD`, `vitesse`, `vitesseD`, `observation`, `accrochage`, `accrochageD`, `Saigne`, `SaigneD`, `evisceration`, `eviscerationD`, `manuelle`, `manuelleD`, `finition`, `finitionD`, `nettoyage`, `nettoyageD`, `pompe`, `pompeD`, `ressuage`, `ressuageD`, `dechet`, `dechetD`, `lavage`, `lavageD`, `autre`, `autreD`, `signature`) VALUES
(68, '2024-04-12', '00000000', '00', '00Voltage..............Frequance................', '0Voltage..............Frequance................', '0', '0', '0', '00', '0', '0', '00', '00', '00', '00', '0', '0', '0....................................................................', '0', '0', '0', '0', '0', '00', '0', '00', '0', '0', '00', '0', '0', '0', '00', '00', '0', '0', '0', '0', '0', '0', '0');

-- --------------------------------------------------------

--
-- Table structure for table `retour`
--

DROP TABLE IF EXISTS `retour`;
CREATE TABLE IF NOT EXISTS `retour` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `nomli` varchar(50) NOT NULL,
  `nomcli` varchar(50) NOT NULL,
  `art1` varchar(50) NOT NULL,
  `art2` varchar(50) NOT NULL,
  `art3` varchar(50) NOT NULL,
  `art4` varchar(50) NOT NULL,
  `art5` varchar(50) NOT NULL,
  `qte1` varchar(50) NOT NULL,
  `qte2` varchar(50) NOT NULL,
  `qte3` varchar(50) NOT NULL,
  `qte4` varchar(50) NOT NULL,
  `qte5` varchar(50) NOT NULL,
  `cause1` varchar(50) NOT NULL,
  `cause2` varchar(50) NOT NULL,
  `cause3` varchar(50) NOT NULL,
  `cause4` varchar(50) NOT NULL,
  `cause5` varchar(50) NOT NULL,
  `lot1` varchar(19) NOT NULL,
  `lot2` varchar(19) NOT NULL,
  `lot3` varchar(20) NOT NULL,
  `lot4` varchar(20) NOT NULL,
  `lot5` varchar(20) NOT NULL,
  `asp1` varchar(50) NOT NULL,
  `asp2` varchar(50) NOT NULL,
  `asp3` varchar(50) NOT NULL,
  `asp4` varchar(50) NOT NULL,
  `asp5` varchar(50) NOT NULL,
  `acrion1` varchar(50) NOT NULL,
  `acrion2` varchar(50) NOT NULL,
  `acrion3` varchar(50) NOT NULL,
  `acrion4` varchar(50) NOT NULL,
  `acrion5` varchar(50) NOT NULL,
  `sigRq` varchar(50) NOT NULL,
  `sigRp` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `retour`
--

INSERT INTO `retour` (`id`, `date`, `nomli`, `nomcli`, `art1`, `art2`, `art3`, `art4`, `art5`, `qte1`, `qte2`, `qte3`, `qte4`, `qte5`, `cause1`, `cause2`, `cause3`, `cause4`, `cause5`, `lot1`, `lot2`, `lot3`, `lot4`, `lot5`, `asp1`, `asp2`, `asp3`, `asp4`, `asp5`, `acrion1`, `acrion2`, `acrion3`, `acrion4`, `acrion5`, `sigRq`, `sigRp`) VALUES
(9, '2024-04-05', 'Haythrm Aouini', 'Societe masaadi ', 'oeufs', 'scalpes', 'scalpes', 'dinde', 'poulet', '250', '50', '50', '30', '300', 'emballages', 'interne', 'interne', 'frigou', 'externe', '14528', '14118', '14119', '14589', '15963', 'A', 'C', 'C', 'C', 'A', 'A', 'C', 'A', 'C', 'A', 'Ayoub baccouche', 'baccouche ayoub');

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

DROP TABLE IF EXISTS `temp`;
CREATE TABLE IF NOT EXISTS `temp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `val1` varchar(50) NOT NULL,
  `obs1` varchar(50) NOT NULL,
  `val2` varchar(50) NOT NULL,
  `obs2` varchar(50) NOT NULL,
  `val3` varchar(50) NOT NULL,
  `obs3` varchar(50) NOT NULL,
  `val4` varchar(50) NOT NULL,
  `obs4` varchar(50) NOT NULL,
  `val5` varchar(50) NOT NULL,
  `obs5` varchar(50) NOT NULL,
  `val6` varchar(50) NOT NULL,
  `obs6` varchar(50) NOT NULL,
  `val7` varchar(50) NOT NULL,
  `obs7` varchar(50) NOT NULL,
  `val8` varchar(50) NOT NULL,
  `obs8` varchar(50) NOT NULL,
  `val9` varchar(50) NOT NULL,
  `obs9` varchar(50) NOT NULL,
  `val10` varchar(50) NOT NULL,
  `obs10` varchar(50) NOT NULL,
  `val11` varchar(50) NOT NULL,
  `obs11` varchar(50) NOT NULL,
  `val12` varchar(50) NOT NULL,
  `obs12` varchar(50) NOT NULL,
  `val13` varchar(50) NOT NULL,
  `obs13` varchar(50) NOT NULL,
  `val14` varchar(50) NOT NULL,
  `obs14` varchar(50) NOT NULL,
  `val15` varchar(50) NOT NULL,
  `obs15` varchar(50) NOT NULL,
  `val16` varchar(50) NOT NULL,
  `obs16` varchar(50) NOT NULL,
  `val17` varchar(50) NOT NULL,
  `obs17` varchar(50) NOT NULL,
  `val18` varchar(50) NOT NULL,
  `obs18` varchar(50) NOT NULL,
  `val19` varchar(50) NOT NULL,
  `obs19` varchar(50) NOT NULL,
  `val20` varchar(50) NOT NULL,
  `obs20` varchar(50) NOT NULL,
  `val21` varchar(50) NOT NULL,
  `obs21` varchar(50) NOT NULL,
  `val22` varchar(50) NOT NULL,
  `obs22` varchar(50) NOT NULL,
  `val23` varchar(50) NOT NULL,
  `obs23` varchar(50) NOT NULL,
  `val24` varchar(50) NOT NULL,
  `obs24` varchar(50) NOT NULL,
  `sig1` varchar(50) NOT NULL,
  `sig2` varchar(50) NOT NULL,
  `sig3` varchar(50) NOT NULL,
  `sig4` varchar(50) NOT NULL,
  `sig5` varchar(50) NOT NULL,
  `sig6` varchar(50) NOT NULL,
  `sig7` varchar(50) NOT NULL,
  `sig8` varchar(50) NOT NULL,
  `sig9` varchar(50) NOT NULL,
  `sig10` varchar(50) NOT NULL,
  `sig11` varchar(50) NOT NULL,
  `sig12` varchar(50) NOT NULL,
  `sig13` varchar(50) NOT NULL,
  `sig14` varchar(50) NOT NULL,
  `sig15` varchar(50) NOT NULL,
  `sig16` varchar(50) NOT NULL,
  `sig17` varchar(50) NOT NULL,
  `sig18` varchar(50) NOT NULL,
  `sig19` varchar(50) NOT NULL,
  `sig20` varchar(50) NOT NULL,
  `sig21` varchar(50) NOT NULL,
  `sig22` varchar(50) NOT NULL,
  `sig23` varchar(50) NOT NULL,
  `sig24` varchar(50) NOT NULL,
  `heure` varchar(50) NOT NULL,
  `anomalie` varchar(50) NOT NULL,
  `cause` varchar(50) NOT NULL,
  `corr` varchar(50) NOT NULL,
  `echeance` varchar(50) NOT NULL,
  `sig` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `temp`
--

INSERT INTO `temp` (`id`, `date`, `val1`, `obs1`, `val2`, `obs2`, `val3`, `obs3`, `val4`, `obs4`, `val5`, `obs5`, `val6`, `obs6`, `val7`, `obs7`, `val8`, `obs8`, `val9`, `obs9`, `val10`, `obs10`, `val11`, `obs11`, `val12`, `obs12`, `val13`, `obs13`, `val14`, `obs14`, `val15`, `obs15`, `val16`, `obs16`, `val17`, `obs17`, `val18`, `obs18`, `val19`, `obs19`, `val20`, `obs20`, `val21`, `obs21`, `val22`, `obs22`, `val23`, `obs23`, `val24`, `obs24`, `sig1`, `sig2`, `sig3`, `sig4`, `sig5`, `sig6`, `sig7`, `sig8`, `sig9`, `sig10`, `sig11`, `sig12`, `sig13`, `sig14`, `sig15`, `sig16`, `sig17`, `sig18`, `sig19`, `sig20`, `sig21`, `sig22`, `sig23`, `sig24`, `heure`, `anomalie`, `cause`, `corr`, `echeance`, `sig`) VALUES
(30, '2024-04-11', '7.25', 'des pannes au frigo', '7.25', 'des pannes au frigo', '7.25', 'des pannes au frigo', '5.25', 'des pannes au frigo', '5.36', 'des pannes au frigo', '5.69', 'des pannes au frigo', '5.25', 'des pannes au frigo', '5.25', 'des pannes au frigo;', '4.96', 'des pannes au frigo', '6.36', 'des pannes au frigo', '7.25', 'des pannes au frigo&nbsp;', '7.25', 'des pannes au frigo', '7.25', 'des pannes au frigo', '7.25', 'des pannes au frigo', '7.25', 'des pannes au frigo;', '7.25', 'des pannes au frigo', '7.25', 'des pannes au frigo', '7.25', 'des pannes au frigo', '7.25', 'des pannes au frigo&nbsp;', '7.25', 'des pannes au frigo', '8.25', 'des pannes au frigo;', '7.25', 'des pannes au frigo;', '7.25', 'des pannes au frigo&nbsp;', '7.25', 'des pannes au frigo&nbsp;', ';Nawel Aouini', 'Nawel Aouini', ';Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', ';Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', 'Nawel Aouini', ' 8h -----t;17h', '', 'des pannes au frigo', '', '', 'Ayoub baccouche');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(144) NOT NULL,
  `email` varchar(144) NOT NULL,
  `password` varchar(144) NOT NULL,
  `userType` varchar(20) NOT NULL DEFAULT 'Autre',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `userType`) VALUES
(4, 'Mhamdi Salma', 'mhamdisalma3@gmail.com', '$2b$10$u56C24MMQFzJ93W8KiY3ZeREpORQ1VLmTW.6lBYiafiZnxmMNA17y', 'Qaliticien'),
(5, 'Mhamdi Salma', 'mhamdisalma999@gmail.com', '$2b$10$vmUaw1fpqKgzlyPNxwhtz.B0qrwfDI89gybWgiv2os81U08rjNqHO', 'Gestinnaire'),
(8, 'Mhamdi Salma', 'mhamdisalma', '$2b$10$huSirQQIrLKBjsKuAGI8duCjs6qi1k9DHBUJ3zE09aRWAdLCBZ2O2', 'Autre'),
(9, 'Mhamdi Salma', 'mhamdisalma', '$2b$10$93VUHEUsevyd0FSjHwyD4udesxDEWT2hx7vZ0N1FoJHx//QU7H/cq', 'Autre'),
(10, 'Mhamdi Salma', 'mhamdisalma', '$2b$10$cDYe/HyPvtJSbQHsqXoNPeEtFLc8NduygbWEgZZBeof1vnu8TJ2j2', 'Autre'),
(22, 'Mhamdi Salma', 'mhamdisalma123@gmail.com', '$2b$10$yNnFBEu2oLVa25OyYuQQcOpHqtKgwsOtdtBYK0s/pa7t/4cklX1Uu', 'Qaliticien'),
(21, 'Mhamdi Salma', 'mhamdisalma123@gmail.com', '$2b$10$6tkaQDsd50y1rugUneQIXuL5/rA2XAl8tGgDGtmll5mN2.69GJtGi', 'Autre'),
(20, 'Mhamdi Salma', 'mhamdisalma', '$2b$10$SnBOvjgss9Rf7rfTGsOWmuYlnhyzIXnBHVURuW32HlKSPhy07ZtG.', 'Autre'),
(18, 'Mhamdi Salma', 'mhamdisalma123@gmail.com', '$2b$10$Vvv7Rq5pqSS7T49hjl3Yce06hjFOdqKOICUJ.m1nNcmZrx9xJe36G', 'Autre'),
(19, 'Mhamdi Salma', 'mhamdisalma', '$2b$10$EfQnm/Mar97x4ZCXOOmNte3RmCpFNZIT26finNDXXp2r8QTAyMxFy', 'Autre'),
(17, 'Mhamdi Salma', 'mhamdisalma123@gmail.com', '$2b$10$9iMntdqIA.zItwY5xk6SC.w158HwAnanWrvEDiTp1lI8YDSBadhOG', 'Autre');

-- --------------------------------------------------------

--
-- Table structure for table `ventes`
--

DROP TABLE IF EXISTS `ventes`;
CREATE TABLE IF NOT EXISTS `ventes` (
  `vente_id` int(11) NOT NULL AUTO_INCREMENT,
  `date_vente` date DEFAULT NULL,
  `nom` varchar(111) DEFAULT NULL,
  `id` varchar(111) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL,
  `montant_total` varchar(100) DEFAULT NULL,
  `categorie_nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vente_id`),
  KEY `client_id` (`nom`),
  KEY `produit_id` (`id`),
  KEY `FK_ventes_achats` (`categorie_nom`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
