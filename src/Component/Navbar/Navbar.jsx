import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  // متابعة السكرول لتغيير خلفية الـ Navbar وتحديد السكشن النشط
  useEffect(() => {
    const handleScroll = () => {
      // تغيير شكل الهيدر بعد سكرول 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // تحديد السكشن الظاهر على الشاشة
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // دالة السكرول الناعم للسكشن عند الضغط
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false); // إغلاق قائمة الموبايل بعد الضغط
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Hero', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-black bg-opacity-75 shadow-lg border-bottom border-secondary border-opacity-25'
          : 'py-3 bg-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1050,
      }}
    >
      <div className="container">
        {/* اللوجو / الاسم */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className="navbar-brand fw-bold fs-4 text-primary d-flex align-items-center gap-1"
        >
          <span>Portfolio</span>
        </a>

        {/* زرار الموبايل custom toggler */}
        <button
          className="navbar-toggler border-0 text-white p-2 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes size={22} className="text-primary" /> : <FaBars size={22} />}
        </button>

        {/* القائمة الرئيسية */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1 align-items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li className="nav-item w-100 w-lg-auto text-center" key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`nav-link px-3 py-2 rounded-pill fw-semibold transition-all ${
                      isActive ? 'text-info bg-info bg-opacity-10' : 'text-white-50'
                    }`}
                    style={{
                      transition: 'all 0.25s ease',
                      fontSize: '0.95rem',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}

            {/* زرار Hire Me / التواصل المباشر */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0 w-100 w-lg-auto text-center">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn btn-outline-info rounded-pill px-4 py-2 fw-semibold btn-sm transition-all"
                style={{ transition: 'all 0.3s ease' }}
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}





