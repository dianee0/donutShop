import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
      update: {},
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
      price: 199,
      flavors: "Glaze, Maple, Sugar, Crumb",
      categoryId: "donuts",
    },
    {
      id: "vanilla-cake-donut",
      name: "Vanilla Cake Donut",
      description: "Soft vanilla cake donut.",
      price: 229,
      flavors:
        "Vanilla Frosting, Strawberry Frosting, Chocolate Frosting, Maple Frosting",
      categoryId: "donuts",
    },
    {
      id: "chocolate-cake-donut",
      name: "Chocolate Cake Donut",
      description: "Rich chocolate cake donut with chocolate frosting.",
      price: 249,
      categoryId: "donuts",
    },
    {
      id: "glazed-bar",
      name: "Glazed Bar",
      description: "Classic glazed bar.",
      price: 249,
      flavors: "Chocolate, Maple",
      categoryId: "donuts",
    },
    {
      id: "custard-filled-bar",
      name: "Custard Filled Bar",
      description: "Glazed bar filled with smooth custard.",
      price: 349,
      flavors: "Chocolate, Maple",
      categoryId: "donuts",
    },
    {
      id: "old-fashioned",
      name: "Old Fashioned",
      description: "Traditional cake donut with a crispy exterior.",
      price: 229,
      flavors: "Plain, Glazed, Blueberry, Maple, Chocolate",
      categoryId: "donuts",
    },
    {
      id: "buttermilk-bar",
      name: "Buttermilk Bar",
      description: "Classic buttermilk bar.",
      price: 229,
      flavors: "Plain, Glazed, Maple, Chocolate",
      categoryId: "donuts",
    },
    {
      id: "filled-donut",
      name: "Filled Round Donut",
      description: "Soft donut with delicious filling.",
      price: 299,
      flavors: "Jelly, Custard, Lemon",
      categoryId: "donuts",
    },
    {
      id: "twist",
      name: "Twist",
      description: "Twisted donut with your choice of topping.",
      price: 229,
      flavors: "Maple, Chocolate, Sugar, Glaze",
      categoryId: "donuts",
    },

    // Specials
    {
      id: "apple-fritter",
      name: "Apple Fritter",
      description:
        "Large fritter loaded with apples and cinnamon, glazed to perfection.",
      price: 399,
      categoryId: "specials",
    },
    {
      id: "cinnamon-roll",
      name: "Cinnamon Roll",
      description: "Warm, gooey cinnamon roll, glazed to perfection.",
      price: 449,
      categoryId: "specials",
    },
    {
      id: "bear-claw",
      name: "Bear Claw",
      description:
        "A claw shaped pastry filled with apples and cinnamon, glazed to perfection.",
      price: 399,
      categoryId: "specials",
    },

    // Croissants
    {
      id: "plain-croissant",
      name: "Plain Croissant",
      description: "Flaky, buttery, and golden brown.",
      price: 349,
      categoryId: "croissants",
    },
    {
      id: "filled-croissant",
      name: "Filled Croissant",
      description: "Flaky croissant with sweet fruit and cream filling.",
      price: 449,
      flavors: "Strawberry & Cream, Pineapple & Cream, Blueberry & Cream",
      categoryId: "croissants",
    },
    {
      id: "ham-cheese-croissant",
      name: "Ham & Cheese Croissant",
      description: "Savory croissant with ham and melted cheese.",
      price: 599,
      categoryId: "croissants",
    },
    {
      id: "ham-cheese-egg-croissant",
      name: "Ham, Cheese & Egg Croissant",
      description: "Hearty croissant with ham, cheese, and egg.",
      price: 699,
      categoryId: "croissants",
    },
    {
      id: "breakfast-croissant",
      name: "Breakfast Style Croissant",
      description: "Loaded with ham, cheese, egg, and bacon.",
      price: 799,
      categoryId: "croissants",
    },

    // Bagels
    {
      id: "plain-bagel",
      name: "Plain Bagel",
      description: "Classic bagel, toasted to perfection.",
      price: 199,
      flavors: "Regular, Jalapeño, Sesame Seed, Everything",
      categoryId: "bagels",
    },
    {
      id: "loaded-bagel",
      name: "Ham, Cheese & Cream Cheese Bagel",
      description: "Bagel loaded with ham, cheese, and cream cheese.",
      price: 599,
      flavors: "Regular, Jalapeño, Sesame Seed, Everything",
      categoryId: "bagels",
    },

    // Drinks
    {
      id: "regular-coffee",
      name: "Regular Coffee",
      description: "Freshly brewed, hot and aromatic.",
      price: 249,
      categoryId: "drinks",
    },
    {
      id: "hot-cappuccino",
      name: "Hot Cappuccino",
      description: "Rich espresso with velvety foam.",
      price: 449,
      flavors: "Mocha, Vanilla",
      categoryId: "drinks",
    },
    {
      id: "hot-chocolate",
      name: "Hot Chocolate",
      description: "Creamy and rich with whipped cream.",
      price: 349,
      categoryId: "drinks",
    },
  ];

  // Create all menu items
  for (const item of menuItems) {
    await prisma.menuItem.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    });
  }
}

main()
  .then(async () => {
    console.log("✅ Database seeded!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
