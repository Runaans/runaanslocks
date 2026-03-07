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
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-12 mb-10" id="review">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="space-y-3 p-4 text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-purple-400 font-semibold uppercase tracking-[0.2em]">
            Reviews
          </h1>
          <p className="font-semibold text-2xl sm:text-3xl text-white">
            Hear from members of the Runaans Locks community!
          </p>
        </div>

        <Slider {...settings}>
          {TestimonialsData.map((item) => (
            <div key={item.id} className="px-2 sm:px-3">
              <div className="h-full min-h-60 flex flex-col justify-between p-4 sm:p-6 rounded-xl shadow-lg bg-zinc-900 border border-white/10">
                <div className="flex items-center gap-3 sm:gap-5">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0"
                    />
                  )}

                  <div className="min-w-0">
                    <p className="text-base sm:text-xl font-bold text-white truncate">
                      {item.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">Member</p>
                  </div>
                </div>

                <div className="py-4 sm:py-6 space-y-3">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                  <p className="text-sm">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;