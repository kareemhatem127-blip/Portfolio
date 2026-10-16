import React, { useState } from 'react';
import { 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss, 
  SiSass, 
  SiGit 
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Sass', icon: SiSass, color: '#CC6699' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="bg-dark text-white py-5 min-vh-100 d-flex align-items-center">
      <div className="container py-4">
        {/* Title & Description */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 text-info">
            Skills & Technologies
          </h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>
            Technologies and tools I use to build modern, responsive, and performant web applications.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div 
                  className="card bg-secondary bg-opacity-10 border rounded-4 p-4 h-100 text-white"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-8px)' : 'none',
                    borderColor: isHovered ? skill.color : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: isHovered ? `0 12px 25px ${skill.color}33` : 'none',
                  }}
                >
                  <div className="card-body d-flex flex-column align-items-center justify-content-center text-center p-2 gap-3">
                    <div 
                      className="rounded-4 p-3 d-flex align-items-center justify-content-center w-100"
                      style={{ 
                        color: skill.color,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        fontSize: '5rem', // تكبير حجم الأيقونة
                      }}
                    >
                      <Icon 
                        style={{
                          transition: 'transform 0.3s ease',
                          transform: isHovered ? 'scale(1.2) rotate(6deg)' : 'scale(1)', // الزوم مع التدوير الخفيف عند الوقوف الماوس
                        }}
                      />
                    </div>
                    <h4 className="card-title m-0 fw-bold">{skill.name}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}