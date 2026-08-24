import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from 'react-hot-toast';

const WorkshopDetails = () => {
  // 1. Get the dynamic ID from the URL
  const { id } = useParams();
  const { addToCart } = useCart();


  // 2. Set up state
  const [workshop, setWorkshop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [guestCount, setGuestCount] = useState(1);

  // 3. Fetch the specific workshop data
  useEffect(() => {
    const fetchWorkshopDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/workshops/${id}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch workshop details");
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


  // Automatically generate the next 4 weekend dates
  const generateUpcomingWeekends = () => {
    const dates = [];
    let currentDate = new Date(); 

    while (dates.length < 4) {
      currentDate.setDate(currentDate.getDate() + 1);
      
      // getDay() returns 6 for Saturday and 0 for Sunday
      if (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
        const formattedDate = currentDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });
        dates.push(formattedDate);
      }
    }
    return dates;
  };

  const dynamicDates = generateUpcomingWeekends();

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
        <Link to="/workshops" className="hover:text-primary transition-colors">
          Workshops
        </Link>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
        <span>{workshop.category}</span>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
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
            <h1 className="font-headline-xl text-headline-xl text-on-background">
              {workshop.title}
            </h1>
            <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
              <span className="material-symbols-outlined">location_on</span>
              <span>{workshop.location}</span>
            </div>

            <div className="flex items-center gap-4 mt-2 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 inline-flex w-fit">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container/20 flex items-center justify-center">
                {/* Fallback avatar if no profile picture exists */}
                <span className="material-symbols-outlined text-primary text-2xl">
                  person
                </span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Hosted by Master Artisan
                </p>
                <p className="font-headline-md text-lg text-on-background">
                  {workshop.artisan.name}
                </p>
              </div>
            </div>
          </div>

          {/* Description & Bio */}
          <div className="py-stack-sm flex flex-col gap-6 font-body-lg text-body-lg text-on-surface-variant">
            <h2 className="font-headline-md text-headline-md text-on-background">
              About this experience
            </h2>
            <p>{workshop.description}</p>

            <h2 className="font-headline-md text-headline-md text-on-background mt-4">
              Meet your host
            </h2>
            <p>{workshop.artisan.bio}</p>
          </div>
        </div>

       {/* Right Column: Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-6 ambient-shadow flex flex-col gap-6">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-xl text-3xl text-primary">
                ${workshop.price}
              </span>
              <span className="font-body-md text-on-surface-variant">
                / person
              </span>
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

            {/* 1. Weekend Only Date Selection UI */}
            <div className="flex flex-col gap-2 mt-2">
              <label className="font-label-md text-on-surface-variant">
                Available Dates (Weekends Only):
              </label>
              <div className="flex gap-3 flex-wrap">
                {dynamicDates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`px-4 py-2 rounded-lg font-label-sm border transition-colors ${
                      selectedDate === date
                        ? 'bg-primary text-on-primary border-primary'
                        : 'bg-surface border-outline-variant hover:border-primary'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Guest Selection UI */}
            <div className="flex flex-col gap-2 mt-4 mb-2">
              <label className="font-label-md text-on-surface-variant">Number of Guests:</label>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors text-xl"
                  disabled={guestCount <= 1}
                >
                  -
                </button>
                <span className="font-headline-sm text-xl w-4 text-center">{guestCount}</span>
                <button 
                  onClick={() => setGuestCount(Math.min(workshop.maxGuests || 10, guestCount + 1))}
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-colors text-xl"
                  disabled={guestCount >= (workshop.maxGuests || 10)}
                >
                  +
                </button>
              </div>
              
              {/* Real-time total price preview */}
              <p className="font-headline-sm text-primary mt-2">
                Total: ${workshop.price * guestCount}
              </p>
            </div>

            {/* 3. Book Button */}
            <button 
              onClick={() => {
                if (!selectedDate) {
                  // alert('Please select a date for your workshop first!');
                  toast.error('Please select a date for your workshop first!');
                  return;
                }

                const workshopCartItem = {
                  _id: `${workshop._id}-${selectedDate}`, 
                  name: `${workshop.title} (${selectedDate})`, 
                  price: workshop.price,
                  images: workshop.images || [workshop.image], 
                  stockQuantity: workshop.spotsAvailable 
                };
                
                addToCart(workshopCartItem, guestCount); 
                // alert(`Added ${guestCount} ticket(s) for ${workshop.title} on ${selectedDate} to your cart!`);
                toast.success(`Added ${guestCount} ticket(s) to your cart!`);
              }}

              className="w-full bg-primary-container text-on-primary py-4 rounded-xl font-label-lg text-label-lg hover:bg-primary transition-colors mt-2 shadow-sm"
            >
              Book Experience
            </button>

            <p className="text-center font-label-sm text-on-surface-variant">
              You won't be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;
