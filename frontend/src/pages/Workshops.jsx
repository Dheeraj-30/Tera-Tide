import React from 'react';
import { Link } from 'react-router-dom';

const Workshops = () => {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      
      {/* Header Section */}
      <section className="flex flex-col gap-stack-sm md:w-2/3">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-background">Discover Workshops</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Immerse yourself in authentic heritage crafts. Book hands-on experiences with master artisans preserving centuries-old techniques.
        </p>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex flex-col md:flex-row gap-gutter items-center z-10 relative border border-outline-variant/30">
        <div className="w-full md:w-auto flex-grow flex items-center border border-outline-variant rounded-lg px-4 py-3 focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all bg-surface">
          <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
          <input 
            className="w-full bg-transparent border-none focus:ring-0 p-0 font-body-md text-body-md text-on-background placeholder-on-surface-variant outline-none" 
            placeholder="Search crafts, artisans, or locations..." 
            type="text"
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full md:w-auto">
          <select className="flex-1 md:flex-none border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface bg-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none cursor-pointer">
            <option value="">Category</option>
            <option value="pottery">Pottery</option>
            <option value="weaving">Weaving & Textiles</option>
            <option value="culinary">Culinary</option>
            <option value="painting">Painting</option>
          </select>
          <select className="flex-1 md:flex-none border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface bg-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none cursor-pointer">
            <option value="">Duration</option>
            <option value="half-day">Half Day (2-4 hrs)</option>
            <option value="full-day">Full Day (6-8 hrs)</option>
            <option value="multi-day">Multi-day</option>
          </select>
          <select className="flex-1 md:flex-none border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface bg-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none appearance-none cursor-pointer">
            <option value="">Region</option>
            <option value="india">Indian Heritage</option>
            <option value="japan">Japanese Tradition</option>
            <option value="mexico">Mexican Folk Art</option>
          </select>
        </div>
      </section>

      {/* Chips Row (Quick Filters) */}
      <section className="flex flex-wrap gap-3">
        <button className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-md text-label-md hover:bg-secondary-fixed-dim transition-colors flex items-center gap-2">
          Indian Artisans <span className="material-symbols-outlined text-sm">close</span>
        </button>
        <button className="border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-colors">Beginner Friendly</button>
        <button className="border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-colors">Masterclass</button>
        <button className="border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-colors">Textiles</button>
      </section>

      {/* Workshop Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        
        {/* Card 1: Kutch Indigo */}
        <article className="bg-surface-container-lowest rounded-xl ambient-shadow flex flex-col overflow-hidden group border border-outline-variant/30">
          <div className="relative h-64 overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM5gUtQiEYwFJ8E8URGjOtRj-Unt2SFJWdaC9U91HwM_jiomaRjy6UD-pIj23C_rTxbQutsCq4cmMfz_FJlxevM7ydcMzMeRz_mxU5tDx4UuXaoA8HHhyPmji2vfdMVzruXr74mQnXLS5v5lQ1AaEW7zylXJCKs0GGktuYiKwj7Qpd6i415iaqT0b-4hwamxeZ4g7pME8pomKmF7XEEHfAD0v0iJuMH1_O5RYzNmZNI5OnJSg-kNfL0Q"
              alt="Indigo Dyeing"
            />
            <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
              <span className="font-label-sm text-label-sm text-tertiary">6 hours</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow gap-stack-sm">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-headline-md text-headline-md text-on-background">Indigo Dyeing & Block Print</h3>
              <span className="font-headline-md text-headline-md text-primary">$120</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">person</span>
              <span className="font-body-md text-body-md">Khatri Family</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span className="font-body-md text-body-md">Kutch, Gujarat, India</span>
            </div>
            <div className="mt-auto pt-stack-sm border-t border-surface-variant">
              <Link to="/workshop" className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Card 2: Varanasi Weaving */}
        <article className="bg-surface-container-lowest rounded-xl ambient-shadow flex flex-col overflow-hidden group border border-outline-variant/30">
          <div className="relative h-64 overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx5D-iJu3l9kjvkPPT-uu662YgCOJx90kn-9GPekS5aOhnxL8jmqEC1qx80vIM4AJ8gGKOFJzaSgV6IN4o-e2AORWSlcBEv5K0GKcyXPxm-C4oQaKk7D61lXFmdCpqR3wxJnbmF4q-BNFICGjM325yJ5ugj4rlLc5EYG2Ew1-h6kctIAT4BafMEnlvWr0PVxTFujnchAHEG4jU6GvMPoDbIkHE--KVYzUpUvDqKdSPbUlbuGPIlsGsag"
              alt="Handloom Weaving"
            />
            <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
              <span className="font-label-sm text-label-sm text-tertiary">2 Days</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow gap-stack-sm">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-headline-md text-headline-md text-on-background">Traditional Handloom Weaving</h3>
              <span className="font-headline-md text-headline-md text-primary">$250</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">person</span>
              <span className="font-body-md text-body-md">Weavers Guild</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span className="font-body-md text-body-md">Varanasi, Uttar Pradesh, India</span>
            </div>
            <div className="mt-auto pt-stack-sm border-t border-surface-variant">
              <Link to="/workshop" className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Card 3: Jaipur Pottery */}
        <article className="bg-surface-container-lowest rounded-xl ambient-shadow flex flex-col overflow-hidden group border border-outline-variant/30">
          <div className="relative h-64 overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBredmvd3W_VFEwOgW3-8TXGu5bjX_jbUV1ZVaKHcgE09kDPk_AryNtyFrVDbw_9qWiNU5gPo4YNb_B0aTKsUNPp6f1a3SQWcPFJcTEwv2vOidvmZWrfjhexU2KjqflX36nL-mZ3vC6BE4KHXGe89-nhASUnTl1C2CfnGNo4lhJhXP5pMzzHqtBktK0OLJG78U4GIR4NHGPVsIkz7-2Ls4xppYbnA-DoxmYOolu9UkEn9RCJWQbLpDsHw"
              alt="Pottery"
            />
            <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
              <span className="font-label-sm text-label-sm text-tertiary">4 hours</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow gap-stack-sm">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-headline-md text-headline-md text-on-background">Terracotta Wheel Pottery</h3>
              <span className="font-headline-md text-headline-md text-primary">$85</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">person</span>
              <span className="font-body-md text-body-md">Studio Maati</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span className="font-body-md text-body-md">Jaipur, Rajasthan, India</span>
            </div>
            <div className="mt-auto pt-stack-sm border-t border-surface-variant">
              <Link to="/workshop" className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Card 4: Udaipur Painting */}
        <article className="bg-surface-container-lowest rounded-xl ambient-shadow flex flex-col overflow-hidden group border border-outline-variant/30">
          <div className="relative h-64 overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp-9Xl1kL7lH3zwJkwZdeZucS9LQ5uBqtUWWtgQDYqBfMnllzxis1eAb0ShQB34o92w02wdUjAr1NabXHkMERkkVdR2fff-0-wfJOZcvIAn4a_vA4-XwsqT8y6XyOKka16gf8-yVZqqCiw2iJi_z_eXtI_VBFd6o5dEnQozsKv68Go2j1ElA5TcZ-yv0VqBxcmJGJ9aU-ou0jMQVByaprdeAjI1z0jrpFRn-b0BfX1JL69D9q5eFflyg"
              alt="Miniature Painting"
            />
            <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
              <span className="font-label-sm text-label-sm text-tertiary">3 hours</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow gap-stack-sm">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-headline-md text-headline-md text-on-background">Miniature Fresco Painting</h3>
              <span className="font-headline-md text-headline-md text-primary">$110</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">person</span>
              <span className="font-body-md text-body-md">Rajput Heritage Arts</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span className="font-body-md text-body-md">Udaipur, Rajasthan, India</span>
            </div>
            <div className="mt-auto pt-stack-sm border-t border-surface-variant">
              <Link to="/workshop" className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>

      </section>

      {/* Load More */}
      <div className="flex justify-center mt-stack-md">
        <button className="border-[1.5px] border-secondary text-secondary font-label-md text-label-md px-8 py-3 rounded-xl hover:bg-surface-container-low transition-colors">
          Load More Experiences
        </button>
      </div>

    </div>
  );
};

export default Workshops;