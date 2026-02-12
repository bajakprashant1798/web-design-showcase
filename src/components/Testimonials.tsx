import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "DigitalFX transformed our online presence completely. Our organic traffic increased by 400% in just 8 months, and our lead generation has never been stronger.",
    author: "Sarah Mitchell",
    role: "CMO, TechVision Inc.",
    company: "Technology",
    result: "+400% Traffic",
  },
  {
    quote:
      "The ROI we've seen from their PPC campaigns is incredible. They truly understand our business and deliver results that exceed expectations every quarter.",
    author: "James Rodriguez",
    role: "VP of Marketing, GrowthScale",
    company: "SaaS",
    result: "3x ROI",
  },
  {
    quote:
      "Working with DigitalFX has been game-changing for our e-commerce business. Our conversion rate doubled and our revenue has grown by 250%.",
    author: "Emily Chen",
    role: "Founder, StyleHouse",
    company: "E-commerce",
    result: "+250% Revenue",
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-3xl p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-8">
                  <Quote className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-heading font-bold text-lg">
                        {testimonials[current].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">
                        {testimonials[current].author}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-primary font-semibold text-sm">
                      {testimonials[current].result}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="glass"
                size="icon"
                onClick={prev}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrent(index);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="glass"
                size="icon"
                onClick={next}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
