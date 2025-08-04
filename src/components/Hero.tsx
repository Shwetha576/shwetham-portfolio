import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import shwethaHeadshot from '@/assets/shwetha-headshot.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--portfolio-accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-portfolio-accent/20 border-4 border-portfolio-accent shadow-glow animate-float flex items-center justify-center">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-portfolio-accent font-bold">
                  S
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 animate-glow" />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-portfolio-text mb-4 sm:mb-6 px-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Shwetha M
            </span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-portfolio-accent mb-4 sm:mb-6 font-semibold px-4">
            Full-Stack Developer
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-portfolio-text-muted max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Crafting efficient and innovative web solutions with clean code. 
            Passionate about building scalable applications and turning ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button
              onClick={scrollToPortfolio}
              className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
            <a
              href="https://github.com/Shwetha576"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110 p-2"
            >
              <Github size={20} className="sm:hidden" />
              <Github size={24} className="hidden sm:block" />
            </a>
            <a
              href="https://www.linkedin.com/in/shwetha-m-87aba6337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110 p-2"
            >
              <Linkedin size={20} className="sm:hidden" />
              <Linkedin size={24} className="hidden sm:block" />
            </a>
            <a
              href="mailto:shwetham2023@example.com"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110 p-2"
            >
              <Mail size={20} className="sm:hidden" />
              <Mail size={24} className="hidden sm:block" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-portfolio-accent sm:hidden" />
          <ChevronDown size={32} className="text-portfolio-accent hidden sm:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;