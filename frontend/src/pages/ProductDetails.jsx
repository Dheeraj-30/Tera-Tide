import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || errorData.message || 'Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 font-headline-md text-primary">Loading masterpiece...</div>;
  }

  if (error || !product) {
    return <div className="text-center py-20 font-body-md text-error">Error: {error}</div>;
  }

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
        <Link to="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span>{product.category}</span>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-on-surface">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Image */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden ambient-shadow bg-surface-variant">
          <img 
            className="w-full h-full object-cover mix-blend-multiply" 
            src={product.images[0]} 
            alt={product.name} 
          />
        </div>

        {/* Right Column: Product Details & Cart */}
        <div className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 border-b border-outline-variant/30 pb-6">
            <h1 className="font-headline-xl text-headline-xl text-on-background">{product.name}</h1>
            <p className="font-body-lg text-primary text-2xl">${product.price}</p>
          </div>

          <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 w-fit">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">handyman</span>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant">Crafted by</p>
              <p className="font-headline-md text-lg text-on-background">{product.artisan.name}</p>
            </div>
          </div>

          <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-4">
            <h2 className="font-headline-md text-headline-md text-on-background">The Story</h2>
            <p>{product.description}</p>
          </div>

          {/* Add to Cart Section */}
          <div className="mt-auto pt-6 flex flex-col gap-4 border-t border-outline-variant/30">
            
            <div className="flex items-center gap-4">
              <label className="font-label-md text-label-md text-on-surface-variant">Quantity:</label>
              <div className="flex items-center border border-outline-variant rounded-lg p-1 bg-surface">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded bg-surface-container flex items-center justify-center hover:bg-surface-variant transition-colors"
                  disabled={quantity <= 1}
                >
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="w-10 text-center font-body-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                  className="w-8 h-8 rounded bg-surface-container flex items-center justify-center hover:bg-surface-variant transition-colors"
                  disabled={quantity >= product.stockQuantity}
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <span className="text-label-sm text-on-surface-variant ml-2">
                {product.stockQuantity} in stock
              </span>
            </div>

            <button 
              onClick={() => {
                addToCart(product, quantity);
                // alert(`Added ${quantity} ${product.name} to your cart!`);
                toast.success(`Added ${quantity} ${product.name} to your cart!`);
              }}
              className="w-full bg-primary-container text-on-primary py-4 rounded-xl font-label-lg text-label-lg hover:bg-primary transition-colors flex justify-center items-center gap-2"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;