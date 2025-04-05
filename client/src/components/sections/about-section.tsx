import { motion } from "framer-motion";
import Reveal from "@/components/animations/reveal";
import Parallax from "@/components/animations/parallax";
import { LightbulbIcon, Rocket, HandshakeIcon, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const clients = [
    "WAPA TV",
    "TeleOnce",
    "PRTicket",
    "RAM",
    "Jeep",
    "Rums of Puerto Rico"
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-1/3 h-2/3 bg-purple opacity-5 blur-[100px]"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange opacity-5 blur-[100px]"
          animate={{ 
            x: [0, -30, 0],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-6xl mb-4">ABOUT <span className="text-orange">DOERS</span></h2>
            <p className="font-space text-lg text-gray max-w-2xl mx-auto">Since 2012, we've been transforming ideas into digital reality with rocket science precision.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal direction="left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80" 
                alt="Creative agency workspace" 
                className="w-full h-auto rounded-2xl"
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-black p-4 rounded-xl border border-gray border-opacity-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="font-bebas text-6xl text-orange">15+</p>
                <p className="font-space text-sm text-white">YEARS EXPERIENCE</p>
              </motion.div>
            </div>
          </Reveal>
          
          <Reveal direction="right">
            <h3 className="font-space text-3xl mb-6">We are the force behind the world's most audacious brands</h3>
            <p className="text-gray mb-6">At DOERS, we merge creativity and engineering to power brand growth. We're strategic allies, not just vendors – we're in it for the long run, turning ambitious ideas into extraordinary results.</p>
            <p className="text-gray mb-8">Our end-to-end approach combines strategy, design, and cutting-edge technology to create digital products that make a real impact. We work with founders, CMOs, and companies ready to invest in quality and scalability.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-orange bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <LightbulbIcon className="text-orange" />
                </div>
                <div>
                  <h4 className="font-space font-medium mb-2">Limitless Innovation</h4>
                  <p className="text-gray text-sm">Exploring new ideas and technologies to create unique solutions.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-purple bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-purple" />
                </div>
                <div>
                  <h4 className="font-space font-medium mb-2">Execution Excellence</h4>
                  <p className="text-gray text-sm">Making things happen with precision, passion, and attention to detail.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-orange bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <HandshakeIcon className="text-orange" />
                </div>
                <div>
                  <h4 className="font-space font-medium mb-2">Strategic Collaboration</h4>
                  <p className="text-gray text-sm">Working as allies, not providers, committed to your success.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-purple bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-purple" />
                </div>
                <div>
                  <h4 className="font-space font-medium mb-2">Growth Mindset</h4>
                  <p className="text-gray text-sm">Always learning, improving, and going beyond expectations.</p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
        
        <Reveal>
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="font-space text-3xl mb-4">Trusted by Industry Leaders</h3>
              <p className="text-gray max-w-2xl mx-auto">We've collaborated with brands that demand excellence and deliver impact.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                <motion.div 
                  key={client}
                  className="flex justify-center"
                  initial={{ opacity: 0.5, filter: "grayscale(100%)" }}
                  whileHover={{ opacity: 1, filter: "grayscale(0%)", scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-12 w-auto bg-[#1A1A1A] text-white flex items-center justify-center px-4 rounded">
                    <span className="font-space font-medium">{client}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
        
        <Reveal>
          <Parallax direction="up" speed={0.1}>
            <div className="bg-gradient-to-r from-black to-[#0F0F0F] rounded-3xl p-12 border border-gray border-opacity-10">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="font-bebas text-4xl md:text-5xl mb-6">READY TO <span className="text-orange">LAUNCH</span> YOUR NEXT DIGITAL PRODUCT?</h3>
                <p className="font-space text-lg text-gray mb-8">We don't improvise. We create solutions with vision, structure, and surgical precision.</p>
                <motion.a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 bg-orange text-white px-8 py-4 rounded-full font-space font-medium text-lg hover:bg-opacity-90 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket size={20} />
                  <span>LET'S BUILD SOMETHING AMAZING</span>
                </motion.a>
              </div>
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
