# Terra & Tide 🌿

**Developed by:** Dheeraj  
**Built during internship at:** Talking Crooks IT Pvt. Ltd.

## 📖 Project Overview
Terra & Tide is a full-stack artisanal e-commerce and workshop booking platform. It was built to connect cultural travelers directly with master craftsmen. The application allows users to securely browse physical handcrafted goods, book date-specific immersive workshops, and manage their unified cart and order history through a personalized dashboard.

## 💻 Tech Stack
This project is built using the **MERN** stack:
* **Frontend:** React.js, Tailwind CSS, React Router, React Hot Toast
* **Backend:** Node.js, Express.js, JSON Web Tokens (JWT) for authentication
* **Database:** MongoDB (Mongoose)

## ✨ Core Features
* **Unified Shopping Cart:** A custom React Context that handles both physical merchandise (quantities) and digital workshops (guest capacities and dynamic dates) in a single flow, utilizing `localStorage` for data persistence.
* **Secure Authentication:** JWT-based login and registration system protecting private routes like the user dashboard and checkout process.
* **Dynamic Booking Logic:** Frontend logic to generate available upcoming weekend dates and dynamically restrict guest capacities based on total room limits.
* **Personalized Dashboard:** Securely fetches user-specific data from MongoDB to display recent order history and dynamically filters/formats upcoming booked workshops.
* **Modern UI/UX:** Fully responsive, earthy aesthetic built with Tailwind CSS, featuring glassmorphism elements and non-intrusive toast notifications.

## 🔮 Future Scope
While the core platform is fully functional, the architecture was designed to scale. Planned features for v2.0 include:

*   **Geospatial "Discover Nearby" Map:** Utilizing MongoDB's `$near` operator and Geospatial Indexes to plot artisans on an interactive Mapbox UI based on the user's current location.
*   **Artisan Admin Portal:** A dedicated, role-based dashboard for sellers to manage inventory, update workshop calendar availability, and track revenue.
*   **Cross-Device Cart Sync:** Moving the local storage cart state into the MongoDB User schema so carts remain synced across mobile and desktop sessions.
*   **Payment Gateway Integration:** Connecting Stripe or Razorpay APIs to handle live transactional data during checkout.