import React from 'react';

const About = () => {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8 text-center">
          Our Story
        </h1>
        
        <div className="w-full h-64 md:h-96 rounded-[24px] overflow-hidden mb-stack-md card-shadow">
          <img 
            src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=1000" 
            alt="Indian artisan crafting" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
          <p>
            Terra & Tide was born from a simple belief: the soul of travel is not found in monuments, but in the hands of the people who keep local heritage alive. 
          </p>
          <p>
            India is home to some of the world's most intricate and ancient crafts—from the block printers of Jaipur to the master weavers of Varanasi and the clay potters of Kutch. Yet, as modern travelers, it is often difficult to access these master artisans authentically without falling into commercial tourist traps.
          </p>
          
          <h2 className="font-headline-md text-headline-md text-on-surface mt-12 mb-4">Our Mission</h2>
          <p>
            We built this platform to bridge the gap between culturally curious travelers and grassroots Indian artisans. By providing a direct platform for booking hands-on workshops and purchasing authentic goods, we aim to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure master craftsmen receive fair, direct compensation.</li>
            <li>Preserve dying art forms by creating modern demand.</li>
            <li>Provide travelers with meaningful, slow-paced cultural immersion.</li>
          </ul>

          <div className="bg-surface-container-low p-8 rounded-[24px] mt-12 border border-outline-variant/30 text-center">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Join the Movement</h3>
            <p className="font-body-md text-body-md mb-6">
              Whether you are a traveler looking to learn, or an artisan wishing to share your craft, there is a place for you here.
            </p>
            <button className="bg-primary-container text-on-primary font-label-md px-8 py-3 rounded-[12px] hover:opacity-90 transition-opacity">
              Become an Artisan Host
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;