
import { Card, CardContent } from "@/components/ui/card";
import CircularProgress from "./CircularProgress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript ES6+", "TypeScript", "HTML5 & CSS3"],
      icon: "🎨",
      percentage: 92
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "REST APIs", "Firebase"],
      icon: "⚙️",
      percentage: 88
    },
    {
      title: "Database & Storage",
      skills: ["MongoDB", "Database Design", "Data Modeling"],
      icon: "🗄️",
      percentage: 85
    },
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "Data Structures & Algorithms"],
      icon: "💻",
      percentage: 90
    },
    {
      title: "Development Tools",
      skills: ["Git & GitHub", "Postman", "VS Code", "Figma"],
      icon: "🛠️",
      percentage: 95
    },
    {
      title: "AI & Machine Learning",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Data Analysis"],
      icon: "🤖",
      percentage: 78
    }
  ];

  const expertiseSkills = [
    { name: "React.js", percentage: 95 },
    { name: "Node.js", percentage: 90 },
    { name: "JavaScript", percentage: 93 },
    { name: "Python", percentage: 87 }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-portfolio-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-up">
            <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-accent"></div>
            <span className="text-sm font-medium text-portfolio-gray tracking-wider uppercase">
              TECHNICAL EXPERTISE
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-accent to-portfolio-primary"></div>
          </div>
          <h2 className="heading-lg mb-4 animate-fade-up stagger-1">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-portfolio-gray max-w-2xl mx-auto animate-fade-up stagger-2">
            Technologies and tools I use to build exceptional digital experiences
          </p>
        </div>

        {/* Expertise Progress Circles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            My Expertise as <span className="text-gradient">Web Developer</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {expertiseSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CircularProgress
                  percentage={skill.percentage}
                  label={skill.name}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 glass-effect hover:border-portfolio-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg glass-effect flex items-center justify-center mr-4 group-hover:bg-portfolio-primary/20 transition-all duration-300">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group/skill"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="px-4 py-2 glass-effect rounded-lg text-sm font-medium text-portfolio-gray hover:text-foreground hover:bg-portfolio-primary/10 transition-all duration-300 cursor-default border border-transparent hover:border-portfolio-primary/20">
                        {skill}
                      </div>
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
