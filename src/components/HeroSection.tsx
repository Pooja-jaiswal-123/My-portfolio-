
import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pooja_Jaiswal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-background">
      {/* Modern dark background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-portfolio-primary/5 to-portfolio-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 animate-fade-up stagger-1">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-accent"></div>
                  <p className="text-sm font-medium text-portfolio-gray tracking-wider uppercase">
                    MERN Stack Developer & AI Explorer
                  </p>
                </div>
                <h1 className="heading-xl animate-fade-up stagger-2">
                  <span className="text-foreground">Er</span>{" "}
                  <span className="text-gradient">Pooja</span>
                  <br />
                  <span className="text-gradient">Jaiswal</span>
                </h1>
              </div>
              
              <p className="text-lg text-portfolio-gray leading-relaxed max-w-lg animate-fade-up stagger-3">
                Crafting seamless user experiences and visually stunning interfaces, 
                blending creativity with functionality to transform ideas into 
                intuitive, engaging, and user-centric digital solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-4">
              <Button 
                onClick={handleContactMe}
                size="lg" 
                className="accent-gradient hover:opacity-90 text-portfolio-dark px-8 py-6 text-base font-medium border-0 animate-glow"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
              
              <Button 
                onClick={handleDownloadResume}
                variant="outline" 
                size="lg"
                className="border-2 border-portfolio-primary/30 bg-transparent text-foreground hover:bg-portfolio-primary/10 px-8 py-6 text-base font-medium"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 animate-fade-up stagger-4">
              <a 
                href="https://linkedin.com/in/pooja-jaiswal-a12a98221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full hover:bg-portfolio-primary/20 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-portfolio-gray group-hover:text-portfolio-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/Pooja-jaiswal-123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full hover:bg-portfolio-primary/20 transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-portfolio-gray group-hover:text-portfolio-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in stagger-2">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-effect">
                <img
                  src="/lovable-uploads/d4e4b456-984e-46c2-964d-0000e2e03893.png"
                  alt="Er Pooja Jaiswal"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Floating signature element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-16 glass-effect rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-portfolio-primary text-lg font-bold italic">Pooja</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNextSection}
            className="p-3 glass-effect rounded-full hover:bg-portfolio-primary/20 transition-all duration-300 group"
          >
            <ArrowDown className="h-5 w-5 text-portfolio-gray group-hover:text-portfolio-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
