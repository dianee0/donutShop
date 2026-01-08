import { config } from "dotenv";
import { resolve } from "path";
// Load .env file for seed script (runs outside Next.js)
config({ path: resolve(__dirname, "../.env") });

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Build asset URL (couldn't use imported asset() b/c of import issues)
function asset(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_ASSET_BASE_URL ?? "";
  if (!baseUrl) return path;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${baseUrl}/${cleanPath}`;
}

async function main() {
  // Define categories
  const categories = [
    { id: "donuts", name: "Donuts", order: 1 },
    { id: "specials", name: "Specials", order: 2 },
    { id: "croissants", name: "Croissants", order: 3 },
    { id: "bagels", name: "Bagels", order: 4 },
    { id: "drinks", name: "Drinks", order: 5 },
  ];

  // Create categories
  for (const category of categories) {
    await prisma.menuCategory.upsert({
      where: { id: category.id },
      update: category,
      create: category,
    });
  }

  // Define all menu items (condensed with flavors)
  const menuItems = [
    // Donuts
    {
      id: "raised-donut",
      name: "Raised Donut",
      description: "Light and airy raised donut.",
      price: 165,
      imageUrl: asset("/menu/raised-glaze.jpg"),
      flavors: "Glaze, Maple, Sugar, Crumb",
      categoryId: "donuts",
    },
    {
      id: "vanilla-cake-donut",
      name: "Vanilla Cake Donut",
      description: "Soft vanilla cake donut.",
      price: 165,
      imageUrl: null,
      flavors:
        "Vanilla Frosting, Strawberry Frosting, Chocolate Frosting, Maple Frosting",
      categoryId: "donuts",
    },
    {
      id: "chocolate-cake-donut",
      name: "Chocolate Cake Donut",
      description: "Rich chocolate cake donut with chocolate frosting.",
      price: 165,
      imageUrl: null,
      categoryId: "donuts",
    },
    {
      id: "raised-bar",
      name: "Raised Bar",
      description: "Classic bar glazed with chocolate or maple.",
      price: 200,
      imageUrl: null,
      flavors: "Chocolate, Maple",
      categoryId: "donuts",
    },
    {
      id: "custard-filled-bar",
      name: "Custard Filled Bar",
      description: "Glazed bar filled with smooth custard.",
      price: 275,
      imageUrl: asset("/menu/filled-bars.jpg"),
      flavors: "Chocolate, Maple",
      categoryId: "donuts",
    },
    {
      id: "old-fashioned",
      name: "Old Fashioned",
      description: "Traditional cake donut with a crispy exterior.",
      price: 165,
      imageUrl: asset("/menu/old-fashion-glaze.jpg"),
      flavors: "Plain, Glazed, Blueberry, Maple, Chocolate",
      categoryId: "donuts",
    },
    {
      id: "buttermilk-bar",
      name: "Buttermilk Bar",
      description: "Classic buttermilk bar.",
      price: 200,
      imageUrl: asset("/menu/buttermilk-glaze.jpg"),
      flavors: "Plain, Glazed, Maple, Chocolate",
      categoryId: "donuts",
    },
    {
      id: "filled-donut",
      name: "Filled Round Donut",
      description: "Soft donut with delicious filling.",
      price: 250,
      imageUrl: asset("/menu/filled-rounds.jpg"),
      flavors: "Jelly, Custard, Lemon",
      categoryId: "donuts",
    },
    {
      id: "twist",
      name: "Twist",
      description: "Twisted donut with your choice of topping.",
      price: 200,
      imageUrl: asset("/menu/twists.jpg"),
      flavors: "Maple, Chocolate, Sugar, Glaze",
      categoryId: "donuts",
    },

    // Specials
    {
      id: "apple-fritter",
      name: "Apple Fritter",
      description:
        "Large fritter loaded with apples and cinnamon, glazed to perfection.",
      price: 275,
      imageUrl: asset("/menu/apple-fritt.jpg"),
      categoryId: "specials",
    },
    {
      id: "cinnamon-roll",
      name: "Cinnamon Roll",
      description: "Warm, gooey cinnamon roll, glazed to perfection.",
      price: 275,
      imageUrl: asset("/menu/cinn-roll.jpg"),
      categoryId: "specials",
    },
    {
      id: "bear-claw",
      name: "Bear Claw",
      description:
        "A claw shaped pastry filled with apples and cinnamon, glazed to perfection.",
      price: 275,
      imageUrl: asset("/menu/bear-claw.jpg"),
      categoryId: "specials",
    },

    // Croissants
    {
      id: "plain-croissant",
      name: "Plain Croissant",
      description: "Flaky, buttery, and golden brown.",
      price: 275,
      imageUrl: null,
      categoryId: "croissants",
    },
    {
      id: "filled-croissant",
      name: "Filled Croissant",
      description: "Flaky croissant with sweet fruit and cream filling.",
      price: 300,
      imageUrl: null,
      flavors: "Strawberry & Cream, Pineapple & Cream, Blueberry & Cream",
      categoryId: "croissants",
    },
    {
      id: "ham-cheese-croissant",
      name: "Ham & Cheese Croissant",
      description: "Savory croissant with ham and swiss cheese.",
      price: 530,
      imageUrl: null,
      categoryId: "croissants",
    },
    {
      id: "egg-bacon-croissant",
      name: "Egg & Bacon Croissant",
      description: "Croissant with egg and bacon.",
      price: 650,
      imageUrl: null,
      categoryId: "croissants",
    },
    {
      id: "ham-cheese-egg-or-bacon-croissant",
      name: "Ham, Cheese & Egg or Bacon Croissant",
      description:
        "A croissant with ham, cheese, and a choice of egg or bacon.",
      price: 800,
      imageUrl: null,
      categoryId: "croissants",
    },
    {
      id: "breakfast-croissant",
      name: "Breakfast Style Croissant",
      description: "Loaded with ham, cheese, egg, and bacon.",
      price: 900,
      imageUrl: asset("/menu/croissant-CHEB.jpg"),
      categoryId: "croissants",
    },

    // Bagels
    {
      id: "plain-bagel",
      name: "Plain Bagel",
      description: "A classic plain bagel.",
      price: 225,
      flavors: "Regular, Jalapeño, Sesame Seed, Everything",
      imageUrl: null,
      categoryId: "bagels",
    },
    {
      id: "cream-cheese-bagel",
      name: "Cream Cheese Bagel",
      description: "Classic bagel with cream cheese.",
      price: 325,
      flavors: "Regular, Jalapeño, Sesame Seed, Everything",
      imageUrl: null,
      categoryId: "bagels",
    },
    {
      id: "ham-cheese-bagel",
      name: "Ham & Cheese Bagel",
      description: "Bagel loaded with ham and cheese",
      price: 530,
      flavors: "Regular, Jalapeño, Sesame Seed, Everything",
      imageUrl: null,
      categoryId: "bagels",
    },
    {
      id: "ham-cheese-egg-or-bacon-bagel",
      name: "Ham & Cheese & Egg or Bacon Bagel",
      description:
        "Bagel loaded with ham, cheese, and a choice of egg or bacon.",
      price: 800,
      flavors: "Regular, Jalapeño, Sesame Seed, Everything",
      imageUrl: null,
      categoryId: "bagels",
    },
    {
      id: "ham-cheese-egg-bacon-bagel",
      name: "Ham & Cheese & Egg and Bacon Bagel",
      description: "Bagel loaded with ham, cheese, egg and bacon.",
      price: 900,
      flavors: "Regular, Jalapeño, Sesame Seed, Everything",
      imageUrl: null,
      categoryId: "bagels",
    },

    // Drinks
    {
      id: "regular-coffee",
      name: "Regular Coffee",
      description:
        "Hot freshly brewed coffee, with self-serve cream and sugar.",
      price: 245,
      smallPrice: 245,
      largePrice: 295,
      imageUrl: null,
      categoryId: "drinks",
    },
    {
      id: "hot-cappuccino",
      name: "Hot Cappuccino",
      description:
        "A warm cup of cappuccino, sourced from farmer brothers coffee.",
      price: 345,
      smallPrice: 345,
      largePrice: 425,
      flavors: "Mocha, Vanilla",
      imageUrl: null,
      categoryId: "drinks",
    },
    {
      id: "hot-chocolate",
      name: "Hot Chocolate",
      description:
        "A warm cup of hot chocolate, sourced from farmer brothers coffee.",
      price: 345,
      smallPrice: 345,
      largePrice: 425,
      imageUrl: null,
      categoryId: "drinks",
    },
    {
      id: "iced-drinks",
      name: "Iced Drinks",
      description:
        "A cold cup of iced vietnemese coffee, iced green tea matcha, or thai iced tea.",
      price: 395,
      imageUrl: null,
      categoryId: "drinks",
    },
  ];

  // Create all menu items
  for (const item of menuItems) {
    await prisma.menuItem.upsert({
      where: { id: item.id },
      update: item,
      create: item,
    });
  }

  // Define announcements
  const announcements = [
    {
      id: "website-launch",
      title: "Website Last Updated",
      message: "November 19, 2025",
      type: "info",
      isActive: true,
      expiresAt: null, // Website info doesn't expire
    },
    {
      id: "holiday-hours",
      title: "Holiday Hours",
      message:
        "We will be closed on November 27 and 28 for Thanksgiving. Happy Thanksgiving!",
      type: "warning",
      isActive: true,
      expiresAt: new Date("2025-11-29T00:00:00"), // Expires after Thanksgiving weekend
    },
  ];

  // Create announcements
  for (const announcement of announcements) {
    await prisma.announcement.upsert({
      where: { id: announcement.id },
      update: announcement,
      create: announcement,
    });
  }
}

main()
  .then(async () => {
    console.log("Database seeded.");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
