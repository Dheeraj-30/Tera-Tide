import React from 'react';
import { Link } from 'react-router-dom';

const Discovery = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center px-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop" 
            alt="Artisanal pottery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl text-white font-serif tracking-tight">
            Crafted for the <br className="hidden md:block"/> Cultural Traveler.
          </h1>
          <p className="text-lg md:text-xl text-stone-200 font-light max-w-xl">
            Discover hand-crafted goods and immersive artisan workshops from masters of their craft.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link 
              to="/marketplace" 
              className="px-8 py-4 bg-amber-800 text-white rounded-xl font-medium hover:bg-amber-900 transition-colors shadow-lg"
            >
              Shop Marketplace
            </Link>
            <Link 
              to="/workshops" 
              className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/30 rounded-xl font-medium hover:bg-white/20 transition-colors shadow-lg"
            >
              Book a Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Pillars Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-6">
            <span className="text-amber-800 font-semibold tracking-wider uppercase text-sm">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Preserving heritage, <br/> one piece at a time.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Every item in our marketplace tells a story of generations of skill. By connecting you directly with master artisans, we ensure that traditional techniques survive and thrive in the modern world.
            </p>
            <Link to="/about" className="text-amber-800 font-medium hover:underline flex items-center gap-2 w-fit mt-2">
              Read our full story
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Image 1: Traditional Loom & Weaving */}
            <img 
              src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Traditional textile weaving" 
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            
            {/* Image 2: Earthy Handcrafted Ceramics */}
            <img 
              src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Handcrafted ceramic vases" 
              className="w-full h-64 object-cover rounded-2xl shadow-md mt-8"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Discovery;