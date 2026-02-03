import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-cream/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <span className="font-display text-charcoal text-sm font-bold">S</span>
            </div>
            <div>
              <p className="font-display text-cream text-lg leading-none">Soleil</p>
              <p className="font-body text-cream/60 text-xs tracking-widest uppercase">Cafe</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#iftar"
              className="font-body text-sm text-cream/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
            >
              Iftar
            </a>
            <a
              href="#suhour"
              className="font-body text-sm text-cream/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
            >
              Suhour
            </a>
            <a
              href="#"
              className="font-body text-sm bg-gold/90 hover:bg-gold text-charcoal px-5 py-2 rounded-sm transition-colors duration-300 tracking-wider uppercase"
            >
              Reserve
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-cream/80" />
            <span className="w-6 h-0.5 bg-cream/80" />
            <span className="w-4 h-0.5 bg-cream/80" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
