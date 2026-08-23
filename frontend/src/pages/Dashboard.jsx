import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  
  // New state to hold the orders from MongoDB
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders when the dashboard loads
  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders/myorders', {
          headers: {
            Authorization: `Bearer ${user.token}`, // Pass the security token
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOrders(data); // Save the DB orders to state
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchMyOrders();
    }
  }, [user]);


  // Extract workshops from the standard orders
  // We identify them by checking if the name contains parentheses (which holds our date!)
  const upcomingWorkshops = [];
  
  orders.forEach((order) => {
    order.orderItems.forEach((item) => {
      if (item.name.includes('(') && item.name.includes(')')) {
        upcomingWorkshops.push({
          ...item,
          orderId: order._id,
          orderDate: order.createdAt
        });
      }
    });
  });



  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      
      {/* Profile Header Card */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border border-outline-variant/30">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-primary-container text-on-primary rounded-full flex items-center justify-center font-headline-xl text-3xl">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="font-headline-xl text-3xl text-on-background">Welcome, {user.name}</h1>
            <p className="font-body-lg text-on-surface-variant">{user.email}</p>
          </div>
        </div>
        <button 
          onClick={logout}
          className="bg-surface-variant text-on-surface-variant px-6 py-3 rounded-xl font-label-md hover:bg-error hover:text-on-error transition-colors shadow-sm"
        >
          Sign Out
        </button>
      </section>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        
        {/* Recent Orders Section (Now Dynamic!) */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border border-outline-variant/30 flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline-lg text-2xl text-on-background">Recent Orders</h2>
            <span className="material-symbols-outlined text-primary">local_mall</span>
          </div>
          
          {loading ? (
            <div className="py-10 text-center font-body-md text-on-surface-variant">Loading your orders...</div>
          ) : orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
              <span className="material-symbols-outlined text-5xl text-outline/50">inventory_2</span>
              <p className="font-body-md text-on-surface-variant">You haven't placed any orders yet.</p>
              <Link to="/marketplace" className="text-primary font-label-md hover:underline mt-2">
                Browse Marketplace
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2">
              {orders.map((order) => (
                <div key={order._id} className="bg-surface p-4 rounded-xl border border-outline-variant/50 flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                    <span className="font-label-sm text-on-surface-variant">Order #{order._id.substring(0, 8)}</span>
                    <span className="font-headline-sm text-primary">${order.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {order.orderItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center font-body-sm text-on-background">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover mix-blend-multiply" />
                          <span>{item.name} (x{item.quantity})</span>
                        </div>
                        <span>${item.price}</span>
                      </div>
                    ))}
                  </div>
                  <span className="font-label-sm text-on-surface-variant self-end mt-2">
                    Placed on {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

       {/* Upcoming Workshops Section (Now Dynamic!) */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border border-outline-variant/30 flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline-lg text-2xl text-on-background">Upcoming Workshops</h2>
            <span className="material-symbols-outlined text-primary">event_available</span>
          </div>
          
          {loading ? (
            <div className="py-10 text-center font-body-md text-on-surface-variant">Loading your schedule...</div>
          ) : upcomingWorkshops.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
              <span className="material-symbols-outlined text-5xl text-outline/50">calendar_month</span>
              <p className="font-body-md text-on-surface-variant">No workshops booked at the moment.</p>
              <Link to="/workshops" className="text-primary font-label-md hover:underline mt-2">
                Discover Workshops
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2">
              {upcomingWorkshops.map((workshop, idx) => {
                // Optional: Extract just the name and the date string if you want to style them separately
                // e.g., "Indigo Dyeing & Block Print (Aug 30)" -> name: "Indigo Dyeing & Block Print", date: "(Aug 30)"
                const namePart = workshop.name.substring(0, workshop.name.indexOf('(')).trim();
                const datePart = workshop.name.substring(workshop.name.indexOf('('));

                return (
                  <div key={idx} className="bg-primary-container/10 p-4 rounded-xl border border-primary-container/30 flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <img src={workshop.image} alt={workshop.name} className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div className="flex flex-col gap-1 flex-grow">
                      <span className="font-headline-sm text-on-background">{namePart}</span>
                      <div className="flex items-center gap-2 text-primary font-label-sm">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        <span>{datePart.replace('(', '').replace(')', '')}</span>
                      </div>
                      <span className="font-body-sm text-on-surface-variant mt-1">
                        Tickets: {workshop.quantity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;