
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript ES6+", "TypeScript", "HTML5 & CSS3"],
      icon: "🎨"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "REST APIs", "Firebase"],
      icon: "⚙️"
    },
    {
      title: "Database & Storage",
      skills: ["MongoDB", "Database Design", "Data Modeling"],
      icon: "🗄️"
    },
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "Data Structures & Algorithms"],
      icon: "💻"
    },
    {
      title: "Development Tools",
      skills: ["Git & GitHub", "Postman", "VS Code", "Figma"],
      icon: "🛠️"
    },
    {
      title: "AI & Machine Learning",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Data Analysis"],
      icon: "🤖"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-accent/50 rounded-md text-sm font-medium text-accent-foreground"
                    >
                      {skill}
                    </div>
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

export default SkillsSection;
