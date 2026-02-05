import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heritageImage from "@/assets/iftar-heritage.jpg";
import rooftopImage from "@/assets/suhour-rooftop-updated.jpg";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
  delay?: number;
}

const ExperienceCard = ({ title, subtitle, description, image, link, delay = 0 }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-sm bg-card shadow-card"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

        {/* Subtitle overlay */}
        <div className="absolute bottom-4 left-6">
          <p className="font-body text-gold text-xs tracking-[0.2em] uppercase">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h3 className="font-display text-2xl text-card-foreground mb-3">
          {title}
        </h3>

        <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>

        <Button variant="elegant" size="default" asChild>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              Reserve Now
            </a>
          ) : (
            <span>Reserve Now</span>
          )}
        </Button>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-12 h-12">
        <div className="absolute top-0 right-0 w-full h-full bg-gold/20 transform rotate-45 translate-x-6 -translate-y-6" />
      </div>
    </motion.div>
  );
};

const ExperienceCards = () => {
  const experiences = [
    {
      title: "Iftar (Bab Al Balad)",
      subtitle: "Soleil Lounge",
      description: "A refined Iftar buffet of authentic Arabic favorites in a heritage-inspired setting.",
      image: heritageImage,
      link: "https://www.sevenrooms.com/experiences/soleilalshatierwjed/iftar-5560305610440704"
    },
    {
      title: "Suhour (Soleil Rooftop)",
      subtitle: "Soleil Rooftop",
      description: "An elevated rooftop Suhour set menu with live ambiance.",
      image: rooftopImage,
      link: "https://www.sevenrooms.com/experiences/soleilrooftop/sohor-at-soleil-5251919039741952"
    },
  ];

  return (
    <section id="experiences" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold text-sm tracking-[0.25em] uppercase mb-4">
            Our Experiences
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Choose Your Experience
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              {...exp}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCards;
