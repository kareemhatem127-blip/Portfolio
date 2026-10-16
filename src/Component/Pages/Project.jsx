import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const myProjects = [
  {
    id: 1,
    title: 'Remasco Group',
    description: 'A professional corporate website built for Remasco Group, presenting their diverse business services, companies, and international projects with a responsive design.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    technologies: ['React', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    demoUrl: 'https://remascogroup.com/',
    githubUrl: 'https://github.com/your-username/remasco-group',
  },
  {
    id: 2,
    title: 'Qamar Factory',
    description: 'An industrial portfolio and company website for Qamar Factory, showcasing manufacturing capabilities, product catalog, and responsive contact sections.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    technologies: ['React', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    demoUrl: 'https://qamar-factory.com/',
    githubUrl: 'https://github.com/your-username/qamar-factory',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="bg-dark text-white py-5 min-vh-100 d-flex align-items-center">
      <div className="container py-4">
        {/* Title & Description */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 text-info">
            My Featured Projects
          </h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>
            Real-world web applications and commercial websites I have designed and developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 justify-content-center">
          {myProjects.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div key={project.id} className="col-12 col-md-6 col-lg-5">
                <div
                  className="card bg-secondary bg-opacity-10 border rounded-4 overflow-hidden h-100 text-white"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-8px)' : 'none',
                    borderColor: isHovered ? '#0dcaf0' : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: isHovered ? '0 12px 30px rgba(13, 202, 240, 0.2)' : 'none',
                  }}
                >
                  {/* Image Container with Zoom Effect */}
                  <div className="overflow-hidden position-relative" style={{ height: '230px' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{
                        transition: 'transform 0.5s ease',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column justify-content-between p-4">
                    <div>
                      <h3 className="card-title fw-bold mb-3 text-white">{project.title}</h3>
                      <p className="card-text text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stack Badges */}
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="badge bg-secondary bg-opacity-25 text-info border border-info border-opacity-25 px-2 py-1 rounded-2"
                            style={{ fontSize: '0.8rem' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links / Buttons */}
                      <div className="d-flex gap-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-info fw-semibold flex-grow-1 d-flex align-items-center justify-content-center gap-2 rounded-3"
                          style={{
                            transition: 'transform 0.2s ease',
                            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                          }}
                        >
                          <FaExternalLinkAlt size={16} />
                          Visit Website
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-light d-flex align-items-center justify-content-center px-3 rounded-3"
                          style={{
                            transition: 'transform 0.2s ease',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          }}
                          title="View Code on GitHub"
                        >
                          <FaGithub size={20} />
                        </a>
                      </div>
                    </div>
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