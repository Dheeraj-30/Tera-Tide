import React from 'react';

const HelpCenter = () => {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">
            How can we help?
          </h1>
          <div className="max-w-xl mx-auto relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              type="text" 
              placeholder="Search for articles, booking help, or shipping info..." 
              className="w-full pl-12 pr-4 py-4 rounded-[12px] border border-outline-variant bg-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all outline-none font-body-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* FAQ Card 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">calendar_today</span>
              <h2 className="font-headline-md text-xl text-on-surface">Bookings & Cancellations</h2>
            </div>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="hover:text-primary cursor-pointer transition-colors">How do I cancel a workshop?</li>
              <li className="hover:text-primary cursor-pointer transition-colors">What is the refund policy?</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Can I reschedule my date?</li>
            </ul>
          </div>

          {/* FAQ Card 2 */}
          <div className="bg-surface-container-lowest p-6 rounded-[24px] border border-outline-variant/30 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">local_shipping</span>
              <h2 className="font-headline-md text-xl text-on-surface">Marketplace Shipping</h2>
            </div>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="hover:text-primary cursor-pointer transition-colors">Do you ship internationally?</li>
              <li className="hover:text-primary cursor-pointer transition-colors">How long does delivery take in India?</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Track an existing order</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-primary-fixed/20 p-8 rounded-[24px] text-center">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Still need help?</h2>
          <p className="font-body-md text-on-surface-variant mb-6">Our support team in Delhi is ready to assist you.</p>
          <button className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-[12px] hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto">
            <span className="material-symbols-outlined text-sm">mail</span>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;