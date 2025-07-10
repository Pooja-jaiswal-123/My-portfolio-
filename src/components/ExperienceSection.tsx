
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Mirai School of Technology",
      period: "July 2025 – Present",
      location: "Remote",
      description: "Working on cutting-edge AI/ML projects, developing machine learning models, and implementing intelligent solutions for real-world problems.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Data Analysis"],
      color: "from-lavender-100 to-lavender-200"
    },
    {
      title: "MERN Stack Intern",
      company: "DevRhylme Foundation",
      period: "December 2024",
      location: "Remote",
      description: "Developed full-stack web applications using MERN stack, collaborated with team members on various projects, and gained hands-on experience in modern web development practices.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
      color: "from-peach-100 to-peach-200"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-peach-600 to-lavender-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My journey in the tech industry
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.title}
              className={`bg-gradient-to-br ${experience.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-xl text-gray-700 font-medium mb-2">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
