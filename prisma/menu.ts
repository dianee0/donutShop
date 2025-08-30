import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const classics = await prisma.menuCategory.upsert({
    where: { id: "classics" },
    update: {},
    create: { id: "classics", name: "classics", order: 1 },
  });

  const specials = await prisma.menuCategory.upsert({
    where: { id: "specials" },
    update: {},
    create: { id: "specials", name: "Specials", order: 2 },
  });

  // Create items
  await prisma.menuItem.upsert({
    where: { id: "glazed-donut" },
    update: {},
    create: {
      id: "glazed-donut",
      name: "Glazed Donut",
      description: "Light, airy, and perfectly sweet.",
      price: 199,
      categoryId: classics.id,
    },
  });
  await prisma.menuItem.upsert({
    where: { id: "chocolate-sprinkle" },
    update: {},
    create: {
      id: "chocolate-sprinkle",
      name: "Chocolate Sprinkle",
      description: "Covered in chocolate glaze and rainbow sprinkles.",
      price: 249,
      categoryId: classics.id,
    },
  });
  await prisma.menuItem.upsert({
    where: { id: "maple-bacon-bar" },
    update: {},
    create: {
      id: "maple-bacon-bar",
      name: "Maple Bacon Bar",
      description: "A sweet-and-savory favorite with maple glaze and crispy bacon.",
      price: 399,
      categoryId: specials.id,
    },
  });
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