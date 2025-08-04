import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Settings, 
  Zap,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications using MERN stack, .NET, and Blazor with modern development practices.',
      features: [
        'React & TypeScript Frontend',
        'Node.js & .NET Backend',
        'Database Design & Implementation',
        'API Development & Integration'
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Solutions',
      description: 'Developing efficient backend solutions with Node.js, Express, SQL Server, and MongoDB for optimal performance.',
      features: [
        'RESTful API Development',
        'Database Architecture',
        'Authentication & Authorization',
        'Performance Optimization'
      ],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Creating responsive and intuitive user interfaces with React, TypeScript, HTML, CSS, and Bootstrap.',
      features: [
        'Responsive Web Design',
        'Modern UI/UX Implementation',
        'Cross-browser Compatibility',
        'Performance Optimization'
      ],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Ensuring your applications work flawlessly across all devices with mobile-first design approach.',
      features: [
        'Mobile-First Approach',
        'Cross-Device Testing',
        'Touch-Friendly Interfaces',
        'Progressive Web Apps'
      ],
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Code Quality',
      description: 'Writing clean, maintainable code with a focus on best practices, testing, and documentation.',
      features: [
        'Clean Code Principles',
        'Code Reviews & Testing',
        'Documentation',
        'Version Control'
      ],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Optimizing application performance for better user experience and faster load times.',
      features: [
        'Code Splitting & Lazy Loading',
        'Database Query Optimization',
        'Caching Strategies',
        'Performance Monitoring'
      ],
      gradient: 'from-yellow-500 to-orange-600'
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
    <section id="services" ref={sectionRef} className="py-20 bg-portfolio-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-accent mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Offering comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-portfolio-bg rounded-xl p-6 border border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-all duration-500 hover:shadow-portfolio hover:scale-105 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-portfolio-text mb-4 group-hover:text-portfolio-accent transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-portfolio-text-muted mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-portfolio-text-muted text-sm"
                  >
                    <ArrowRight size={14} className="text-portfolio-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-portfolio-bg rounded-xl p-8 border border-portfolio-accent/20">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-portfolio-text-muted mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and clean, maintainable code.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;