import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="text-lg font-semibold gradient-text">
            Sanjana Singh
          </div>
          <p className="text-muted-foreground">
            MERN Stack Developer | Frontend Engineer
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of ☕</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sanjana Singh. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;