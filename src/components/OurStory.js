import React, { useState } from 'react';
const TeamImage = './logo6.png'; // Replace with the path to your team image
const MissionImage ='./logo5.png';  // Replace with the path to your mission image
const StoryImage = './logo6.png';  // Replace with the path to your story image

function AboutUs() {
  const [activeTab, setActiveTab] = useState('team');

  const tabContent = {
    story: {
        text: (
          <div className="leading-relaxed text-gray-600 bg-white p-5 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
            <p className="mb-4">
              BRSE began as a collaborative dream between two ambitious individuals: Bryan Cadalso and Sergio Arcila. The fusion of our names – BR from Bryan and SE from Sergio – gave birth to BRSE, a testament to our joint vision and dedication. In the early days, our combined strengths laid the foundation for a company that was set to revolutionize real estate media.
            </p>
            <p className="mb-4">
              However, as with many entrepreneurial journeys, paths diverged. Bryan, with his deep interest in cybersecurity and IT, decided to pursue his calling in that domain. His venture into his own business left an indelible mark on BRSE, and his contributions continue to resonate in the ethos of our company.
            </p>
            <p className="mb-4">
              With Bryan's transition, I, Sergio, took the helm of BRSE in Gainesville, the city where I was pursuing my studies. This shift marked a new chapter for BRSE, one that was driven by a singular vision yet shaped by the legacy of a partnership. The challenge was immense, but so was the determination to succeed.
            </p>
            <p className="mb-4">
              Embracing the spirit of innovation and quality, I began to invest in state-of-the-art technology – each camera, each drone, each piece of editing software was a stepping stone towards excellence in real estate photography and videography. With every project, BRSE grew stronger, reinvesting revenue to push the boundaries of what we could offer.
            </p>
            <p>
              Our story is one of passion, transition, and relentless pursuit of excellence. As BRSE continues to grow, we remain committed to delivering exceptional service, creating stunning visual content, and helping realtors and homeowners achieve their dreams. Join us as we continue to write our story, one property at a time.
            </p>
          </div>
        ),
        img: StoryImage, // Replace with your story image
      },
      
    team: {
      text: (
        <div className="bg-white p-5 shadow-lg rounded-lg">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-900">Sergio Arcila</h3>
        <p className="text-blue-600 font-medium">Founder & Lead Photographer</p>
      </div>

      <div className="flex flex-col items-center mb-4">
        {/* Icon can be placed here if needed */}
        <p className="text-gray-600 leading-relaxed text-lg">
          My journey in real estate and media began during my time at the University of Florida. In 2020, as I delved deeper into the intricacies of the real estate industry, I realized my passion for this dynamic field. Obtaining my real estate license was a turning point; it wasn't just about the transactions, but about the stories each property held and the dreams they represented for each client.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          Combining my long-standing passion for photography with my newfound love for real estate, I founded BRSE. My vision was clear: to merge the art of visual storytelling with the latest in technology to present properties in their most compelling light.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          While building BRSE, I continued my education in Computer Science at the University of Florida, graduating in 2024. We're not just photographers; we are innovators, storytellers, and technologists dedicated to showcasing properties in a way that resonates with buyers and sellers alike.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          Today, my ambition is to grow BRSE into a multi-million dollar corporation, leading the charge in the transformation of real estate media. Join us as we redefine real estate marketing, one property at a time.
        </p>
      </div>
    


    

  {/* Additional sections for other team members can go here, following the same pattern */}
</div>
      ),
      img: TeamImage,
    },
    mission: {
        text: (
          <div className="text-gray-600 bg-white p-5 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="mb-4">
              At BRSE, our mission is clear and ambitious: to become the foremost real estate photography business in Florida. We are driven by a passion to elevate property imagery, transforming the way real estate is presented and perceived.
            </p>
            <p className="mb-4">
              Our plan for growth includes expanding our team of talented photographers and establishing lasting partnerships with real estate brokerages. By offering comprehensive media packages and monthly subscription models, we aim to provide ongoing value and become the go-to media solution for every real estate listing.
            </p>
            <p className="mb-4">
              Innovation remains at the forefront of our growth. We continue to invest in the latest technology and training, ensuring that our visual content consistently sets new benchmarks in the industry.
            </p>
            <p>
              Join us on this exciting journey as we strive to make BRSE synonymous with real estate photography excellence in Florida. Together, we will shape the future of real estate visuals, one stunning property at a time.
            </p>
          </div>
        ),
        img: MissionImage, // Replace with your mission image
      },
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-wrap py-16">
        {/* Tab Content */}
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">ABOUT BRSE</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Learn about our origins</h1>
          <div className="flex mb-4">
          <a onClick={() => setActiveTab('team')} className={`flex-grow text-center py-2 text-lg px-1 ${activeTab === 'team' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-500 hover:text-gray-600'}`}>
          Founder
            </a>
            <a onClick={() => setActiveTab('story')} className={`flex-grow text-center py-2 text-lg px-1 ${activeTab === 'story' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-500 hover:text-gray-600'}`}>
              Story
            </a>
            <a onClick={() => setActiveTab('mission')} className={`flex-grow text-center py-2 text-lg px-1 ${activeTab === 'mission' ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-500 hover:text-gray-600'}`}>
              Mission
            </a>
          </div>
          {tabContent[activeTab].text}
        </div>
        {/* Image */}
        <img
            alt="team"
            className={`lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded ${activeTab === 'team' || activeTab === 'story'? 'mt-12 lg:mt-60' : 'mt-0'} ${activeTab === 'mission'? 'mt-12 lg:mt-32' : 'mt-0'}`}

            src={tabContent[activeTab].img}
            style={{ maxHeight: '450px' }} // Adjust maxHeight as needed
/>
      </div>
    </section>
  );
}

export default AboutUs;
