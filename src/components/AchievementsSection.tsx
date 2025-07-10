
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Shortlisted for Flipkart GRiD",
      description: "Selected among top candidates for Flipkart's flagship engineering challenge",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-yellow-100 to-yellow-200",
      iconColor: "text-yellow-600"
    },
    {
      title: "AMD AI Hackathon @ IIT Bombay",
      description: "Invited to participate in prestigious AI hackathon at IIT Bombay",
      icon: <Star className="h-6 w-6" />,
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      title: "Winner – Unstop Talent Park",
      description: "First place winner in competitive programming and problem-solving challenge",
      icon: <Award className="h-6 w-6" />,
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      title: "Imagine Hackathon Participant",
      description: "Participated in innovative hackathon focused on creative tech solutions",
      icon: <Star className="h-6 w-6" />,
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      title: "Vespera'24 Participant",
      description: "Took part in technical fest showcasing cutting-edge projects and innovations",
      icon: <Award className="h-6 w-6" />,
      color: "from-pink-100 to-pink-200",
      iconColor: "text-pink-600"
    }
  ];

  const certifications = [
    {
      title: "MERN Stack Development",
      issuer: "DevRhylme Foundation",
      link: "#"
    },
    {
      title: "AI/ML Fundamentals",
      issuer: "Mirai School of Technology",
      link: "#"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Online Course",
      link: "#"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-peach-600 to-lavender-600 bg-clip-text text-transparent mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-muted-foreground">
            Recognition and milestones in my journey
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className={`bg-gradient-to-br ${achievement.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 bg-white/60 backdrop-blur-sm rounded-lg ${achievement.iconColor}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <Card 
                key={certification.title}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {certification.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Issued by: {certification.issuer}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(certification.link, '_blank')}
                    className="border-peach-300 text-peach-600 hover:bg-peach-50"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
