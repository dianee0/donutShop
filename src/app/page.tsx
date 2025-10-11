import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Section 1 - Coming soon */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            More sections coming soon...
          </h2>
        </div>
      </section>
    </>
  );
}
