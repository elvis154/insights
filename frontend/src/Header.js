import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const { offsetWidth: width, offsetHeight: height } = logoRef.current;

      const rotationX = ((mouseY / height) - 0.5) * 120; // X axis rotation
      const rotationY = ((mouseX / width) - 0.5) * -120; // Y axis rotation

      if (logoRef.current) {
        logoRef.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      }
    };

    const handleMouseEnter = () => {
      if (logoRef.current) {
        logoRef.current.style.transition = 'transform 0.1s ease-out';
      }
    };

    const handleMouseLeave = () => {
      if (logoRef.current) {
        logoRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
        logoRef.current.style.transition = 'transform 0.4s ease-out';
      }
    };

    const logoElement = logoRef.current;
    logoElement.addEventListener('mousemove', handleMouseMove);
    logoElement.addEventListener('mouseenter', handleMouseEnter);
    logoElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      logoElement.removeEventListener('mousemove', handleMouseMove);
      logoElement.removeEventListener('mouseenter', handleMouseEnter);
      logoElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo" ref={logoRef}>
        <span className="logo-text">InsiGhtX</span>
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li>
            <a href="/home" className="nav-item">Home</a>
          </li>
          <li>
            <a href="/about-us" className="nav-item">About</a>
          </li>
          <li>
            <a href="/contact" className="nav-item">Contact</a>
          </li>
          <li>
            <a href="/signup" className="nav-item">Signup</a>
          </li>
          <li>
            <a href="/logout" className="nav-item">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
