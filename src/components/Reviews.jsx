import React from 'react'
import Slider from 'react-slick'
import avatar1 from "../assets/maks.jpg";
import avatar2 from "../assets/raj.png";
import avatar3 from "../assets/ak15.avif";
import avatar4 from "../assets/terry.avif";
import avatar5 from "../assets/havon1.avif";

<img src={avatar1} alt="Avatar1" className="w-16 h-16 rounded-full"/>;
<img src={avatar2} alt="Avatar2" className="w-16 h-16 rounded-full"/>;
<img src={avatar3} alt="Avatar3" className="w-16 h-16 rounded-full" />;
<img src={avatar4} alt="Avatar4" className="w-16 h-16 rounded-full" />;
<img src={avatar5} alt="Avatar5" className="w-16 h-16 rounded-full" />;

const TestimonialsData = [
  {
    id: 1,
    name: 'Hayden Nguyen',
    text: 'Just joined and up 40 units!!!!',
    img: avatar1,
  },
  {
    id: 2,
    name: 'Raj Ferrer',
    text: 'THE BESTTTTTTTTTTTTTTTTTTT',
    img: avatar2,
  },
  {
    id: 3,
    name: 'ak15',
    text: 'I joined a little over 2 weeks ago and was a bit skeptical over a free server, but this was a hidden blessing.',
    img: avatar3,
  },
  {
    id: 4,
    name: 'TerrySports2000',
    text: 'Just joined last Sunday and already made 15 units!',
    img: avatar4,
  },
  {
    id: 5,
    name: 'Havon',
    text: 'I’ll be honest, I didn’t expect much from a free Discord at first. Usually those kinds of servers are hit or miss, but this one completely proved me wrong.',
    img: avatar5,
  },
]

const Reviews = () => {
  const settings = {
    dots: false,
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
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='py-14 mb-10'>
      <div className='container mx-auto px-6'>
        <div className='space-y-4 p-6 text-center max-w-3xl mx-auto mb-6'>
          <h1 className='text-purple-400 font-semibold uppercase tracking-[0.2em] mb-3'>
            Reviews
          </h1>
          <p className='font-semibold text-3xl'>
            Hear from members of the Runaans Locks community!
          </p>
        </div>

        <Slider {...settings}>
          {TestimonialsData.map((item) => {
            return (
              <div key={item.id} className='px-3'>
                <div className='h-full flex flex-col justify-between p-6 rounded-xl shadow-lg mx-4 bg-zinc-900 border border-white/10'>
                  <div className='flex justify-start items-center gap-5'>
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.name}
                        className='w-16 h-16 rounded-full object-cover'
                      />
                    )}
                    <div>
                      <p className='text-xl font-bold text-white'>{item.name}</p>
                      <p className='text-sm text-gray-400'>Member</p>
                    </div>
                  </div>

                  <div className='py-6 space-y-4 min-h-30'>
                    <p className='text-sm text-gray-300'>{item.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews