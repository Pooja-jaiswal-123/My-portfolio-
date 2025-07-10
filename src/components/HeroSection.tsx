
import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // This would typically link to an actual resume file
    console.log("Download resume clicked");
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm animate-float">
                <img
                  src="/lovable-uploads/d4e4b456-984e-46c2-964d-0000e2e03893.png"
                  alt="Er Pooja Jaiswal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-peach-400 to-lavender-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">👋</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-peach-600 via-lavender-500 to-peach-500 bg-clip-text text-transparent mb-4">
                Er Pooja Jaiswal
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-medium mb-6">
                MERN Stack Developer | AI & ML Explorer
              </p>
            </div>

            <div className="mb-8 max-w-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate MERN Stack Developer with a strong foundation in system design, data structures, and algorithms. I'm currently diving deep into AI and Machine Learning, while also building full-stack web applications that solve real-world problems. Proficient in Java, Python, and C, I enjoy combining creativity with logic to build scalable and intelligent digital products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={handleContactMe}
                size="lg" 
                className="bg-gradient-to-r from-peach-500 to-peach-600 hover:from-peach-600 hover:to-peach-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button 
                onClick={handleDownloadResume}
                variant="outline" 
                size="lg"
                className="border-2 border-peach-400 text-peach-600 hover:bg-peach-50 px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/pooja-jaiswal-a12a98221" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-white"
              >
                <Linkedin className="h-6 w-6 text-blue-600" />
              </a>
              <a 
                href="https://github.com/poojajaistuof" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-white"
              >
                <Github className="h-6 w-6 text-gray-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
