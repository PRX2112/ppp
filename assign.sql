-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2022 at 10:21 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assign`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(2) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'prx@zxc.com', '123'),
(2, 'chirag@mnb.com', '321');

-- --------------------------------------------------------

--
-- Table structure for table `compalloc`
--

CREATE TABLE `compalloc` (
  `caid` int(11) NOT NULL,
  `cid` varchar(3) NOT NULL,
  `comp_id` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `compalloc`
--

INSERT INTO `compalloc` (`caid`, `cid`, `comp_id`, `name`) VALUES
(3, 'c09', 'cmp05', 's02');

-- --------------------------------------------------------

--
-- Table structure for table `complain`
--

CREATE TABLE `complain` (
  `cid` varchar(3) NOT NULL,
  `comp_id` varchar(10) NOT NULL,
  `prod_id` varchar(5) NOT NULL,
  `comp_desc` varchar(200) NOT NULL,
  `comp_status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `complain`
--

INSERT INTO `complain` (`cid`, `comp_id`, `prod_id`, `comp_desc`, `comp_status`) VALUES
('c09', 'cmp01', 'p01', 'yfgdshbxcniegfshdb', 'new'),
('c09', 'cmp05', 'p02', 'elsdfnkz', 'new'),
('c21', 'cmp5', 'p01', 'dbaskjba', 'new');

-- --------------------------------------------------------

--
-- Table structure for table `cust_reg`
--

CREATE TABLE `cust_reg` (
  `cid` varchar(3) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `age` int(11) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `photo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cust_reg`
--

INSERT INTO `cust_reg` (`cid`, `name`, `password`, `age`, `contact`, `photo`) VALUES
('c01', 'aditya', '1234', 24, '9825898258', '1234.jpg'),
('c02', 'Princee', '456', 22, '9865329865', '934892e715ed1f8c95c91c7bf6d3bc8c201.png'),
('c03', 'Pratik', '123', 23, '985285245', '9dd4e461268c8034f5c8564e155c67a6146.jpeg'),
('c04', 'bnm', '123', 23, '124578963', '42ae60dc622baac948a280fdbc33ae53253.png'),
('c09', 'Pratik Par', '123', 23, '4548745186', '9dd4e461268c8034f5c8564e155c67a6331.jpeg'),
('c13', 'manoj', '123', 52, '457812124', '5076a2a5f8c8cef93d9739dd3c166d8e281.png'),
('c21', 'jewbs', '46sd', 123, '5412168', '9dd4e461268c8034f5c8564e155c67a6401.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `prod_id` varchar(5) NOT NULL,
  `prod_name` varchar(100) NOT NULL,
  `prod_desc` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`prod_id`, `prod_name`, `prod_desc`) VALUES
('p01', 'Mi Band 2', 'lsldnfowilenfso'),
('p02', 'Mi band 4', 'sdiyxvw;sdhf');

-- --------------------------------------------------------

--
-- Table structure for table `s_reg`
--

CREATE TABLE `s_reg` (
  `sid` varchar(3) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `age` int(11) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `photo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `s_reg`
--

INSERT INTO `s_reg` (`sid`, `name`, `password`, `age`, `contact`, `photo`) VALUES
('s02', 'Princee', '456', 22, '9865329865', '934892e715ed1f8c95c91c7bf6d3bc8c201.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `compalloc`
--
ALTER TABLE `compalloc`
  ADD PRIMARY KEY (`caid`),
  ADD UNIQUE KEY `comp_id` (`comp_id`),
  ADD KEY `service_provider` (`name`),
  ADD KEY `cid` (`cid`,`comp_id`);

--
-- Indexes for table `complain`
--
ALTER TABLE `complain`
  ADD PRIMARY KEY (`comp_id`),
  ADD KEY `cid` (`cid`,`prod_id`),
  ADD KEY `Product` (`prod_id`);

--
-- Indexes for table `cust_reg`
--
ALTER TABLE `cust_reg`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prod_id`),
  ADD UNIQUE KEY `prod_name` (`prod_name`);

--
-- Indexes for table `s_reg`
--
ALTER TABLE `s_reg`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `compalloc`
--
ALTER TABLE `compalloc`
  MODIFY `caid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `compalloc`
--
ALTER TABLE `compalloc`
  ADD CONSTRAINT `complain` FOREIGN KEY (`comp_id`) REFERENCES `complain` (`comp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service_provider` FOREIGN KEY (`name`) REFERENCES `s_reg` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `complain`
--
ALTER TABLE `complain`
  ADD CONSTRAINT `Customer` FOREIGN KEY (`cid`) REFERENCES `cust_reg` (`cid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Product` FOREIGN KEY (`prod_id`) REFERENCES `product` (`prod_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
