import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Database, Globe, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Expense Tracker',
      description: 'A comprehensive full-stack application for tracking personal expenses with real-time data updates and intuitive user interface.',
      longDescription: 'Built with the MERN stack and TypeScript, this application features user authentication, expense categorization, data visualization with charts, and real-time updates. The backend includes robust API endpoints with proper validation and error handling.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript'],
      period: 'May 2025 - June 2025',
      features: [
        'Real-time expense tracking',
        'Category-based organization',
        'Data visualization with charts',
        'User authentication & authorization',
        'Responsive design'
      ],
      icon: <Database className="w-5 h-5 sm:w-6 h-6" />,
      gradient: 'from-blue-500 to-purple-600',
      githubLink: 'https://github.com/Shwetha576/Expense-Tracker',
      demoLink: 'https://expense-tracker.shwetha-m.in/'
    },
    {
      id: 2,
      title: 'Masters Management System',
      description: 'A sophisticated management system developed with Blazor and ASP.NET Core, designed to streamline administrative tasks with focus on performance and scalability.',
      longDescription: 'This enterprise-level application manages complex administrative workflows with role-based access control, automated reporting, and real-time notifications. Built with modern .NET technologies for optimal performance.',
      technologies: ['Blazor', 'ASP.NET Core', 'SQL Server', 'C#'],
      period: 'November 2024 - May 2025',
      features: [
        'Role-based access control',
        'Automated reporting system',
        'Real-time notifications',
        'Advanced search & filtering',
        'Scalable architecture'
      ],
      icon: <Code className="w-5 h-5 sm:w-6 h-6" />,
      gradient: 'from-green-500 to-teal-600',
      githubLink: 'https://github.com/Shwetha576/StudentManagementMudBlazor',
      demoLink: 'https://masterclass.shwetha-m.in/'
    },
    {
      id: 3,
      title: 'Gallery Sample',
      description: 'A visually stunning and responsive image gallery built using HTML and CSS, showcasing a collection of media with a clean and intuitive user interface.',
      longDescription: 'This project demonstrates proficiency in creating structured layouts with HTML and styling them with CSS to achieve a modern, user-friendly design. It features a responsive grid layout, smooth hover effects, and semantic HTML for accessibility, making it an ideal showcase of front-end development skills.',
      technologies: ['HTML', 'CSS'],
      period: 'July 2025 - August 2025',
      features: [
        'Responsive grid layout for all screen sizes',
        'Smooth hover effects and transitions',
        'Semantic HTML structure for accessibility',
        'Custom CSS styling for a modern aesthetic'
      ],
      icon: <ImageIcon className="w-5 h-5 sm:w-6 h-6" />,
      gradient: 'from-pink-500 to-orange-600',
      githubLink: 'https://github.com/Shwetha576/gallerysample',
      demoLink: 'http://gallery-sample.shwetha-m.in/'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-portfolio-accent mb-3 sm:mb-4">
            My Portfolio
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-portfolio-text-muted max-w-xl sm:max-w-2xl mx-auto">
            Showcasing my recent projects that demonstrate my skills in front-end and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-portfolio-surface rounded-xl overflow-hidden border border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-all duration-500 hover:shadow-portfolio hover:scale-105 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className="p-4 sm:p-6 border-b border-portfolio-accent/20">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-portfolio-text-muted text-xs sm:text-sm">
                        <Calendar size={12} className="mr-1" />
                        {project.period}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-portfolio-accent/40 text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
                <p className="text-portfolio-text-muted text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-6">
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-portfolio-text mb-2 sm:mb-3">Key Features</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-portfolio-text-muted text-xs sm:text-sm"
                      >
                        <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-portfolio-text mb-2 sm:mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-portfolio-accent text-white rounded-full text-xs sm:text-sm font-medium border border-portfolio-accent shadow-sm hover:bg-portfolio-accent-hover hover:shadow-md transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-portfolio-accent/20">
                  <p className="text-portfolio-text-muted text-xs sm:text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className={`text-center mt-8 sm:mt-10 lg:mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <a
            href="https://github.com/Shwetha576?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white px-6 sm:px-8 py-2 sm:py-3 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <Globe size={16} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;