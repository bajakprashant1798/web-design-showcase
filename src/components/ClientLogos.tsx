import { motion } from "framer-motion";

const clients = [
  "Microsoft", "Amazon", "Salesforce", "IBM", "Oracle", "Adobe", "SAP", "Cisco"
];

export const ClientLogos = () => {
  return (
    <section className="py-16 border-y border-border/30 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-10 text-sm uppercase tracking-wider"
        >
          Trusted by industry leaders worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 cursor-pointer"
            >
              <span className="font-heading font-bold text-xl md:text-2xl tracking-tight">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
