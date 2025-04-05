import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import doersLogo from "../../assets/images/DOERS-Horizontal.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "SERVICES", href: "#services" },
    { name: "WORK", href: "#work" },
    { name: "ABOUT", href: "#about" },
  ];

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-black bg-opacity-80 backdrop-blur-md shadow-md" : ""
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="#" className="flex items-center gap-2">
            <img src={doersLogo} alt="DOERS Logo" className="h-9" />
            <span className="hidden sm:block text-orange text-xs font-space">SINCE 2012</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                href={link.href} 
                key={link.name}
                className="relative text-white font-space tracking-wide text-sm hover:text-orange transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-orange text-white px-5 py-2 rounded-full font-space font-medium tracking-wide text-sm hover:bg-opacity-90 transition-all"
            >
              LET'S TALK
            </a>
          </nav>
          
          <button 
            className="md:hidden text-white" 
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-black bg-opacity-95 backdrop-blur-md fixed top-[72px] left-0 w-full overflow-hidden z-50"
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  className="text-white font-space tracking-wide text-lg border-b border-gray border-opacity-20 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                className="bg-orange text-white px-6 py-3 rounded-full font-space font-medium tracking-wide text-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                LET'S TALK
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
