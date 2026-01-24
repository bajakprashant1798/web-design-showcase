import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Cloud,
  Landmark,
  Home,
  Scale,
  Factory,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "HIPAA-compliant marketing strategies to attract patients and grow your practice.",
    challenges: [
      "Strict regulatory compliance requirements",
      "Building patient trust online",
      "Competing with larger health systems",
      "Managing online reputation",
    ],
    services: ["Local SEO", "PPC for Healthcare", "Reputation Management", "Content Marketing"],
    stats: { metric: "Patient Leads", value: "+245%" },
    clients: "500+ Healthcare Providers",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    description: "Data-driven strategies to increase sales, reduce cart abandonment, and maximize ROI.",
    challenges: [
      "High competition from major retailers",
      "Cart abandonment and low conversions",
      "Managing product feed optimization",
      "Seasonal demand fluctuations",
    ],
    services: ["Shopping Ads", "Conversion Optimization", "Email Marketing", "Social Commerce"],
    stats: { metric: "Revenue Growth", value: "+312%" },
    clients: "1,000+ Online Stores",
  },
  {
    id: "saas",
    name: "SaaS",
    icon: Cloud,
    description: "Growth marketing strategies to acquire users, reduce churn, and scale your platform.",
    challenges: [
      "Long sales cycles with multiple stakeholders",
      "High customer acquisition costs",
      "Differentiating in crowded markets",
      "Reducing churn and improving retention",
    ],
    services: ["Content Marketing", "Account-Based Marketing", "SEO", "Paid Acquisition"],
    stats: { metric: "Trial Signups", value: "+380%" },
    clients: "200+ SaaS Companies",
  },
  {
    id: "finance",
    name: "Finance",
    icon: Landmark,
    description: "Compliant marketing for financial services that builds trust and generates qualified leads.",
    challenges: [
      "Strict advertising regulations",
      "Building credibility and trust",
      "Complex product education",
      "Long consideration periods",
    ],
    services: ["Thought Leadership", "SEO", "Lead Nurturing", "Compliance-Ready Ads"],
    stats: { metric: "Qualified Leads", value: "+198%" },
    clients: "150+ Financial Firms",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Home,
    description: "Local-focused strategies to generate leads and sell properties faster.",
    challenges: [
      "Hyperlocal competition",
      "Seasonal market fluctuations",
      "Standing out from national platforms",
      "Lead quality over quantity",
    ],
    services: ["Local SEO", "Google Local Services Ads", "Virtual Tour Marketing", "Social Media"],
    stats: { metric: "Property Inquiries", value: "+275%" },
    clients: "300+ Real Estate Agencies",
  },
  {
    id: "legal",
    name: "Legal",
    icon: Scale,
    description: "Ethical marketing strategies to grow your firm and attract high-value cases.",
    challenges: [
      "High cost per acquisition",
      "Ethical advertising constraints",
      "Building authority in practice areas",
      "Competitive keyword costs",
    ],
    services: ["Legal SEO", "PPC for Attorneys", "Content Strategy", "Review Management"],
    stats: { metric: "Case Inquiries", value: "+220%" },
    clients: "250+ Law Firms",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "B2B marketing strategies to generate RFQs and grow industrial sales.",
    challenges: [
      "Long B2B sales cycles",
      "Technical product education",
      "Reaching decision-makers",
      "Transitioning to digital",
    ],
    services: ["Industrial SEO", "LinkedIn Marketing", "Trade Show Marketing", "Technical Content"],
    stats: { metric: "RFQ Volume", value: "+185%" },
    clients: "100+ Manufacturers",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Enrollment marketing strategies to attract students and grow programs.",
    challenges: [
      "Declining enrollment trends",
      "Competition from online education",
      "Reaching Gen Z students",
      "Program differentiation",
    ],
    services: ["Enrollment Marketing", "Social Media", "Content Marketing", "Paid Media"],
    stats: { metric: "Applications", value: "+165%" },
    clients: "75+ Educational Institutions",
  },
];

const stats = [
  { icon: TrendingUp, value: "460%", label: "Average ROI" },
  { icon: Users, value: "2,500+", label: "Industry Clients" },
  { icon: Target, value: "98%", label: "Client Retention" },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 glow-effect opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Industries We Serve
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Specialized <span className="gradient-text">Expertise</span> Across Industries
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We understand the unique challenges and opportunities in your industry. Our specialized teams deliver tailored strategies that drive real results.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-heading font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <industry.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                        {industry.name}
                      </h2>
                      <span className="text-primary text-sm font-medium">
                        {industry.clients}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6">
                    {industry.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3">
                      Key Challenges We Solve
                    </h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button variant="gradient">
                      Discuss Your {industry.name} Strategy
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Stats Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="glass-card rounded-3xl p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <industry.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-2">
                      {industry.stats.value}
                    </div>
                    <div className="text-muted-foreground text-lg mb-6">
                      Average {industry.stats.metric}
                    </div>
                    <div className="border-t border-border pt-6">
                      <p className="text-foreground font-medium">
                        See how we've helped {industry.name.toLowerCase()} businesses grow
                      </p>
                      <Link
                        to="/case-studies"
                        className="inline-flex items-center gap-1 text-primary font-medium mt-2 hover:gap-2 transition-all"
                      >
                        View {industry.name} Case Studies
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quick Industry Overview
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find your industry and see how we can help
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 text-center cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {industry.name}
                </h3>
                <div className="text-2xl font-heading font-bold text-primary mb-1">
                  {industry.stats.value}
                </div>
                <p className="text-muted-foreground text-xs">
                  {industry.stats.metric}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              We work with businesses across all sectors. Let's discuss your unique needs and create a customized strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gradient" size="xl">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
