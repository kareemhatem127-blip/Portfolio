import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white border-top border-secondary border-opacity-25 py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          
          {/* الاسم وحقوق الملكية */}
          <span className="fw-semibold text-secondary" style={{ fontSize: '0.95rem' }}>
            © {new Date().getFullYear()} <span className="text-info fw-bold">Kareem Hatem</span>
          </span>

          {/* أزرار الحسابات وسهم الصعود */}
          <div className="d-flex align-items-center gap-3">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kareem-hatem-646017386"
              target="_blank"
              rel="noreferrer"
              className="text-white-50 text-decoration-none transition-all hover-info"
              title="LinkedIn"
              style={{ transition: 'color 0.2s ease, transform 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0A66C2')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kareemhatem127-blip"
              target="_blank"
              rel="noreferrer"
              className="text-white-50 text-decoration-none transition-all"
              title="GitHub"
              style={{ transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              <FaGithub size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:kareem.hatem@example.com"
              className="text-white-50 text-decoration-none transition-all"
              title="Email"
              style={{ transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#EA4335')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              <FaEnvelope size={18} />
            </a>

            {/* فاصل بسيط */}
            <span className="text-secondary opacity-25">|</span>

            {/* سهم العودة لأعلى الصفحة */}
            <button
              onClick={scrollToTop}
              className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center p-0"
              style={{ width: '32px', height: '32px', transition: 'all 0.2s ease' }}
              title="Back to top"
            >
              <FaArrowUp size={12} />
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}