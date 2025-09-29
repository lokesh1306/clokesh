
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-4 pt-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">Email</p>
                <p className="text-card-foreground font-semibold">chlokesh1306@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">Phone</p>
                <p className="text-card-foreground font-semibold">+1 (857) 396-7363</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">Location</p>
                <p className="text-card-foreground font-semibold">United States</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-4 border-t border-border">
          <p className="text-muted-foreground">
                Built with <img src="/assets/love.png" alt="love" className="inline-block w-4 h-4" /> using React, TS, Vite and Tailwind
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
