export default function Story() {
  return (
    <section id="story" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-[#FFF9F0] rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="space-y-6">
                <div className="text-6xl lg:text-7xl"></div>
                <div className="flex gap-3 items-center">
                  {/* placeholder images*/}
                  <img
                    src="/donuts-hero.png"
                    alt="Donuts"
                    className="w-50 h-80"
                  />
                  <div className="flex flex-col gap-3">
                    <img
                      src="/donuts-hero.png"
                      alt="Donuts"
                      className="w-80 h-40"
                    />
                    <img
                      src="/donuts-hero.png"
                      alt="Donuts"
                      className="w-80 h-40"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C84B6B] rounded-full opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C84B6B] rounded-full opacity-10"></div>
            </div>
          </div>

          {/* Right side - Story content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block">
              <span className="text-sm font-semibold text-[#C84B6B] tracking-widest uppercase bg-[#FFF9F0] px-4 py-2 rounded-full">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Crafted with Love,
              <br />
              <span className="text-[#C84B6B]">Since 1998</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                It all started back in 1998 in the small town of Hilmar,
                California. Our family opened our first donut shop with the hope
                of bringing something sweet to the neighborhood.
              </p>
              <p>
                Nearly three decades later, we are proud to have grown into
                three locations in Hilmar, Delhi, and Newman. While our menu has
                expanded, our promise has remained the same. Every donut is
                still made with the same care, love, and community spirit that
                started it all.
              </p>
              <p className="text-[#C84B6B] font-semibold">
                From our family to yours, thank you for being part of our story.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#C84B6B]">27+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#C84B6B]">50+</div>
                <div className="text-sm text-gray-600">Varieties</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#C84B6B]">3</div>
                <div className="text-sm text-gray-600">Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
