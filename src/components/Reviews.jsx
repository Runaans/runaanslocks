import React from "react";
import Slider from "react-slick";
import avatar1 from "../assets/maks.jpg";
import avatar2 from "../assets/raj.png";
import avatar3 from "../assets/ak15.avif";
import avatar4 from "../assets/terry.avif";
import avatar5 from "../assets/havon1.avif";

const TestimonialsData = [
  {
    id: 1,
    name: "Hayden Nguyen",
    text: "Just joined and up 40 units!!!!",
    img: avatar1,
  },
  {
    id: 2,
    name: "Raj Ferrer",
    text: "THE BESTTTTTTTTTTTTTTTTTTT",
    img: avatar2,
  },
  {
    id: 3,
    name: "ak15",
    text: "I joined a little over 2 weeks ago and was a bit skeptical over a free server, but this was a hidden blessing.",
    img: avatar3,
  },
  {
    id: 4,
    name: "TerrySports2000",
    text: "Just joined last Sunday and already made 15 units!",
    img: avatar4,
  },
  {
    id: 5,
    name: "Havon",
    text: "I’ll be honest, I didn’t expect much from a free Discord at first. Usually those kinds of servers are hit or miss, but this one completely proved me wrong.",
    img: avatar5,
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-14 mb-10" id="review">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-purple-400 font-semibold uppercase tracking-[0.2em]">
            Reviews
          </h1>
          <p className="font-semibold text-3xl sm:text-4xl text-white leading-tight">
            Hear from members of the Runaans Locks community!
          </p>
        </div>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-5 md:hidden">
          {TestimonialsData.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-3xl border border-white/15 bg-zinc-900/90 p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-2xl font-bold text-white wrap-break-word">
                    {item.name}
                  </p>
                  <p className="text-gray-400 text-sm">Member</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed wrap-break-word">
                {item.text}
              </p>

              <div className="mt-5 text-3xl">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>

        {/* Desktop / Tablet: slider */}
        <div className="hidden md:block">
          <Slider {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id} className="px-3">
                <div className="min-h-70 rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xl font-bold text-white wrap-break-word">
                        {item.name}
                      </p>
                      <p className="text-gray-400 text-sm">Member</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed wrap-break-word">
                    {item.text}
                  </p>

                  <div className="mt-5 text-xl">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;