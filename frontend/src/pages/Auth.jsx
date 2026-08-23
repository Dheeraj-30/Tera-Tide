// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Auth = () => {
//   // React State to handle tabs and password visibility
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showSignupPassword, setShowSignupPassword] = useState(false);

//   return (
//     <div className="flex w-full min-h-screen bg-background">
//       {/* Left Side: Image / Brand Story (Hidden on Mobile) */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface-container-highest">
//         <div 
//           className="absolute inset-0 bg-cover bg-center" 
//           style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHQdvPQDphnfZfoKIOiw86rS47aentsmuIgz0dmGC-EYveIz2vJ9nIMrBUn7YUv-9MbuNPGgZr_F6NYGKiGxOZwdisT1VIFRj2yeARcAiLYyV_wtDTJtwXa1Lc4-v3J4hDvL2AvekWZuvSlhNc56oJgxeA5fzpSnnMRP1UUgkT-hYVIE5adUZK1aAhUGkcyWE9KA4qzIzbSWSCVmYN_gEI5J6Lp13IfwVdT6Mzb1nHUYRTEb1rUTGauQ')" }}
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
//         <div className="relative z-10 flex flex-col justify-end p-margin-desktop text-on-primary h-full max-w-lg">
//           <Link to="/">
//             <h1 className="font-headline-xl text-headline-xl mb-base hover:opacity-90 transition-opacity">Terra & Tide</h1>
//           </Link>
//           <p className="font-body-lg text-body-lg opacity-90">
//             Crafted for the Cultural Traveler. Join our community to discover authentic, slow-paced, and meaningful experiences.
//           </p>
//         </div>
//       </div>

//       {/* Right Side: Authentication Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop relative">
        
//         {/* Mobile Brand Logo (Visible only on small screens) */}
//         <div className="absolute top-margin-mobile left-margin-mobile lg:hidden">
//           <Link to="/">
//             <h1 className="font-headline-md text-headline-md text-primary">Terra & Tide</h1>
//           </Link>
//         </div>

//         {/* Auth Card */}
//         <div className="w-full max-w-[440px] bg-surface-container-lowest rounded-card shadow-ambient p-stack-md md:p-stack-lg relative z-10">
          
//           {/* Tab Navigation */}
//           <div className="flex gap-gutter border-b border-outline-variant mb-stack-md">
//             <button 
//               onClick={() => setIsLogin(true)}
//               className={`relative pb-2 font-headline-md text-headline-md transition-colors focus:outline-none ${isLogin ? 'text-primary after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-primary' : 'text-on-surface-variant hover:text-primary'}`}
//             >
//               Login
//             </button>
//             <button 
//               onClick={() => setIsLogin(false)}
//               className={`relative pb-2 font-headline-md text-headline-md transition-colors focus:outline-none ${!isLogin ? 'text-primary after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-primary' : 'text-on-surface-variant hover:text-primary'}`}
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Conditional Rendering: Show Login OR Sign Up based on state */}
//           {isLogin ? (
//             /* Login Form */
//             <form className="flex flex-col gap-stack-sm animate-[fadeIn_0.3s_ease-in-out]" onSubmit={(e) => e.preventDefault()}>
//               <div>
//                 <label className="block font-label-md text-label-md text-on-surface-variant mb-base" htmlFor="login-email">Email Address</label>
//                 <input 
//                   id="login-email" 
//                   type="email" 
//                   placeholder="hello@example.com" 
//                   required 
//                   className="w-full px-4 py-3 rounded-[12px] font-body-md text-on-background bg-surface-bright border border-[#D9D9D2] focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all outline-none"
//                 />
//               </div>
//               <div>
//                 <div className="flex justify-between items-center mb-base">
//                   <label className="block font-label-md text-label-md text-on-surface-variant" htmlFor="login-password">Password</label>
//                   <a href="#" className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors">Forgot Password?</a>
//                 </div>
//                 <div className="relative">
//                   <input 
//                     id="login-password" 
//                     type={showPassword ? "text" : "password"} 
//                     placeholder="••••••••" 
//                     required 
//                     className="w-full px-4 py-3 rounded-[12px] font-body-md text-on-background bg-surface-bright border border-[#D9D9D2] focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all outline-none"
//                   />
//                   <button 
//                     type="button" 
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary focus:outline-none"
//                   >
//                     <span className="material-symbols-outlined text-[20px]">
//                       {showPassword ? 'visibility_off' : 'visibility'}
//                     </span>
//                   </button>
//                 </div>
//               </div>
//               <button type="submit" className="w-full mt-base bg-primary-container hover:bg-surface-tint text-on-primary font-label-md text-label-md rounded-[12px] py-3 transition-colors shadow-sm">
//                 Log In
//               </button>
//             </form>
//           ) : (
//             /* Sign Up Form */
//             <form className="flex flex-col gap-stack-sm animate-[fadeIn_0.3s_ease-in-out]" onSubmit={(e) => e.preventDefault()}>
//               <div>
//                 <label className="block font-label-md text-label-md text-on-surface-variant mb-base" htmlFor="signup-name">Full Name</label>
//                 <input 
//                   id="signup-name" 
//                   type="text" 
//                   placeholder="Jane Doe" 
//                   required 
//                   className="w-full px-4 py-3 rounded-[12px] font-body-md text-on-background bg-surface-bright border border-[#D9D9D2] focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block font-label-md text-label-md text-on-surface-variant mb-base" htmlFor="signup-email">Email Address</label>
//                 <input 
//                   id="signup-email" 
//                   type="email" 
//                   placeholder="hello@example.com" 
//                   required 
//                   className="w-full px-4 py-3 rounded-[12px] font-body-md text-on-background bg-surface-bright border border-[#D9D9D2] focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block font-label-md text-label-md text-on-surface-variant mb-base" htmlFor="signup-password">Password</label>
//                 <div className="relative">
//                   <input 
//                     id="signup-password" 
//                     type={showSignupPassword ? "text" : "password"} 
//                     placeholder="Create a strong password" 
//                     required 
//                     className="w-full px-4 py-3 rounded-[12px] font-body-md text-on-background bg-surface-bright border border-[#D9D9D2] focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all outline-none"
//                   />
//                   <button 
//                     type="button" 
//                     onClick={() => setShowSignupPassword(!showSignupPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary focus:outline-none"
//                   >
//                     <span className="material-symbols-outlined text-[20px]">
//                       {showSignupPassword ? 'visibility_off' : 'visibility'}
//                     </span>
//                   </button>
//                 </div>
//               </div>
//               <button type="submit" className="w-full mt-base bg-primary-container hover:bg-surface-tint text-on-primary font-label-md text-label-md rounded-[12px] py-3 transition-colors shadow-sm">
//                 Create Account
//               </button>
//             </form>
//           )}

