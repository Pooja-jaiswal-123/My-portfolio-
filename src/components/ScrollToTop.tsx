
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-effect hover:bg-portfolio-primary/20 border border-portfolio-primary/30 text-portfolio-gray hover:text-portfolio-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-fade-in group"
          size="icon"
        >
          <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
