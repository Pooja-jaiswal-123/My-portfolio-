import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616c128f1b8?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Pooja's technical expertise and attention to detail are exceptional. She delivered our project ahead of schedule with outstanding quality. Her communication skills and proactive approach made the entire process smooth and efficient."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Pooja was a game-changer for our startup. Her MERN stack expertise helped us build a scalable platform that exceeded our expectations. She's not just a developer, but a true problem solver."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Owner",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Pooja's AI integration capabilities are remarkable. She transformed our data processing workflows and delivered intelligent solutions that significantly improved our business operations. Highly recommended!"
    },
    {
      name: "David Wilson",
      role: "Lead Developer",
      company: "DevForward",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Pooja is an outstanding developer with a keen eye for modern design and functionality. Her code quality is excellent, and she always brings innovative solutions to complex challenges."
    },
    {
      name: "Lisa Thompson",
      role: "Founder",
      company: "EcoTech",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The web application Pooja built for us has been instrumental in growing our business. Her understanding of user experience and technical implementation is truly impressive."
    },
    {
      name: "James Anderson",
      role: "Technical Director",
      company: "FutureSoft",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Pooja's full-stack development skills are top-notch. She delivered a complex project with multiple integrations flawlessly. Her dedication and technical prowess are commendable."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'text-portfolio-warning fill-portfolio-warning' 
            : 'text-portfolio-muted'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-portfolio-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-up">
            <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-accent"></div>
            <span className="text-sm font-medium text-portfolio-gray tracking-wider uppercase">
              CLIENT FEEDBACK
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-portfolio-accent to-portfolio-primary"></div>
          </div>
          <h2 className="heading-lg mb-4 animate-fade-up stagger-1">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-portfolio-gray max-w-2xl mx-auto animate-fade-up stagger-2">
            Testimonials from satisfied clients who trusted me with their projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-2xl transition-all duration-500 border-0 glass-effect hover:border-portfolio-primary/30 animate-fade-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 glass-effect rounded-full group-hover:bg-portfolio-primary/20 transition-all duration-300">
                    <Quote className="h-6 w-6 text-portfolio-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 mb-6">
                  <p className="text-portfolio-gray leading-relaxed text-center italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-portfolio-muted/30">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-portfolio-primary/30"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-semibold truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-portfolio-gray text-sm truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-portfolio-primary text-sm font-medium truncate">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;