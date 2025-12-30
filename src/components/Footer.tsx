import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const footerLinks = {
  services: [
    "SEO Services",
    "PPC Management",
    "Web Design",
    "Content Marketing",
    "Social Media",
    "Email Marketing",
  ],
  company: [
    "About Us",
    "Our Team",
    "Careers",
    "Case Studies",
    "Blog",
    "Contact",
  ],
  resources: [
    "Free Tools",
    "SEO Checker",
    "Marketing Guides",
    "Industry Reports",
    "Webinars",
    "Podcast",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">D</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Digital<span className="gradient-text">FX</span>
              </span>
            </motion.a>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Driving revenue through data-driven digital marketing strategies. 
              Your success is our mission.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@digitalfx.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>1-888-555-0123</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 DigitalFX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
