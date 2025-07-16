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
  Star,
  Palette
} from 'lucide-react'

// Import assets
import designSystemMockup from '../assets/design_system_mockup.png'
import adidasDesignSystem from '../assets/adidas_design_system.jpg'
import arVrTechnology from '../assets/ar_vr_technology.webp'
import mobileAppMockup from '../assets/mobile_app_mockup.png'

function WorkOnlyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      description: "Strategic UX transformation at BMW Group, evolving from tactical execution to strategic business partnership.",
      image: mobileAppMockup,
      tags: ["UX Strategy", "Business Transformation", "Strategic Design", "BMW Group", "Leadership"],
      link: "/case-study/ux-changes",
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold">
              Francesco Fera
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Button variant="ghost" size="sm">
                Portfolio
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t"
            >
              <div className="px-4 py-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Portfolio
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Work Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of projects that showcase my expertise in UX design, design systems, and innovative digital experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
      </main>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Francesco Fera. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default WorkOnlyPage

