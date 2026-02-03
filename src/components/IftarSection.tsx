import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heritageImage from "@/assets/iftar-heritage.jpg";
import datesImage from "@/assets/dates-display.jpg";

const IftarSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-sm shadow-card">
                <img
                  src={heritageImage}
                  alt="Bab Al Balad heritage interior with traditional Islamic architecture"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
              </div>

              {/* Floating Secondary Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 lg:w-64 lg:h-64 rounded-sm overflow-hidden shadow-elegant border-4 border-cream"
              >
                <img
                  src={datesImage}
                  alt="Traditional Arabic dates and sweets display"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-gold/40" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            {/* Label */}
            <p className="font-body text-gold text-sm tracking-[0.25em] uppercase mb-4">
              Soleil Lounge
            </p>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Iftar at Bab Al Balad
            </h2>

            {/* Decorative Line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-light mb-8" />

            {/* Description */}
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Bab Al Balad is a warm and immersive Ramadan destination inspired by the spirit of
              historic Al-Balad. Thoughtfully designed with refined details and traditional
              influences, the experience offers an inviting atmosphere for guests to gather,
              reflect, and share meaningful moments together.
            </p>



            {/* CTA */}
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.sevenrooms.com/experiences/soleilalshatierwjed/iftar-5560305610440704" target="_blank" rel="noopener noreferrer">
                Reserve Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IftarSection;
