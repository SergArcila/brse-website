import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photos = [
  { id: '1', src: '/photo1.jpeg' },
  { id: '2', src: '/photo2.jpeg' },
  { id: '3', src: '/photo3.jpeg' },
  // ... add more photos as needed
];
function PhotosALaCarteIntro() {
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
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Photo Services</h2>
          <p className="text-xl text-blue-600 font-semibold mb-6">Hand Blended Images + A Floor Plan for Every Shoot</p>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              We offer simple flat rate pricing for our real estate images. For our 25 photo package, we charge $165 plus tax, and
              for 40 photos we charge $195 plus tax, with floor plans included. No hidden fees, square footage or travel charges
              within our service area.
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

export default PhotosALaCarteIntro;
