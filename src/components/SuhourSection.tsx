import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import rooftopImage from "@/assets/suhour-rooftop-new.jpg";

const SuhourSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${rooftopImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <p className="font-body text-gold text-sm tracking-[0.25em] uppercase mb-4">
              Soleil Rooftop
            </p>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream mb-4 leading-tight">
              Suhour at Soleil Rooftop
            </h2>

            {/* Subtitle */}
            <p className="font-elegant text-gold-light text-xl md:text-2xl italic mb-6">
              Ramadan Nights
            </p>

            {/* Decorative Line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-gold-light mb-8" />

            {/* Description */}
            <p className="font-body text-cream/90 text-lg leading-relaxed mb-8">
              Ramadan at Soleil Cafe continues with Suhour at Soleil Rooftop, where the Ramadan
              atmosphere unfolds under the open sky to unwind after a day of fasting. Overlooking
              the Red Sea and Jeddah's skyline, the rooftop transforms into a relaxed social lounge
              featuring shisha and live entertainment.
            </p>



            {/* CTA */}
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.sevenrooms.com/experiences/soleilrooftop/sohor-at-soleil-5251919039741952" target="_blank" rel="noopener noreferrer">
                Reserve Now
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-12 right-12 hidden lg:block"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-gold/30">
          <path
            d="M40 5 L45 35 L75 40 L45 45 L40 75 L35 45 L5 40 L35 35 Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default SuhourSection;
