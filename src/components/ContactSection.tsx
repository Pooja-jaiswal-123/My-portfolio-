
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Pooja Jaiswal",
      };

      await emailjs.send(
        'service_c3x5y64',
        'template_kcc7msb',
        templateParams,
        'EClCOWP1GeUwKc9I1'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-portfolio-dark via-portfolio-card to-portfolio-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-portfolio-purple bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-portfolio-gray max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-effect border border-portfolio-accent/20 shadow-lg shadow-portfolio-accent/10 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-portfolio-primary/20 border border-portfolio-primary/30 rounded-full">
                    <Mail className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:pooja.jaiswal.ac16@gmail.com" 
                      className="text-portfolio-gray hover:text-portfolio-primary transition-colors"
                    >
                      pooja.jaiswal.ac16@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-portfolio-success/20 border border-portfolio-success/30 rounded-full">
                    <MapPin className="h-5 w-5 text-portfolio-success" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-portfolio-gray">Saharanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-effect border border-portfolio-purple/20 shadow-lg shadow-portfolio-purple/10 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/pooja-jaiswal-a12a98221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 bg-portfolio-accent/20 border border-portfolio-accent/30 rounded-lg hover:bg-portfolio-accent/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="h-5 w-5 text-portfolio-accent" />
                    <span className="font-medium text-foreground">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/poojajaistuof"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 bg-portfolio-gray/20 border border-portfolio-gray/30 rounded-lg hover:bg-portfolio-gray/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="h-5 w-5 text-portfolio-gray" />
                    <span className="font-medium text-foreground">GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect border border-form-border shadow-lg shadow-portfolio-primary/10 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-form-background border-form-border focus:border-form-focus focus:ring-form-focus text-foreground placeholder:text-portfolio-gray"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-form-background border-form-border focus:border-portfolio-accent focus:ring-portfolio-accent text-foreground placeholder:text-portfolio-gray"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 bg-form-background border-portfolio-success/50 focus:border-portfolio-success focus:ring-portfolio-success text-foreground placeholder:text-portfolio-gray resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent hover:from-portfolio-primary/80 hover:to-portfolio-accent/80 text-portfolio-dark py-3 rounded-lg text-lg font-medium shadow-lg shadow-portfolio-primary/25 hover:shadow-xl hover:shadow-portfolio-primary/40 transition-all duration-300 transform hover:scale-105 border border-portfolio-primary/30"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
