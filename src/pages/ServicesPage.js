// ServicePage.js
import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Packages from '../components/Packages';
import PhotosIntro from '../components/PhotosALaCarteIntro';
import Photos from '../components/PhotosALaCarte';
import Videos from '../components/VideosALaCarte';
import Services from '../components/Services';

function ServicePage() {
  return (
    <div>
    <Header />
    <Services />
    <Packages />
    <PhotosIntro />
    <Photos />
    <Videos />
    
    </div>
  );
}

export default ServicePage;
