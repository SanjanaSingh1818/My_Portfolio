import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'MERN Stack Developer',
      description: 'Specialized in building scalable web applications',
    },
    {
      icon: GraduationCap,
      title: 'B.Tech Graduate',
      description: 'B.Tech CSIT, MJPRU – 2025',
    },
    {
      icon: Trophy,
      title: 'Problem Solver',
      description: '400+ coding problems solved across platforms',
    },
  ];

  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate Software Developer with a drive to create meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-foreground/80">
              <p>
                I'm <strong>Sanjana Singh</strong>, a passionate MERN Stack Developer and 
                B.Tech graduate in Computer Science & Information Technology (MJPRU – 2025). 
                Currently working as an Associate Web Developer at Genesis Virtue, I specialize in 
                building responsive, scalable, and user-friendly web applications using React.js, 
                Tailwind CSS, Node.js, and MongoDB.
              </p>
              <p>
                With hands-on experience in real-world client projects like <strong>Speedy Tyres</strong> 
                (Sweden-based tire & car service website) and personal projects such as <strong>EduKnit</strong> 
                (academic learning platform) and an <strong>AI Image Generator</strong>, I combine 
                technical expertise with problem-solving skills to deliver impactful digital solutions.
              </p>
              <p>
                Beyond development, I actively practice competitive programming, solving 
                <strong> 150+ problems on LeetCode</strong> and <strong>250+ on GeeksforGeeks</strong>, 
                which strengthens my logical thinking and coding efficiency. I'm always eager to learn, 
                adapt, and contribute to creating meaningful tech products that enhance user experiences.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
