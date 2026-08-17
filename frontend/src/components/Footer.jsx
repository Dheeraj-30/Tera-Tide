import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low w-full py-stack-lg border-t border-outline-variant mt-auto">
      <div className="w-full px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="font-headline-md text-headline-md text-primary mb-4">Terra & Tide</div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            © 2026 Terra & Tide. Crafted for the Cultural Traveler.
            <br/>
            <span className="text-sm italic mt-2 block">Built during internship at Talking Crooks IT Pvt. Ltd.<br/>Developed by Dheeraj</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">Explore</h4>
          <Link to="/about" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">About</Link>
          <Link to="/auth" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Artisan Sign-up</Link>
          <Link to="/help" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Help Center</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">Social</h4>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;