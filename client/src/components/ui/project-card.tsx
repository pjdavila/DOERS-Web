import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  categoryColor: string;
  delay?: number;
}

const ProjectCard = ({
  image,
  category,
  title,
  description,
  categoryColor,
  delay = 0
}: ProjectCardProps) => {
  return (
    <motion.div 
      className="rounded-2xl overflow-hidden relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <span className={`${categoryColor} font-space text-sm tracking-wider mb-2 block`}>{category}</span>
        <h3 className="font-space text-2xl mb-2">{title}</h3>
        <p className="text-gray text-sm mb-4 max-w-md">{description}</p>
        <motion.a 
          href="#" 
          className="inline-flex items-center gap-2 text-white font-space text-sm"
          initial={{ opacity: 0 }}
          whileHover={{ x: 5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span>VIEW CASE STUDY</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
