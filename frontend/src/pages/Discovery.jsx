import React from 'react';

const Discovery = () => {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-grow">
      {/* Hero Section */}
      <section className="py-stack-lg mt-stack-sm mb-stack-lg">
        <div className="relative w-full h-[614px] min-h-[400px] rounded-xl overflow-hidden card-shadow">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('home_img.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm tracking-widest uppercase">
              Cultural Immersion
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-primary mb-4">
              Connect with the Heart of the Local Culture
            </h1>
            <p className="font-body-lg text-body-lg text-surface-bright/90 mb-8 max-w-xl">
              Discover authentic craftsmanship, meet master artisans, and learn centuries-old techniques in intimate, hands-on workshops.
            </p>
            <button className="bg-primary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-95 shadow-sm inline-flex items-center gap-2">
              Start Exploring
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Find Artisans Nearby Map  */}
      <section className="mb-stack-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-md gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Find Artisans Nearby</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Explore workshops and studios in your current location.</p>
          </div>
          <div className="relative w-full md:w-auto">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              className="w-full md:w-80 pl-10 pr-4 py-3 rounded-lg border border-outline-variant bg-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-shadow outline-none font-body-md text-body-md" 
              placeholder="Search locations or crafts..." 
              type="text" 
            />
          </div>
        </div>
        <div className="w-full h-[400px] rounded-xl overflow-hidden card-shadow relative bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
           {/* Map Placeholder  */}
          <img 
            className="w-full h-full object-cover opacity-80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARQlp7qJR4bmNB3y5yXmP5yB9p2XcH0GtBeYBcYE4QPtpIAztpU3PDkxU5H7keU7Pjl3yNv0Z9RuVjuse0Xi9RolErMO7WgP4Uuw6Ib9IM4lHEHbXyNLP_8gwzySI1BvCbjCFIV5EmCYt6RQsTRIWZL-HeKc2FDngJD5FmVOyZ-mIXQqcnfFLhDo0qu947-sEb9rgQDAAJqbfVRoa-r8zDlPxghMnwuGgT7f7OXTTiw5GWT7b9O4Cpdw" 
            alt="Map showing artisan locations" 
          />
           {/* Example Map UI overlay  */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-surface rounded-xl p-4 card-shadow flex gap-4 items-center">
            <img 
              className="w-16 h-16 rounded-lg object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKfWIagNaDz7T1F8Ugbx75HOijGm5q4LgryxLre4PE_iGNMgIsJU3_lGnQUInOcR3jutlbLihdGavxyIlkmQJT7MpL8Bk2B41vI5UkmFPnxXFlgZMrgaMmz7paHXrraR5RkSL_5zDgZfDSpszLfTHc29fZmULhCH3gkZlPCUhlwuVknJBSvdVshHM_tfvTahQg0z_3L94ue4spVmpD5PvGlkEOxGvrIB8N99ZEFuZzgEIk9--UQY3OFQ" 
              alt="Mateo's Ceramic Studio" 
            />
            <div>
              <h3 className="font-label-md text-label-md font-semibold text-on-surface">Mateo's Ceramic Studio</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span> 1.2 km away
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Discovery;