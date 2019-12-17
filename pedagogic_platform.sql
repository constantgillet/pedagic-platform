-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 17 déc. 2019 à 10:40
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
-- Structure de la table `avatars`
--

DROP TABLE IF EXISTS `avatars`;
CREATE TABLE IF NOT EXISTS `avatars` (
  `avatarOwnerId` int(11) NOT NULL,
  `avatarGender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`avatarOwnerId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `avatars`
--

INSERT INTO `avatars` (`avatarOwnerId`, `avatarGender`) VALUES
(28, 'male'),
(26, 'female'),
(25, 'female'),
(29, 'female');

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
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`userId`, `userEmail`, `userName`, `userFirstName`, `userPassword`, `userType`) VALUES
(29, 'constaqzdqzdnt.gillet@hetic.net', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher'),
(28, 'constanssqsst.gillet@hetic.net', 'GILLET', 'test', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher'),
(27, 'rider.consfesfstant@gmail.com', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher'),
(26, 'constaddznt.gillet@hetic.net', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher'),
(25, 'constant.gillet@hetic.net', 'GILLET', 'Constant', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'teacher');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
