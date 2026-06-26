import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const { personalInfo } = portfolioData;

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Approach', href: '#process', id: 'process' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sectionIds = ['home', 'about', 'work', 'process', 'services', 'contact'];
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 110) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav id="nav" className={scrolled ? 'sc' : ''}>
        <div className="ni">
          <a href="#home" className="nlogo">{personalInfo.name}</a>
          
          {/* Desktop Navigation */}
          <ul className="nlinks">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="nr">
            {/* Direct Download resume link */}
            <a
              href={personalInfo.resumePath}
              download="anamika-resume.pdf"
              className="nres resume-dl"
            >
              Resume ↓
            </a>
            <a
              href={personalInfo.bookingUrl || "#contact"}
              target={personalInfo.bookingUrl ? "_blank" : undefined}
              rel={personalInfo.bookingUrl ? "noopener noreferrer" : undefined}
              className="btn-a"
              style={{ fontSize: '13px', padding: '8px 18px' }}
            >
              Let's Talk →
            </a>
            
            {/* Mobile Hamburg Button */}
            <button
              className="nmenu-btn"
              onClick={toggleMenu}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`mdrawer ${menuOpen ? 'on' : ''}`}>
        <button
          className="mdrawer-close"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>
        <div className="mdrawer-links">
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={toggleMenu}
          >
            Home
          </a>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? 'active' : ''}
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mdrawer-r">
          <a
            href={personalInfo.resumePath}
            download="anamika-resume.pdf"
            className="nres resume-dl"
            style={{ width: 'fit-content', padding: '10px 24px', fontSize: '13px' }}
            onClick={toggleMenu}
          >
            Download Resume ↓
          </a>
          <a
            href={personalInfo.bookingUrl || "#contact"}
            target={personalInfo.bookingUrl ? "_blank" : undefined}
            rel={personalInfo.bookingUrl ? "noopener noreferrer" : undefined}
            className="btn-a"
            style={{ fontSize: '14px', padding: '10px 24px' }}
            onClick={toggleMenu}
          >
            Let's Talk →
          </a>
        </div>
      </div>
    </>
  );
};
