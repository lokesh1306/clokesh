
import { ChevronDown, Download, Mail, Github, Linkedin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Problem-Solver, passionate, persistent and a lifelong learner";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-border rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-border rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Hi, I'm Lokesh Challagulla
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 min-h-[1.5em]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://docs.clokesh.me/Lokesh_C_Resume.pdf" download className="bg-gradient-primary text-primary-foreground px-8 py-3 text-lg transition-colors hover:opacity-90 flex items-center rounded-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
            <a href="mailto:chlokesh1306@gmail.com" className="px-8 py-3 text-lg border border-primary/30 text-primary hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all duration-300 flex items-center rounded-lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/lokesh1306" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/chlokesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://www.credly.com/users/chlokesh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Award className="h-8 w-8" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
