
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Moon } from "lucide-react";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pooja_Jaiswal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12">
        <div className="text-2xl font-bold text-foreground">PJ</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacts</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            onClick={handleDownloadResume}
            variant="outline" 
            size="sm"
            className="text-sm"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Moon className="h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-muted">
                <img
                  src="/lovable-uploads/d4e4b456-984e-46c2-964d-0000e2e03893.png"
                  alt="Pooja Jaiswal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left space-y-6 max-w-lg">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Hi, I'm Pooja Jaiswal
                </h1>
                <p className="text-lg text-muted-foreground">
                  Software Engineer | Full Stack Developer
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                <a 
                  href="https://github.com/Pooja-jaiswal-123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/pooja-jaiswal-a12a98221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
