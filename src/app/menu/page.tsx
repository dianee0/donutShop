import { prisma } from "@/lib/prisma";
import MenuHeader from "@/components/menu/MenuHeader";
import MenuCategory from "@/components/menu/MenuCategory";
import MenuCTA from "@/components/menu/MenuCTA";

export default async function MenuPage() {
  // Fetch all categories and their items
  const categories = await prisma.menuCategory.findMany({
    include: {
      items: {
        where: {
          isActive: true,
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <MenuHeader />

      {/* Menu Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {categories.map((category, idx) => (
          <MenuCategory key={category.id} category={category} index={idx} />
        ))}
      </section>

      {/* Call to Action */}
      <MenuCTA />
    </main>
  );
}
