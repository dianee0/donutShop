-- Seed Categories
INSERT OR REPLACE INTO MenuCategory (id, name, "order") VALUES 
('donuts', 'Donuts', 1),
('specials', 'Specials', 2),
('croissants', 'Croissants', 3),
('bagels', 'Bagels', 4),
('drinks', 'Drinks', 5);

-- Seed Menu Items (Donuts)
INSERT OR REPLACE INTO MenuItem (id, name, description, price, imageUrl, flavors, isActive, categoryId) VALUES 
('raised-donut', 'Raised Donut', 'Light and airy raised donut.', 165, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/raised-glaze.webp', 'Glaze, Maple, Sugar, Crumb', 1, 'donuts'),
('vanilla-cake-donut', 'Vanilla Cake Donut', 'Soft vanilla cake donut.', 165, NULL, 'Vanilla Frosting, Strawberry Frosting, Chocolate Frosting, Maple Frosting', 1, 'donuts'),
('chocolate-cake-donut', 'Chocolate Cake Donut', 'Rich chocolate cake donut with chocolate frosting.', 165, NULL, NULL, 1, 'donuts'),
('raised-bar', 'Raised Bar', 'Classic bar glazed with chocolate or maple.', 200, NULL, 'Chocolate, Maple', 1, 'donuts'),
('custard-filled-bar', 'Custard Filled Bar', 'Glazed bar filled with smooth custard.', 275, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/filled-bars.webp', 'Chocolate, Maple', 1, 'donuts'),
('old-fashioned', 'Old Fashioned', 'Traditional cake donut with a crispy exterior.', 165, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/old-fashion-glaze.webp', 'Plain, Glazed, Blueberry, Maple, Chocolate', 1, 'donuts'),
('buttermilk-bar', 'Buttermilk Bar', 'Classic buttermilk bar.', 200, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/buttermilk-glaze.webp', 'Plain, Glazed, Maple, Chocolate', 1, 'donuts'),
('filled-donut', 'Filled Round Donut', 'Soft donut with delicious filling.', 250, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/filled-rounds.webp', 'Jelly, Custard, Lemon', 1, 'donuts'),
('twist', 'Twist', 'Twisted donut with your choice of topping.', 200, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/twists.webp', 'Maple, Chocolate, Sugar, Glaze', 1, 'donuts');

-- Seed Menu Items (Specials)
INSERT OR REPLACE INTO MenuItem (id, name, description, price, imageUrl, flavors, isActive, categoryId) VALUES 
('apple-fritter', 'Apple Fritter', 'Large fritter loaded with apples and cinnamon, glazed to perfection.', 275, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/apple-fritt.webp', NULL, 1, 'specials'),
('cinnamon-roll', 'Cinnamon Roll', 'Warm, gooey cinnamon roll, glazed to perfection.', 275, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/cinn-roll.webp', NULL, 1, 'specials'),
('bear-claw', 'Bear Claw', 'A claw shaped pastry filled with apples and cinnamon, glazed to perfection.', 275, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/bear-claw.webp', NULL, 1, 'specials');

-- Seed Menu Items (Croissants)
INSERT OR REPLACE INTO MenuItem (id, name, description, price, imageUrl, flavors, isActive, categoryId) VALUES 
('plain-croissant', 'Plain Croissant', 'Flaky, buttery, and golden brown.', 285, NULL, NULL, 1, 'croissants'),
('filled-croissant', 'Filled Croissant', 'Flaky croissant with sweet fruit and cream filling.', 300, NULL, 'Strawberry & Cream, Pineapple & Cream, Blueberry & Cream', 1, 'croissants'),
('ham-cheese-croissant', 'Ham & Cheese Croissant', 'Savory croissant with ham and swiss cheese.', 530, NULL, NULL, 1, 'croissants'),
('egg-bacon-croissant', 'Egg & Bacon Croissant', 'Croissant with egg and bacon.', 650, NULL, NULL, 1, 'croissants'),
('ham-cheese-egg-or-bacon-croissant', 'Ham, Cheese & Egg or Bacon Croissant', 'A croissant with ham, cheese, and a choice of egg or bacon.', 800, NULL, NULL, 1, 'croissants'),
('breakfast-croissant', 'Breakfast Style Croissant', 'Loaded with ham, cheese, egg, and bacon.', 900, 'https://pub-ffdd5ec52fff447f810ad326ce7f5712.r2.dev/menu/croissant-CHEB.webp', NULL, 1, 'croissants');

-- Seed Menu Items (Bagels)
INSERT OR REPLACE INTO MenuItem (id, name, description, price, imageUrl, flavors, isActive, categoryId) VALUES 
('plain-bagel', 'Plain Bagel', 'A classic plain bagel.', 225, NULL, 'Regular, Jalapeño, Sesame Seed, Everything', 1, 'bagels'),
('cream-cheese-bagel', 'Cream Cheese Bagel', 'Classic bagel with cream cheese.', 325, NULL, 'Regular, Jalapeño, Sesame Seed, Everything', 1, 'bagels'),
('ham-cheese-bagel', 'Ham & Cheese Bagel', 'Bagel loaded with ham and cheese', 530, NULL, 'Regular, Jalapeño, Sesame Seed, Everything', 1, 'bagels'),
('ham-cheese-egg-or-bacon-bagel', 'Ham & Cheese & Egg or Bacon Bagel', 'Bagel loaded with ham, cheese, and a choice of egg or bacon.', 800, NULL, 'Regular, Jalapeño, Sesame Seed, Everything', 1, 'bagels'),
('ham-cheese-egg-bacon-bagel', 'Ham & Cheese & Egg and Bacon Bagel', 'Bagel loaded with ham, cheese, egg and bacon.', 900, NULL, 'Regular, Jalapeño, Sesame Seed, Everything', 1, 'bagels');

-- Seed Menu Items (Drinks)
INSERT OR REPLACE INTO MenuItem (id, name, description, price, smallPrice, largePrice, imageUrl, flavors, isActive, categoryId) VALUES 
('regular-coffee', 'Regular Coffee', 'Hot freshly brewed coffee, with self-serve cream and sugar.', 245, 245, 295, NULL, NULL, 1, 'drinks'),
('hot-cappuccino', 'Hot Cappuccino', 'A warm cup of cappuccino, sourced from farmer brothers coffee.', 345, 345, 425, NULL, 'Mocha, Vanilla', 1, 'drinks'),
('hot-chocolate', 'Hot Chocolate', 'A warm cup of hot chocolate, sourced from farmer brothers coffee.', 345, 345, 425, NULL, NULL, 1, 'drinks'),
('iced-drinks', 'Iced Drinks', 'A cold cup of iced vietnemese coffee, iced green tea matcha, or thai iced tea.', 395, NULL, NULL, NULL, NULL, 1, 'drinks');

-- Seed Announcements
INSERT OR REPLACE INTO Announcement (id, title, message, type, isActive, expiresAt, createdAt, updatedAt) VALUES 
('website-launch', 'Website Last Updated', 'February 12, 2026', 'info', 1, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('holiday-hours', 'Holiday Hours', 'We will be closed on November 27 and 28 for Thanksgiving. Happy Thanksgiving!', 'warning', 1, '2025-11-29T00:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
