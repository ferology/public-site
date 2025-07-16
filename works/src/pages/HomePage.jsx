import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github,
  ChevronDown,
  User,
  Briefcase,
  Phone,
  Star,
  Award,
  Target,
  Users,
  Lightbulb,
  Zap,
  Palette
} from 'lucide-react'

// Import assets
import heroBackground from '../assets/hero_background.png'
import professionalWorkspace from '../assets/professional_workspace.png'
import designSystemMockup from '../assets/design_system_mockup.png'
import mobileAppMockup from '../assets/mobile_app_mockup.png'
import adidasDesignSystem from '../assets/adidas_design_system.jpg'
import arVrTechnology from '../assets/ar_vr_technology.webp'
import uxProcessDiagram from '../assets/ux_process_diagram.webp'
import designWorkshop from '../assets/design_workshop.jpg'
import francescoPhoto from '../assets/francesco_photo.jpg'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'process', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "NEO Design System",
      description: "Revolutionary design token architecture unifying BMW Group's digital ecosystem across BMW, MINI, and BMW Motorrad brands.",
      image: designSystemMockup,
      tags: ["Design Systems", "Design Tokens", "Multi-Brand Architecture", "BMW Group", "Enterprise Scale"],
      link: "/case-study/neo-design-system",
      featured: true
    },
    {
      id: 2,
      title: "Adidas Design System",
      description: "Comprehensive design system for global brand consistency across digital products and platforms.",
      image: adidasDesignSystem,
      tags: ["Design Systems", "UI/UX", "Brand Design", "Component Library"],
      link: "/case-study/adidas-design-system",
      featured: true
    },
    {
      id: 3,
      title: "AR/VR Experience Design",
      description: "Immersive augmented and virtual reality experiences for sports and retail applications.",
      image: arVrTechnology,
      tags: ["AR/VR", "3D Design", "User Experience", "Innovation"],
      link: "/case-study/ar-vr-experience",
      featured: false
    },
    {
      id: 4,
      title: "UX Strategy Transformation",
      description: "Strategic UX transformation at BMW Group: from reactive tactics to strategic user-centered design with measurable business impact.",
      image: professionalWorkspace,
      tags: ["Strategic UX", "User Research", "BMW Group", "Collaboration Framework", "Business Impact"],
      link: "/case-study/ux-changes",
      featured: true
    },
    {
      id: 5,
      title: "Mobile App Interface",
      description: "Clean and intuitive mobile application design focused on user engagement and accessibility.",
      image: mobileAppMockup,
      tags: ["Mobile Design", "UI/UX", "Prototyping", "User Testing"],
      link: "/case-study/mobile-app-interface",
      featured: false
    },
    {
      id: 6,
      title: "Design System Components",
      description: "Modular component library with comprehensive documentation and usage guidelines.",
      image: designSystemMockup,
      tags: ["Components", "Documentation", "Scalability", "Consistency"],
      link: "/case-study/design-system-components",
      featured: false
    }
  ]

  const skills = [
    { name: "UX Design", level: 95, icon: User },
    { name: "Design Systems", level: 90, icon: Target },
    { name: "Prototyping", level: 88, icon: Zap },
    { name: "User Research", level: 85, icon: Users },
    { name: "AR/VR Design", level: 80, icon: Lightbulb },
    { name: "Product Strategy", level: 87, icon: Award }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Research & Discovery",
      description: "Understanding user needs, business goals, and market context through comprehensive research.",
      icon: Users
    },
    {
      number: "02", 
      title: "Ideation & Concept",
      description: "Generating creative solutions and exploring design possibilities through collaborative workshops.",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Design & Prototype",
      description: "Creating detailed designs and interactive prototypes to validate concepts and gather feedback.",
      icon: Target
    },
    {
      number: "04",
      title: "Test & Iterate",
      description: "Conducting user testing and iterating based on insights to optimize the user experience.",
      icon: Zap
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-primary"
            >
              <Link to="/">Francesco Fera</Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'work', 'process', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Link 
                to="/graphic-design"
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <Palette className="h-4 w-4" />
                <span>Graphics</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 py-2 space-y-2">
                {['home', 'about', 'work', 'process', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 capitalize hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <Link 
                  to="/graphic-design"
                  className="flex items-center space-x-2 py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Palette className="h-4 w-4" />
                  <span>Graphic Design</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Francesco
                <span className="block text-primary">Fera</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
                  UX Designer & Design Systems Expert
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Crafting exceptional digital experiences through strategic design thinking, 
                  systematic approaches, and innovative solutions for global brands like BMW Group and Adidas.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('work')}
                  className="group"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                {/* Background decoration */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Photo container */}
                <motion.div
                  className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={francescoPhoto}
                    alt="Francesco Fera"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full"
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences that bridge the gap between user needs and business goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={professionalWorkspace} 
                alt="Professional workspace"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  With extensive experience in UX design and a passion for innovation, I've had the privilege of working 
                  with leading brands like Adidas, creating design systems that scale across global markets and developing 
                  cutting-edge AR/VR experiences.
                </p>
                <p className="text-muted-foreground">
                  My approach combines user-centered design principles with strategic thinking, ensuring that every solution 
                  not only delights users but also drives business success.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Core Skills</h4>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in UX design, design systems, and innovative digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <Link to={project.link}>
                      <Button
                        size="sm"
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <Link to={project.link} className="hover:text-primary transition-colors">
                        {project.title}
                      </Link>
                      {project.featured && (
                        <Badge variant="secondary">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/graphic-design">
              <Button variant="outline" size="lg" className="group">
                <Palette className="mr-2 h-4 w-4" />
                View Graphic Design Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to creating exceptional user experiences through research, design, and iteration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <img 
              src={uxProcessDiagram} 
              alt="UX Design Process"
              className="mx-auto rounded-lg shadow-lg max-w-4xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to create something amazing? I'm always excited to discuss new projects and opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">francesco.fera@email.com</p>
              </div>
              <div>
                <Linkedin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/francescofera</p>
              </div>
              <div>
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Available for remote work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Francesco Fera. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

