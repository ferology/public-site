import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  User,
  Briefcase,
  Phone,
  Star,
  Award,
  Target,
  Users,
  Lightbulb,
  Zap,
} from "lucide-react";

// Import kinetic interactions
import {
  ScrollProgress,
  MagneticButton,
  TiltCard,
  GlitchText,
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  FloatingElement
} from "./shared/kinetic-interactions.jsx";

// Import image effects
import {
  BrutalistFrame,
  GlitchImage,
  SplitRGBImage,
  ScanlineImage,
} from "./shared/kinetic-image-effects.jsx";

// Import reflection scroll effects
import {
  ReflectionImage,
  ReflectionSection,
  GlossyCard,
  ScrollReflectionText
} from "./shared/reflection-scroll.jsx";

import francescoPhoto from "./assets/francesco_photo.jpg";
import contentData from "./content.json";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Get content from configuration
  const content = contentData;

  // Navigation sections from content
  const sections = content.navigation.sections;

  // Icon mapping for process steps
  const iconMap = {
    Target: <Target className="h-8 w-8" />,
    Lightbulb: <Lightbulb className="h-8 w-8" />,
    Zap: <Zap className="h-8 w-8" />,
    Users: <Users className="h-8 w-8" />,
  };

  // Handle button actions
  const handleButtonAction = (button) => {
    switch (button.action) {
      case "scroll":
        scrollToSection(button.target);
        break;
      case "email":
        window.location.href = `mailto:${button.target}`;
        break;
      case "link":
        window.open(button.target, "_blank", "noopener,noreferrer");
        break;
      case "phone":
        window.location.href = `tel:${button.target}`;
        break;
      default:
        console.log("Unknown action:", button.action);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter uppercase overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  HI,{" "}
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  I'M
                </motion.span>
                <br />
                <motion.span
                  className="inline-block text-accent relative"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  FRANCESCO
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.span>
                <motion.span
                  className="inline-block text-accent"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {" "}F.
                </motion.span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {content.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <Button
                    onClick={() =>
                      handleButtonAction(content.hero.buttons.primary)
                    }
                    size="lg"
                    className="group"
                  >
                    {content.hero.buttons.primary.text}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      handleButtonAction(content.hero.buttons.secondary)
                    }
                  >
                    {content.hero.buttons.secondary.text}
                  </Button>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Photo - Brutalist Image Effects with Reflection */}
            <RevealOnScroll direction="right" delay={0.2}>
              <ReflectionSection className="w-full max-w-md mx-auto">
                {/* Main image with effects */}
                <FloatingElement duration={4} yOffset={15}>
                  <BrutalistFrame
                    src={francescoPhoto}
                    alt={content.personal.name}
                    className="relative z-10"
                  />
                </FloatingElement>

                {/* Accent geometric shapes */}
                <motion.div
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 -right-8 w-20 h-20 bg-accent opacity-20 z-0"
                />
                <motion.div
                  animate={{
                    rotate: [0, -5, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-accent opacity-30 z-0"
                />

                {/* Glitch effect overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
                  <motion.div
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full bg-accent blur-3xl"
                  />
                </div>
              </ReflectionSection>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.about.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.about.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {content.about.journey.title}
              </h3>
              {content.about.journey.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {content.about.skills.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {content.about.skills.list.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="w-full justify-center py-2"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.process.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.process.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlossyCard className="h-full">
                  <Card className="h-full text-center border-2 hover:border-accent hover:-translate-y-2 transition-all">
                  <CardHeader>
                    <div className="mx-auto mb-4 bg-accent text-black w-16 h-16 flex items-center justify-center">
                      {iconMap[step.icon]}
                    </div>
                    <CardTitle className="text-lg font-black uppercase tracking-tight">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                </GlossyCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {content.contact.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() =>
                  handleButtonAction(content.contact.buttons.primary)
                }
              >
                {content.contact.buttons.primary.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  handleButtonAction(content.contact.buttons.secondary)
                }
              >
                <Linkedin className="mr-2 h-4 w-4" />
                {content.contact.buttons.secondary.text}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
