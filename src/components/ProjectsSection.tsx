
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Full-Stack Food Ordering App",
      description: "A complete food ordering application with user authentication, cart management, and payment integration. Built with MERN stack and deployed on Render.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe"],
      liveLink: "https://food-ordering-app.render.com",
      githubLink: "https://github.com/poojajaistuof/food-ordering-app",
      status: "Live"
    },
    {
      title: "Forever E-commerce Website",
      description: "Modern e-commerce platform with product catalog, shopping cart, user profiles, and order management system.",
      techStack: ["React.js", "Node.js", "MongoDB", "JWT"],
      liveLink: "https://forever-ecommerce.vercel.app",
      githubLink: "https://github.com/poojajaistuof/forever-ecommerce",
      status: "Live"
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

  return (
    <section id="projects" className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-peach-600 to-lavender-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'In Development'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-peach-100 text-peach-700 rounded text-xs font-medium"
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
                      className="bg-gradient-to-r from-peach-400 to-peach-500 hover:from-peach-500 hover:to-peach-600 text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <Github className="h-4 w-4 mr-1" />
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
