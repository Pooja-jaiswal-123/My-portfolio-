import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, User, Award, Code, Briefcase } from "lucide-react";

const AboutSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pooja_Jaiswal_s_Resume_(4).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { icon: <Code className="h-6 w-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Award className="h-6 w-6" />, value: "5+", label: "Awards Won" },
    { icon: <Briefcase className="h-6 w-6" />, value: "2+", label: "Years Experience" },
    { icon: <User className="h-6 w-6" />, value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-portfolio-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-up">
            <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-accent"></div>
            <span className="text-sm font-medium text-portfolio-gray tracking-wider uppercase">
              GET TO KNOW
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-accent to-portfolio-primary"></div>
          </div>
          <h2 className="heading-lg mb-4 animate-fade-up stagger-1">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-effect">
                <img
                  src="/lovable-uploads/d4e4b456-984e-46c2-964d-0000e2e03893.png"
                  alt="Er Pooja Jaiswal"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 glass-effect rounded-full flex items-center justify-center">
                <Code className="h-8 w-8 text-portfolio-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 glass-effect rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-portfolio-accent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-up stagger-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Full-Stack Developer & AI Explorer
              </h3>
              <div className="space-y-4 text-portfolio-gray leading-relaxed">
                <p>
                  I'm a passionate MERN Stack Developer and AI enthusiast with a strong foundation in 
                  modern web technologies. My journey in software development began with a curiosity 
                  about how digital experiences can transform businesses and lives.
                </p>
                <p>
                  With expertise in React.js, Node.js, and various AI/ML technologies, I specialize 
                  in building scalable, user-centric applications that solve real-world problems. 
                  I believe in writing clean, maintainable code and staying updated with the latest 
                  industry trends.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, participating in 
                  hackathons, or contributing to open-source projects. I'm always excited to take 
                  on new challenges and collaborate with like-minded professionals.
                </p>
              </div>
            </div>

            <Button
              onClick={handleDownloadResume}
              className="accent-gradient hover:opacity-90 text-portfolio-dark px-8 py-6 text-base font-medium border-0 animate-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="text-center glass-effect border-0 hover:border-portfolio-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 glass-effect rounded-full text-portfolio-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-portfolio-gray font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;