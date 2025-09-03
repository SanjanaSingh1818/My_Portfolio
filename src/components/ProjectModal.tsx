import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  features: string[];
  year: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-card border border-primary/20 rounded-2xl z-50 overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Content */}
            <div className="h-full overflow-y-auto">
              <div className="relative">
                {/* Hero Section */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/60">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.liveUrl !== '#' && (
                      <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live Project
                        </a>
                      </Button>
                    )}
                    {project.githubUrl !== '#' && (
                      <Button variant="outline" asChild className="flex-1 border-primary/20 hover:bg-primary/10">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;