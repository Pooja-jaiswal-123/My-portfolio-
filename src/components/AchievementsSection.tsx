
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
      title: "AMD AI Sprint IIT Bombay Winner",
      description: "Winner of AMD AI Sprint at IIT Bombay - prestigious AI competition",
      icon: <Star className="h-6 w-6" />,
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600",
      link: "https://www.linkedin.com/posts/pooja-jaiswal-a12a98221_winner-iitbombay-amdsprint-activity-7350856336265367552-AT8p?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfeHK4Br8wJOcNxpu07pHtzeXqNk80XE_E"
    },
    {
      title: "Winner – Unstop Talent Park",
      description: "First place winner in competitive programming and problem-solving challenge",
      icon: <Award className="h-6 w-6" />,
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600",
      link: "https://unstop.com/certificate-preview/ce5a0d09-a3dd-4a5b-bbc0-76d255e5d184/"
    },
    {
      title: "Imagine Hackathon Participant",
      description: "Participated in innovative hackathon focused on creative tech solutions",
      icon: <Star className="h-6 w-6" />,
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600",
      link: "https://unstop.com/certificate-preview/34204c8e-1a6f-4ae3-84f9-9270ad01f38f"
    },
    {
      title: "Vesh Hackathon Participant",
      description: "Took part in technical fest showcasing cutting-edge projects and innovations",
      icon: <Award className="h-6 w-6" />,
      color: "from-pink-100 to-pink-200",
      iconColor: "text-pink-600",
      link: "https://unstop.com/certificate-preview/38cafb3d-c99e-4721-83e0-08c423c5bf82"
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
    <section id="achievements" className="py-24 px-4 bg-portfolio-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-up">
            <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-accent"></div>
            <span className="text-sm font-medium text-portfolio-gray tracking-wider uppercase">
              RECOGNITION & MILESTONES
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-accent to-portfolio-primary"></div>
          </div>
          <h2 className="heading-lg mb-4 animate-fade-up stagger-1">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-portfolio-gray max-w-2xl mx-auto animate-fade-up stagger-2">
            Recognition and milestones in my journey
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="glass-effect border-0 hover:border-portfolio-primary/30 transition-all duration-300 transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 glass-effect rounded-lg text-portfolio-primary">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-portfolio-gray text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                      {achievement.link && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(achievement.link, '_blank')}
                          className="mt-3 border-portfolio-primary/30 text-portfolio-primary hover:bg-portfolio-primary/10"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <Card 
                key={certification.title}
                className="glass-effect border-0 hover:border-portfolio-accent/30 transition-all duration-300 transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {certification.title}
                  </h4>
                  <p className="text-portfolio-gray mb-4">
                    Issued by: {certification.issuer}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(certification.link, '_blank')}
                    className="border-portfolio-accent/30 text-portfolio-accent hover:bg-portfolio-accent/10"
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
