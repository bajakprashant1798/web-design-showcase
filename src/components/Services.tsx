import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  MousePointerClick,
  Palette,
  TrendingUp,
  Mail,
  Share2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Dominate search rankings with data-driven SEO strategies that drive organic traffic and conversions.",
    color: "from-primary to-primary/50",
    slug: "seo",
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click Advertising",
    description:
      "Maximize ROI with targeted PPC campaigns across Google, Bing, and social platforms.",
    color: "from-accent to-accent/50",
    slug: "ppc",
  },
  {
    icon: Palette,
    title: "Web Design & Development",
    description:
      "Create stunning, high-converting websites that captivate visitors and drive results.",
    color: "from-primary to-accent",
    slug: "web-design",
  },
  {
    icon: TrendingUp,
    title: "Content Marketing",
    description:
      "Engage your audience with compelling content that builds authority and drives growth.",
    color: "from-accent to-primary",
    slug: "content-marketing",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and boost retention with personalized email campaigns that convert.",
    color: "from-primary/80 to-accent/80",
    slug: "email-marketing",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build brand awareness and community engagement across all social platforms.",
    color: "from-accent/80 to-primary/80",
    slug: "social-media",
  },
];

export const Services = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Full-Service{" "}
            <span className="gradient-text">Digital Marketing</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From SEO to social media, we offer comprehensive digital marketing
            services tailored to accelerate your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link to={`/services/${service.slug}`} className="block h-full">
                <div className="group glass-card rounded-2xl p-8 cursor-pointer relative overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20">
                  {/* Hover Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
