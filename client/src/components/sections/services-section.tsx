import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import ServiceCard from "@/components/ui/service-card";
import { Smartphone, Laptop, Tv, Bot, Palette, LineChart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform apps with seamless user experiences that drive engagement and achieve business goals.",
    iconBgColor: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: Laptop,
    title: "High-Performance Websites",
    description: "Stunning, responsive websites optimized for conversion, speed, and seamless user journeys.",
    iconBgColor: "bg-purple/10",
    iconColor: "text-purple",
  },
  {
    icon: Tv,
    title: "OTT Applications",
    description: "Custom streaming solutions for delivering content across multiple platforms with immersive viewing experiences.",
    iconBgColor: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: Bot,
    title: "AI Workflow Automation",
    description: "Intelligent systems that streamline processes, reduce costs, and deliver smarter business operations.",
    iconBgColor: "bg-purple/10",
    iconColor: "text-purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Strategic design that balances aesthetics with functionality to create memorable brand experiences.",
    iconBgColor: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description: "Data-driven roadmaps that align technology with business objectives for sustainable growth.",
    iconBgColor: "bg-purple/10",
    iconColor: "text-purple",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-1/3 h-1/2 bg-purple opacity-5 blur-[100px]"
          animate={{ 
            x: [0, 20, 0],
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
            <h2 className="font-bebas text-4xl md:text-6xl mb-4">OUR <span className="text-orange">ROCKET SCIENCE</span></h2>
            <p className="font-space text-lg text-gray max-w-2xl mx-auto">We don't just build digital products. We craft experiences that drive growth through a perfect blend of strategy, design, and technology.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgColor={service.iconBgColor}
              iconColor={service.iconColor}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <Reveal delay={0.3}>
          <div className="mt-20 text-center">
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
