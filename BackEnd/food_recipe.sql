-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2023 at 08:56 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food_recipe`
--

-- --------------------------------------------------------

--
-- Table structure for table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `items` text NOT NULL,
  `amount` int(10) NOT NULL,
  `unit` text NOT NULL,
  `recipe_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ingredients`
--

INSERT INTO `ingredients` (`id`, `items`, `amount`, `unit`, `recipe_id`) VALUES
(1, 'Biryani', 120, '100gm', 5),
(2, 'Pulav', 100, '1kg', 4),
(3, 'Chiken', 220, '1kg', 6);

-- --------------------------------------------------------

--
-- Table structure for table `process`
--

CREATE TABLE `process` (
  `id` int(11) NOT NULL,
  `step` text NOT NULL,
  `recipe_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `process`
--

INSERT INTO `process` (`id`, `step`, `recipe_id`) VALUES
(1, ' Add oil to a pot or pressure cooker and heat it.\r\nAdd onions and fry till they turn golden. \r\nNext add chicken and fry till the color slightly changes to pale.\r\nAdd chopped tomatoes, yogurt, red chili powder, corinader leaves and mint.\r\nCook till the mixture turns thick and dry.', 5),
(2, 'Pulao is made through the absorption method, so the amount of water or stock is completely absorbed by the rice and vegetables in the dish.', 4),
(3, 'If you wish to remove the \"drumette\" part of the wing, you can do this step first, but we left it attached to the breast.  This is optional. I\'ve heard it referred to as an \"Airline Cut.\"\r\n\r\nFinding the joints, remove the wing and wing tip from the breast.  Use the tips in your stock.\r\n\r\nCut each breast in half crosswise to create evenly-sized pieces.\r\n\r\nRepeat with other breast.', 6);

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `image_url` varchar(10000) NOT NULL,
  `creator_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`id`, `name`, `description`, `image_url`, `creator_id`) VALUES
(4, 'pulav', 'Pulao is made through the absorption method, so the amount of water or stock is completely ', 'https://w7.pngwing.com/pngs/575/463/png-transparent-fried-rice-with-carrots-and-green-peas-hyderabadi-biryani-fried-rice-raita-vegetable-vegetable-food-recipe-cooking.png', 1),
(5, 'Biryani', 'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat.', 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Biryani_of_Lahore.jpg', 3),
(6, 'Chiken', 'Meat from this bird is also called chicken. ', 'https://www.shutterstock.com/image-photo/fried-hot-chiken-fast-food-260nw-2077123948.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `user_id` text NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `user_id`, `password`) VALUES
(1, 'Mr. Shubham', 'Shubham', 123456),
(2, 'Mr. Tejas', 'Tejas', 123456),
(3, 'ms. Sejal', 'sejal', 123456);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `process`
--
ALTER TABLE `process`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `process`
--
ALTER TABLE `process`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
