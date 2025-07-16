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
  Package,
  FileText,
  Layers
} from 'lucide-react'

// Import assets
import designSystemMockup from '../assets/design_system_mockup.png'

function DesignSystemCaseStudy() {
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
                <Badge className="mb-4">Component Library</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Design System Components
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Modular component library with comprehensive documentation and usage guidelines, 
                  enabling scalable and consistent design implementation across multiple products.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Components", "Documentation", "Scalability", "Consistency", "Guidelines"].map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src={designSystemMockup} 
                  alt="Design System Components"
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
                  <p className="text-muted-foreground">Ongoing</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">My Role</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Design Systems Lead</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Scope</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Multi-platform</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Components</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">50+ Elements</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Layers className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Modular Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Component library built with atomic design principles, allowing for flexible 
                    composition and easy maintenance across different projects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Comprehensive Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detailed usage guidelines, code examples, and design specifications that 
                    enable teams to implement components correctly and consistently.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Cross-Platform Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Unified design language that maintains brand consistency across web, mobile, 
                    and desktop applications while respecting platform conventions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Detailed Case Study Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently preparing a comprehensive deep-dive into this design system project, 
              including component architecture, documentation strategies, and adoption metrics.
            </p>
            <Link to="/">
              <Button>
                Explore Other Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/case-study/mobile-app-interface">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Case Study
              </Button>
            </Link>
            <Link to="/">
              <Button>
                Back to Portfolio
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

export default DesignSystemCaseStudy

