
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "TypeScript"],
      color: "from-peach-100 to-peach-200"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Firebase"],
      color: "from-lavender-100 to-lavender-200"
    },
    {
      title: "Database",
      skills: ["MongoDB"],
      color: "from-cream-100 to-cream-200"
    },
    {
      title: "Languages",
      skills: ["Java", "Python", "C"],
      color: "from-peach-100 to-lavender-100"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "Figma", "VS Code"],
      color: "from-lavender-100 to-cream-200"
    },
    {
      title: "Other",
      skills: ["JWT", "System Design", "AI/ML (NumPy, Pandas, Scikit-learn)"],
      color: "from-cream-100 to-peach-200"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-peach-600 to-lavender-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`bg-gradient-to-br ${category.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
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

export default SkillsSection;
