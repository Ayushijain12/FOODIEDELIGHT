-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2024 at 04:58 PM
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
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `opening_hours` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `street_address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL
) ;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `description`, `location`, `phone`, `email`, `website`, `opening_hours`, `created_at`, `updated_at`, `street_address`, `city`, `state`, `postal_code`) VALUES
(10, 'The Cozy Corner23', 'A quaint spot for brunch.', 'Downtown', '9537116313', 'ayushipj2209@gmail.com', 'https://www.cozycorner.com', NULL, '2024-08-07 16:15:20', '2024-08-08 14:37:16', 'Ahemdabad', 'Nawabganj', 'Uttar Pradesh', NULL),
(16, 'Taco Fiesta', 'Delicious tacos and Mexican fare.', 'Suburb', '+1234567896', 'info@tacofiesta.com', 'https://www.tacofiesta.com', 'Tue-Sun 11am-9pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '135 Maple Ave', 'Springfield', 'IL', '62707'),
(17, 'Seafood Shack323', 'Fresh seafood with a view.', 'Waterfront', '+1234567897', 'contact@seafoodshack.com', 'https://www.seafoodshack.com', NULL, '2024-08-07 16:15:20', '2024-08-08 14:37:50', '246 Oak St', 'Springfield', 'IL', NULL),
(18, 'BBQ Grill House', 'Smoky BBQ and sides.', 'Downtown', '+1234567898', 'grill@bbqhouse.com', 'https://www.bbqgrillhouse.com', 'Mon-Sun 11am-11pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '357 Pine St', 'Springfield', 'IL', '62709'),
(19, 'The Deli', 'Sandwiches and light bites.', 'Midtown', '+1234567899', 'deli@the-deli.com', 'https://www.thedeli.com', 'Mon-Fri 7am-4pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '468 Birch St', 'Springfield', 'IL', '62710'),
(20, 'Wine & Dine', 'Exquisite wine and gourmet dishes.', 'Downtown', '+1234567800', 'info@wineanddine.com', 'https://www.wineanddine.com', 'Wed-Sun 5pm-11pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '579 Cedar Ave', 'Springfield', 'IL', '62711'),
(21, 'Bistro Belle', 'Chic bistro with international flavors.', 'Midtown', '+1234567801', 'contact@bistrobelle.com', 'https://www.bistrobelle.com', 'Tue-Sun 12pm-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '680 Elm Ave', 'Springfield', 'IL', '62712'),
(22, 'Family Feast', 'Homestyle meals for everyone.', 'Suburb', '+1234567802', 'info@familyfeast.com', 'https://www.familyfeast.com', 'Mon-Sat 10am-8pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '791 Maple Dr', 'Springfield', 'IL', '62713'),
(23, 'Crepe Corner', 'Sweet and savory crepes.', 'Downtown', '+1234567803', 'hello@crepecorner.com', 'https://www.crepecorner.com', 'Mon-Sun 9am-9pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '902 Oak Ln', 'Springfield', 'IL', '62714'),
(24, 'The Grill House', 'Grilled specialties and more.', 'Waterfront', '+1234567804', 'contact@thegrillhouse.com', 'https://www.thegrillhouse.com', 'Mon-Sun 11am-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '103 Pine St', 'Springfield', 'IL', '62715'),
(25, 'Garden Café', 'Healthy salads and fresh juices.', 'Suburb', '+1234567805', 'info@gardencafe.com', 'https://www.gardencafe.com', 'Tue-Sun 10am-6pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '214 Birch Ave', 'Springfield', 'IL', '62716'),
(26, 'Ramen House', 'Authentic Japanese ramen.', 'Downtown', '+1234567806', 'contact@ramenhouse.com', 'https://www.ramenhouse.com', 'Mon-Sun 11am-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '325 Cedar Dr', 'Springfield', 'IL', '62717'),
(27, 'Indian Delight', 'Spicy and flavorful Indian cuisine.', 'Midtown', '+1234567807', 'info@indiandelight.com', 'https://www.indiandelight.com', 'Mon-Sun 11am-9pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '436 Elm St', 'Springfield', 'IL', '62718'),
(28, 'Café Mocha', 'Coffee and pastries.', 'Downtown', '+1234567808', 'hello@cafemocha.com', 'https://www.cafemocha.com', 'Mon-Sun 7am-7pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '547 Maple St', 'Springfield', 'IL', '62719'),
(29, 'Steakhouse 101', 'Premium steaks and sides.', 'Waterfront', '+1234567809', 'contact@steakhouse101.com', 'https://www.steakhouse101.com', 'Tue-Sun 12pm-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '658 Oak Ave', 'Springfield', 'IL', '62720'),
(30, 'Pancake Place', 'Delicious pancakes and breakfast items.', 'Suburb', '+1234567810', 'info@pancakeplace.com', 'https://www.pancakeplace.com', 'Mon-Sun 8am-3pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '769 Pine Ln', 'Springfield', 'IL', '62721'),
(31, 'Burger Barn', 'Classic burgers and shakes.', 'Downtown', '+1234567811', 'contact@burgerbarn.com', 'https://www.burgerbarn.com', 'Mon-Sun 10am-11pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '880 Birch Rd', 'Springfield', 'IL', '62722'),
(32, 'Mamma Mia', 'Authentic Italian pizza and pasta.', 'Midtown', '+1234567812', 'info@mammamia.com', 'https://www.mammamia.com', 'Tue-Sun 11am-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '991 Cedar St', 'Springfield', 'IL', '62723'),
(33, 'Tandoori Nights', 'Indian tandoori specialties.', 'Downtown', '+1234567813', 'contact@tandoorinights.com', 'https://www.tandoorinights.com', 'Mon-Sun 12pm-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '112 Elm St', 'Springfield', 'IL', '62724'),
(34, 'Ocean Grill', 'Seafood and grilled dishes.', 'Waterfront', '+1234567814', 'info@oceangrill.com', 'https://www.oceangrill.com', 'Mon-Sun 11am-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '223 Maple Ave', 'Springfield', 'IL', '62725'),
(35, 'Doughnut Delight', 'Fresh doughnuts and coffee.', 'Suburb', '+1234567815', 'contact@doughnutdelight.com', 'https://www.doughnutdelight.com', 'Tue-Sun 6am-2pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '334 Pine St', 'Springfield', 'IL', '62726'),
(36, 'Fusion Bistro', 'Fusion cuisine with a creative twist.', 'Midtown', '+1234567816', 'info@fusionbistro.com', 'https://www.fusionbistro.com', 'Wed-Sun 5pm-11pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '445 Oak Dr', 'Springfield', 'IL', '62727'),
(37, 'Tapas Lounge', 'Spanish tapas and wine.', 'Downtown', '+1234567817', 'contact@tapaslounge.com', 'https://www.tapaslounge.com', 'Mon-Sun 4pm-12am', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '556 Birch Ave', 'Springfield', 'IL', '62728'),
(38, 'Riverside Eatery', 'Casual dining by the river.', 'Waterfront', '+1234567818', 'info@riversideeatery.com', 'https://www.riversideeatery.com', 'Mon-Sun 11am-9pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '667 Cedar Ln', 'Springfield', 'IL', '62729'),
(39, 'Gatsby’s Grill', 'Steak and seafood in a stylish setting.', 'Midtown', '+1234567819', 'contact@gatsbysgrill.com', 'https://www.gatsbysgrill.com', 'Tue-Sun 5pm-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '778 Elm Dr', 'Springfield', 'IL', '62730'),
(40, 'Noodle House', 'Delicious noodles and Asian dishes.', 'Downtown', '+1234567820', 'info@noodlehouse.com', 'https://www.noodlehouse.com', 'Mon-Sun 11am-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '889 Maple Rd', 'Springfield', 'IL', '62731'),
(41, 'The Bistro', 'Classic bistro fare with a modern twist.', 'Suburb', '+1234567821', 'contact@thebistro.com', 'https://www.thebistro.com', 'Mon-Sat 11am-9pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '990 Pine Ave', 'Springfield', 'IL', '62732'),
(42, 'Ramen King', 'Authentic ramen and Japanese snacks.', 'Waterfront', '+1234567822', 'info@ramenking.com', 'https://www.ramenking.com', 'Tue-Sun 12pm-10pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '101 Cedar St', 'Springfield', 'IL', '62733'),
(43, 'The Modern Café', 'Contemporary café with fresh brews.', 'Midtown', '+1234567823', 'contact@moderncafe.com', 'https://www.moderncafe.com', 'Mon-Sun 8am-6pm', '2024-08-07 16:15:20', '2024-08-07 16:15:20', '212 Birch Rd', 'Springfield', 'IL', '62734'),
(44, 'The Ayushi ', 'okauy!!!!', '', '9384894939', 'ayushipj2209@gmail.com', 'ayushi.com', NULL, '2024-08-07 16:30:22', '2024-08-07 16:30:22', 'Ahemdabadwedciojweodijweoijw', 'Nawabganj', 'Uttar Pradesh', NULL),
(45, 'The Fooodd', 'kwejdnwedn', '', '8949394939', 'ayushipj2209@gmail.com', '', NULL, '2024-08-07 16:37:27', '2024-08-07 16:37:27', 'Ahemdabad', 'Nawabganj', 'Uttar Pradesh', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password_hash`, `email`, `created_at`) VALUES
(3, 'Ayushi', '$2a$10$uHZjsXXtlPyqI/NvapgDw.YT1FdSGsDeKI43GEMu.y9VanKFlCLBS', 'admin@example.com', '2024-08-07 07:44:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
