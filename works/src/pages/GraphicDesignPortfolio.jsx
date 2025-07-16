import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowLeft, 
  Palette, 
  Music, 
  Shirt, 
  Calendar,
  Gamepad2,
  Eye,
  X
} from 'lucide-react'

// Import graphic design assets
import daftpunkrumore from '../assets/daftpunkrumore.jpg'
import justiceposter from '../assets/justiceposter.jpg'
import controlc from '../assets/controlc.jpg'
import guideline from '../assets/guideline.jpg'
import posterilluminati from '../assets/posterilluminati.jpg'
import breilworldinv from '../assets/breilworldinv.jpg'
import flyers from '../assets/flyers.jpg'
import sportmax11 from '../assets/sportmax11.jpg'
import albumcover from '../assets/albumcover.jpg'
import macmac from '../assets/macmac.jpg'
import pumpkin from '../assets/pumpkin.jpg'
import sportmaxcode from '../assets/sportmaxcode.jpg'
import wow from '../assets/wow.jpg'
import reggio from '../assets/7reggio.jpg'
import stylo from '../assets/stylo.jpg'
import regina from '../assets/regina.jpg'

function GraphicDesignPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'All Work', icon: Palette },
    { id: 'music', name: 'Music Industry', icon: Music },
    { id: 'fashion', name: 'Fashion Brands', icon: Shirt },
    { id: 'events', name: 'Events & Promo', icon: Calendar },
    { id: 'entertainment', name: 'Entertainment', icon: Gamepad2 },
    { id: 'branding', name: 'Brand Identity', icon: Eye }
  ]

  const projects = [
    {
      id: 1,
      title: "Daft Punk Tribute Poster",
      description: "Electronic music poster design with futuristic aesthetic and bold typography.",
      image: daftpunkrumore,
      category: 'music',
      tags: ['Poster Design', 'Music', 'Typography', 'Electronic'],
      year: '2019'
    },
    {
      id: 2,
      title: "Justice Band Poster",
      description: "Concert poster design for Justice featuring dynamic composition and vibrant colors.",
      image: justiceposter,
      category: 'music',
      tags: ['Concert Poster', 'Music', 'Visual Identity', 'Print Design'],
      year: '2020'
    },
    {
      id: 3,
      title: "Control Game Design",
      description: "Gaming-inspired visual design with dark aesthetic and modern typography.",
      image: controlc,
      category: 'entertainment',
      tags: ['Gaming', 'Visual Design', 'Dark Theme', 'Modern'],
      year: '2021'
    },
    {
      id: 4,
      title: "Brand Guidelines Manual",
      description: "Comprehensive brand guidelines showcasing visual identity standards and usage.",
      image: guideline,
      category: 'branding',
      tags: ['Brand Guidelines', 'Visual Identity', 'Standards', 'Documentation'],
      year: '2020'
    },
    {
      id: 5,
      title: "Illuminati Poster Design",
      description: "Conceptual poster design with mysterious themes and symbolic elements.",
      image: posterilluminati,
      category: 'events',
      tags: ['Poster Design', 'Conceptual', 'Symbolic', 'Dark Art'],
      year: '2019'
    },
    {
      id: 6,
      title: "Breil World Invasion",
      description: "Fashion brand campaign design with bold visual impact and modern aesthetics.",
      image: breilworldinv,
      category: 'fashion',
      tags: ['Fashion', 'Campaign', 'Bold Design', 'Modern'],
      year: '2021'
    },
    {
      id: 7,
      title: "Event Flyers Collection",
      description: "Series of promotional flyers for various events with diverse visual styles.",
      image: flyers,
      category: 'events',
      tags: ['Flyers', 'Events', 'Promotional', 'Diverse Styles'],
      year: '2020'
    },
    {
      id: 8,
      title: "Sportmax Fashion Design",
      description: "High-end fashion brand visual design with elegant and sophisticated approach.",
      image: sportmax11,
      category: 'fashion',
      tags: ['Fashion', 'Luxury', 'Elegant', 'Sophisticated'],
      year: '2021'
    },
    {
      id: 9,
      title: "Album Cover Design",
      description: "Music album artwork with creative composition and artistic visual elements.",
      image: albumcover,
      category: 'music',
      tags: ['Album Cover', 'Music', 'Artistic', 'Creative'],
      year: '2020'
    },
    {
      id: 10,
      title: "Mac Design Concept",
      description: "Technology-inspired design concept with clean lines and modern aesthetics.",
      image: macmac,
      category: 'branding',
      tags: ['Technology', 'Clean Design', 'Modern', 'Concept'],
      year: '2021'
    },
    {
      id: 11,
      title: "Halloween Pumpkin Design",
      description: "Seasonal design with playful elements and festive Halloween theme.",
      image: pumpkin,
      category: 'events',
      tags: ['Seasonal', 'Halloween', 'Playful', 'Festive'],
      year: '2020'
    },
    {
      id: 12,
      title: "Sportmax Code Collection",
      description: "Fashion line visual identity with contemporary design and brand consistency.",
      image: sportmaxcode,
      category: 'fashion',
      tags: ['Fashion Line', 'Visual Identity', 'Contemporary', 'Branding'],
      year: '2021'
    },
    {
      id: 13,
      title: "World of Warcraft Design",
      description: "Gaming-themed design inspired by fantasy elements and epic storytelling.",
      image: wow,
      category: 'entertainment',
      tags: ['Gaming', 'Fantasy', 'Epic', 'Storytelling'],
      year: '2019'
    },
    {
      id: 14,
      title: "Reggio Design Project",
      description: "Regional design project with cultural elements and local identity focus.",
      image: reggio,
      category: 'branding',
      tags: ['Regional', 'Cultural', 'Local Identity', 'Community'],
      year: '2020'
    },
    {
      id: 15,
      title: "Stylo Design Concept",
      description: "Stylish design concept with modern typography and clean visual hierarchy.",
      image: stylo,
      category: 'branding',
      tags: ['Stylish', 'Typography', 'Clean', 'Modern'],
      year: '2021'
    },
    {
      id: 16,
      title: "Regina Project Design",
      description: "Elegant design project with refined aesthetics and sophisticated approach.",
      image: regina,
      category: 'branding',
      tags: ['Elegant', 'Refined', 'Sophisticated', 'Premium'],
      year: '2020'
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
              Graphic Design Work
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Palette className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Graphic Design Portfolio</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of visual design work spanning music industry, fashion brands, events, 
              entertainment, and brand identity projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                  <div 
                    className="relative overflow-hidden"
                    onClick={() => setSelectedImage(project)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <Badge className="absolute top-2 right-2 bg-background/80 text-foreground">
                      {project.year}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedImage.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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

export default GraphicDesignPortfolio

