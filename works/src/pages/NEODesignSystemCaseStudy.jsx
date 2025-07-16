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
  CheckCircle,
  Zap,
  Globe,
  Layers
} from 'lucide-react'

// Import assets - using placeholder images for now
import designSystemMockup from '../assets/design_system_mockup.png'
import professionalWorkspace from '../assets/professional_workspace.png'

function NEODesignSystemCaseStudy() {
  const projectDetails = {
    duration: "2023 - Present",
    role: "Senior UX Designer & Design System Lead",
    team: "Design System Team, Frontend Engineers, Product Managers",
    impact: "3 brands unified, 40% cost reduction, 10x faster deployment"
  }

  const kpis = [
    {
      metric: "Cost Reduction",
      target: "40% reduction in UI/Frontend maintenance",
      result: "Achieved 40% cost savings",
      icon: TrendingUp
    },
    {
      metric: "Deployment Speed",
      target: "10x faster design-to-production",
      result: "Exceeded 10x improvement",
      icon: Zap
    },
    {
      metric: "Brand Unification",
      target: "Unified BMW, MINI, BMW Motorrad",
      result: "Successfully unified 3 brands",
      icon: Globe
    }
  ]

  const achievements = [
    "Led design token revolution across BMW Group",
    "Established automated design-to-code pipeline",
    "Created multi-brand component architecture",
    "Implemented scalable design system governance",
    "Delivered measurable business impact across 15+ teams"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Featured Project
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              NEO Design System
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Revolutionizing BMW Group's digital ecosystem through unified design tokens, 
              multi-brand component architecture, and automated design-to-code workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Design Systems</Badge>
              <Badge variant="secondary">Design Tokens</Badge>
              <Badge variant="secondary">Multi-Brand Architecture</Badge>
              <Badge variant="secondary">BMW Group</Badge>
              <Badge variant="secondary">Enterprise Scale</Badge>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-900">{projectDetails.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Role
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-900">{projectDetails.role}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-900">{projectDetails.team}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-slate-900">{projectDetails.impact}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
              <p className="text-lg text-slate-600 mb-6">
                BMW Group faced significant challenges in maintaining design consistency across 
                three distinct brands (BMW, MINI, BMW Motorrad) while scaling digital products 
                globally. The lack of unified design standards resulted in:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  Inconsistent user experiences across brand touchpoints
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  High maintenance costs for UI/Frontend development
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  Slow design-to-production deployment cycles
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  Fragmented design and development workflows
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={professionalWorkspace} 
                alt="BMW Group Design Challenge" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <img 
                src={designSystemMockup} 
                alt="NEO Design System Architecture" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
              <p className="text-lg text-slate-600 mb-6">
                NEO Design System revolutionized BMW Group's approach to digital design through 
                a comprehensive, token-based architecture that enables unprecedented consistency 
                and efficiency across all brand touchpoints.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Layers className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Design Token Revolution</h3>
                    <p className="text-slate-600">Implemented atomic design tokens for colors, typography, spacing, and motion across all BMW Group brands.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Multi-Brand Architecture</h3>
                    <p className="text-slate-600">Created flexible component system supporting BMW, MINI, and BMW Motorrad brand expressions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Automated Workflows</h3>
                    <p className="text-slate-600">Established design-to-code automation reducing deployment time from weeks to hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Business Impact</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Measurable results that transformed BMW Group's digital ecosystem and delivered 
              significant business value across the organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kpis.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <kpi.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{kpi.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-2">{kpi.target}</p>
                    <p className="font-semibold text-green-600">{kpi.result}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Achievements</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Strategic initiatives that established NEO as the foundation for BMW Group's 
              digital transformation and future innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Design System?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how enterprise-scale design systems can drive business value 
              and operational efficiency for your organization.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NEODesignSystemCaseStudy

