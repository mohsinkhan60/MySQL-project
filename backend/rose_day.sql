-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2025 at 12:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rose_day`
--

-- --------------------------------------------------------

--
-- Table structure for table `rose`
--

CREATE TABLE `rose` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(455) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rose`
--

INSERT INTO `rose` (`id`, `title`, `description`, `image`, `created_at`) VALUES
(6, 'Mohsin khan', 'Explore khan', 'https://theflowerstudio.pk/wp-content/uploads/2023/01/Why-opt-for-flower-delivery-on-Valentines-Day.jpg', '0000-00-00'),
(7, 'Mohsin khan', 'Beauty of nature', 'https://img.freepik.com/premium-photo/bouquet-roses-black-background-with-reflection_646576-375.jpg', '0000-00-00'),
(10, 'Mohsin khan', 'Mohsin and hers', 'https://img.freepik.com/premium-photo/wallpaper-red-white-rose-flower_961875-47806.jpg', '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rose`
--
ALTER TABLE `rose`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rose`
--
ALTER TABLE `rose`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
