import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Code, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('QR-OWqHYKnaIPmBj8'); // Replace with your actual public key
      
      await emailjs.send(
         import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        {
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY 
      );

      toast({
        title: "Message sent successfully!",
        
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sanjanasingh63072@gmail.com',
      href: 'mailto:sanjanasingh63072@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7458083976',
      href: 'tel:+917458083976',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'SanjanaSingh1818',
      href: 'https://github.com/SanjanaSingh1818',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sanjana-singh',
      href: 'https://www.linkedin.com/in/sanjana-singh-426321228/',
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: 'Sanjana_18',
      href: 'https://leetcode.com/u/Sanjana_18/',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com" 
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..." 
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-200"
                  >
                    <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">{contact.label}</div>
                      <div className="text-muted-foreground text-sm">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-muted-foreground text-sm">{social.value}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-orange-400/10 p-6 rounded-lg text-center"
            >
              <h4 className="text-lg font-semibold mb-2">Ready to start a project?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                I'm always excited to work on new challenges and innovative solutions.
              </p>
              <Button>
                <a href="mailto:sanjanasingh63072@gmail.com">Let's Talk</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;