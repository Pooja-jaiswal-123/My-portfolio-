
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-peach-600 to-lavender-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground">
            My academic journey
          </p>
        </div>

        <Card className="bg-gradient-to-br from-cream-100 to-peach-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/60 backdrop-blur-sm rounded-full">
                <GraduationCap className="h-8 w-8 text-peach-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  BTech in Computer Science Engineering (CSE)
                </h3>
                <p className="text-xl text-gray-700 font-medium mb-4">
                  Indraprastha Institute Of Technology and Management
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">2022 – 2026</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Saharanpur, Uttar Pradesh</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-6">
                  <span className="font-medium">Affiliated with:</span>
                  <span className="ml-2 px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium">
                    AKTU (Abdul Kalam Technical University)
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Currently pursuing Bachelor of Technology in Computer Science Engineering with a focus on 
                  software development, data structures, algorithms, and emerging technologies like AI/ML. 
                  Gaining comprehensive knowledge in system design, database management, and full-stack development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
