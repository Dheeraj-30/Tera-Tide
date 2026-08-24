import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // Import Auth to get the token!
import toast from 'react-hot-toast';

const Cart = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth(); // Grab the logged-in user
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = async () => {
    if (!user) {
      // alert('Please log in to place an order!');
      toast.error('Please log in to place an order!');
      navigate('/auth');
      return;
    }

    try {
      // 1. Format the data to match your new MongoDB Order model
      const orderData = {
        orderItems: cartItems.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.images[0]
        })),
        totalPrice: calculateTotal()
      };

      // 2. Send to backend with the secure JWT token in the headers
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`, // The security key!
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // alert('Order placed successfully!');
        toast.success('Order placed successfully! 🎉');
        clearCart(); // Empty the cart
        navigate('/dashboard'); // Send them to see their new order
      } else {
        const errorData = await response.json();
        // alert(`Checkout failed: ${errorData.message}`);
        toast.error(`Checkout failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      // alert('An error occurred during checkout.');
      toast.error('An error occurred during checkout.');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <h2 className="font-headline-md text-2xl text-on-background">Your cart is empty</h2>
        <Link to="/marketplace" className="bg-primary-container text-on-primary px-6 py-3 rounded-xl font-label-md hover:bg-primary transition-colors">
          Explore the Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      <h1 className="font-headline-xl text-3xl text-on-background">Your Cart</h1>
      
      <div className="flex flex-col gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 ambient-shadow">
            <div className="flex gap-4 items-center">
              <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover rounded-lg mix-blend-multiply" />
              <div>
                <h3 className="font-headline-sm text-lg text-on-background">{item.name}</h3>
                <p className="text-on-surface-variant font-body-sm">Qty: {item.quantity}</p>
              </div>
            </div>
            <p className="font-headline-md text-primary text-xl">${item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center border-t border-outline-variant/50 pt-6 mt-4">
        <h2 className="font-headline-lg text-2xl text-on-background">Total:</h2>
        <p className="font-headline-lg text-2xl text-primary">${calculateTotal()}</p>
      </div>

      <button 
        onClick={handleCheckout} 
        className="w-full md:w-1/3 self-end bg-primary-container text-on-primary py-4 rounded-xl font-label-lg mt-4 hover:bg-primary transition-colors"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;