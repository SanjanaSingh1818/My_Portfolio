import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EduKnit',
      description: 'Academic learning platform built with TypeScript, TailwindCSS, and MongoDB for enhanced educational experiences.',
      image: '/placeholder.svg',
      liveUrl: 'https://edu-knit-learn.vercel.app/',
      githubUrl: '#',
      tags: ['TypeScript', 'TailwindCSS', 'MongoDB', 'React'],
    },
    {
      title: 'TurgoMedia',
      description: 'Multilingual media website with Google Translate API integration for global accessibility.',
      image: '/placeholder.svg',
      liveUrl: 'https://turgo-media.vercel.app/',
      githubUrl: '#',
      tags: ['React', 'Google Translate API', 'Responsive Design'],
    },
    {
      title: 'Speedy Tyres',
      description: 'Sweden-based tire & car service website with modern design and seamless user experience.',
      image: '/placeholder.svg',
      liveUrl: 'https://speedy-tyres.se/',
      githubUrl: '#',
      tags: ['React', 'TailwindCSS', 'Client Project'],
    },
    {
      title: 'AI Image Generator',
      description: 'Text-to-image generation tool using MERN stack, Hugging Face API, and Cloudinary for image management.',
      image: '/placeholder.svg',
      liveUrl: 'https://ai-image-generator-frontend-taupe.vercel.app/',
      githubUrl: '#',
      tags: ['MERN', 'Hugging Face', 'Cloudinary', 'AI'],
    },
    {
      title: 'FitFusion',
      description: 'Real-time workout tracking web application for fitness enthusiasts with comprehensive tracking features.',
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: 'https://github.com/SanjanaSingh1818/FitFusion_Frontend',
      tags: ['React', 'Real-time', 'Fitness', 'Web App'],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work, ranging from client projects to personal innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-sky-400/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl font-bold gradient-text">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.liveUrl !== '#' && (
                      <Button size="sm" className="flex-1">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 w-full"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </a>
                      </Button>
                    )}
                    {project.githubUrl !== '#' && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 w-full"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;