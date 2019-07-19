-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2019 at 12:25 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookmarket`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `judulBuku` varchar(255) DEFAULT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `pengarang` varchar(255) DEFAULT NULL,
  `penerbit` varchar(255) DEFAULT NULL,
  `tahunTerbit` int(11) DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `hargaJual` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `rak` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `judulBuku`, `kategori`, `pengarang`, `penerbit`, `tahunTerbit`, `isbn`, `hargaJual`, `stock`, `rak`, `createdAt`, `updatedAt`) VALUES
(1, 'Algoritma Sebagai Pondasi', 'IT', 'Bagas Nur Alim', 'PUSTAKA AT-TIRMIDZI', 2019, '1234567890', 250000, 5, 'RK-01', '2019-07-14 05:02:26', '2019-07-14 05:02:26'),
(2, 'AKRAB DENGAN Whitebox & Blackbox Testing', 'IT', 'Bagas Nur Alim', 'PUSTAKA AT-TIRMIDZI', 2019, '1234599890', 200000, 3, 'RK-01', '2019-07-14 09:43:13', '2019-07-14 16:50:20'),
(3, 'DILAN 1990', 'Novel', 'Bagas Nur Alim', 'PUSTAKA KITA', 2017, '1234599222', 100000, 2, 'RK-03', '2019-07-14 16:34:06', '2019-07-14 16:34:06'),
(4, 'DILAN 1991', 'Novel', 'Bagas Nur Alim', 'PUSTAKA KITA', 2017, '1234599222', 100000, 2, 'RK-03', '2019-07-15 11:36:47', '2019-07-15 11:36:47'),
(5, 'Efek rumah kaca', 'Novel', 'Bagas Nur Alim', 'PUSTAKA KITA', 2017, '1234599232', 100000, 2, 'RK-03', '2019-07-15 16:34:21', '2019-07-15 16:34:21'),
(6, 'Efek rumah kaca nako 1', 'Novel', 'Bagas Nur Alim', 'PUSTAKA KITA', 2017, '1234599232', 100000, 2, 'RK-03', '2019-07-19 06:07:01', '2019-07-19 06:07:01'),
(8, 'Efek rumah kaca nako 1', 'Novel', 'Bagas Nur Alim', 'PUSTAKA KITA', 2017, '1234599232', 100000, 2, 'RK-03', '2019-07-19 07:35:06', '2019-07-19 07:35:06'),
(9, 'Efek rumah pohon', 'Novel', 'Bagas Nur Alim', 'PUSTAKA KITA', 2017, '1234599232', 100000, 2, 'RK-03', '2019-07-19 08:42:59', '2019-07-19 08:42:59'),
(10, 'Efek rumah rusun 3', 'Novel', 'Bagas Nur Alim', 'PUSTAKA KITA', 2017, '1234599232', 100000, 2, 'RK-03', '2019-07-19 09:20:58', '2019-07-19 09:58:15');

-- --------------------------------------------------------

--
-- Table structure for table `kategoris`
--

CREATE TABLE `kategoris` (
  `id` int(11) NOT NULL,
  `namaKategori` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategoris`
--

INSERT INTO `kategoris` (`id`, `namaKategori`, `createdAt`, `updatedAt`) VALUES
(1, 'IT', '2019-07-14 09:47:20', '2019-07-14 09:47:20'),
(2, 'Novel', '2019-07-14 09:53:54', '2019-07-14 09:53:54'),
(3, 'Education', '2019-07-14 17:13:05', '2019-07-14 17:13:05'),
(4, 'Bussiness', '2019-07-15 15:31:43', '2019-07-15 15:31:43');

-- --------------------------------------------------------

--
-- Table structure for table `penerbits`
--

CREATE TABLE `penerbits` (
  `id` int(11) NOT NULL,
  `namaPenerbit` varchar(255) DEFAULT NULL,
  `emailPenerbit` varchar(255) DEFAULT NULL,
  `noTelepon` int(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `penerbits`
--

INSERT INTO `penerbits` (`id`, `namaPenerbit`, `emailPenerbit`, `noTelepon`, `createdAt`, `updatedAt`) VALUES
(1, 'RebornAbass Corporation', 'bagasnuralim@gmail.com', 896605928, '2019-07-14 09:51:39', '2019-07-14 09:51:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `roles`, `createdAt`, `updatedAt`) VALUES
(2, 'bagas', 'bagas@gmail.com', '$2a$10$TvIMnqJ.Q/vex7xRHPMvIOhYBpXo7.rMcYQh.C0LOZc4pjaciD.BG', 'admin', '2019-07-16 02:45:38', '2019-07-16 02:45:38'),
(3, 'abas', 'abas@gmail.com', '$2a$10$U9ELImJuCAOVgtA7tnB/ie4486kWWMMkAsBW6784gpWGXffHULntu', 'admin', '2019-07-19 09:55:02', '2019-07-19 09:55:02'),
(4, 'ayu', 'ayu@gmail.com', '$2a$10$1z2SoXR9r1OvBwwelp8Wle9izogbWkwksfU.euOzi6deznPMIko42', 'user', '2019-07-19 09:55:21', '2019-07-19 09:55:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kategoris`
--
ALTER TABLE `kategoris`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `penerbits`
--
ALTER TABLE `penerbits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `kategoris`
--
ALTER TABLE `kategoris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `penerbits`
--
ALTER TABLE `penerbits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
