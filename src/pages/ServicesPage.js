// ServicePage.js
import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Packages from '../components/Packages';
import PhotosIntro from '../components/PhotosALaCarteIntro';
import Photos from '../components/PhotosALaCarte';
import Videos from '../components/VideosALaCarte';
import Services from '../components/Services';
import DroneIntro from '../components/DroneALaCarteIntro';
import Drone from '../components/DroneALaCarte';
import VideoIntro from '../components/VideoALaCarteIntro';
import ExtraIntro from '../components/ExtraIntro';
import Extra from '../components/AdditionalServices';
import End from '../components/ServiceConclusion';
import Footer from '../components/Footer';

function ServicePage() {
  return (
    <div>
    
    <Services />
    <Packages />
    <PhotosIntro />
    <Photos />
    <DroneIntro />
    <Drone />
    <VideoIntro />
    <Videos />
    <ExtraIntro />
    <Extra />
    <End />
    <Footer />
    </div>
  );
}

export default ServicePage;
