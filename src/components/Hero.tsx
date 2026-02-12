import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/CountUp";
import { Link } from "react-router-dom";

const rotatingWords = ["Revenue", "Traffic", "Leads", "Growth"];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/5" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Rated #1 Digital Marketing Agency
            </span>
          </motion.div>

          {/* Main Heading with rotating word */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Drive{" "}
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                  className="gradient-text inline-block"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span className="text-foreground">with Data-Driven Marketing</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            We've generated over $10 billion in revenue for our clients through
            SEO, PPC, web design, and more. Let's unlock your growth potential.
          </motion.p>

          {/* Trust micro-indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-muted-foreground"
          >
            {["No contracts required", "Free strategy session", "Results in 90 days"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {item}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Your Free Proposal
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="glass" size="lg" className="gap-2">
              <Play className="w-4 h-4" />
              Watch Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: 10, prefix: "$", suffix: "B+", label: "Revenue Generated" },
              { value: 500, prefix: "", suffix: "+", label: "Expert Team Members" },
              { value: 28, prefix: "", suffix: " Years", label: "Industry Experience" },
              { value: 98, prefix: "", suffix: "%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center glass-card rounded-2xl p-5 md:p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="font-heading text-2xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.prefix}
                  <CountUp end={stat.value} duration={2} />
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
