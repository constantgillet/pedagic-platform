-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 16 déc. 2019 à 12:15
-- Version du serveur :  5.7.21
-- Version de PHP :  5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pedagogic_platform`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userEmail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userFirstName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userPassword` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`userId`, `userEmail`, `userName`, `userFirstName`, `userPassword`, `userType`) VALUES
(5, 'constant.gillet@hetic.net', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'student'),
(6, 'constant.gillet@hetic.nit', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'student'),
(7, 'rider.constant@gmail.com', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher'),
(8, 'constah.gillet@hetic.net', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher'),
(9, 'constkjvshsejfhant.gillet@hetic.net', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher'),
(10, 'constkjvshsejxqhant.gillet@hetic.net', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
