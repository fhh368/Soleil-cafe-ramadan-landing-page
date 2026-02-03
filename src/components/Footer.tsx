import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Brand */}

          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="Soleil Cafe"
              className="h-32 w-auto object-contain"
            />
          </div>

          <p className="font-elegant text-gold text-xl italic mb-8">
            Bab Al Balad
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-8" />

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10">
            <div className="text-center">
              <p className="font-body text-primary-foreground/60 text-xs uppercase tracking-widest mb-1">
                Reservations
              </p>
              <p className="font-body text-primary-foreground text-sm">
                +966 12 260 7111
              </p>
            </div>
            <div className="hidden md:block w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="font-body text-primary-foreground/60 text-xs uppercase tracking-widest mb-1">
                Location
              </p>
              <p className="font-body text-primary-foreground text-sm">
                Corniche Street, Al Shatie District, Jeddah
              </p>
            </div>
            <div className="hidden md:block w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="font-body text-primary-foreground/60 text-xs uppercase tracking-widest mb-1">
                Ramadan Hours
              </p>
              <p className="font-body text-primary-foreground text-sm">
                Iftar 6:30 PM • Suhour 9:30 PM
              </p>
            </div>
          </div>



          {/* Copyright */}
          <p className="font-body text-primary-foreground/40 text-xs tracking-wider">
            © 2025 Soleil Cafe. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
