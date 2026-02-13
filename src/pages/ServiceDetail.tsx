import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  ArrowLeft,
  Check,
  Star,
  Quote,
  BarChart3,
  Users,
  Clock,
  Zap
} from "lucide-react";

const servicesData: Record<string, {
  icon: typeof Search;
  title: string;
  tagline: string;
  description: string;
  color: string;
  heroImage: string;
  features: string[];
  process: { title: string; description: string }[];
  caseStudies: { company: string; industry: string; result: string; metric: string; testimonial: string; author: string; role: string }[];
  pricing: { name: string; price: string; period: string; description: string; features: string[]; popular?: boolean }[];
  faqs: { question: string; answer: string }[];
}> = {
  seo: {
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Dominate search rankings and drive organic growth",
    description: "Our comprehensive SEO services combine technical expertise, content strategy, and link building to improve your search visibility and drive qualified organic traffic that converts.",
    color: "from-primary to-primary/50",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    features: [
      "Comprehensive technical SEO audits",
      "Keyword research & competitive analysis",
      "On-page optimization & content strategy",
      "Link building & digital PR",
      "Local SEO & Google Business Profile",
      "Analytics & performance tracking",
      "Core Web Vitals optimization",
      "Schema markup implementation"
    ],
    process: [
      { title: "SEO Audit", description: "We analyze your current SEO performance, technical issues, and competitive landscape." },
      { title: "Strategy Development", description: "Create a customized roadmap targeting high-value keywords and opportunities." },
      { title: "On-Page Optimization", description: "Optimize content, meta tags, and site structure for maximum visibility." },
      { title: "Off-Page & Link Building", description: "Build authority through strategic outreach and quality backlinks." },
      { title: "Monitor & Refine", description: "Track rankings, traffic, and conversions to continuously improve results." }
    ],
    caseStudies: [
      {
        company: "TechStart Solutions",
        industry: "SaaS",
        result: "312% increase in organic traffic",
        metric: "+312%",
        testimonial: "DigitalFX transformed our online presence. We went from page 5 to top 3 rankings for our main keywords in just 6 months.",
        author: "Sarah Chen",
        role: "VP of Marketing"
      },
      {
        company: "Metro Health Clinic",
        industry: "Healthcare",
        result: "4x increase in appointment bookings",
        metric: "4x",
        testimonial: "The local SEO strategy brought us to the top of Google Maps results. We're now the go-to clinic in our area.",
        author: "Dr. Michael Roberts",
        role: "Practice Owner"
      },
      {
        company: "LuxHome Realty",
        industry: "Real Estate",
        result: "89% more qualified leads",
        metric: "+89%",
        testimonial: "Our property listings now rank on the first page. The quality of leads we receive has dramatically improved.",
        author: "Jennifer Walsh",
        role: "Broker"
      }
    ],
    pricing: [
      {
        name: "Starter",
        price: "$1,500",
        period: "/month",
        description: "Perfect for small businesses starting their SEO journey",
        features: ["10 target keywords", "Monthly reporting", "Technical SEO audit", "On-page optimization", "Google Business Profile setup"]
      },
      {
        name: "Growth",
        price: "$3,500",
        period: "/month",
        description: "Ideal for growing businesses ready to scale",
        features: ["25 target keywords", "Bi-weekly reporting", "Content strategy", "Link building (5/month)", "Competitor analysis", "Local SEO optimization"],
        popular: true
      },
      {
        name: "Enterprise",
        price: "$7,500",
        period: "/month",
        description: "For businesses demanding maximum visibility",
        features: ["Unlimited keywords", "Weekly reporting", "Dedicated strategist", "Link building (15/month)", "Content creation", "Custom integrations", "Priority support"]
      }
    ],
    faqs: [
      { question: "How long until I see SEO results?", answer: "SEO is a long-term strategy. Most clients see initial improvements within 3-4 months, with significant results in 6-12 months." },
      { question: "Do you guarantee first page rankings?", answer: "We don't guarantee specific rankings as Google's algorithm is complex. However, we have a 93% client retention rate because we consistently deliver results." },
      { question: "What makes your SEO different?", answer: "We focus on sustainable, white-hat strategies that build long-term value. Our data-driven approach ensures every action is tied to measurable outcomes." }
    ]
  },
  ppc: {
    icon: MousePointerClick,
    title: "Pay-Per-Click Advertising",
    tagline: "Maximize ROI with precision-targeted ad campaigns",
    description: "Our PPC experts create and manage high-performing advertising campaigns across Google, Bing, and social platforms, focusing on driving qualified leads while maximizing your return on ad spend.",
    color: "from-accent to-accent/50",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    features: [
      "Google Ads management & optimization",
      "Bing Ads campaigns",
      "Social media advertising",
      "Remarketing & retargeting",
      "Landing page optimization",
      "A/B testing & CRO",
      "Shopping & feed management",
      "Display & video advertising"
    ],
    process: [
      { title: "Account Audit", description: "Analyze existing campaigns, identify waste, and uncover opportunities." },
      { title: "Campaign Strategy", description: "Develop targeting, messaging, and budget allocation strategies." },
      { title: "Creative Development", description: "Create compelling ad copy and visuals that drive action." },
      { title: "Launch & Optimize", description: "Deploy campaigns with continuous testing and optimization." },
      { title: "Scale Success", description: "Expand winning strategies while maintaining efficiency." }
    ],
    caseStudies: [
      {
        company: "CloudServe Inc",
        industry: "B2B Technology",
        result: "5.2x return on ad spend",
        metric: "5.2x ROAS",
        testimonial: "They reduced our cost per lead by 60% while tripling our lead volume. The ROI speaks for itself.",
        author: "David Park",
        role: "CMO"
      },
      {
        company: "Fashion Forward",
        industry: "E-commerce",
        result: "$2.4M in attributable revenue",
        metric: "$2.4M",
        testimonial: "Their shopping campaigns transformed our online sales. We've scaled 3x in one year.",
        author: "Emma Rodriguez",
        role: "Founder"
      },
      {
        company: "Premier Auto Group",
        industry: "Automotive",
        result: "47% reduction in cost per acquisition",
        metric: "-47% CPA",
        testimonial: "More test drives, lower costs. DigitalFX optimized every aspect of our campaigns.",
        author: "Tom Mitchell",
        role: "Marketing Director"
      }
    ],
    pricing: [
      {
        name: "Launch",
        price: "$1,000",
        period: "/month + ad spend",
        description: "Get started with paid advertising",
        features: ["Up to $5K ad spend", "2 platforms", "Weekly optimization", "Monthly reporting", "Basic remarketing"]
      },
      {
        name: "Accelerate",
        price: "$2,500",
        period: "/month + ad spend",
        description: "Scale your advertising efforts",
        features: ["Up to $25K ad spend", "4 platforms", "Daily optimization", "Bi-weekly reporting", "Advanced remarketing", "A/B testing"],
        popular: true
      },
      {
        name: "Dominate",
        price: "$5,000",
        period: "/month + ad spend",
        description: "Full-service advertising management",
        features: ["Unlimited ad spend", "All platforms", "Real-time optimization", "Weekly reporting", "Custom attribution", "Dedicated manager", "Creative services"]
      }
    ],
    faqs: [
      { question: "What's the minimum ad budget?", answer: "We recommend a minimum of $2,500/month in ad spend to generate meaningful data and results. However, we can work with smaller budgets for local campaigns." },
      { question: "Which platforms do you manage?", answer: "We manage Google Ads, Bing Ads, Facebook/Instagram, LinkedIn, Twitter, TikTok, Pinterest, and programmatic display networks." },
      { question: "How quickly can you launch campaigns?", answer: "We can typically launch initial campaigns within 1-2 weeks of kickoff, including research, setup, and creative development." }
    ]
  },
  "web-design": {
    icon: Palette,
    title: "Web Design & Development",
    tagline: "Beautiful websites that convert visitors into customers",
    description: "We design and develop stunning, high-performing websites that captivate visitors and drive conversions. Our team creates custom solutions tailored to your brand and business goals.",
    color: "from-primary to-accent",
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200",
    features: [
      "Custom website design",
      "Responsive development",
      "E-commerce solutions",
      "CMS implementation",
      "Website redesigns",
      "Performance optimization",
      "Accessibility compliance",
      "Ongoing maintenance"
    ],
    process: [
      { title: "Discovery", description: "Understand your brand, goals, and target audience." },
      { title: "Wireframing", description: "Create structural blueprints for optimal user experience." },
      { title: "Design", description: "Develop visual designs that capture your brand essence." },
      { title: "Development", description: "Build your site with clean, efficient code." },
      { title: "Launch & Support", description: "Deploy and provide ongoing maintenance." }
    ],
    caseStudies: [
      {
        company: "Artisan Bakery Co",
        industry: "Food & Beverage",
        result: "225% increase in online orders",
        metric: "+225%",
        testimonial: "Our new website captures the warmth of our bakery. Online orders have more than tripled.",
        author: "Maria Santos",
        role: "Owner"
      },
      {
        company: "Summit Law Group",
        industry: "Legal Services",
        result: "180% more consultation requests",
        metric: "+180%",
        testimonial: "Professional, authoritative, and conversion-focused. Exactly what our firm needed.",
        author: "Robert Chen",
        role: "Managing Partner"
      },
      {
        company: "FitLife Studios",
        industry: "Fitness",
        result: "92% improvement in mobile bookings",
        metric: "+92%",
        testimonial: "Members love how easy it is to book classes on any device. Our retention has improved significantly.",
        author: "Lisa Thompson",
        role: "Studio Director"
      }
    ],
    pricing: [
      {
        name: "Essential",
        price: "$5,000",
        period: " one-time",
        description: "Perfect for small business websites",
        features: ["5-7 pages", "Mobile responsive", "Basic SEO setup", "Contact form", "1 round of revisions", "30-day support"]
      },
      {
        name: "Professional",
        price: "$15,000",
        period: " one-time",
        description: "Full-featured business websites",
        features: ["10-15 pages", "Custom design", "CMS integration", "Blog setup", "3 rounds of revisions", "90-day support", "Analytics setup"],
        popular: true
      },
      {
        name: "Enterprise",
        price: "$35,000+",
        period: " one-time",
        description: "Complex, custom web applications",
        features: ["Unlimited pages", "Custom functionality", "E-commerce integration", "API integrations", "Unlimited revisions", "12-month support", "Dedicated team"]
      }
    ],
    faqs: [
      { question: "How long does a website project take?", answer: "Timelines vary based on complexity. Simple sites take 4-6 weeks, while complex projects can take 3-6 months." },
      { question: "Do you provide hosting?", answer: "We can recommend hosting solutions and help with setup, or work with your existing hosting provider." },
      { question: "Will I be able to update the site myself?", answer: "Yes! We typically build on WordPress or other CMS platforms that allow you to easily update content." }
    ]
  },
  "content-marketing": {
    icon: TrendingUp,
    title: "Content Marketing",
    tagline: "Engage audiences with compelling content that converts",
    description: "Our content marketing services help you attract, engage, and convert your target audience through strategic content creation and distribution. We build authority and drive organic growth.",
    color: "from-accent to-primary",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    features: [
      "Content strategy development",
      "Blog writing & management",
      "Infographic design",
      "Video content creation",
      "Ebook & whitepaper creation",
      "Content distribution",
      "Social content calendars",
      "Content performance analytics"
    ],
    process: [
      { title: "Content Audit", description: "Evaluate existing content and identify gaps and opportunities." },
      { title: "Strategy Creation", description: "Develop a content roadmap aligned with business goals." },
      { title: "Content Production", description: "Create high-quality, engaging content for your audience." },
      { title: "Distribution", description: "Amplify content across channels for maximum reach." },
      { title: "Measure & Optimize", description: "Track performance and refine strategy based on data." }
    ],
    caseStudies: [
      {
        company: "FinanceWise",
        industry: "Financial Services",
        result: "450% increase in organic traffic",
        metric: "+450%",
        testimonial: "Their content strategy established us as the go-to resource in our niche. Traffic and leads have exploded.",
        author: "Amanda Peters",
        role: "Head of Marketing"
      },
      {
        company: "GreenTech Solutions",
        industry: "Clean Energy",
        result: "3x increase in qualified leads",
        metric: "3x Leads",
        testimonial: "The educational content they create positions us perfectly in the market. Our sales team loves the quality of leads.",
        author: "James Wilson",
        role: "CEO"
      },
      {
        company: "Urban Style Co",
        industry: "Fashion Retail",
        result: "85% increase in email subscribers",
        metric: "+85%",
        testimonial: "Our blog and style guides have become destination content. Customer engagement has never been higher.",
        author: "Sophie Martin",
        role: "Brand Director"
      }
    ],
    pricing: [
      {
        name: "Content Starter",
        price: "$2,000",
        period: "/month",
        description: "Build your content foundation",
        features: ["4 blog posts/month", "Content calendar", "Basic SEO optimization", "Social snippets", "Monthly reporting"]
      },
      {
        name: "Content Pro",
        price: "$4,500",
        period: "/month",
        description: "Scale your content efforts",
        features: ["8 blog posts/month", "1 premium asset", "Full SEO optimization", "Email newsletter", "Distribution strategy", "Bi-weekly reporting"],
        popular: true
      },
      {
        name: "Content Enterprise",
        price: "$10,000",
        period: "/month",
        description: "Full-service content marketing",
        features: ["16+ pieces/month", "Video production", "Podcast support", "Influencer outreach", "Dedicated editor", "Weekly strategy calls", "Custom analytics"]
      }
    ],
    faqs: [
      { question: "Do you write for our industry?", answer: "Yes! Our team of writers specialize in various industries including tech, healthcare, finance, and more. We thoroughly research your industry." },
      { question: "Who owns the content?", answer: "You own 100% of all content we create. It's yours to use however you see fit." },
      { question: "Can you work with our existing team?", answer: "Absolutely. We often collaborate with in-house teams, providing strategy, editing, or additional production capacity." }
    ]
  },
  "email-marketing": {
    icon: Mail,
    title: "Email Marketing",
    tagline: "Nurture leads and drive conversions with strategic email",
    description: "Our email marketing services help you build meaningful relationships with your audience through strategic, personalized campaigns that nurture leads and drive conversions.",
    color: "from-primary/80 to-accent/80",
    heroImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200",
    features: [
      "Email strategy & planning",
      "Template design & development",
      "Automation workflows",
      "List segmentation",
      "A/B testing & optimization",
      "Performance analytics",
      "Deliverability optimization",
      "ESP migration & setup"
    ],
    process: [
      { title: "Audit & Analysis", description: "Review current email performance and subscriber data." },
      { title: "Strategy Development", description: "Create a comprehensive email marketing roadmap." },
      { title: "Design & Build", description: "Develop templates and automation workflows." },
      { title: "Launch & Test", description: "Deploy campaigns with rigorous testing protocols." },
      { title: "Optimize", description: "Continuously improve based on performance data." }
    ],
    caseStudies: [
      {
        company: "ShopStyle Boutique",
        industry: "E-commerce",
        result: "42% average open rate achieved",
        metric: "42%",
        testimonial: "Our email revenue went from 15% to 35% of total. The automation sequences are incredibly effective.",
        author: "Rachel Green",
        role: "E-commerce Manager"
      },
      {
        company: "ProServe Consulting",
        industry: "Professional Services",
        result: "67% increase in meeting bookings",
        metric: "+67%",
        testimonial: "The nurture sequences warm up leads perfectly. Our close rates have improved dramatically.",
        author: "Mark Stevens",
        role: "Business Development"
      },
      {
        company: "HealthFirst Wellness",
        industry: "Health & Wellness",
        result: "28% increase in member retention",
        metric: "+28%",
        testimonial: "Personalized email journeys keep our members engaged and coming back. Churn has dropped significantly.",
        author: "Dr. Amy Liu",
        role: "Founder"
      }
    ],
    pricing: [
      {
        name: "Email Essentials",
        price: "$1,200",
        period: "/month",
        description: "Launch your email marketing",
        features: ["4 campaigns/month", "Basic automation", "List management", "Template design", "Monthly reporting"]
      },
      {
        name: "Email Growth",
        price: "$2,800",
        period: "/month",
        description: "Scale with advanced automation",
        features: ["8 campaigns/month", "Advanced automation", "Segmentation strategy", "A/B testing", "Custom templates", "Bi-weekly reporting"],
        popular: true
      },
      {
        name: "Email Enterprise",
        price: "$6,000",
        period: "/month",
        description: "Full-service email management",
        features: ["Unlimited campaigns", "Complex automation", "Dynamic content", "Dedicated strategist", "Deliverability monitoring", "Weekly optimization", "Custom integrations"]
      }
    ],
    faqs: [
      { question: "Which email platforms do you work with?", answer: "We work with all major ESPs including Klaviyo, Mailchimp, HubSpot, Salesforce Marketing Cloud, and more." },
      { question: "Can you help with email deliverability?", answer: "Absolutely. We optimize sender reputation, authentication, and best practices to ensure maximum inbox placement." },
      { question: "How do you grow our email list?", answer: "We implement opt-in strategies, lead magnets, and conversion optimization to ethically grow your subscriber base." }
    ]
  },
  "social-media": {
    icon: Share2,
    title: "Social Media Marketing",
    tagline: "Build engaged communities across social platforms",
    description: "We help you build a strong social media presence that engages your audience and drives brand awareness. Our strategies are tailored to your unique goals and target demographics.",
    color: "from-accent/80 to-primary/80",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200",
    features: [
      "Social media strategy",
      "Content creation & curation",
      "Community management",
      "Influencer partnerships",
      "Social advertising",
      "Analytics & reporting",
      "Reputation management",
      "Platform optimization"
    ],
    process: [
      { title: "Social Audit", description: "Analyze current presence and competitive landscape." },
      { title: "Strategy Development", description: "Create platform-specific strategies and content plans." },
      { title: "Content Creation", description: "Produce engaging content tailored to each platform." },
      { title: "Community Building", description: "Grow and engage your social audience." },
      { title: "Analyze & Evolve", description: "Track performance and adapt to trends." }
    ],
    caseStudies: [
      {
        company: "Wanderlust Travel",
        industry: "Travel & Tourism",
        result: "500K+ new followers in 12 months",
        metric: "500K+",
        testimonial: "They turned our social presence into a thriving community. Engagement and bookings have skyrocketed.",
        author: "Carlos Mendez",
        role: "Marketing VP"
      },
      {
        company: "Bite Kitchen",
        industry: "Restaurant",
        result: "340% increase in social engagement",
        metric: "+340%",
        testimonial: "Our content now stops the scroll. Tables are consistently booked weeks in advance.",
        author: "Chef Maria Lopez",
        role: "Owner"
      },
      {
        company: "ActiveWear Pro",
        industry: "Apparel",
        result: "3.2x increase in social commerce sales",
        metric: "3.2x",
        testimonial: "Instagram shopping has become a major revenue channel thanks to their strategy.",
        author: "Jake Anderson",
        role: "E-commerce Director"
      }
    ],
    pricing: [
      {
        name: "Social Starter",
        price: "$1,500",
        period: "/month",
        description: "Establish your social presence",
        features: ["3 platforms", "12 posts/month", "Basic engagement", "Monthly analytics", "Content calendar"]
      },
      {
        name: "Social Pro",
        price: "$3,500",
        period: "/month",
        description: "Grow your social influence",
        features: ["5 platforms", "20 posts/month", "Daily engagement", "Story content", "Influencer outreach", "Bi-weekly reporting"],
        popular: true
      },
      {
        name: "Social Enterprise",
        price: "$8,000",
        period: "/month",
        description: "Dominate social media",
        features: ["All platforms", "Unlimited posts", "24/7 community management", "Video production", "Influencer campaigns", "Paid social management", "Dedicated team"]
      }
    ],
    faqs: [
      { question: "Which platforms should we be on?", answer: "It depends on your audience. We'll analyze where your customers spend time and focus efforts there for maximum impact." },
      { question: "Do you create all the content?", answer: "Yes, we handle everything from strategy to creation to posting. We can also repurpose your existing content." },
      { question: "How do you measure success?", answer: "We track engagement, reach, follower growth, website traffic, and conversions tied to social efforts." }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button variant="gradient">View All Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <ServiceIcon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-primary mb-6">{service.tagline}</p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" size="lg">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={service.heroImage} 
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What's <span className="gradient-text">Included</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions designed to deliver measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology that delivers consistent results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real results for real businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">{study.industry}</span>
                </div>
                
                <h3 className="font-heading text-xl font-bold mb-2">{study.company}</h3>
                <p className="text-muted-foreground mb-4">{study.result}</p>
                
                <div className="text-4xl font-bold gradient-text mb-6">{study.metric}</div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-6 mb-4">"{study.testimonial}"</p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {study.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{study.author}</div>
                    <div className="text-xs text-muted-foreground">{study.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexible plans designed to fit your needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-primary/10 to-accent/10 border-2 border-primary' 
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-heading text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "gradient" : "outline"} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-heading font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
