import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'JavaScript', 'TypeScript'],
      color: 'bg-blue-500',
    },
    {
      title: 'Frontend Technologies',
      skills: ['React.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'GSAP Animation', 'Material-UI (MUI)', 'ShadCN UI'],
      color: 'bg-green-500',
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'] ,
      color: 'bg-purple-500',
    },
    {
      title: 'CMS & No-Code Platforms',
      skills: ['WordPress', 'Shopify'],
      color: 'bg-pink-500',
    },
    {
      title: 'DevOps & Deployment',
      skills: ['Git', 'GitHub Actions', 'Appwrite', 'Cloudinary', 'Vercel', 'Netlify'],
      color: 'bg-yellow-500',
    },
 {
  title: 'Testing & API Tools',
  skills: ['Postman', 'Swagger', 'Jest', 'React Testing Library'],
  color: 'bg-teal-500',
},
{      title: 'Soft & Additional Skills',
      skills: ['Agile / Scrum Methodology', 'SEO Optimization ', 'Problem Solving', 'Effective Communication'],
      color: 'bg-red-500',
    },

  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '150+', label: 'LeetCode Problems' },
            { number: '250+', label: 'GeeksforGeeks Problems' },
            { number: '5+', label: 'Major Projects' },
            { number: '2+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;