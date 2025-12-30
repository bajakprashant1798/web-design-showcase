import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Services", hasDropdown: true },
  { name: "Industries", hasDropdown: true },
  { name: "Results", hasDropdown: false },
  { name: "About", hasDropdown: true },
  { name: "Resources", hasDropdown: true },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">D</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Digital<span className="gradient-text">FX</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href="#"
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground">
              Sign In
            </Button>
            <Button variant="gradient">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full justify-center">
                  Sign In
                </Button>
                <Button variant="gradient" className="w-full justify-center">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
