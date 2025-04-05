import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import ProjectCard from "@/components/ui/project-card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    category: "OTT APPLICATION",
    title: "WAPA TV",
    description: "Multi-platform streaming solution with personalized content delivery and analytics integration.",
    categoryColor: "text-orange",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    category: "WEBSITE REDESIGN",
    title: "TeleOnce",
    description: "High-performance content platform with dynamic scheduling and live streaming capabilities.",
    categoryColor: "text-purple",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    category: "E-COMMERCE PLATFORM",
    title: "PRTicket",
    description: "Comprehensive ticketing solution with secure payment processing and event management.",
    categoryColor: "text-orange",
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112c4b3433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675&q=80",
    category: "INTERACTIVE EXPERIENCE",
    title: "Jeep & RAM",
    description: "Immersive digital showroom with 3D vehicle customization and lead generation integration.",
    categoryColor: "text-purple",
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        {/* Animated background elements */}
        <motion.div 
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-orange opacity-5 blur-[100px]"
          animate={{ 
            x: [0, -20, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-6xl mb-4">OUR <span className="text-purple">STELLAR</span> WORK</h2>
            <p className="font-space text-lg text-gray max-w-2xl mx-auto">Transforming ambitious ideas into extraordinary digital experiences for leading brands.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              categoryColor={project.categoryColor}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <Reveal delay={0.3}>
          <div className="text-center">
            <motion.a 
              href="#" 
              className="inline-flex items-center gap-2 border border-gray border-opacity-30 px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-white hover:bg-opacity-5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WorkSection;
