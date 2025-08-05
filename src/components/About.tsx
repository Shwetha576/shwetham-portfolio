import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResumePDF from '@/assets/Shwetha_M_Resume.pdf';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React & TypeScript', level: 60 },
    { name: 'Node.js & Express', level: 75 },
    { name: '.NET & Blazor', level: 90 },
    { name: 'MongoDB & SQL', level: 75 },
    { name: 'HTML/CSS & Bootstrap', level: 95 },
    { name: 'Problem Solving', level: 92 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-portfolio-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-portfolio-accent mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Bio Section */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-portfolio-bg rounded-lg p-6 sm:p-8 shadow-portfolio border border-portfolio-accent/20">
              <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-4 sm:mb-6">My Journey</h3>
              <p className="text-portfolio-text-muted text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Enthusiastic Software Developer currently pursuing a BCA at Anna Adarsh College for Women,
                focused on backend development and creating efficient web solutions. 
                I'm passionate about problem-solving and writing clean, maintainable code,
                with a strong drive to learn and grow in the tech industry.
              </p>
              <p className="text-portfolio-text-muted text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                My expertise spans across full-stack development, with particular strength in 
                backend technologies and modern web frameworks. I believe in creating solutions 
                that are not just functional, but also scalable and user-friendly.
              </p>
              
              {/* Education */}
              <div className="bg-portfolio-surface rounded-lg p-4 sm:p-6 border border-portfolio-accent/10 mb-4 sm:mb-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <GraduationCap className="text-portfolio-accent mr-2 sm:mr-3" size={20} />
                  <h4 className="text-base sm:text-xl font-semibold text-portfolio-text">Education</h4>
                </div>
                <div className="space-y-2">
                  <h5 className="text-base sm:text-lg font-medium text-portfolio-accent">
                    Bachelor of Computer Applications (BCA)
                  </h5>
                  <div className="flex items-center text-portfolio-text-muted text-xs sm:text-sm">
                    <MapPin size={12} className="mr-2" />
                    <span>Anna Adarsh College for Women</span>
                  </div>
                  <div className="flex items-center text-portfolio-text-muted text-xs sm:text-sm">
                    <Calendar size={12} className="mr-2" />
                    <span>2023 - 2026</span>
                  </div>
                </div>
              </div>

              {/* Resume Download Button */}
              <div className="text-center">
                <a
                  href={ResumePDF}
                  download="Shwetha_M_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="relative bg-gradient-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] active:scale-95 group overflow-hidden"
                    aria-label="Download Shwetha's resume"
                  >
                    <span className="absolute inset-0 bg-portfolio-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <Download size={18} className="mr-2 inline-block group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-6 sm:mb-8">Technical Skills</h3>
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <span className="text-portfolio-text font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-portfolio-accent font-semibold text-xs sm:text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-portfolio-bg rounded-full h-2.5 sm:h-3 border border-portfolio-accent/20">
                    <div
                      className="bg-gradient-primary h-2.5 sm:h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;