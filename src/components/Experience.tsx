
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Sword Health",
      location: "United States",
      duration: "January 2025 - Present",
      description: [],
    },
    {
      title: "Cloud Engineer",
      company: "Wasabi - Cloud Storage",
      location: "Boston, MA",
      duration: "May 2023 - January 2025",
      description: [],
    },
    {
      title: "Senior DevOps Engineer",
      secondaryTitle: "DevOps Engineer",
      company: "PrimeNode Web Solutions", 
      location: "Telangana, India",
      duration: "December 2019 - July 2022",
      secondaryDuration: "October 2018 - December 2019",
      description: [],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-40 bg-border"></div>
              )}
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-6 z-10">
                  <Building className="h-6 w-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1 bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">{exp.title}</h3>
                      {exp.secondaryTitle && (
                        <h3 className="text-lg font-semibold text-muted-foreground mb-2">{exp.secondaryTitle}</h3>
                      )}
                      <h4 className="text-xl text-primary mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                      {exp.secondaryDuration && (
                        <div className="flex items-center mb-1 text-sm">
                          <Calendar className="h-3 w-3 mr-2" />
                          {exp.secondaryDuration}
                        </div>
                      )}
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  {exp.description && (
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
