-- D1 Schema for DonutShop

-- Subscribers table
CREATE TABLE IF NOT EXISTS Subscriber (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Menu Categories table
CREATE TABLE IF NOT EXISTS MenuCategory (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    "order" INTEGER DEFAULT 0
);

-- Menu Items table
CREATE TABLE IF NOT EXISTS MenuItem (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    smallPrice INTEGER,
    largePrice INTEGER,
    flavors TEXT,
    imageUrl TEXT,
    isActive INTEGER DEFAULT 1,
    categoryId TEXT NOT NULL,
    FOREIGN KEY (categoryId) REFERENCES MenuCategory(id)
);

-- Announcements table
CREATE TABLE IF NOT EXISTS Announcement (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'info',
    isActive INTEGER DEFAULT 1,
    expiresAt DATETIME,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_menuitem_categoryid ON MenuItem(categoryId);
CREATE INDEX IF NOT EXISTS idx_menuitem_isactive ON MenuItem(isActive);
CREATE INDEX IF NOT EXISTS idx_announcement_isactive ON Announcement(isActive);
