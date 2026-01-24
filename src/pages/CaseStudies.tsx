import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
  Quote,
  ExternalLink,
} from "lucide-react";

const stats = [
  { value: "$3B+", label: "Revenue Generated" },
  { value: "7.8M+", label: "Leads Generated" },
  { value: "5.2M+", label: "Phone Calls Driven" },
  { value: "460%", label: "Average ROI" },
];

const industries = [
  "All",
  "Healthcare",
  "E-commerce",
  "SaaS",
  "Finance",
  "Real Estate",
  "Legal",
  "Manufacturing",
  "Education",
];

const services = [
  "All",
  "SEO",
  "PPC",
  "Web Design",
  "Content Marketing",
  "Social Media",
  "Email Marketing",
];

const caseStudies = [
  {
    id: "healthcare-clinic",
    company: "Metro Health Clinic",
    industry: "Healthcare",
    services: ["SEO", "PPC", "Content Marketing"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    challenge: "Struggling to attract new patients in a competitive metropolitan market with multiple established healthcare providers.",
    solution: "Implemented comprehensive local SEO strategy, launched targeted PPC campaigns for specific treatments, and created educational content to establish authority.",
    results: [
      { metric: "Organic Traffic", value: "+312%" },
      { metric: "New Patient Leads", value: "+185%" },
      { metric: "Cost Per Lead", value: "-42%" },
    ],
    testimonial: {
      quote: "DigitalFX transformed our online presence. We're now the go-to clinic in our area.",
      author: "Dr. Sarah Chen",
      role: "Medical Director",
    },
  },
  {
    id: "ecommerce-fashion",
    company: "Urban Style Co.",
    industry: "E-commerce",
    services: ["SEO", "PPC", "Social Media"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    challenge: "Low conversion rates and high cart abandonment despite significant traffic to their online fashion store.",
    solution: "Redesigned product pages for conversion, implemented retargeting campaigns, and built an engaging social media presence to drive brand loyalty.",
    results: [
      { metric: "Revenue", value: "+248%" },
      { metric: "Conversion Rate", value: "+156%" },
      { metric: "ROAS", value: "8.4x" },
    ],
    testimonial: {
      quote: "Our online sales have never been higher. The ROI on our marketing spend is incredible.",
      author: "Michael Torres",
      role: "E-commerce Director",
    },
  },
  {
    id: "saas-platform",
    company: "CloudSync Pro",
    industry: "SaaS",
    services: ["SEO", "Content Marketing", "PPC"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    challenge: "Needed to scale user acquisition while reducing customer acquisition costs in a crowded SaaS market.",
    solution: "Created comprehensive content strategy targeting all stages of the buyer journey, optimized landing pages, and implemented account-based marketing.",
    results: [
      { metric: "Trial Signups", value: "+425%" },
      { metric: "MRR Growth", value: "+180%" },
      { metric: "CAC Reduction", value: "-35%" },
    ],
    testimonial: {
      quote: "DigitalFX understands SaaS marketing. They've been instrumental in our growth.",
      author: "Jennifer Walsh",
      role: "VP of Marketing",
    },
  },
  {
    id: "finance-advisor",
    company: "Summit Financial",
    industry: "Finance",
    services: ["SEO", "Content Marketing", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    challenge: "Building trust and generating qualified leads in a highly regulated and competitive financial services market.",
    solution: "Developed thought leadership content strategy, implemented compliance-friendly SEO, and created nurture email sequences for leads.",
    results: [
      { metric: "Qualified Leads", value: "+290%" },
      { metric: "Assets Under Management", value: "+$50M" },
      { metric: "Email Open Rate", value: "45%" },
    ],
    testimonial: {
      quote: "They understand the nuances of financial marketing and compliance requirements.",
      author: "Robert Anderson",
      role: "Managing Partner",
    },
  },
  {
    id: "real-estate-group",
    company: "Pacific Realty Group",
    industry: "Real Estate",
    services: ["SEO", "PPC", "Web Design"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    challenge: "Competing against national real estate platforms with limited marketing budget and local focus.",
    solution: "Built hyperlocal SEO strategy, created neighborhood-specific landing pages, and launched targeted Google Ads campaigns.",
    results: [
      { metric: "Website Traffic", value: "+380%" },
      { metric: "Property Inquiries", value: "+225%" },
      { metric: "Listings Sold", value: "+67%" },
    ],
    testimonial: {
      quote: "We're now outranking the big players in our local market. Incredible results.",
      author: "Lisa Martinez",
      role: "Broker Owner",
    },
  },
  {
    id: "legal-firm",
    company: "Sterling Law Partners",
    industry: "Legal",
    services: ["SEO", "PPC", "Content Marketing"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    challenge: "High cost per lead from PPC and struggling to rank for competitive legal keywords in their practice areas.",
    solution: "Developed authoritative content strategy, optimized for featured snippets, and refined PPC targeting for better quality leads.",
    results: [
      { metric: "Organic Rankings", value: "Top 3" },
      { metric: "Cost Per Case", value: "-55%" },
      { metric: "Case Volume", value: "+145%" },
    ],
    testimonial: {
      quote: "Our firm has grown significantly thanks to the steady stream of qualified leads.",
      author: "James Harrison",
      role: "Senior Partner",
    },
  },
  {
    id: "manufacturing-company",
    company: "Precision Parts Inc.",
    industry: "Manufacturing",
    services: ["SEO", "Web Design", "Content Marketing"],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop",
    challenge: "Traditional B2B manufacturer struggling to generate online leads and compete with larger competitors.",
    solution: "Redesigned website with modern B2B UX, created technical content for each product line, and implemented industrial SEO strategy.",
    results: [
      { metric: "RFQ Submissions", value: "+320%" },
      { metric: "Website Leads", value: "+275%" },
      { metric: "Revenue Growth", value: "+$2.5M" },
    ],
    testimonial: {
      quote: "They helped us embrace digital and it's transformed our lead generation.",
      author: "David Kim",
      role: "President",
    },
  },
  {
    id: "education-university",
    company: "Westbrook University",
    industry: "Education",
    services: ["SEO", "PPC", "Social Media"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    challenge: "Declining enrollment numbers and difficulty reaching prospective students in a competitive higher education market.",
    solution: "Launched multi-channel recruitment campaign, optimized program pages for SEO, and built engaging social media presence.",
    results: [
      { metric: "Applications", value: "+198%" },
      { metric: "Enrollment", value: "+85%" },
      { metric: "Cost Per Enrollment", value: "-40%" },
    ],
    testimonial: {
      quote: "Our enrollment numbers have rebounded significantly. Great partnership.",
      author: "Dr. Emily Foster",
      role: "Dean of Admissions",
    },
  },
  {
    id: "ecommerce-electronics",
    company: "TechGear Direct",
    industry: "E-commerce",
    services: ["SEO", "PPC", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop",
    challenge: "Competing against Amazon and major retailers for electronics sales with tight margins.",
    solution: "Focused on long-tail product keywords, implemented shopping feed optimization, and created customer retention email campaigns.",
    results: [
      { metric: "Organic Revenue", value: "+195%" },
      { metric: "Repeat Purchases", value: "+78%" },
      { metric: "Email Revenue", value: "+$1.2M" },
    ],
    testimonial: {
      quote: "We've carved out our niche and are thriving despite the competition.",
      author: "Kevin Park",
      role: "CEO",
    },
  },
  {
    id: "healthcare-dental",
    company: "Smile First Dental",
    industry: "Healthcare",
    services: ["SEO", "PPC", "Web Design"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    challenge: "New dental practice struggling to build patient base in established neighborhood with competing practices.",
    solution: "Built conversion-optimized website, launched local PPC campaigns, and implemented review generation strategy.",
    results: [
      { metric: "New Patients/Month", value: "+340%" },
      { metric: "Google Reviews", value: "4.9★" },
      { metric: "Revenue", value: "+$800K" },
    ],
    testimonial: {
      quote: "From zero to fully booked in months. DigitalFX made it possible.",
      author: "Dr. Amanda Wright",
      role: "Practice Owner",
    },
  },
  {
    id: "saas-hr",
    company: "PeopleFlow HR",
    industry: "SaaS",
    services: ["Content Marketing", "SEO", "PPC"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    challenge: "HR SaaS platform with great product but struggling to generate demo requests and compete with established players.",
    solution: "Created HR resource hub with downloadable guides, optimized comparison pages, and launched targeted LinkedIn campaigns.",
    results: [
      { metric: "Demo Requests", value: "+385%" },
      { metric: "Content Downloads", value: "25K+" },
      { metric: "Pipeline Value", value: "+$5M" },
    ],
    testimonial: {
      quote: "Our inbound leads have exploded. Best marketing investment we've made.",
      author: "Rachel Stevens",
      role: "CMO",
    },
  },
  {
    id: "finance-insurance",
    company: "Guardian Insurance",
    industry: "Finance",
    services: ["SEO", "PPC", "Social Media"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    challenge: "Regional insurance agency competing against national brands with massive advertising budgets.",
    solution: "Focused on local SEO and community presence, created educational content, and built trust through social proof.",
    results: [
      { metric: "Quote Requests", value: "+265%" },
      { metric: "Local Market Share", value: "+15%" },
      { metric: "Policy Revenue", value: "+$3.2M" },
    ],
    testimonial: {
      quote: "We're the trusted local choice now. Digital marketing leveled the playing field.",
      author: "Thomas Clark",
      role: "Agency Principal",
    },
  },
];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedService, setSelectedService] = useState("All");
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const filteredCases = caseStudies.filter((study) => {
    const industryMatch = selectedIndustry === "All" || study.industry === selectedIndustry;
    const serviceMatch = selectedService === "All" || study.services.includes(selectedService);
    return industryMatch && serviceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
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
              Case Studies
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Results That <span className="gradient-text">Speak</span> for Themselves
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore how we've helped businesses across industries achieve extraordinary growth through data-driven digital marketing.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat) => (
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

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-muted-foreground text-sm font-medium mr-2">Industry:</span>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-muted-foreground text-sm font-medium mr-2">Service:</span>
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedService === service
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedIndustry}-${selectedService}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCases.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.company}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium mb-2">
                          {study.industry}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-secondary-foreground">
                          {study.company}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Services Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.services.map((service) => (
                          <span
                            key={service}
                            className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {study.results.map((result) => (
                          <div key={result.metric} className="text-center">
                            <div className="text-lg font-heading font-bold text-primary">
                              {result.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Expandable Details */}
                      <AnimatePresence>
                        {expandedCase === study.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-4"
                          >
                            <div className="space-y-4 pt-4 border-t border-border">
                              <div>
                                <h4 className="font-semibold text-foreground text-sm mb-1">Challenge</h4>
                                <p className="text-muted-foreground text-sm">{study.challenge}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground text-sm mb-1">Solution</h4>
                                <p className="text-muted-foreground text-sm">{study.solution}</p>
                              </div>
                              <div className="bg-muted/50 rounded-xl p-4">
                                <Quote className="w-6 h-6 text-primary mb-2" />
                                <p className="text-foreground text-sm italic mb-2">
                                  "{study.testimonial.quote}"
                                </p>
                                <p className="text-muted-foreground text-xs">
                                  — {study.testimonial.author}, {study.testimonial.role}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Action */}
                      <div className="mt-auto">
                        <button
                          onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                          className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          {expandedCase === study.id ? "Show Less" : "View Full Case Study"}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCases.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No case studies found for the selected filters.
              </p>
              <button
                onClick={() => {
                  setSelectedIndustry("All");
                  setSelectedService("All");
                }}
                className="text-primary font-medium mt-4"
              >
                Clear filters
              </button>
            </motion.div>
          )}
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gradient" size="xl">
                  Get Your Free Proposal
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  Explore Our Services
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
