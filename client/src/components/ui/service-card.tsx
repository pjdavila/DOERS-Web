import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

interface ServiceCardProps {
  icon: Icon;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  iconBgColor,
  iconColor,
  delay = 0
}: ServiceCardProps) => {
  return (
    <motion.div
      className="rounded-2xl p-8 transition-all duration-300 bg-black/5 backdrop-blur-sm border border-white/10 hover:border-orange/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(122, 63, 255, 0.15)' }}
    >
      <div className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
        <Icon className={`${iconColor} text-2xl`} size={24} />
      </div>
      <h3 className="font-space text-2xl mb-4">{title}</h3>
      <p className="text-gray">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
