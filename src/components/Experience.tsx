import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Web Developer',
      company: 'Genesis Virtue',
      period: '2024 - Present',
      type: 'Full-time',
      bullets: [
        'Developed responsive web applications using React.js and modern JavaScript frameworks',
        'Collaborated on client projects including Speedy Tyres (Sweden-based tire & car service website)',
        'Implemented UI/UX designs with TailwindCSS and ensured cross-browser compatibility'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
    },
    {
      title: 'Subject Matter Expert',
      company: 'Chegg',
      period: '2023 - Present',
      type: 'Part-time',
      bullets: [
        'Provided expert solutions for 200+ computer science and programming questions',
        'Maintained 95% solution accuracy rate across various programming languages',
        'Guided students in algorithm design, data structures, and code optimization'
      ],
      technologies: ['Problem Solving', 'Algorithm Design', 'Code Review'],
    },
    {
      title: 'Web Development Intern',
      company: 'TechnoHacks',
      period: '2023',
      type: 'Internship',
      bullets: [
        'Built 3+ responsive web applications using HTML, CSS, JavaScript and React',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Improved application performance by 25% through code optimization'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Web Development Intern',
      company: 'OctaNet',
      period: '2023',
      type: 'Internship',
      bullets: [
        'Developed frontend components for 2+ client projects using modern web technologies',
        'Implemented responsive design principles ensuring mobile-first approach',
        'Participated in code reviews and learned industry best practices'
      ],
      technologies: ['Frontend Development', 'UI/UX', 'Responsive Design'],
    },
    {
      title: 'Technical Intern',
      company: 'Northern Railway',
      period: '2022',
      type: 'Internship',
      bullets: [
        'Analyzed large-scale railway management systems and documented technical workflows',
        'Assisted in system testing and quality assurance processes',
        'Gained exposure to enterprise-level development and maintenance practices'
      ],
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-muted-foreground">
                            <span className="font-medium text-primary">{exp.company}</span>
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
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80 leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;