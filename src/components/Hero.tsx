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
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={shwethaHeadshot}
                alt="Shwetha M"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-portfolio-accent shadow-glow animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow" />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Shwetha M
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-portfolio-accent mb-6 font-semibold">
            Full-Stack Developer
          </h2>
          
          <p className="text-lg sm:text-xl text-portfolio-text-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Crafting efficient and innovative web solutions with clean code. 
            Passionate about building scalable applications and turning ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToPortfolio}
              className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Shwetha576"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shwetha-m-87aba6337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shwetham2023@example.com"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-portfolio-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;