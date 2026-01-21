import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MousePointerClick, 
  Palette, 
  TrendingUp, 
  Mail, 
  Share2,
  ArrowRight,
  Check,
  BarChart3,
  Target,
  Zap,
  Users,
  Globe,
  Smartphone
} from "lucide-react";

const services = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    shortDesc: "Dominate search rankings with data-driven SEO strategies.",
    fullDesc: "Our comprehensive SEO services are designed to increase your organic visibility and drive qualified traffic to your website. We use proven strategies and cutting-edge tools to help you climb the search rankings.",
    color: "from-primary to-primary/50",
    features: [
      "Technical SEO audits & optimization",
      "Keyword research & strategy",
      "On-page & off-page optimization",
      "Local SEO & Google Business Profile",
      "Link building & outreach",
      "Content optimization & strategy"
    ],
    stats: { value: "93%", label: "Client retention rate" },
    benefits: [
      { icon: BarChart3, text: "Increase organic traffic by up to 200%" },
      { icon: Target, text: "Target high-intent keywords" },
      { icon: Zap, text: "Improve site speed & performance" }
    ]
  },
  {
    id: "ppc",
    icon: MousePointerClick,
    title: "Pay-Per-Click Advertising",
    shortDesc: "Maximize ROI with targeted PPC campaigns.",
    fullDesc: "Our PPC experts create and manage high-performing advertising campaigns across Google, Bing, and social platforms. We focus on driving qualified leads while maximizing your return on ad spend.",
    color: "from-accent to-accent/50",
    features: [
      "Google Ads management",
      "Bing Ads campaigns",
      "Social media advertising",
      "Remarketing & retargeting",
      "Landing page optimization",
      "A/B testing & conversion optimization"
    ],
    stats: { value: "4.5x", label: "Average ROAS" },
    benefits: [
      { icon: Target, text: "Precise audience targeting" },
      { icon: BarChart3, text: "Real-time performance tracking" },
      { icon: Zap, text: "Quick results & scalability" }
    ]
  },
  {
    id: "web-design",
    icon: Palette,
    title: "Web Design & Development",
    shortDesc: "Create stunning websites that convert visitors.",
    fullDesc: "We design and develop beautiful, high-performing websites that captivate visitors and drive conversions. Our team creates custom solutions tailored to your brand and business goals.",
    color: "from-primary to-accent",
    features: [
      "Custom website design",
      "Responsive development",
      "E-commerce solutions",
      "CMS implementation",
      "Website redesigns",
      "Performance optimization"
    ],
    stats: { value: "500+", label: "Websites launched" },
    benefits: [
      { icon: Smartphone, text: "Mobile-first responsive design" },
      { icon: Zap, text: "Lightning-fast load times" },
      { icon: Users, text: "User-centric UX design" }
    ]
  },
  {
    id: "content",
    icon: TrendingUp,
    title: "Content Marketing",
    shortDesc: "Engage your audience with compelling content.",
    fullDesc: "Our content marketing services help you attract, engage, and convert your target audience through strategic content creation and distribution. We build authority and drive organic growth.",
    color: "from-accent to-primary",
    features: [
      "Content strategy development",
      "Blog writing & management",
      "Infographic design",
      "Video content creation",
      "Ebook & whitepaper creation",
      "Content distribution"
    ],
    stats: { value: "3x", label: "Lead generation increase" },
    benefits: [
      { icon: Globe, text: "Build brand authority" },
      { icon: Users, text: "Engage target audiences" },
      { icon: TrendingUp, text: "Drive organic traffic growth" }
    ]
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Marketing",
    shortDesc: "Nurture leads with personalized email campaigns.",
    fullDesc: "Our email marketing services help you build meaningful relationships with your audience through strategic, personalized campaigns that nurture leads and drive conversions.",
    color: "from-primary/80 to-accent/80",
    features: [
      "Email strategy & planning",
      "Template design & development",
      "Automation workflows",
      "List segmentation",
      "A/B testing & optimization",
      "Performance analytics"
    ],
    stats: { value: "42%", label: "Average open rate" },
    benefits: [
      { icon: Users, text: "Personalized customer journeys" },
      { icon: Zap, text: "Automated nurture sequences" },
      { icon: BarChart3, text: "Detailed performance metrics" }
    ]
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Marketing",
    shortDesc: "Build brand awareness across social platforms.",
    fullDesc: "We help you build a strong social media presence that engages your audience and drives brand awareness. Our strategies are tailored to your unique goals and target demographics.",
    color: "from-accent/80 to-primary/80",
    features: [
      "Social media strategy",
      "Content creation & curation",
      "Community management",
      "Influencer partnerships",
      "Social advertising",
      "Analytics & reporting"
    ],
    stats: { value: "150%", label: "Avg engagement increase" },
    benefits: [
      { icon: Users, text: "Build engaged communities" },
      { icon: Globe, text: "Expand brand reach" },
      { icon: Target, text: "Targeted social campaigns" }
    ]
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Full-Service <span className="gradient-text">Digital Marketing</span> Solutions
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              From SEO to social media, we offer comprehensive digital marketing services 
              designed to accelerate your business growth and maximize ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`py-16 ${index !== services.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Benefits */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                        <benefit.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/services/${service.id}`}>
                    <Button variant="gradient" size="lg" className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Features Side */}
                <div className={`glass-card rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-heading text-xl font-semibold">What's Included</h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold gradient-text">{service.stats.value}</div>
                      <div className="text-sm text-muted-foreground">{service.stats.label}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              How We <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proven methodology ensures consistent, measurable results for every client.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your business, competitors, and market opportunities." },
              { step: "02", title: "Strategy", desc: "We develop a customized plan aligned with your goals." },
              { step: "03", title: "Execution", desc: "Our team implements strategies with precision and care." },
              { step: "04", title: "Optimization", desc: "We continuously refine for maximum performance." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
