import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Building,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const offices = [
  {
    name: "Headquarters",
    city: "San Francisco, CA",
    address: "100 Market Street, Suite 800",
    phone: "1-888-555-0123",
    email: "sf@digitalfx.com",
  },
  {
    name: "East Coast Office",
    city: "New York, NY",
    address: "350 Fifth Avenue, Floor 21",
    phone: "1-888-555-0124",
    email: "nyc@digitalfx.com",
  },
  {
    name: "Central Office",
    city: "Chicago, IL",
    address: "233 S Wacker Drive, Suite 3000",
    phone: "1-888-555-0125",
    email: "chi@digitalfx.com",
  },
];

const services = [
  "SEO Services",
  "PPC Management",
  "Web Design & Development",
  "Content Marketing",
  "Social Media Marketing",
  "Email Marketing",
  "Conversion Rate Optimization",
  "Other",
];

const faqs = [
  {
    question: "What is your typical response time?",
    answer: "We respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our main line directly.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free 30-minute consultation to discuss your marketing goals and how we can help you achieve them.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have expertise across multiple industries including healthcare, e-commerce, SaaS, finance, real estate, legal, manufacturing, and education.",
  },
  {
    question: "What is your minimum contract length?",
    answer: "We offer flexible contract terms starting from month-to-month for some services, with most clients seeing best results with 6-12 month partnerships.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We'll customize a strategy that fits your budget and goals.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("leads").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        service: data.service,
        message: data.message,
      });

      if (error) throw error;

      // Trigger notification edge function
      try {
        await supabase.functions.invoke("notify-new-lead", {
          body: {
            record: {
              name: data.name,
              email: data.email,
              service: data.service,
              company: data.company || null,
              message: data.message,
            },
          },
        });
      } catch (notifyErr) {
        console.warn("Notification failed (non-blocking):", notifyErr);
      }

      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours. Check your inbox for a confirmation.",
      });
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to submit lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const messageValue = watch("message") || "";

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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's <span className="gradient-text">Grow</span> Your Business Together
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team to discuss your digital marketing goals and receive a customized strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      We've received your message and will be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="(555) 123-4567"
                          {...register("phone")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          {...register("company")}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Service of Interest *</Label>
                      <Select
                        onValueChange={(value) => setValue("service", value)}
                      >
                        <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-destructive text-sm">{errors.service.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="message">How Can We Help? *</Label>
                        <span className={`text-xs ${messageValue.length > 900 ? "text-destructive" : "text-muted-foreground"}`}>
                          {messageValue.length}/1000
                        </span>
                      </div>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and goals..."
                        rows={5}
                        {...register("message")}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Quick Contact
                </h2>
                <div className="space-y-6">
                  <a
                    href="tel:1-888-555-0123"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="font-semibold text-foreground">1-888-555-0123</p>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@digitalfx.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-semibold text-foreground">hello@digitalfx.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Business Hours</p>
                      <p className="font-semibold text-foreground">Mon - Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Our Offices
                </h2>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.name} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <Building className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{office.name}</h3>
                        <p className="text-muted-foreground text-sm">{office.city}</p>
                        <p className="text-muted-foreground text-sm">{office.address}</p>
                        <div className="flex gap-4 mt-2 text-sm">
                          <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867563842994!2d-122.39893608434986!3d37.79084647975659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806527333333%3A0x2aaec73d8b9f9c0f!2s100%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1635959347854!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quick answers to common questions about working with us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