//           {/* Divider */}
//           <div className="flex items-center gap-4 my-stack-md">
//             <div className="h-px bg-surface-variant flex-1"></div>
//             <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Or</span>
//             <div className="h-px bg-surface-variant flex-1"></div>
//           </div>

//           {/* Social Login */}
//           <button type="button" className="w-full flex items-center justify-center gap-3 bg-surface-bright border border-outline-variant hover:bg-surface-container-low text-on-background font-label-md text-label-md rounded-[12px] py-3 transition-colors">
//             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
//               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
//               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
//               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
//             </svg>
//             Continue with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // We need this to redirect them after login!

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const { login } = useAuth();      // Grab our global login function
  const navigate = useNavigate();   // Grab the router navigation tool

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const endpoint = isLogin ? '/api/users/login' : '/api/users/register';
    
    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        login(data); // Stores the user and JWT globally!
        alert(`${isLogin ? 'Login' : 'Registration'} successful!`);
        navigate('/dashboard'); // Redirect them to their new dashboard
      } else {
        alert(data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Auth error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface">
      
      {/* Split Screen Container */}
      <div className="w-full max-w-5xl bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow flex flex-col md:flex-row border border-outline-variant/30">
        
        {/* Left Side: The Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            
            <h1 className="font-headline-xl text-4xl text-on-background mb-2">
              {isLogin ? 'Welcome Back' : 'Join Terra & Tide'}
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-8">
              {isLogin ? 'Please enter your details to sign in.' : 'Create an account to track your orders and bookings.'}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {!isLogin && (
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-on-surface-variant">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your full name"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-on-surface-variant">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-on-surface-variant">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="p-3.5 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button type="submit" className="mt-2 w-full bg-primary-container text-on-primary py-4 rounded-xl font-label-lg hover:bg-primary transition-colors shadow-sm">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 text-center font-body-md text-on-surface-variant">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="text-primary font-label-lg hover:underline transition-all"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: The Cover Image (Hidden on Mobile) */}
        <div className="hidden md:block md:w-1/2 relative bg-surface-variant">
          <img 
            src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop" 
            alt="Artisan crafting ceramics" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
          />
          {/* Optional: Add a subtle text overlay on the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
            <h2 className="text-white font-headline-lg text-3xl mb-2">Master the Craft</h2>
            <p className="text-white/80 font-body-lg">Connect with global artisans and preserve traditional techniques.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;