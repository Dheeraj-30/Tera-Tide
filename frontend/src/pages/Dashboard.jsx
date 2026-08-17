import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg grid grid-cols-1 md:grid-cols-12 gap-gutter">
      
      {/* Sidebar / Profile Settings */}
      <aside className="md:col-span-3 space-y-stack-md">
        <div className="bg-surface-container-lowest p-6 rounded-[24px] shadow-sm border border-outline-variant/30">
          <div className="flex flex-col items-center mb-6">
            <img 
              className="w-24 h-24 rounded-full object-cover mb-4" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFk7sEN5Lo2Qec34fjgoQQGpE4In6fCudui0hlxZ3a1e2VObW9kn39AyZnJ_Iy4SE4VKjQwm2zzOrKNTP3XLU5BOj5dd08E40CutzYrjcEpzDJ4DSa190n0aCyeFbt71kmiidUwUfahebEI87vLZgdbdcD4cCfEWnTmUxQCf1FgiAnBsmdI7pX5Vlv8HDGZJVIhTm7TiuDGOtwZeLAf188r42YLgpoxXFMRNYgAxFywrgW1GNxB7kZhg" 
              alt="Elena Rossi Portrait" 
            />
            <h2 className="font-headline-md text-headline-md text-on-surface">Elena Rossi</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Member since 2023</p>
          </div>
          
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 p-3 bg-surface-container-low rounded-lg text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined">person</span>
              <span>Account Info</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 hover:bg-surface-container-low rounded-lg text-on-surface-variant transition-colors font-label-md text-label-md">
              <span className="material-symbols-outlined">credit_card</span>
              <span>Payment Methods</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 hover:bg-surface-container-low rounded-lg text-on-surface-variant transition-colors font-label-md text-label-md">
              <span className="material-symbols-outlined">favorite</span>
              <span>Saved Artisans</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 hover:bg-surface-container-low rounded-lg text-on-surface-variant transition-colors font-label-md text-label-md">
              <span className="material-symbols-outlined">settings</span>
              <span>Preferences</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Dashboard Content */}
      <div className="md:col-span-9 space-y-stack-lg">
        
        {/* Welcome Header */}
        <section>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-2">Welcome back, Elena</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">You have 2 upcoming workshops and 1 order on the way.</p>
        </section>

        {/* Bento Grid Layout for Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          
          {/* Your Itinerary */}
          <section className="glass-card rounded-[24px] p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">Your Itinerary</h2>
              <a href="#" className="text-secondary font-label-sm text-label-sm hover:text-primary transition-colors">View All</a>
            </div>
            
            <div className="space-y-6">
              {/* Itinerary Item 1 */}
              <div className="flex flex-col sm:flex-row gap-6 p-4 rounded-xl hover:bg-surface-container-low transition-colors card-hover border border-transparent hover:border-outline-variant/50">
                <div className="w-full sm:w-1/3 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTGpuV8gv2OBmwZYqq6gRy59GM5fblKXqmLUS-ENqiMGl80kMPml6yEDEZZYw7z5Z3m7OLOFImY-mYx6w-CM_EfG7JsrSxmHqP7zOhSpwgM8eB-aDVvhR-boLaSgS7ZxX3n-jQr3CjcPjhAZbSSzoTgQlReNDzwN7yLuO43FnxPyVzlhP7yWF8OHWL4TG1c_WmYkKpFC6ZTViqkYTSxzakELtZzQrNx-gPRqH1rj-iucmTKjTGvay5og" 
                    alt="Tuscan Pottery" 
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-label-md text-label-md text-on-surface text-lg">Tuscan Pottery Masterclass</h3>
                      <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Upcoming</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-sm">calendar_today</span> Oct 24, 2026 • 10:00 AM
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">location_on</span> Via delle Fornaci 12, Florence, Italy
                    </p>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="bg-primary-container text-on-primary font-label-md text-label-md px-4 py-2 rounded-[12px] hover:opacity-90 transition-opacity">Get Directions</button>
                    <button className="text-secondary font-label-md text-label-md px-4 py-2 hover:bg-surface-container-high rounded-[12px] transition-colors">Details</button>
                  </div>
                </div>
              </div>

              <hr className="border-outline-variant/30" />

              {/* Itinerary Item 2 */}
              <div className="flex flex-col sm:flex-row gap-6 p-4 rounded-xl hover:bg-surface-container-low transition-colors card-hover border border-transparent hover:border-outline-variant/50">
                <div className="w-full sm:w-1/3 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQMco4LibztVLtAtuFejfELpqIf78M7tgPywiB4XCM755-UWODMC4ZyyyFni-6VcYc21v_mS4kyf31QWxhuvKjGDr4iZlpI1f_EVRef3t-4jbQqI_bfFAmfB--xwy_rFkhi_WDFKPM7jWyRdLnexyaCDgKBvdqNbXik7ZacAbZfGFd3w8s493CoE_BkSQSj_sxZegtQscPG7bw-j25eof8PjjIjz-MNe_I21xntpcBmr2NrqiNR5_Q5g" 
                    alt="Provençal Herb Foraging" 
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-label-md text-label-md text-on-surface text-lg">Provençal Herb Foraging & Cooking</h3>
                      <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">In 3 Weeks</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-sm">calendar_today</span> Nov 12, 2026 • 09:00 AM
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">location_on</span> 45 Route de Cézanne, Aix-en-Provence
                    </p>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="bg-primary-container text-on-primary font-label-md text-label-md px-4 py-2 rounded-[12px] hover:opacity-90 transition-opacity">Get Directions</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Order History */}
          <section className="glass-card rounded-[24px] p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">Order History</h2>
              <a href="#" className="text-secondary font-label-sm text-label-sm hover:text-primary transition-colors">View All</a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Order Card 1 */}
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] p-4 flex flex-col justify-between card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Njw4VQ41GQfOmz0w5Vb37EI4NT4vtqxnRKhXhSDd4kvKiVq1qtDBTS-b6umHwObkQXnYtUM28Y6Xd5fAo5xlRqU9HJRvqAXiXEjOPkRXygMka-DVS21_T-mgv28p5X-qzL0wMoXiUuzhkuxoNTmbyl0yY9VsLZYM5l0KuvhvnlVvcle9OlsBgZrkS2fYkeJEgtpWbOp9pZEurx4Pu7Yi-d9lmShkRpxijToAqpnFdWSBC7ld86cviA" 
                      alt="Oaxacan Woven Throw" 
                    />
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface mb-1">Oaxacan Woven Throw</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-2">By Artisan Textiles</p>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-sm">local_shipping</span>
                      <span className="font-label-sm text-label-sm">Shipped</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 pt-4 border-t border-outline-variant/30">
                  <span className="font-body-md text-body-md text-on-surface">$145.00</span>
                  <button className="border-[1.5px] border-secondary text-secondary font-label-md text-label-md px-4 py-1.5 rounded-[12px] hover:bg-secondary/5 transition-colors">Track Order</button>
                </div>
              </div>

              {/* Order Card 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[16px] p-4 flex flex-col justify-between card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS4oSVURRLOMcchRT3lD-ppflvKHWChBDsrl2WDU5mbh8TKYSBJ7m1g9TPOkpf5SD32nNuuTsBgO-_wi_GI6kRr32UdJCuCVMox5OXi0DlPqiFIWJ0nsb303Vl489d1iz2ORDA9hWej0LgvHrChC1bQ_DOoeM4Adw4XQBvp3FYr1s6u5nOZHCpyfjiKqFcGfZV1EcQGXjB4I8kx91gG86YLCdmvr4MwYxembSpYixjlym4DnQjP1pB_g" 
                      alt="Olive Wood Bowl" 
                    />
                  </div>
                  <div>
                    <h3 className="font-label-md text-label-md text-on-surface mb-1">Olive Wood Serving Bowl</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-2">By Mateo Rossi</p>
                    <div className="flex items-center gap-1 text-secondary"> {/* text-secondary-container-on isn't standard, used text-secondary */}
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span className="font-label-sm text-label-sm">Delivered Oct 10</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 pt-4 border-t border-outline-variant/30">
                  <span className="font-body-md text-body-md text-on-surface">$85.00</span>
                  <button className="text-secondary font-label-md text-label-md px-4 py-1.5 hover:bg-surface-container-high rounded-[12px] transition-colors">Buy Again</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;