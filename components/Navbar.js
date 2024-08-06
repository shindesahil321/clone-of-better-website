import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-10 ${navBackground ? 'bg-white' : 'bg-transparent'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo and Desktop Menu */}
          <div className="flex items-center flex-grow">
            <Link href="/" className="text-black font-bold text-xl">
              Better
            </Link>
            <div className="hidden md:flex ml-10 space-x-4">
              <Link href="/buy" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Buy</Link>
              <Link href="/refinance" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Refinance</Link>
              <Link href="/heloc" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">HELOC</Link>
              <Link href="/better-plus" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Better+</Link>
            </div>
          </div>
          {/* Desktop Contact and Sign In */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:123-456-7890" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            <Link href="/sign-in" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign In</Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 bg-white z-20 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileMenu} className="text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center mt-10 space-y-4">
              <Link href="/buy" className="text-black hover:text-gray-700 text-lg font-medium">Buy</Link>
              <Link href="/refinance" className="text-black hover:text-gray-700 text-lg font-medium">Refinance</Link>
              <Link href="/heloc" className="text-black hover:text-gray-700 text-lg font-medium">HELOC</Link>
              <Link href="/better-plus" className="text-black hover:text-gray-700 text-lg font-medium">Better+</Link>
              <a href="tel:123-456-7890" className="text-black hover:text-gray-700 text-lg font-medium">Contact</a>
              <Link href="/sign-in" className="text-black hover:text-gray-700 text-lg font-medium">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
