import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, ExternalLink, Users, Target, TrendingUp, Lightbulb, Zap, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

// Import assets
import designSystemMockup from '../assets/design_system_mockup.png'
import professionalWorkspace from '../assets/professional_workspace.png'

function UXChangesCaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Strategic UX Transformation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              UX from Tactics to Strategy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transforming BMW's UX approach from reactive tactics to strategic user-centered design, 
              incorporating comprehensive user research and fostering cross-functional collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["Strategic UX", "User Research", "Design Systems", "BMW Group", "Collaboration Framework"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <img
              src={designSystemMockup}
              alt="UX Strategy Transformation"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Strategic UX Transformation</h3>
              <p className="text-lg opacity-90">BMW Group • 2025</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                BMW's UX approach was fragmented across multiple domains, leading to reactive tactical decisions 
                instead of strategic user insights. The organization faced significant inefficiencies and 
                inconsistent experiences across the BMW portfolio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Reactive Approach</h3>
                    <p className="text-gray-600">
                      Using analytics, A/B testing, and usability tests for tactical advances without strategic consolidation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fragmented Teams</h3>
                    <p className="text-gray-600">
                      Distributed designers across domains causing inconsistent behavior and lack of common experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Productivity Loss</h3>
                    <p className="text-gray-600">
                      Estimated 15-20% of designer time lost due to process inefficiencies and disconnected workflows.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <img
                src={professionalWorkspace}
                alt="UX Challenge Analysis"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Solution Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive UX transformation initiative addressing systemic issues through strategic 
              user research, unified design systems, and collaborative frameworks.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Journey Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Invest in 2 user researchers for strategic studies and create Consumer Journey Maps 
                    to orchestrate experiences.
                  </p>
                  <Badge variant="outline" className="text-xs">User Research</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Build cross-functional design teams and collaboration squads under unified leadership 
                    for consistent experiences.
                  </p>
                  <Badge variant="outline" className="text-xs">Collaboration</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">UI Unification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Connect all design libraries with unified governance and scale NEO architecture 
                    across BMW touchpoints.
                  </p>
                  <Badge variant="outline" className="text-xs">Design Systems</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Design Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Standardize team onboarding, collaboration, and processes to improve quality 
                    and efficiency at scale.
                  </p>
                  <Badge variant="outline" className="text-xs">Operations</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transformational Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The strategic UX transformation delivered measurable improvements in efficiency, 
              consistency, and user experience across the BMW portfolio.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="text-4xl font-bold text-blue-600 mb-2">15-20%</div>
                  <CardTitle className="text-xl">Time Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Improved designer workflows and standardized processes eliminated productivity losses.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="text-4xl font-bold text-green-600 mb-2">3+</div>
                  <CardTitle className="text-xl">Libraries Unified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Connected multiple design libraries into a cohesive, scalable system architecture.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                  <CardTitle className="text-xl">Strategic Alignment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Transformed from reactive tactics to strategic user-centered design approach.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Key Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Strategic user insights driving business decisions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Unified design system architecture across BMW portfolio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Cross-functional collaboration framework established</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Standardized design operations and governance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Improved user experience consistency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Scalable framework for future growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your UX Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how strategic UX transformation can drive business impact for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Get In Touch
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  View More Work
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default UXChangesCaseStudy

