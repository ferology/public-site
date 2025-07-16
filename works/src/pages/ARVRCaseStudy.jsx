import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowLeft, 
  Calendar,
  Users,
  Target,
  Zap,
  Eye,
  Smartphone,
  Headphones
} from 'lucide-react'

// Import assets
import arVrTechnology from '../assets/ar_vr_technology.webp'
import arvrFarfetch from '../assets/arvr_farfetch.png'
import arvrIkea from '../assets/arvr_ikea.png'
import arvrNike from '../assets/arvr_nike.png'
import arvrPorsche from '../assets/arvr_porsche.png'
import arvrFlow from '../assets/arvr_flow.png'
import arvrWireframe from '../assets/arvr_wireframe.png'
import arvrVisual from '../assets/arvr_visual.png'
import arvrOutput from '../assets/arvr_output.png'

function ARVRCaseStudy() {
  const projectDetails = {
    duration: "2018 - 2020",
    role: "Lead UX Designer",
    team: "3D Designers, Developers, Product Managers",
    platform: "NMD R1 VR/AR Experience"
  }

  const features = [
    {
      title: "Immersive Product Visualization",
      description: "360-degree product exploration with detailed material and texture rendering",
      icon: Eye
    },
    {
      title: "AR Try-On Experience",
      description: "Real-time augmented reality fitting and customization capabilities",
      icon: Smartphone
    },
    {
      title: "Spatial Audio Integration",
      description: "3D audio experiences that enhance immersion and brand storytelling",
      icon: Headphones
    },
    {
      title: "Cross-Platform Compatibility",
      description: "Seamless experience across mobile, web, and VR headset platforms",
      icon: Target
    }
  ]

  const challenges = [
    "Creating intuitive navigation in 3D space without traditional UI elements",
    "Optimizing performance for mobile AR while maintaining visual quality",
    "Designing for accessibility in immersive environments",
    "Balancing brand consistency with innovative interaction paradigms"
  ]

  const solutions = [
    "Developed spatial UI patterns that feel natural in 3D environments",
    "Implemented progressive loading and LOD systems for performance",
    "Created alternative interaction methods for users with different abilities",
    "Established AR/VR brand guidelines that extend existing design system"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <div className="text-xl font-bold text-primary">
              Case Study
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Innovation Project</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  NMD R1 VR/AR Experience
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Pioneering immersive augmented and virtual reality experiences for sports 
                  retail, creating new paradigms for product interaction and brand engagement 
                  in digital spaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["AR/VR", "3D Design", "User Experience", "Innovation", "Mobile AR"].map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src={arVrTechnology} 
                  alt="AR/VR Technology"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Project Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Duration</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{projectDetails.duration}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">My Role</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{projectDetails.role}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Team</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{projectDetails.team}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Platform</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{projectDetails.platform}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Creating immersive AR/VR experiences for sports retail presented unique challenges 
                in user experience design, requiring new interaction paradigms and performance 
                optimization for emerging technologies.
              </p>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Through iterative design and user testing, we developed innovative interaction 
                patterns and optimization strategies that delivered seamless immersive experiences 
                across multiple platforms.
              </p>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Design Process</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary font-bold">01</span>
                        </div>
                        <h3 className="font-semibold mb-2">Research & Exploration</h3>
                        <p className="text-sm text-muted-foreground">
                          Studied existing AR/VR patterns and conducted user research to understand 
                          expectations and limitations in immersive environments.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary font-bold">02</span>
                        </div>
                        <h3 className="font-semibold mb-2">Prototyping & Testing</h3>
                        <p className="text-sm text-muted-foreground">
                          Created rapid prototypes to test interaction concepts and gathered feedback 
                          through user testing sessions with VR/AR hardware.
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-primary font-bold">03</span>
                        </div>
                        <h3 className="font-semibold mb-2">Implementation & Optimization</h3>
                        <p className="text-sm text-muted-foreground">
                          Worked closely with developers to implement designs while optimizing 
                          for performance across different devices and platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Collaborations & Implementation */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Brand Collaborations & Implementation</h2>
            
            {/* Brand Partners */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Strategic Brand Partnerships</h3>
              <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                Collaborated with leading brands to create immersive AR/VR experiences that showcase products 
                in innovative ways, setting new standards for digital retail experiences.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <img 
                    src={arvrFarfetch} 
                    alt="Farfetch AR Experience"
                    className="rounded-lg shadow-lg w-full mb-4"
                  />
                  <h4 className="font-semibold">Farfetch</h4>
                  <p className="text-sm text-muted-foreground">Luxury Fashion AR Try-On</p>
                </div>
                <div className="text-center">
                  <img 
                    src={arvrIkea} 
                    alt="IKEA AR Experience"
                    className="rounded-lg shadow-lg w-full mb-4"
                  />
                  <h4 className="font-semibold">IKEA</h4>
                  <p className="text-sm text-muted-foreground">Furniture Placement AR</p>
                </div>
                <div className="text-center">
                  <img 
                    src={arvrNike} 
                    alt="Nike AR Experience"
                    className="rounded-lg shadow-lg w-full mb-4"
                  />
                  <h4 className="font-semibold">Nike</h4>
                  <p className="text-sm text-muted-foreground">Sneaker Customization VR</p>
                </div>
                <div className="text-center">
                  <img 
                    src={arvrPorsche} 
                    alt="Porsche VR Experience"
                    className="rounded-lg shadow-lg w-full mb-4"
                  />
                  <h4 className="font-semibold">Porsche</h4>
                  <p className="text-sm text-muted-foreground">Virtual Showroom Experience</p>
                </div>
              </div>
            </div>

            {/* Design Process Visuals */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">User Flow & Journey Mapping</h3>
                <img 
                  src={arvrFlow} 
                  alt="AR/VR User Flow"
                  className="rounded-lg shadow-lg w-full mb-4"
                />
                <p className="text-muted-foreground">
                  Comprehensive user journey mapping for AR/VR experiences, showing interaction 
                  points and decision trees across different platforms and devices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Wireframes & Prototypes</h3>
                <img 
                  src={arvrWireframe} 
                  alt="AR/VR Wireframes"
                  className="rounded-lg shadow-lg w-full mb-4"
                />
                <p className="text-muted-foreground">
                  Low-fidelity wireframes and interaction prototypes designed specifically 
                  for 3D environments and spatial user interfaces.
                </p>
              </div>
            </div>

            {/* Visual Design & Output */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Visual Design System</h3>
                <img 
                  src={arvrVisual} 
                  alt="AR/VR Visual Design"
                  className="rounded-lg shadow-lg w-full mb-4"
                />
                <p className="text-muted-foreground">
                  Comprehensive visual design system for AR/VR interfaces, including spatial 
                  UI components, 3D interaction patterns, and immersive brand elements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Final Implementation</h3>
                <img 
                  src={arvrOutput} 
                  alt="AR/VR Final Output"
                  className="rounded-lg shadow-lg w-full mb-4"
                />
                <p className="text-muted-foreground">
                  Final implementation showcasing the seamless integration of brand identity 
                  with immersive technology, delivering exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Key Innovation Points */}
            <div className="mt-12 bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Innovation Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">First</div>
                  <p className="text-muted-foreground">Cross-platform AR/VR retail experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-muted-foreground">Major brand partnerships established</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">360°</div>
                  <p className="text-muted-foreground">Immersive product visualization</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Impact & Results</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">85%</CardTitle>
                    <CardDescription>User Engagement Increase</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">40%</CardTitle>
                    <CardDescription>Conversion Rate Improvement</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">95%</CardTitle>
                    <CardDescription>User Satisfaction Score</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/case-study/adidas-design-system">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Case Study
              </Button>
            </Link>
            <Link to="/case-study/mobile-app-interface">
              <Button>
                Next Case Study
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Francesco Fera. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ARVRCaseStudy

