import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: 'EduKnit',
      description: 'Academic learning platform built with TypeScript, TailwindCSS, and MongoDB.',
      fullDescription: 'EduKnit is a comprehensive academic learning platform designed to enhance educational experiences through modern web technologies. Built with TypeScript for type safety, TailwindCSS for responsive design, and MongoDB for robust data management, it provides students and educators with powerful tools for online learning.',
      image: '/placeholder.svg',
      liveUrl: 'https://edu-knit-learn.vercel.app/',
      githubUrl: '#',
      tags: ['TypeScript', 'TailwindCSS', 'MongoDB', 'React'],
      features: [
        'Interactive course management system',
        'Real-time progress tracking',
        'Responsive design for all devices',
        'User authentication and authorization',
        'Assignment submission and grading'
      ],
      year: '2024'
    },
    {
      title: 'TurgoMedia',
      description: 'Multilingual media website with Google Translate API integration.',
      fullDescription: 'TurgoMedia is a cutting-edge multilingual media platform that breaks down language barriers using Google Translate API integration. The website provides seamless content accessibility across different languages, making media content globally accessible with an intuitive user interface.',
      image: '/placeholder.svg',
      liveUrl: 'https://turgo-media.vercel.app/',
      githubUrl: '#',
      tags: ['React', 'Google Translate API', 'Responsive Design'],
      features: [
        'Real-time language translation',
        'Multi-language content support',
        'Responsive media gallery',
        'SEO optimized structure',
        'Fast loading performance'
      ],
      year: '2024'
    },
    {
      title: 'Speedy Tyres',
      description: 'Sweden-based tire & car service website with modern design.',
      fullDescription: 'Speedy Tyres is a professional website for a Sweden-based tire and car service company. The project focuses on delivering a modern, user-friendly experience for customers to browse services, book appointments, and learn about tire and automotive solutions with a clean, business-focused design.',
      image: '/placeholder.svg',
      liveUrl: 'https://speedy-tyres.se/',
      githubUrl: '#',
      tags: ['React', 'TailwindCSS', 'Client Project'],
      features: [
        'Service booking system',
        'Product catalog with filtering',
        'Mobile-responsive design',
        'Contact forms and maps integration',
        'Multi-language support (Swedish/English)'
      ],
      year: '2024'
    },
    {
      title: 'AI Image Generator',
      description: 'Text-to-image generation tool using MERN stack and AI APIs.',
      fullDescription: 'An innovative AI-powered image generation application that transforms text prompts into stunning visuals. Built with the MERN stack and integrated with Hugging Face API for AI capabilities and Cloudinary for optimized image management and delivery.',
      image: '/placeholder.svg',
      liveUrl: 'https://ai-image-generator-frontend-taupe.vercel.app/',
      githubUrl: '#',
      tags: ['MERN', 'Hugging Face', 'Cloudinary', 'AI'],
      features: [
        'AI-powered text-to-image generation',
        'Image gallery with user collections',
        'Cloud-based image storage and optimization',
        'User authentication and profiles',
        'Download and share functionality'
      ],
      year: '2023'
    },
    {
      title: 'FitFusion',
      description: 'Real-time workout tracking web application for fitness enthusiasts.',
      fullDescription: 'FitFusion is a comprehensive fitness tracking web application designed for fitness enthusiasts who want to monitor their workout progress in real-time. The application provides detailed analytics, workout planning, and progress visualization to help users achieve their fitness goals.',
      image: '/placeholder.svg',
      liveUrl: '#',
      githubUrl: 'https://github.com/SanjanaSingh1818/FitFusion_Frontend',
      tags: ['React', 'Real-time', 'Fitness', 'Web App'],
      features: [
        'Real-time workout tracking',
        'Progress analytics and charts',
        'Custom workout plan creation',
        'Exercise library with instructions',
        'Social features for motivation'
      ],
      year: '2023'
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

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
              <Card 
                className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
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
                    <Button 
                      size="sm" 
                      className="flex-1"
                      disabled={project.liveUrl === '#'}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.liveUrl !== '#') {
                          window.open(project.liveUrl, '_blank');
                        }
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span>Live</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      disabled={project.githubUrl === '#'}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.githubUrl !== '#') {
                          window.open(project.githubUrl, '_blank');
                        }
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      <span>GitHub</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleModalClose}
      />
    </section>
  );
};

export default Projects;