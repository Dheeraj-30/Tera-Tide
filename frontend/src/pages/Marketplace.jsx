import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  // 1. State for data, loading, and errors
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch products when the page loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      
      {/* Header Section */}
      <section className="flex flex-col gap-stack-sm md:w-2/3">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-background">Artisan Marketplace</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Shop authentic, handcrafted goods directly from master artisans. Every purchase supports traditional craftsmanship and sustainable livelihoods.
        </p>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-surface-container-lowest p-6 rounded-xl ambient-shadow flex flex-col md:flex-row gap-gutter items-center z-10 relative border border-outline-variant/30">
        <div className="w-full md:w-auto flex-grow flex items-center border border-outline-variant rounded-lg px-4 py-3 focus-within:border-primary-container transition-all bg-surface">
          <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
          <input 
            className="w-full bg-transparent border-none focus:ring-0 p-0 font-body-md text-body-md outline-none" 
            placeholder="Search ceramics, textiles, jewelry..." 
            type="text"
          />
        </div>
      </section>

      {/* States */}
      {loading && (
        <div className="text-center py-12 font-headline-md text-primary">
          Loading handcrafted goods...
        </div>
      )}
      
      {error && (
        <div className="text-center py-12 font-body-md text-error">
          Error: {error}
        </div>
      )}

      {/* Dynamic Products Grid */}
      {!loading && !error && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          
          {/* 3. Map through the live database products! */}
          {products.map((product) => (
            <article key={product._id} className="bg-surface-container-lowest rounded-xl ambient-shadow flex flex-col overflow-hidden group border border-outline-variant/30">
              
              {/* Product Image */}
              <div className="relative h-64 md:h-56 overflow-hidden bg-surface-variant">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out mix-blend-multiply" 
                  src={product.images[0]} 
                  alt={product.name}
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full flex items-center">
                  <span className="font-label-sm text-label-sm text-on-surface">{product.category}</span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-background line-clamp-1">{product.name}</h3>
                
                <div className="flex items-center gap-2 text-on-surface-variant mb-2">
                  <span className="font-body-sm text-body-sm">By {product.artisan.name}</span>
                </div>
                
                <div className="mt-auto flex justify-between items-center pt-4">
                  <span className="font-headline-md text-headline-md text-primary">${product.price}</span>
                  <Link 
                    to={`/product/${product._id}`} 
                    className="bg-primary-container text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    View
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

export default Marketplace;