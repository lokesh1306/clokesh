import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50 shadow-lg" 
         style={{ background: 'hsl(0, 0%, 95.0%)', borderColor: 'var(--glass-border)' }}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-center space-x-1">
          <button
            onClick={() => scrollToSection('about')}
            className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/10"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/10"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/10"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/10"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/10"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;