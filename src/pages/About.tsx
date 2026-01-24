import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  Heart,
  Shield,
  Zap,
  Linkedin,
  Twitter,
} from "lucide-react";

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "500+", label: "Team Members" },
  { value: "$3B+", label: "Revenue Generated" },
  { value: "1,000+", label: "Happy Clients" },
];

const timeline = [
  {
    year: "1999",
    title: "Founded in Harrisburg, PA",
    description: "Started as a small web design agency with a vision to help businesses grow online.",
  },
  {
    year: "2005",
    title: "Expanded to Full-Service Digital",
    description: "Added SEO, PPC, and content marketing to our service offerings.",
  },
  {
    year: "2010",
    title: "100+ Team Members",
    description: "Grew our team to over 100 digital marketing experts and specialists.",
  },
  {
    year: "2015",
    title: "Launched MarketingCloudFX",
    description: "Developed our proprietary AI-powered marketing platform.",
  },
  {
    year: "2020",
    title: "$2B in Client Revenue",
    description: "Celebrated driving over $2 billion in revenue for our clients.",
  },
  {
    year: "2024",
    title: "500+ Expert Team",
    description: "Expanded globally with over 500 specialists serving clients worldwide.",
  },
];

const teamMembers = [
  {
    name: "William Craig",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "VP of Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Chen",
    role: "Director of SEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Thompson",
    role: "Director of PPC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jessica Kim",
    role: "Content Strategy Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Robert Williams",
    role: "Tech Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Amanda Foster",
    role: "Client Success Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed to deliver measurable ROI and real business growth.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our partnerships.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends and leverage cutting-edge technology and strategies.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We treat our clients as true partners, invested in their long-term success.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We genuinely love what we do and bring enthusiasm to every project.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we deliver.",
  },
];

const awards = [
  { name: "Google Premier Partner", year: "2024" },
  { name: "Meta Business Partner", year: "2024" },
  { name: "Microsoft Advertising Partner", year: "2024" },
  { name: "Inc. 5000 Fastest Growing", year: "2023" },
  { name: "Top Digital Agency - Clutch", year: "2024" },
  { name: "Best Places to Work", year: "2023" },
];

export default function About() {
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
              About DigitalFX
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Driving <span className="gradient-text">Revenue</span> Through Digital Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              For over 25 years, we've been helping businesses of all sizes achieve unprecedented growth through data-driven digital marketing strategies.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-secondary-foreground/80 leading-relaxed">
              "To help businesses of all sizes achieve sustainable growth through innovative, transparent, and results-driven digital marketing strategies that deliver real, measurable ROI."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From a small startup to an industry leader, here's how we've grown over the years.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="glass-card rounded-2xl p-6">
                    <span className="text-primary font-heading font-bold text-xl">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground text-lg mt-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and how we serve our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our experienced team brings decades of combined expertise in digital marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.twitter}
                          className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading font-semibold text-foreground text-lg">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're honored to be recognized by industry leaders for our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-heading font-medium text-foreground text-sm mb-1">
                  {award.name}
                </h4>
                <span className="text-muted-foreground text-xs">{award.year}</span>
              </motion.div>
            ))}
          </div>
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Join the 1,000+ businesses that trust DigitalFX to drive their digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gradient" size="xl">
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="xl" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  View Case Studies
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
