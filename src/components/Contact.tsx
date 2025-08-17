import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 sm:w-5 h-5" />,
      label: 'Email',
      value: 'shwetham2023@gmail.com',
      href: 'mailto:shwetham2023@gmail.com'
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 h-5" />,
      label: 'Phone',
      value: '+91 7358749296',
      href: 'tel:+917358749296'
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 h-5" />,
      label: 'Location',
      value: 'India',
      href: null
    }
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Shwetha M'
      };

      await emailjs.send(
        'service_1blhnda',
        'template_1c6l2xt',
        templateParams,
        'kryqHJ-DxiG8Iy2n-'
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-portfolio-bg relative overflow-hidden">
      {/* Animated Background Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 opacity-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-portfolio-accent animate-pulse"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-portfolio-accent mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-portfolio-text-muted max-w-xl sm:max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-portfolio-surface rounded-xl p-6 sm:p-8 border border-portfolio-accent/20 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-6 sm:mb-8">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center group-hover:bg-portfolio-accent/20 transition-colors">
                      <div className="text-portfolio-accent">
                        {info.icon}
                      </div>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <div className="text-xs sm:text-sm text-portfolio-text-muted">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm sm:text-base text-portfolio-text hover:text-portfolio-accent transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm sm:text-base text-portfolio-text font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-portfolio-accent/20 pt-6 sm:pt-8">
                <h4 className="text-base sm:text-lg font-semibold text-portfolio-text mb-3 sm:mb-4">Follow Me</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-portfolio-accent/10 rounded-lg flex items-center justify-center text-portfolio-text-muted hover:bg-portfolio-accent hover:text-white transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-portfolio-surface rounded-xl p-6 sm:p-8 border border-portfolio-accent/20">
              <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-6 sm:mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-portfolio-text mb-1 sm:mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text focus:border-portfolio-accent text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-portfolio-text mb-1 sm:mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text focus:border-portfolio-accent text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-portfolio-text mb-1 sm:mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text focus:border-portfolio-accent text-sm sm:text-base"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-portfolio-text mb-1 sm:mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text focus:border-portfolio-accent resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent-hover text-white py-2 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;