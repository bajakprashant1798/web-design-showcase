import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    value: 785,
    suffix: "%",
    label: "Average Increase in Organic Traffic",
    description: "For our SEO clients over 12 months",
  },
  {
    icon: Users,
    value: 3,
    suffix: "M+",
    label: "Qualified Leads Generated",
    description: "Across all marketing channels",
  },
  {
    icon: Target,
    value: 165,
    suffix: "%",
    label: "Average ROI Improvement",
    description: "Return on marketing investment",
  },
  {
    icon: Award,
    value: 200,
    suffix: "+",
    label: "Industry Awards Won",
    description: "Recognized for excellence",
  },
];

export const Results = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Proven Results
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            Real Results That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            We don't just promise results – we deliver them. See the measurable
            impact we've made for businesses like yours.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl p-8 h-full bg-secondary-foreground/5 border border-secondary-foreground/10 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <result.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Value */}
                <div className="font-heading text-5xl font-bold text-secondary-foreground mb-3">
                  <CountUp end={result.value} duration={2.5} />
                  <span className="gradient-text">{result.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="font-heading text-base font-semibold text-secondary-foreground mb-2">
                  {result.label}
                </h3>
                <p className="text-sm text-secondary-foreground/60">
                  {result.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
