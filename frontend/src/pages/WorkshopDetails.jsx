import React from 'react';
import { Link } from 'react-router-dom';

const WorkshopDetails = () => {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      {/* Header & Breadcrumbs */}
      <div className="mb-stack-md">
        <nav aria-label="Breadcrumb" className="flex text-on-surface-variant font-label-sm text-label-sm mb-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link to="/workshop" className="hover:text-primary transition-colors">Workshops</Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                <Link to="/workshop" className="hover:text-primary transition-colors">Ceramics</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-sm mx-1">chevron_right</span>
                <span className="text-primary font-medium">Hand-Thrown Masterclass</span>
              </div>
            </li>
          </ol>
        </nav>
        
       <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl font-bold text-on-background mb-4 leading-tight tracking-tight">
          Hand-Thrown Ceramics Workshop with Elena
        </h1>
        
        <div className="flex items-center gap-4 text-on-surface-variant font-label-md text-label-md">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-bold text-on-background">4.9</span>
            <span>(128 reviews)</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">location_on</span>
            <span>Florence, Italy</span>
          </div>
        </div>
      </div>

      {/* Image Gallery Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[614px] min-h-[500px] mb-stack-lg">
        <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group">
          <img 
            alt="Main workshop image" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANljZ8_dvqX660KvRNi6lxHXHKzdGRJZNxt9Zd8FRs0mxKXbRqUdKp-ilO_oP46C6G9puwmUua2vy7y4XcTCeC2tpXh2xd8tRikL4T-RKRwrvBFc0VodUoke4sQO-ZYRNkfB9WvDf9TLzPZZ4RRc-MTYQ0zZ7HuK1CbnPMZoAexPkMye4yh_PVI61XeoP_AOrmuDwhj8_x725o3W1_ZFGdre-z98RQTpItlwc-WFhowgYN8OSaEoDVFw"
          />
        </div>
        <div className="hidden md:block rounded-xl overflow-hidden relative group">
          <img 
            alt="Finished ceramics" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJQd6QnuxvhiS4FTO2dvyDQbMqxIob1m2ExvtYpPdnZotJUd3lEnDAm440LzV1y5qQ4fAiL6jaxtmcZRPCfDm_MtY-enj8YgzJwnO0eN-8_H5uir8ye23qQz_rwjFQt5kfdNSZEWWekTD3wrv1C6co3KSV9O61IotsZeuLenpOLwY8kX4T_Dcmvec2daPFMICFMj3-7j8GD20gXNFvaBhFewP3t4Vud36qjEMTCvdp64t6_9G5TSJmrA"
          />
        </div>
        <div className="hidden md:block rounded-xl overflow-hidden relative group">
          <img 
            alt="Pottery tools" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4SjIT6A7yxMKqgbA_RgYxGinkv0hVFTu9hGBo0_yRUF7DcS-8gqwiBdNsSzX2SD5_YS2CTUkj9WHGVeiCOX7vCBOWXIWxI9JKOk2D83Yt7CoVzERhTtfxAdlKSfURhs7dX5Zu7lsHiPGQWOph53WkV419KC8C0HbXJ9anuINvQD2F-u0ku-_aRQegJGlxXNa0RZ0M8uF7bMEZ5VJGjZRX0JOYM3TY9M3p0KydK_UWfJdNQ4SraahUMA"
          />
        </div>
        <div className="hidden md:block md:col-span-2 rounded-xl overflow-hidden relative group">
          <img 
            alt="Studio overview" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPpWQv-jkmg5EJF2LFodZ6WwX6ycUr2tf6iHBa1gIAV-F-3ynCOHinkIoaPIpihsE1f7iL6BL2BQTNXmBlW21NOePxBMn1oGyQetVGj8r57vDl-b5U5Q11_2tQH54__mr1H8pL7KbTRqPGKB7S1W7gPwTUA6BewftSjQKDVfwx_j26qtkPYgnvoHLL9CEMfCELoAaRnXbzj9g5IvoWbfg_nXyRuYFwFc-hEEDRvaGzTfQEeYdToa-BSw"
          />
          <button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur px-4 py-2 rounded-full font-label-md text-label-md border border-outline-variant flex items-center gap-2 hover:bg-surface transition-colors shadow-sm">
            <span className="material-symbols-outlined text-sm">grid_view</span>
            Show all photos
          </button>
        </div>
      </div>

      {/* Content Split */}
      <div className="flex flex-col lg:flex-row gap-gutter">
        
        {/* Left Column: Details */}
        <div className="lg:w-2/3 flex flex-col gap-stack-md">
          
          {/* Artisan Info */}
          <div className="flex items-start justify-between pb-6 border-b border-surface-variant">
            <div>
              <h2 className="font-headline-md text-headline-md mb-1">Hosted by Elena</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Master Ceramist · 15 years experience</p>
            </div>
            <img 
              alt="Host portrait" 
              className="w-16 h-16 rounded-full object-cover border-2 border-surface" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaztIb9FuumhsZ4zNe8pvgMVYZcUj6BsfE4bNOujpdl_tSraJ1sTEeO1tLGyWUZCKZ0h7AQ6658UeO5phV_b0nRFCA1A49YCIt1y1QI3yZhx2wzrPMEpM3z3bhBYWmFjbxzXotPZA-O-t-T2SyB8ncKl7STk-M-2EWKU4-RxcMWNZqdkI6ke4Vwo5rzbWkVz19gSLWIZYNdqA9ZwzaJLUN_aQIpslUi2j65ydrSJ0BG0-hntD89KRUAw"
            />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 py-2">
            <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">verified</span>
              Certified Artisan
            </span>
            <span className="bg-surface-container text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">group</span>
              Small group (Max 6)
            </span>
            <span className="bg-surface-container text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              3 Hours
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-headline-md text-headline-md mb-4">The Experience</h3>
            <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
              <p>Step into my historical studio in the heart of Florence and discover the meditative art of throwing clay. In this hands-on workshop, you'll learn the fundamental techniques of preparing clay, centering it on the wheel, and shaping your first vessel.</p>
              <p>We'll begin with a traditional Italian espresso while I introduce you to the local clay and the history of Florentine ceramics. Then, you'll take your seat at the wheel. I will guide you personally through every step, ensuring you find the rhythm and balance required to bring the earth to life.</p>
              <p>Whether you're a complete beginner or looking to refine your technique, this session is tailored to provide a deeply relaxing and creative immersion into slow-craft.</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="py-6 border-y border-surface-variant">
            <h3 className="font-headline-md text-headline-md mb-4">What's Included</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">category</span>
                <div>
                  <span className="block font-label-md text-label-md text-on-background">All Materials</span>
                  <span className="block font-body-sm text-sm text-on-surface-variant">Premium Tuscan clay, tools, and apron</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">local_cafe</span>
                <div>
                  <span className="block font-label-md text-label-md text-on-background">Refreshments</span>
                  <span className="block font-body-sm text-sm text-on-surface-variant">Artisan coffee and local pastries</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">local_fire_department</span>
                <div>
                  <span className="block font-label-md text-label-md text-on-background">Firing & Glazing</span>
                  <span className="block font-body-sm text-sm text-on-surface-variant">We fire your best piece (shipping extra)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">translate</span>
                <div>
                  <span className="block font-label-md text-label-md text-on-background">Languages</span>
                  <span className="block font-body-sm text-sm text-on-surface-variant">English, Italian</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Booking Sidebar */}
        <div className="lg:w-1/3">
          {/* Note: The 'hover-lift' class requires a custom addition in index.css if not already there, 
              but standard hover:shadow-md will also work well */}
          <div className="sticky top-28 bg-surface-container-lowest rounded-xl p-6 shadow-md border border-surface-variant transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="font-headline-lg text-headline-lg text-on-background">€85</span>
                <span className="font-body-md text-body-md text-on-surface-variant">/ person</span>
              </div>
            </div>

            {/* Date Selection */}
            <div className="mb-4">
              <label className="block font-label-md text-label-md mb-2">Select Date</label>
              <div className="border border-outline-variant rounded-lg p-3 flex justify-between items-center bg-surface cursor-pointer focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                <span className="font-body-md text-body-md text-on-surface-variant">Wed, Oct 25</span>
                <span className="material-symbols-outlined text-on-surface-variant">calendar_today</span>
              </div>
            </div>

            {/* Time Selection */}
            <div className="mb-4">
              <label className="block font-label-md text-label-md mb-2">Time Slot</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="border border-primary bg-primary-fixed text-on-primary-fixed py-2 rounded-lg font-label-md text-label-md transition-colors text-center">
                  Morning<br/><span className="font-normal text-xs">10:00 AM</span>
                </button>
                <button className="border border-outline-variant text-on-surface-variant py-2 rounded-lg font-label-md text-label-md hover:border-primary hover:text-primary transition-colors text-center">
                  Afternoon<br/><span className="font-normal text-xs">2:00 PM</span>
                </button>
              </div>
            </div>

            {/* Guest Count */}
            <div className="mb-6">
              <label className="block font-label-md text-label-md mb-2">Guests</label>
              <div className="flex items-center justify-between border border-outline-variant rounded-lg p-2 bg-surface">
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="font-body-md text-body-md text-on-background">2 Guests</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Book Action */}
            <button className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-3 rounded-xl mb-4 hover:bg-primary transition-colors">
              Book Now
            </button>
            
            <div className="text-center font-body-sm text-sm text-on-surface-variant flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm">event_available</span>
              Free cancellation up to 48 hours before
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkshopDetails;