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
  Smartphone,
  Accessibility,
  Zap
} from 'lucide-react'

// Import assets
import mobileAppMockup from '../assets/mobile_app_mockup.png'

function MobileAppCaseStudy() {
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
                <Badge className="mb-4">Mobile Design</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Mobile App Interface
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Clean and intuitive mobile application design focused on user engagement 
                  and accessibility, delivering seamless experiences across iOS and Android platforms.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Mobile Design", "UI/UX", "Prototyping", "User Testing", "Accessibility"].map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src={mobileAppMockup} 
                  alt="Mobile App Interface"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
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
                  <p className="text-muted-foreground">6 months</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">My Role</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Lead Mobile Designer</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Platform</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">iOS & Android</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Focus</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">User Engagement</p>
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
                  <Accessibility className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Accessibility First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Designed with WCAG guidelines in mind, ensuring the app is usable by everyone 
                    regardless of their abilities or disabilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Performance Optimized</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Streamlined interface design that prioritizes fast loading times and smooth 
                    interactions across different device specifications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>User-Centered Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every design decision was validated through user research and testing, 
                    ensuring the interface meets real user needs and expectations.
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
              I'm currently preparing a comprehensive deep-dive into this mobile app design project, 
              including detailed process documentation, user research insights, and design iterations.
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
            <Link to="/case-study/ar-vr-experience">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Case Study
              </Button>
            </Link>
            <Link to="/case-study/design-system-components">
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

export default MobileAppCaseStudy

