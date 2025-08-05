import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/Shwetha576',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shwetha-m-87aba6337',
      color: 'hover:text-blue-400'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-portfolio-bg/95 backdrop-blur-sm border-b border-portfolio-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-portfolio-accent">
            <span className="text-lg sm:text-xl lg:text-2xl">Shwetha M</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm sm:text-base font-medium transition-all duration-300 hover:text-portfolio-accent ${
                  activeSection === item.href.substring(1)
                    ? 'text-portfolio-accent border-b-2 border-portfolio-accent'
                    : 'text-portfolio-text-muted'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full text-portfolio-text-muted ${social.color} transition-all duration-300 hover:bg-portfolio-accent/10 hover:scale-110`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-portfolio-surface border-b border-portfolio-accent/20 animate-fade-in">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-center px-3 py-2 text-base font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-portfolio-accent bg-portfolio-accent/10'
                      : 'text-portfolio-text-muted hover:text-portfolio-accent hover:bg-portfolio-accent/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 py-3 border-t border-portfolio-accent/20">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full text-portfolio-text-muted ${social.color} transition-all duration-300 hover:bg-portfolio-accent/10 hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;