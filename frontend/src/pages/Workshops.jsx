import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Workshops = () => {
  // 1. Set up state for our data, loading status, and any errors
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch data when the component mounts
  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/workshops');
        if (!response.ok) {
          throw new Error('Failed to fetch workshops');
        }
        const data = await response.json();
        setWorkshops(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []); // Empty array means this runs exactly once when the page loads

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      
      {/* Header Section */}
      <section className="flex flex-col gap-stack-sm md:w-2/3">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-background">Discover Workshops</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Immerse yourself in authentic heritage crafts. Book hands-on experiences with master artisans preserving centuries-old techniques.
        </p>
      </section>

      {/* Search & Filter Bar (Kept static for now) */}
      <section className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex flex-col md:flex-row gap-gutter items-center z-10 relative border border-outline-variant/30">
        <div className="w-full md:w-auto flex-grow flex items-center border border-outline-variant rounded-lg px-4 py-3 focus-within:border-primary-container transition-all bg-surface">
          <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
          <input 
            className="w-full bg-transparent border-none focus:ring-0 p-0 font-body-md text-body-md outline-none" 
            placeholder="Search crafts, artisans, or locations..." 
            type="text"
          />
        </div>
      </section>

      {/* Handling Loading and Error States */}
      {loading && (
        <div className="text-center py-12 font-headline-md text-primary">
          Loading amazing experiences...
        </div>
      )}
      
      {error && (
        <div className="text-center py-12 font-body-md text-error">
          Error: {error}
        </div>
      )}

      {/* Dynamic Workshop Cards Grid */}
      {!loading && !error && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          
          {/* 3. Map through the live data from our database! */}
          {workshops.map((workshop) => (
            <article key={workshop._id} className="bg-surface-container-lowest rounded-xl ambient-shadow flex flex-col overflow-hidden group border border-outline-variant/30">
              <div className="relative h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                  src={workshop.images[0]} // Dynamic Image
                  alt={workshop.title}
                />
                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
                  <span className="font-label-sm text-label-sm text-tertiary">{workshop.duration}</span> {/* Dynamic Duration */}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow gap-stack-sm">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-headline-md text-headline-md text-on-background">{workshop.title}</h3> {/* Dynamic Title */}
                  <span className="font-headline-md text-headline-md text-primary">${workshop.price}</span> {/* Dynamic Price */}
                </div>
                
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  <span className="font-body-md text-body-md">{workshop.artisan.name}</span> {/* Dynamic Artisan Name (Populated!) */}
                </div>
                
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="font-body-md text-body-md">{workshop.location}</span> {/* Dynamic Location */}
                </div>
                
                <div className="mt-auto pt-stack-sm border-t border-surface-variant">
                  {/* Dynamic Link routing to the specific workshop ID */}
                  <Link to={`/workshop/${workshop._id}`} className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                    View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </section>
      )}

    </div>
  );
};

export default Workshops;