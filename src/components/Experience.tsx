import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Web Developer',
      company: 'Genesis Virtue',
      period: 'Current',
      type: 'Full-time',
      description: 'Developing responsive web applications and working on client projects like Speedy Tyres (Sweden-based tire & car service website).',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    },
    {
      title: 'Subject Matter Expert',
      company: 'Chegg',
      period: '2023 - Present',
      type: 'Part-time',
      description: 'Providing expert solutions and guidance in computer science and programming topics.',
      technologies: ['Problem Solving', 'Algorithm Design', 'Code Review'],
    },
    {
      title: 'Web Development Intern',
      company: 'TechnoHacks',
      period: '2023',
      type: 'Internship',
      description: 'Gained hands-on experience in frontend development and modern web technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Web Development Intern',
      company: 'OctaNet',
      period: '2023',
      type: 'Internship',
      description: 'Worked on various web development projects and learned industry best practices.',
      technologies: ['Frontend Development', 'UI/UX', 'Responsive Design'],
    },
    {
      title: 'Technical Intern',
      company: 'Northern Railway',
      period: '2022',
      type: 'Internship',
      description: 'Gained exposure to large-scale systems and enterprise-level development practices.',
      technologies: ['System Analysis', 'Documentation', 'Testing'],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-section-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in web development and technology
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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

export default Experience;