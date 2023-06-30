import './Navbar.css';
import { useState, useEffect } from 'react';

function Navbar() {
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrinkNavbar(true);
      } else {
        setShrinkNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${shrinkNavbar ? 'shrink' : ''}`}>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/menu'>Menu</a>
      <a href='/reviews'>Reviews</a>
      <a href='/contact'>Contact</a>
    </nav>
  );
}
export default Navbar;
