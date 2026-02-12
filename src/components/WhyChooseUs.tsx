import { motion } from "framer-motion";
import { Check, Zap, Shield, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Dedicated account manager for personalized support",
  "Transparent reporting with real-time dashboards",
  "Custom strategies tailored to your business goals",
  "Proven track record with 28+ years of experience",
  "500+ expert team members across all disciplines",
  "Money-back guarantee if we don't deliver results",
];

const highlights = [
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Launch campaigns in days, not months",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security for your data",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance with live dashboards",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              A Partner You Can{" "}
              <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're not just another agency. We're your strategic partner
              committed to your success. Our data-driven approach and
              transparent communication set us apart.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/contact">
              <Button variant="gradient" size="lg" className="group">
                Start Your Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ x: 10 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-6 hover:border-primary/20 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card rounded-2xl p-8 text-center gradient-border"
            >
              <div className="text-5xl font-heading font-bold gradient-text mb-2">
                98%
              </div>
              <p className="text-muted-foreground text-sm">
                Client Retention Rate – Because Results Speak Louder Than Words
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
