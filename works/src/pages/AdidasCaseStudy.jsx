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
  TrendingUp,
  Award,
  CheckCircle
} from 'lucide-react'

// Import assets
import adidasDesignSystem from '../assets/adidas_design_system.jpg'
import designSystemMockup from '../assets/design_system_mockup.png'
import adidasFlow from '../assets/adidas_flow.jpg'
import adidasCutout from '../assets/adidas_cutout.png'
import adidasScreenshot1 from '../assets/adidas_screenshot1.png'
import adidasScreenshot2 from '../assets/adidas_screenshot2.png'

function AdidasCaseStudy() {
  const projectDetails = {
    duration: "2016 - 2019",
    role: "Design Director & Lead",
    team: "Visual Designers, Interaction Designers, UX Writers, Technologists",
    impact: "90% adoption across product teams, 60% reduction in development time"
  }

  const kpis = [
    {
      metric: "Product Team Adoption",
      target: "From >30% to 90% in 3 years",
      result: "Achieved 90% adoption",
      icon: Users
    },
    {
      metric: "Brand NPS",
      target: "Above 50 for digital touchpoints",
      result: "Exceeded target consistently",
      icon: TrendingUp
    },
    {
      metric: "Development Efficiency",
      target: "60% reduction in lead time",
      result: "Achieved 60%+ improvement",
      icon: Target
    }
  ]

  const challenges = [
    "Complete lack of connection between Creative direction, Digital Product Teams and Tech",
    "Creative direction updated with 14-month cadence, difficult to cascade to digital products",
    "Each product team claiming autonomy on frontend development",
    "Inefficiency in both internal and external efforts"
  ]

  const solutions = [
    "Established lightweight and highly maintainable digital tool for adidas digital products",
    "Created translation of brand direction into adidas digital experiences",
    "Built collaborative framework between brand design & digital experience design teams",
    "Implemented systematic approach to design consistency across global markets"
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
                <Badge className="mb-4">Featured Project</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Adidas Design System
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Building a comprehensive design language that translates brand direction into 
                  digital experiences, serving as the foundation for global brand consistency 
                  across all digital products and platforms.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Design Systems", "UI/UX", "Brand Design", "Component Library", "Leadership"].map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src={adidasDesignSystem} 
                  alt="Adidas Design System"
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
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Impact</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{projectDetails.impact}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  To meet consumers' rising expectations and fulfill the company mission to design, 
                  create and sell the best sport products, adidas had been strongly active in software 
                  development, especially during the last business cycle.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  The increasing demand increased both tangible costs (measured in euro per design and 
                  development time) and intangible costs (measured in satisfaction per digital product 
                  of adidas consumers, customers and employees).
                </p>
                <h3 className="text-xl font-semibold mb-4">Key Issues Identified:</h3>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Solution */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">The Solution</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  The challenge was exciting and scary at the same time: Build a design language 
                  which is the translation of the brand direction into adidas digital experiences. 
                  Accept it will be a constant work-in-progress, in collaboration with our brand 
                  design & digital experience design teams.
                </p>
                <h3 className="text-xl font-semibold mb-4">Strategic Approach:</h3>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Leadership & Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      As first leader in the organization, I led the ideation and design direction 
                      of the design system since 2016. I hired visual designers, interaction designers, 
                      UX writers and technologists to support the initial kick-off.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>End-to-End Accountability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      As director, I had end-to-end accountability of the project, both financially 
                      and of the outcomes. Each product domain now manages and maintains their own tier.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process & Visuals */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Design Process & Implementation</h2>
            
            {/* Process Flow */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">User Journey & Flow</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={adidasFlow} 
                  alt="Adidas Design System User Flow"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-muted-foreground mt-4 text-center">
                Comprehensive user journey mapping showing the integration points between brand guidelines and digital product implementation.
              </p>
            </div>

            {/* Design System Components */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Component Architecture</h3>
                <img 
                  src={adidasCutout} 
                  alt="Adidas Design System Components"
                  className="rounded-lg shadow-lg w-full mb-4"
                />
                <p className="text-muted-foreground">
                  Modular component library showcasing the systematic approach to design consistency 
                  across all digital touchpoints, from mobile apps to web platforms.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Implementation Examples</h3>
                <div className="space-y-4">
                  <img 
                    src={adidasScreenshot1} 
                    alt="Adidas Design System Implementation 1"
                    className="rounded-lg shadow-lg w-full"
                  />
                  <img 
                    src={adidasScreenshot2} 
                    alt="Adidas Design System Implementation 2"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <p className="text-muted-foreground mt-4">
                  Real-world implementation examples showing how the design system translates 
                  into consistent user experiences across different product domains.
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Key Achievements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <p className="text-muted-foreground">Product Team Adoption</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <p className="text-muted-foreground">Reduction in Development Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3 Years</div>
                  <p className="text-muted-foreground">From Concept to Full Adoption</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & KPIs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Results & Impact</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              The lighthouse metric of the effort was measured on how many new features teams 
              would deliver through the system. The results exceeded expectations across all key areas.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <CardHeader>
                      <kpi.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg">{kpi.metric}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Target:</p>
                      <p className="font-medium mb-4">{kpi.target}</p>
                      <p className="text-sm text-muted-foreground mb-2">Result:</p>
                      <p className="font-semibold text-primary">{kpi.result}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Learnings</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Early Insights</h3>
                      <p className="text-muted-foreground">
                        While we had a sizeable amount of brand guidelines and even UI kits in the organization, 
                        I tasked my team and myself to understand why each product team was claiming autonomy 
                        on the frontend and why creative direction wasn't disturbed by such misuse of the brand.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Discovery Process</h3>
                      <p className="text-muted-foreground">
                        I was surprised by the complete lack of connection between Creative direction, Digital 
                        Product Teams and Tech. This led me to a clear direction to establish the adidas design 
                        system as a lightweight and highly maintainable digital tool for adidas digital products.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Success Factors</h3>
                      <p className="text-muted-foreground">
                        The key to success was targeting operational efficiency first to gain credibility, 
                        then building collaborative frameworks that connected previously siloed teams and 
                        establishing clear mandates for design consistency.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
            <Link to="/case-study/ar-vr-experience">
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

export default AdidasCaseStudy

