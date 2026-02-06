import { motion } from "framer-motion";


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { name: "Iftar Bab Al Balad", href: "#iftar" },
    { name: "Suhour Bab Al Balad", href: "#suhour" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-cream/10"
    >
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="block">
            <img
              src="/logo.png"
              alt="Soleil Cafe"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm text-cream/80 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#experiences"
              className="font-body text-sm bg-gold/90 hover:bg-gold text-charcoal px-5 py-2 rounded-sm transition-colors duration-300 tracking-wider uppercase"
            >
              Reserve
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                aria-label="Open menu"
              >
                <span className="w-6 h-0.5 bg-cream/80" />
                <span className="w-6 h-0.5 bg-cream/80" />
                <span className="w-4 h-0.5 bg-cream/80" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-charcoal border-l border-cream/10 w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left">
                  <img
                    src="/logo.png"
                    alt="Soleil Cafe"
                    className="h-16 w-auto object-contain"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="font-display text-2xl text-cream hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <div className="w-12 h-0.5 bg-gold/50 my-2" />
                <SheetClose asChild>
                  <a
                    href="#experiences"
                    className="font-display text-xl text-gold hover:text-gold-light transition-colors duration-300"
                  >
                    Reserve Now
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
