-- Progettazione Web 
DROP DATABASE if exists db_progetto; 
CREATE DATABASE db_progetto; 
USE db_progetto; 
-- MySQL dump 10.13  Distrib 5.6.20, for Win32 (x86)
--
-- Host: localhost    Database: db_progetto
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admins` (
  `username_admin` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES ('matteo');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bannati`
--

DROP TABLE IF EXISTS `bannati`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bannati` (
  `username` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bannati`
--

LOCK TABLES `bannati` WRITE;
/*!40000 ALTER TABLE `bannati` DISABLE KEYS */;
INSERT INTO `bannati` VALUES ('gabriele'),('rebecca72');
/*!40000 ALTER TABLE `bannati` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classifica`
--

DROP TABLE IF EXISTS `classifica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classifica` (
  `username` varchar(30) NOT NULL,
  `punteggio` int(11) NOT NULL,
  `data_partita` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classifica`
--

LOCK TABLES `classifica` WRITE;
/*!40000 ALTER TABLE `classifica` DISABLE KEYS */;
INSERT INTO `classifica` VALUES ('elena',5,'13-02-2022 17:05:22'),('paolo',3,'13-02-2022 17:06:07'),('matteo',1,'13-02-2022 17:48:07'),('matteo',0,'13-02-2022 17:48:42'),('matteo',2,'13-02-2022 18:10:48'),('matteo',1,'14-02-2022 10:15:00'),('matteo',2,'14-02-2022 10:17:42'),('matteo',1,'14-02-2022 10:18:47'),('matteo',4,'14-02-2022 10:22:45'),('matteo',10,'14-02-2022 10:38:03'),('matteo',9,'14-02-2022 10:47:54'),('paolo',2,'14-02-2022 10:52:47'),('paolo',3,'14-02-2022 11:03:14'),('paolo',7,'14-02-2022 11:04:47'),('chiara',0,'14-02-2022 11:10:18'),('elena',0,'14-02-2022 11:15:37'),('elena',2,'14-02-2022 11:19:35'),('elena',0,'14-02-2022 11:20:39'),('elena',1,'14-02-2022 11:23:25'),('matteo',0,'14-02-2022 11:30:26'),('matteo',0,'14-02-2022 11:30:31'),('matteo',5,'14-02-2022 15:35:34'),('matteo',0,'14-02-2022 15:37:29'),('matteo',0,'14-02-2022 15:38:32'),('matteo',16,'14-02-2022 15:39:49'),('matteo',0,'14-02-2022 15:40:38'),('matteo',17,'14-02-2022 15:41:58'),('matteo',11,'14-02-2022 15:46:52'),('elena',5,'14-02-2022 15:47:52'),('elena',0,'14-02-2022 15:49:03'),('chiara',0,'14-02-2022 15:50:03'),('elena',13,'14-02-2022 16:11:37'),('elena',12,'14-02-2022 16:15:00'),('matteo',8,'14-02-2022 16:27:19'),('matteo',6,'14-02-2022 16:27:55'),('paolo',10,'14-02-2022 16:34:10'),('paolo',11,'14-02-2022 16:35:50'),('paolo',0,'14-02-2022 16:36:13'),('paolo',9,'14-02-2022 16:37:05'),('fabio',6,'15-02-2022 17:05:25'),('ninuzzo',8,'16-02-2022 15:20:39'),('ninuzzo',13,'16-02-2022 15:21:51'),('matteo',46,'16-02-2022 18:21:07'),('matteo',2,'16-02-2022 19:25:06'),('matteo',11,'17-02-2022 12:53:18'),('matteo',0,'17-02-2022 12:53:47'),('matteo',2,'17-02-2022 12:54:01'),('matteo',2,'17-02-2022 12:55:56'),('matteo',2,'17-02-2022 12:56:24'),('matteo',2,'17-02-2022 13:01:18'),('matteo',4,'17-02-2022 13:01:41'),('matteo',0,'17-02-2022 13:01:59'),('elena',0,'17-02-2022 17:36:07'),('matteo',10,'18-02-2022 10:47:00'),('elena',11,'18-02-2022 10:49:03'),('elena',3,'18-02-2022 12:08:48'),('matteo',10,'18-02-2022 12:33:31'),('elena',5,'18-02-2022 16:44:45'),('chiara',13,'18-02-2022 17:54:06'),('chiara',8,'18-02-2022 18:50:24'),('matteo',0,'19-02-2022 11:48:17'),('matteo',18,'19-02-2022 12:23:42'),('matteo',6,'19-02-2022 12:44:18'),('matteo',25,'21-02-2022 15:19:46'),('matteo',0,'21-02-2022 15:50:28'),('matteo',0,'21-02-2022 15:50:32'),('matteo',0,'21-02-2022 15:50:35'),('matteo',0,'21-02-2022 15:50:41'),('matteo',0,'21-02-2022 15:51:05'),('matteo',23,'21-02-2022 15:53:53'),('matteo',13,'21-02-2022 15:57:15'),('matteo',22,'21-02-2022 16:06:08'),('matteo',8,'21-02-2022 16:32:56'),('matteo',10,'21-02-2022 16:38:51'),('matteo',1,'21-02-2022 16:39:12'),('matteo',10,'21-02-2022 16:42:58'),('matteo',10,'21-02-2022 16:44:37'),('elena',10,'21-02-2022 16:48:20'),('chiara',15,'21-02-2022 17:00:58'),('chiara',12,'21-02-2022 17:06:59'),('chiara',20,'21-02-2022 17:10:15'),('chiara',10,'21-02-2022 17:13:35'),('chiara',18,'21-02-2022 17:24:42'),('matteo',6,'21-02-2022 17:55:18'),('matteo',19,'21-02-2022 17:59:52'),('elena',35,'21-02-2022 18:30:11'),('elena',24,'21-02-2022 18:36:41'),('elena',17,'21-02-2022 18:58:36'),('elena',0,'21-02-2022 19:00:24'),('elena',16,'21-02-2022 19:04:28'),('elena',6,'21-02-2022 19:06:18'),('elena',39,'22-02-2022 10:24:53'),('matteo',0,'22-02-2022 12:32:13'),('matteo',0,'22-02-2022 12:32:20'),('matteo',0,'22-02-2022 12:32:32'),('matteo',0,'22-02-2022 12:38:31'),('matteo',0,'22-02-2022 12:38:37'),('matteo',0,'22-02-2022 12:38:41'),('matteo',0,'22-02-2022 12:40:40'),('matteo',25,'22-02-2022 12:42:42'),('matteo',28,'22-02-2022 15:38:19'),('matteo',11,'22-02-2022 15:49:31'),('matteo',12,'22-02-2022 15:51:03'),('matteo',14,'22-02-2022 15:52:42'),('elena',1,'22-02-2022 15:53:04'),('elena',8,'22-02-2022 15:53:48'),('elena',5,'22-02-2022 15:56:28'),('elena',5,'22-02-2022 16:08:05'),('elena',5,'22-02-2022 16:11:02'),('elena',2,'22-02-2022 16:11:56'),('elena',14,'22-02-2022 16:13:45'),('chiara',5,'22-02-2022 16:14:32'),('chiara',5,'22-02-2022 16:22:42'),('chiara',5,'22-02-2022 16:23:57'),('chiara',5,'22-02-2022 16:26:17'),('chiara',11,'22-02-2022 16:29:12'),('chiara',8,'22-02-2022 16:31:32'),('chiara',10,'22-02-2022 16:32:44'),('chiara',5,'22-02-2022 16:34:03'),('chiara',3,'22-02-2022 16:34:37'),('matteo',2,'22-02-2022 16:37:16'),('matteo',2,'22-02-2022 17:58:24'),('matteo',11,'23-02-2022 10:30:10'),('elena',2,'23-02-2022 10:33:32'),('elena',11,'23-02-2022 11:27:54'),('elena',13,'23-02-2022 11:31:10'),('elena',0,'23-02-2022 11:31:20'),('elena',20,'23-02-2022 11:38:38'),('elena',10,'23-02-2022 12:14:08'),('elena',5,'23-02-2022 12:15:08'),('elena',17,'23-02-2022 12:16:25'),('elena',11,'23-02-2022 12:18:08'),('elena',11,'23-02-2022 14:39:57'),('elena',6,'23-02-2022 16:39:49'),('matteo',5,'23-02-2022 16:45:36'),('elena',14,'23-02-2022 22:21:43'),('elena',6,'23-02-2022 22:29:12'),('elena',14,'23-02-2022 22:42:09'),('elena',5,'23-02-2022 22:45:15'),('elena',6,'23-02-2022 22:47:28'),('elena',6,'23-02-2022 22:48:06'),('elena',5,'23-02-2022 22:48:47'),('elena',5,'23-02-2022 22:50:29'),('elena',10,'23-02-2022 22:51:16'),('elena',7,'23-02-2022 22:51:50'),('elena',3,'23-02-2022 22:52:57'),('elena',9,'23-02-2022 22:58:43'),('elena',6,'23-02-2022 23:01:30'),('elena',6,'23-02-2022 23:02:03'),('elena',6,'23-02-2022 23:04:54'),('elena',4,'23-02-2022 23:05:14'),('elena',11,'24-02-2022 11:24:37'),('elena',5,'24-02-2022 11:26:07'),('elena',6,'24-02-2022 11:28:30'),('elena',5,'24-02-2022 11:29:26'),('chiara',4,'24-02-2022 11:36:27'),('chiara',10,'24-02-2022 11:37:21'),('chiara',9,'24-02-2022 11:38:18'),('chiara',11,'24-02-2022 11:39:24'),('chiara',4,'24-02-2022 11:52:26'),('chiara',5,'24-02-2022 11:53:12'),('chiara',4,'24-02-2022 11:53:37'),('chiara',4,'24-02-2022 11:56:00'),('chiara',8,'24-02-2022 11:56:47'),('chiara',10,'24-02-2022 11:58:02'),('chiara',4,'24-02-2022 12:04:08'),('chiara',9,'24-02-2022 12:06:00'),('chiara',7,'24-02-2022 12:16:37'),('chiara',15,'24-02-2022 12:22:49'),('elena',18,'24-02-2022 12:39:44'),('matteo',8,'25-02-2022 10:39:39'),('matteo',8,'25-02-2022 10:41:03'),('matteo',3,'25-02-2022 10:45:54'),('matteo',4,'25-02-2022 10:50:56'),('matteo',5,'25-02-2022 10:51:24'),('matteo',8,'25-02-2022 10:52:03'),('matteo',8,'25-02-2022 10:52:47'),('chiara',6,'25-02-2022 11:04:28'),('chiara',10,'25-02-2022 11:09:03'),('chiara',10,'25-02-2022 11:25:06'),('chiara',4,'25-02-2022 11:25:42'),('chiara',3,'25-02-2022 11:34:32'),('chiara',8,'25-02-2022 11:35:25'),('elena',13,'25-02-2022 11:53:39'),('elena',0,'25-02-2022 12:01:11'),('elena',3,'25-02-2022 12:01:37'),('elena',7,'25-02-2022 12:02:16'),('elena',8,'25-02-2022 12:05:36'),('elena',3,'25-02-2022 12:10:53'),('elena',3,'25-02-2022 12:40:42'),('matteo',9,'01-03-2022 10:33:22'),('matteo',10,'01-03-2022 10:38:46'),('matteo',0,'01-03-2022 10:41:12'),('matteo',12,'01-03-2022 10:46:18'),('matteo',3,'01-03-2022 10:46:52'),('matteo',10,'01-03-2022 10:48:04'),('matteo',11,'01-03-2022 10:49:21'),('matteo',13,'01-03-2022 10:53:54'),('matteo',14,'01-03-2022 10:55:31'),('matteo',16,'01-03-2022 11:00:10'),('matteo',12,'01-03-2022 11:01:09'),('matteo',10,'01-03-2022 11:03:37'),('matteo',11,'01-03-2022 11:11:41'),('matteo',20,'01-03-2022 11:16:07'),('matteo',5,'01-03-2022 11:17:51'),('matteo',10,'01-03-2022 11:18:48'),('matteo',17,'01-03-2022 11:20:28'),('matteo',11,'01-03-2022 11:21:33'),('matteo',14,'01-03-2022 12:09:44'),('matteo',12,'01-03-2022 12:10:45'),('elena',17,'01-03-2022 12:18:45'),('matteo',11,'01-03-2022 12:21:48'),('matteo',13,'01-03-2022 12:51:51'),('matteo',18,'01-03-2022 12:54:14');
/*!40000 ALTER TABLE `classifica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utenti`
--

DROP TABLE IF EXISTS `utenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utenti` (
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti`
--

LOCK TABLES `utenti` WRITE;
/*!40000 ALTER TABLE `utenti` DISABLE KEYS */;
INSERT INTO `utenti` VALUES ('matteo','$2y$10$3iXXHmw6WP/bRx3gnlePLu7pdLvlUloCWXXYrZ6quEj1gyYYXsbMy'),('elena','$2y$10$m7pChA3RhCEZBdx0uewENu8nl9KRtNaLe3BlwmxwC.tngXipulgDS'),('chiara','$2y$10$wPmnkpW8eIzpmG9VmvtM7OEhou75lS7lmL/g9i.111xeTrdHvETJq'),('fabio','$2y$10$WGBcJV7c9XRROQMVpZt/z.jxQmDAueaeMhLOnMOrkNwWW.5qe4vny'),('paolo','$2y$10$siBAcFoNxb9ZTWEQ.xPWSejB/zwOQ/RIi7PD.oJpFBgWyVFjfdsCi'),('gabriele','$2y$10$NFgbTPdEc2vH2czW8dNDA.hH2voNyL4b0dYZF7S/Tg8jXy5nNK5JC'),('bea12','$2y$10$DcPf6RQBL.d1vzFWUWPjbedEfqt4l3jbv4H4pEL2VJKrVOODAVMaq'),('rebecca72','$2y$10$wkWZU6s2Gzuchin4GuOM8uybEJM26Jsv7iGI0KrlMAG2Y79YX0cWa');
/*!40000 ALTER TABLE `utenti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-01 15:30:37
