import { motion } from "framer-motion";

const clients = [
  "Microsoft",
  "Amazon",
  "Salesforce",
  "IBM",
  "Oracle",
  "Adobe",
  "SAP",
  "Cisco",
  "HubSpot",
  "Shopify",
];

const LogoRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
    <motion.div
      className="flex gap-12 md:gap-16 shrink-0"
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {[...clients, ...clients].map((client, i) => (
        <span
          key={`${client}-${i}`}
          className="font-heading font-bold text-xl md:text-2xl tracking-tight text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-pointer whitespace-nowrap select-none"
        >
          {client}
        </span>
      ))}
    </motion.div>
  </div>
);

export const ClientLogos = () => {
  return (
    <section className="py-14 border-y border-border/30 bg-card/30 space-y-6 overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-sm uppercase tracking-wider"
      >
        Trusted by industry leaders worldwide
      </motion.p>
      <LogoRow />
    </section>
  );
};
