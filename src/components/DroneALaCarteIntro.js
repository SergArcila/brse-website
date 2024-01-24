import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photos = [
  { id: '1', src: '/pro.jpeg' },
  { id: '2', src: '/plus.jpeg' },
  { id: '3', src: '/base.jpeg' },
  // ... add more photos as needed
];
function DroneALaCarteIntro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Drone Services</h2>
          <p className="text-xl text-blue-600 font-semibold mb-6">We charge just $95 for our 6 drone photo package.</p>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            <p>
            Our photographers are FAA Part 107 Certified so you can rest easily knowing you will not only get high quality drone photos, but also legal drone photos!
            </p>
          </div>
        </div>

        {/* Image showcase */}
        <Slider {...settings}>
          {photos.map((photo) => (
            <div key={photo.id} className="px-2">
              <img src={photo.src} alt={`Showcase ${photo.id}`} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default DroneALaCarteIntro;