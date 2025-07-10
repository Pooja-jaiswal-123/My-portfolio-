import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Full-Stack Food Ordering App",
      description: "A complete food ordering application with user authentication, cart management, and payment integration. Built with MERN stack and deployed on Render.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe"],
      liveLink: "https://food-app-frontend-92ei.onrender.com/",
      githubLink: "https://github.com/poojajaistuof/food-ordering-app",
      status: "Live",
      featured: true
    },
    {
      title: "Forever E-commerce Website", 
      description: "Modern e-commerce platform with product catalog, shopping cart, user profiles, and order management system.",
      techStack: ["React.js", "Node.js", "MongoDB", "JWT"],
      liveLink: "https://forever-ecommerce.vercel.app",
      githubLink: "https://github.com/poojajaistuof/forever-ecommerce",
      status: "Live",
      featured: true
    },
    {
      title: "Advanced Authentication App",
      description: "Secure authentication system with JWT tokens, email verification, password reset, and role-based access control.",
      techStack: ["React.js", "Node.js", "JWT", "Nodemailer"],
      githubLink: "https://github.com/poojajaistuof/auth-app",
      status: "Completed"
    },
    {
      title: "Razorpay Clone",
      description: "Frontend clone of Razorpay payment gateway with responsive design and modern UI components.",
      techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      liveLink: "https://razorpay-clone-demo.vercel.app",
      githubLink: "https://github.com/poojajaistuof/razorpay-clone",
      status: "Live"
    },
    {
      title: "AI Meeting Scheduler",
      description: "Intelligent meeting scheduling application using AI to optimize time slots and reduce conflicts.",
      techStack: ["React.js", "Python", "Machine Learning", "Flask"],
      githubLink: "https://github.com/poojajaistuof/ai-meeting-scheduler",
      status: "In Development"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveLink && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveLink, '_blank')}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/30 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold">
                    {project.title}
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : project.status === 'In Development'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/30 text-accent-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.liveLink && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveLink, '_blank')}
                      className="text-xs"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="text-xs"
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
