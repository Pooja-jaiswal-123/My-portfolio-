
import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const handleDownloadResume = () => {
    console.log("Download resume clicked");
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase animate-fade-up stagger-1">
                  MERN Stack Developer & AI Explorer
                </p>
                <h1 className="heading-xl text-gradient animate-fade-up stagger-2">
                  Er Pooja
                  <br />
                  Jaiswal
                </h1>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-up stagger-3">
                I'm a passionate MERN Stack Developer with a strong foundation in system design, 
                data structures, and algorithms. Currently exploring AI and Machine Learning while 
                building scalable digital solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-4">
              <Button 
                onClick={handleContactMe}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
              
              <Button 
                onClick={handleDownloadResume}
                variant="outline" 
                size="lg"
                className="border-2 px-8 py-6 text-base font-medium"
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
                className="p-3 border rounded-full hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/poojajaistuof" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border rounded-full hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in stagger-2">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/d4e4b456-984e-46c2-964d-0000e2e03893.png"
                  alt="Er Pooja Jaiswal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNextSection}
            className="p-2 rounded-full border border-muted-foreground/20 hover:bg-accent transition-colors"
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
