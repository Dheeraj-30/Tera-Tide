import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // <-- Import the hook
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { getCartCount } = useCart(); // <-- Get the cart count function
  const cartCount = getCartCount();
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto bg-background/80 backdrop-blur-md shadow-sm">
      <div className="font-headline-lg text-3xl md:text-4xl font-bold text-primary tracking-tight">
        <Link to="/">Terra & Tide</Link>
      </div>
      <div className="hidden md:flex gap-gutter items-center">
        <Link to="/" className="font-label-md text-label-md text-secondary hover:text-primary transition-colors hover:bg-surface-container-low px-3 py-2 rounded-lg">
          Discovery
        </Link>
        <Link to="/workshops" className="font-label-md text-label-md text-secondary hover:text-primary transition-colors hover:bg-surface-container-low px-3 py-2 rounded-lg">
          Workshops
        </Link>
        <Link to="/marketplace" className="font-label-md text-label-md text-secondary hover:text-primary transition-colors hover:bg-surface-container-low px-3 py-2 rounded-lg">
          Marketplace
        </Link>
      </div>
      
      {/* Updated Icons Section */}
      <div className="flex items-center gap-4">
        <button aria-label="Search" className="text-secondary hover:text-primary transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>
        
        {/* Cart Icon with Badge */}
      
        <Link to="/cart" aria-label="Cart" className="relative text-secondary hover:text-primary transition-colors p-2 rounded-full active:scale-95 duration-150">
          <span className="material-symbols-outlined">shopping_cart</span>
          
          {getCartCount() > 0 && (
            <span className="absolute top-0 right-0 bg-primary-container text-on-primary text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {getCartCount()}
            </span>
          )}
        </Link>

        {/* User Authentication Menu */}
        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="font-label-md text-on-surface hover:text-primary transition-colors">
              Hi, {user.name.split(' ')[0]}
            </Link>
            <button 
              onClick={logout}
              className="bg-surface-variant text-on-surface-variant px-4 py-2 rounded-lg font-label-sm hover:bg-error hover:text-on-error transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/auth" aria-label="Login" className="text-secondary hover:text-primary transition-colors p-2 rounded-full">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;