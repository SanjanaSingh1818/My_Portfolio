import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Code, Users, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: 'Competitive Programming',
      description: 'Solved 150+ problems on LeetCode and 250+ on GeeksforGeeks, strengthening algorithmic thinking and problem-solving skills.',
      badge: '400+ Problems Solved',
      color: 'text-blue-500',
    },
    {
      icon: Trophy,
      title: 'Hackathon Participation',
      description: 'Actively participated in various hackathons, showcasing innovative solutions and collaborative development skills.',
      badge: 'Multiple Events',
      color: 'text-green-500',
    },
    {
      icon: Award,
      title: 'Subject Matter Expert',
      description: 'Recognized as a Subject Matter Expert at Chegg, providing expert guidance in computer science topics.',
      badge: 'SME at Chegg',
      color: 'text-purple-500',
    },
    {
      icon: Users,
      title: 'Client Project Success',
      description: 'Successfully delivered real-world client projects including Speedy Tyres (Sweden-based service website).',
      badge: 'International Client',
      color: 'text-orange-500',
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-section-bg">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and accomplishments that define my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300`}>
                        <achievement.icon className={`w-6 h-6 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {achievement.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coding Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Coding <span className="gradient-text">Journey</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">LeetCode Problems</div>
              <div className="text-sm text-muted-foreground">
                <a 
                  href="https://leetcode.com/u/Sanjana_18/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">250+</div>
              <div className="text-muted-foreground">GeeksforGeeks Problems</div>
              <div className="text-sm text-muted-foreground">Algorithm & Data Structures</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">400+</div>
              <div className="text-muted-foreground">Total Problems Solved</div>
              <div className="text-sm text-muted-foreground">Across Multiple Platforms</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;