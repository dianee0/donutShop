import { getPrisma } from "@/lib/prisma";
import { getRequestContext } from "@cloudflare/next-on-pages";
import MenuHeader from "@/components/menu/MenuHeader";
import MenuCategory from "@/components/menu/MenuCategory";
import MenuCTA from "@/components/menu/MenuCTA";

export const runtime = "edge";

export default async function MenuPage() {
  // Get D1 binding on Cloudflare, undefined locally
  let env;
  try {
    env = getRequestContext().env;
  } catch {
    // Running locally without Cloudflare context
    env = undefined;
  }

  const prisma = getPrisma(env);

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
