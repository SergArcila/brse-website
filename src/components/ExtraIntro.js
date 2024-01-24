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
function ExtraIntro() {
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
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">3D Tours + Twilight Photos & Much More</h2>
          <p className="text-xl text-blue-600 font-semibold mb-6">We provide more than just the "standard" services that most real estate media companies offer.</p>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            <p>
            Experience the allure of 3D tours – a selling asset that impresses both buyers and sellers alike! Our services extend beyond 3D tours to include floorplans, virtual staging, custom time-lapse images, and artistic closing gifts. Choose between standard twilight photos and virtual twilight photos for added versatility. At BRSE Real Estate Photography, we cover all your visual needs
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

export default ExtraIntro;
