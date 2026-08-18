import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const WorkshopDetails = () => {
  // 1. Get the dynamic ID from the URL
  const { id } = useParams();

  // 2. Set up state
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [guestCount, setGuestCount] = useState(1);
  const [error, setError] = useState(null);

  // 3. Fetch the specific workshop data
  useEffect(() => {
    const fetchWorkshopDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/workshops/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch workshop details');
        }
        const data = await response.json();
        setWorkshop(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWorkshopDetails();
  }, [id]); // Re-run if the ID in the URL changes

  // 4. Handle Loading and Error States
  if (loading) {
    return (
      <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg text-center font-headline-md text-primary">
        Loading artisan details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg text-center font-body-md text-error">
        Error: {error}
      </div>
    );
  }

  if (!workshop) return null;

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
        <Link to="/workshops" className="hover:text-primary transition-colors">Workshops</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span>{workshop.category}</span>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-on-surface">{workshop.title}</span>
      </nav>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        
        {/* Left Column: Images & Info */}
        <div className="lg:col-span-2 flex flex-col gap-stack-md">
          
          {/* Header Image */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden ambient-shadow">
            <img 
              className="w-full h-full object-cover" 
              src={workshop.images[0]} 
              alt={workshop.title} 
            />
          </div>

          {/* Title & Artisan Profile */}
          <div className="flex flex-col gap-4 mt-4 border-b border-outline-variant/30 pb-stack-md">
            <h1 className="font-headline-xl text-headline-xl text-on-background">{workshop.title}</h1>
            <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
              <span className="material-symbols-outlined">location_on</span>
              <span>{workshop.location}</span>
            </div>
            
            <div className="flex items-center gap-4 mt-2 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 inline-flex w-fit">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container/20 flex items-center justify-center">
                {/* Fallback avatar if no profile picture exists */}
                <span className="material-symbols-outlined text-primary text-2xl">person</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant">Hosted by Master Artisan</p>
                <p className="font-headline-md text-lg text-on-background">{workshop.artisan.name}</p>
              </div>
            </div>
          </div>

          {/* Description & Bio */}
          <div className="py-stack-sm flex flex-col gap-6 font-body-lg text-body-lg text-on-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-background">About this experience</h2>
            <p>{workshop.description}</p>
            
            <h2 className="font-headline-md text-headline-md text-on-background mt-4">Meet your host</h2>
            <p>{workshop.artisan.bio}</p>
          </div>
        </div>

        {/* Right Column: Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-6 ambient-shadow flex flex-col gap-6">
            
            <div className="flex items-baseline gap-2">
              <span className="font-headline-xl text-3xl text-primary">${workshop.price}</span>
              <span className="font-body-md text-on-surface-variant">/ person</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <span className="material-symbols-outlined">schedule</span>
                <span>{workshop.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <span className="material-symbols-outlined">group</span>
                <span>Max {workshop.maxGuests} guests per session</span>
              </div>
            </div>

            <hr className="border-outline-variant/30" />

            {/* Fake Booking Form for UI */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Select Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container font-body-md" />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Guests</label>
              <div>
  <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Guests</label>
  <div className="flex items-center justify-between border border-outline-variant rounded-lg p-2 bg-surface">

    {/* Minus Button */}
    <button 
      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
      className="w-10 h-10 rounded-md bg-surface-container flex items-center justify-center hover:bg-surface-variant transition-colors text-on-surface"
      disabled={guestCount <= 1}
    >
      <span className="material-symbols-outlined">remove</span>
    </button>

    {/* Dynamic Number */}
    <span className="font-body-lg text-on-background">
      {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}
    </span>

    {/* Plus Button (Dynamically limited by the database maxGuests!) */}
    <button 
      onClick={() => setGuestCount(Math.min(workshop.maxGuests, guestCount + 1))}
      className="w-10 h-10 rounded-md bg-surface-container flex items-center justify-center hover:bg-surface-variant transition-colors text-on-surface"
      disabled={guestCount >= workshop.maxGuests}
    >
      <span className="material-symbols-outlined">add</span>
    </button>

  </div>
  {guestCount === workshop.maxGuests && (
    <p className="text-error text-label-sm mt-1">Maximum capacity reached</p>
  )}
</div>
              </div>
            </div>

            <button className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-label-md text-label-md hover:bg-primary transition-colors flex justify-center items-center gap-2 mt-2">
              Book Experience
            </button>
            <p className="text-center font-label-sm text-label-sm text-on-surface-variant">You won't be charged yet</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkshopDetails;