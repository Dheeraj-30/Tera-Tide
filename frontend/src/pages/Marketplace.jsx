import React from 'react';
import { useCart } from '../context/CartContext';




const Marketplace = () => {

    const { addToCart } = useCart(); // <-- Initialize the hook

  // Dummy product to test with
  const product1 = { id: 1, name: "Terracotta Ridge Vase", price: 85 };
  const product2 = { id: 2, name: "Sage Weave Throw", price: 120 };

  return (
 <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Sidebar Filters (md:col-span-3) */}
      <aside className="md:col-span-3 space-y-stack-md hidden md:block">
        <div className="glass-card rounded-[24px] p-4">
          <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Filters</h3>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="font-label-md text-label-md text-on-surface-variant mb-3 uppercase tracking-wider">Categories</h4>
            <div className="space-y-2 font-body-md text-body-md text-on-surface">
              <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <input defaultChecked className="filter-checkbox rounded border-outline-variant w-4 h-4" type="checkbox" />
                Ceramics
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <input className="filter-checkbox rounded border-outline-variant w-4 h-4" type="checkbox" />
                Textiles
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <input className="filter-checkbox rounded border-outline-variant w-4 h-4" type="checkbox" />
                Jewelry
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <input className="filter-checkbox rounded border-outline-variant w-4 h-4" type="checkbox" />
                Woodwork
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h4 className="font-label-md text-label-md text-on-surface-variant mb-3 uppercase tracking-wider">Price Range</h4>
            <div className="space-y-2 font-body-md text-body-md text-on-surface">
              <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <input className="filter-checkbox rounded border-outline-variant w-4 h-4" type="checkbox" />
                Under $50
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <input className="filter-checkbox rounded border-outline-variant w-4 h-4" type="checkbox" />
                $50 - $150
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <input className="filter-checkbox rounded border-outline-variant w-4 h-4" type="checkbox" />
                Over $150
              </label>
            </div>
          </div>

          {/* Origin Filter */}
          <div>
            <h4 className="font-label-md text-label-md text-on-surface-variant mb-3 uppercase tracking-wider">Origin</h4>
            <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-2 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
              <option>Any Region</option>
              <option>Latin America</option>
              <option>Southeast Asia</option>
              <option>North Africa</option>
            </select>
          </div>
        </div>
      </aside>

      {/* Product Grid Area (md:col-span-9) */}
      <div className="md:col-span-9">
        {/* Header & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-stack-md gap-4">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-on-background mb-1">Marketplace</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">248 unique handmade items</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-label-md text-label-md text-on-surface-variant">Sort by:</span>
            <select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-1.5 font-label-md text-label-md focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer">
              <option>Newest Arrivals</option>
              <option>Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="glass-card rounded-[24px] overflow-hidden card-hover transition-all duration-300 group flex flex-col h-full bg-surface-container-lowest">
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container-high rounded-t-[24px]">
              <img 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKneke4lOOuZPzNipXPDsPIpKh0BSsr68E-3NNxZFVMTTyDSjqB-Ji1mbSSdQc-x6M92MjhAF2lKaBjCK_r_iXm_NnxwveSYy0mZmxgEPNSec5FdA1sXKfYfnU3bGiI3tB62xcc-igKaDY8rUKKW1XT9NJ5tGyGywLPrA921hAdnlF2KaXvVLiW_FzGd5gK0VlH1niwciW0BfSV1Wx8pwSMchbBgnDFpNWdIxUhbitj5huvP6Br989xQ" 
                alt="Terracotta Ridge Vase" 
              />
              <div className="absolute top-3 left-3">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Ceramics</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">Terracotta Ridge Vase</h3>
                <span className="font-body-md text-body-md font-semibold text-primary">$85</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4 line-clamp-2">
                Hand-thrown by artisan Maria in Oaxaca, this vase features organic ridges inspired by local landscapes.
              </p>
              <div className="mt-auto">
               <button 
                  onClick={() => addToCart(product1)} 
                  className="w-full bg-primary-container text-on-primary py-2 rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-tint transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">shopping_bag</span> Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="glass-card rounded-[24px] overflow-hidden card-hover transition-all duration-300 group flex flex-col h-full bg-surface-container-lowest">
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container-high rounded-t-[24px]">
              <img 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUKdssNh9I38mfamf5LuWsA1lGMktILpyfslYQu0RObvCg1BstBM2ktUvfGJARdGi3aNK8u8YIkU8zF9XsopY8bq8TZf0VErM8PdVkgCuKMAknaAX7clvxDBijAxb5HPmd9SL_r9zG2BMblciMQIRaVmSZ2gWxVphURw92fPJDTuG-T17uLOAFC1NNU4S3e-s3g435UYS0aXVq0RcUbX5TIEZIHud1QgAb8AisL6_xet3XGWTE2M00uQ" 
                alt="Sage Weave Throw" 
              />
              <div className="absolute top-3 left-3">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Textiles</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">Sage Weave Throw</h3>
                <span className="font-body-md text-body-md font-semibold text-primary">$120</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4 line-clamp-2">
                Woven on a traditional backstrap loom by the Hernandez collective, using naturally dyed organic cotton.
              </p>
              <div className="mt-auto">
            <button 
                  onClick={() => addToCart(product2)} 
                  className="w-full bg-primary-container text-on-primary py-2 rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-tint transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">shopping_bag</span> Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="glass-card rounded-[24px] overflow-hidden card-hover transition-all duration-300 group flex flex-col h-full bg-surface-container-lowest">
            <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-surface-container-high rounded-t-[24px]">
              <img 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN7QlkBFsFn_zmsMCBjk687xY_w_IALtxB6qTTX5ByWrgI8XCdLPmeU2BYKelbE-bdcGccx0uFpfUCBGHHFt3o0O_jeTnBIE7-K3IoXGubjU7BbU5Rf29zF8HTIPTKdveq9H0tl-UuT8qoUNQH7oxQUaBlSvvNeUrg082m5fVON9Nh5PwRS3udwhEES1J_e2QxRSTkkrFiBsWXI7JDthwTO8so7_ZA5ddlWsOgwf2FLrNDpIN2-yOo1w" 
                alt="Raw Tourmaline Ring" 
              />
              <div className="absolute top-3 left-3">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Jewelry</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">Raw Tourmaline Ring</h3>
                <span className="font-body-md text-body-md font-semibold text-primary">$65</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4 line-clamp-2">
                Crafted from recycled silver and ethically sourced stones by independent silversmith Elena.
              </p>
              <div className="mt-auto">
                <button className="w-full bg-primary-container text-on-primary py-2 rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-tint transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">shopping_bag</span> Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="glass-card rounded-[24px] overflow-hidden card-hover transition-all duration-300 group flex flex-col h-full bg-surface-container-lowest">
            <div className="relative w-full aspect-square overflow-hidden bg-surface-container-high rounded-t-[24px]">
              <img 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLI4EB0GeiVt4cpSLhEmjuHzocrBV8OYLNW5w8OZ451xHcgqRBbB61msDVW4h61fTEyzmFS-ipB2fW_oFlwWeRQMYcg6IDtfSSU7O8ECjGS1cXBejQWkGRl8171oDZ592tgc5nAyw6kmqxBK-L0Mts4un9H5aJKbLAA0qAIolsKHhDTjZxBoM0fRQHV0PJN7j07uOGtoOpzcibqAkoi1dQ_dD7ugT-L7VyUiVSxDwjGomFNCBHYUt_Jw" 
                alt="Olive Wood Bowl" 
              />
              <div className="absolute top-3 left-3">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Woodwork</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">Olive Wood Bowl</h3>
                <span className="font-body-md text-body-md font-semibold text-primary">$95</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-4 line-clamp-2">
                Hand-carved from sustainably sourced olive wood, finished with natural beeswax for a food-safe seal.
              </p>
              <div className="mt-auto">
                <button className="w-full bg-primary-container text-on-primary py-2 rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-tint transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">shopping_bag</span> Add to Cart
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Pagination / Load More */}
        <div className="mt-stack-lg flex justify-center">
          <button className="text-secondary font-label-md text-label-md hover:text-primary transition-colors py-2 px-6">
            View More Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;