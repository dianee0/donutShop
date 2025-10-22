import { prisma } from "@/lib/prisma";
import Image from "next/image";

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
      <section className="bg-[#FFF9F0] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-[#C84B6B] tracking-widest uppercase bg-white px-4 py-2 rounded-full">
              Our Menu
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Fresh <span className="text-[#C84B6B]">Every Day</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Made with love from scratch daily. All prices are per item.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {categories.map((category, idx) => (
          <div key={category.id} className={idx > 0 ? "mt-20" : ""}>
            {/* Category Header */}
            <div className="mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 capitalize">
                {category.name}
              </h2>
              <div className="w-20 h-1 bg-[#C84B6B]"></div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Item Image */}
                  <div className="relative h-48 bg-gray-50 flex items-center justify-center">
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-white flex items-center justify-center">
                        <span className="text-6xl opacity-20">🍩</span>
                      </div>
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 flex-1">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-[#C84B6B] ml-2">
                        ${(item.price / 100).toFixed(2)}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">
                        {item.description}
                      </p>
                    )}
                    {item.flavors && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Flavors
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {item.flavors.split(", ").map((flavor, index) => (
                            <span
                              key={index}
                              className="inline-block bg-[#FFF9F0] text-[#C84B6B] text-xs px-2 py-1 rounded-full"
                            >
                              {flavor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {category.items.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>No items available in this category yet.</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-[#FFF9F0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Visit Us Today!
          </h2>
          <p className="text-gray-600 mb-6">
            All our treats are made fresh daily from 4am to 12pm
          </p>
          <a
            href="/"
            className="inline-block bg-[#C84B6B] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#B03A5A] transition-colors duration-200"
          >
            View Locations
          </a>
        </div>
      </section>
    </main>
  );
}
