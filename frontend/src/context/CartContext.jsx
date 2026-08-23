// import React, { createContext, useState, useContext } from 'react';

// // 1. Create the Context
// const CartContext = createContext();

// // 2. Create the Provider Component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add an item to the cart
//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       // Check if item is already in cart
//       const existingItem = prevItems.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map(item => 
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       // If new, add to cart with quantity 1
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   // Function to get total items in cart
//   const getCartCount = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, getCartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // 3. Custom Hook to use the Cart Context easily
// export const useCart = () => useContext(CartContext);


import React, { createContext, useState, useContext, useEffect } from 'react'; // <-- add useEffect here

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. UPDATE: Check localStorage when the app first loads
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('terraCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. NEW: Save to localStorage every single time cartItems changes
  useEffect(() => {
    localStorage.setItem('terraCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item._id === product._id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      
      return [...prevItems, { ...product, quantity }];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);