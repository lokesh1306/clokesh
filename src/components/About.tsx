import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a DevOps Engineer with extensive hands-on experience in designing, implementing, and managing secure, reliable, and high-availability infrastructures. 
              When it comes to problem-solving, I thrive on a blend of creativity and structured thinking. I dive deep into understanding the core challenges, exploring innovative solutions, and designing robust, scalable systems. This method ensures that every implementation is both efficient and tailored to meet the unique needs of the problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Continuously motivated by the dynamic nature of cloud and DevOps, I am committed to staying at the forefront of technological advancements. I see myself playing a pivotal role in shaping the future of these fields, leveraging my skills and knowledge to drive progress and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;