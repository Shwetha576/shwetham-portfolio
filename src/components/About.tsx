import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React & TypeScript', level: 90 },
    { name: 'Node.js & Express', level: 85 },
    { name: '.NET & Blazor', level: 80 },
    { name: 'MongoDB & SQL', level: 85 },
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
    <section id="about" ref={sectionRef} className="py-20 bg-portfolio-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-portfolio-accent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-portfolio-bg rounded-lg p-8 shadow-portfolio border border-portfolio-accent/20">
              <h3 className="text-2xl font-bold text-portfolio-text mb-6">My Journey</h3>
              <p className="text-portfolio-text-muted text-lg leading-relaxed mb-6">
                Enthusiastic Software Developer with a BCA from Anna Adarsh College for Women, 
                focused on backend development and efficient web solutions. I'm passionate about 
                problem-solving and writing clean, maintainable code, with a strong drive to 
                learn and grow in the tech industry.
              </p>
              <p className="text-portfolio-text-muted text-lg leading-relaxed mb-8">
                My expertise spans across full-stack development, with particular strength in 
                backend technologies and modern web frameworks. I believe in creating solutions 
                that are not just functional, but also scalable and user-friendly.
              </p>
              
              {/* Education */}
              <div className="bg-portfolio-surface rounded-lg p-6 border border-portfolio-accent/10">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-portfolio-accent mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-portfolio-text">Education</h4>
                </div>
                <div className="space-y-2">
                  <h5 className="text-lg font-medium text-portfolio-accent">
                    Bachelor of Computer Applications (BCA)
                  </h5>
                  <div className="flex items-center text-portfolio-text-muted">
                    <MapPin size={16} className="mr-2" />
                    <span>Anna Adarsh College for Women</span>
                  </div>
                  <div className="flex items-center text-portfolio-text-muted">
                    <Calendar size={16} className="mr-2" />
                    <span>2023 - 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-portfolio-text mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-portfolio-text font-medium">{skill.name}</span>
                    <span className="text-portfolio-accent font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-portfolio-bg rounded-full h-3 border border-portfolio-accent/20">
                    <div
                      className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center bg-portfolio-bg rounded-lg p-6 border border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-all duration-300">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">2+</div>
                <div className="text-portfolio-text-muted">Years Experience</div>
              </div>
              <div className="text-center bg-portfolio-bg rounded-lg p-6 border border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-all duration-300">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">5+</div>
                <div className="text-portfolio-text-muted">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;