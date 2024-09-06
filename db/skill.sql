-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2024 at 07:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skill`
--

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `id` int(11) NOT NULL,
  `uuid` varchar(20) NOT NULL,
  `youth_name` varchar(255) DEFAULT NULL,
  `youth_phone` varchar(20) DEFAULT NULL,
  `recruiter_id` varchar(50) DEFAULT NULL,
  `recruiter_name` varchar(255) DEFAULT NULL,
  `mpesa_number` varchar(20) DEFAULT NULL,
  `county` varchar(255) DEFAULT NULL,
  `ward` varchar(255) DEFAULT NULL,
  `youth_source` varchar(255) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `education_level` varchar(50) DEFAULT NULL,
  `biz_ownership` varchar(10) DEFAULT NULL,
  `report_date` datetime DEFAULT NULL,
  `eligibility` tinyint(1) DEFAULT NULL,
  `combination` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `similar_pair` varchar(255) DEFAULT NULL,
  `export` varchar(10) DEFAULT NULL,
  `walkins` tinyint(1) DEFAULT NULL,
  `ciff_persona` tinyint(1) DEFAULT NULL,
  `internal_persona` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`id`, `uuid`, `youth_name`, `youth_phone`, `recruiter_id`, `recruiter_name`, `mpesa_number`, `county`, `ward`, `youth_source`, `gender`, `age`, `education_level`, `biz_ownership`, `report_date`, `eligibility`, `combination`, `status`, `similar_pair`, `export`, `walkins`, `ciff_persona`, `internal_persona`) VALUES
(1, 'bc_6_124', 'John Doe', NULL, NULL, NULL, NULL, 'Nairobi', NULL, NULL, 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'bc_6_125', 'Jane Roe', NULL, NULL, NULL, NULL, 'Kitui', NULL, NULL, 'Female', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'bc_6_126', 'Mark Smith', NULL, NULL, NULL, NULL, 'Kisumu', NULL, NULL, 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sheet`
--

CREATE TABLE `sheet` (
  `id` int(11) NOT NULL,
  `ros_name` varchar(50) NOT NULL,
  `youth_id` varchar(50) NOT NULL,
  `confirm_uuid` varchar(50) NOT NULL,
  `youth_name` varchar(100) NOT NULL,
  `youth_gender` varchar(50) NOT NULL,
  `county` varchar(50) NOT NULL,
  `call_purpose` varchar(50) NOT NULL,
  `inserted_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sheet`
--
ALTER TABLE `sheet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sheet`
--
ALTER TABLE `sheet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
