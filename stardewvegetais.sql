CREATE DATABASE  IF NOT EXISTS `stardew_vegetais` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `stardew_vegetais`;
-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: stardew_vegetais
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vegetais`
--

DROP TABLE IF EXISTS `vegetais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vegetais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `estacao` enum('Primavera','Verão','Outono','Inverno') NOT NULL,
  `dias_crescimento` int NOT NULL,
  `preco_semente` int NOT NULL,
  `preco_venda` int NOT NULL,
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vegetais`
--

LOCK TABLES `vegetais` WRITE;
/*!40000 ALTER TABLE `vegetais` DISABLE KEYS */;
INSERT INTO `vegetais` VALUES (1,'teste','Primavera',8,100,120,'2026-04-08 01:00:01'),(2,'Couve-flor','Primavera',12,80,175,'2026-04-08 01:00:01'),(3,'Batata','Primavera',6,50,80,'2026-04-08 01:00:01'),(5,'Mirtilo','Verão',13,80,50,'2026-04-08 01:00:01'),(6,'Melão','Verão',12,80,250,'2026-04-08 01:00:01'),(7,'Tomate','Verão',11,50,60,'2026-04-08 01:00:01'),(8,'Girassol','Verão',8,200,80,'2026-04-08 01:00:01'),(9,'Abóbora','Outono',13,100,320,'2026-04-08 01:00:01'),(10,'Uva','Outono',10,60,80,'2026-04-08 01:00:01'),(11,'Beterraba','Outono',6,20,100,'2026-04-08 01:00:01'),(12,'Cranberry','Outono',7,240,75,'2026-04-08 01:00:01'),(13,'TESTEEE','Outono',8000,1000,-200,'2026-04-09 17:19:17');
/*!40000 ALTER TABLE `vegetais` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09 16:40:38
