'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Leaf } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brand: {
    name: 'SmartFarm AI',
    href: '/',
    icon: 'leaf',
  },
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '#contact' },
  ],
  cta: {
    text: 'Get Started',
    href: '/get-started',
  },
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf':
        return Leaf;
      default:
        return Leaf;
    }
  };

  const IconComponent = getIcon(config.brand.icon);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            onClick={() => handleLinkClick(config.brand.href)}
            data-editable-href="brand.href"
            data-href={config.brand.href}
            className="flex items-center gap-2 font-bold text-xl text-foreground hover:text-primary transition-colors"
          >
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
            <span data-editable="brand.name">{config.brand.name}</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {config.links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`links[${idx}].href`}
                  data-href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  <span data-editable={`links[${idx}].name`}>{link.name}</span>
                </button>
              ))}
            </div>
            <Button
              onClick={() => handleLinkClick(config.cta.href)}
              data-editable-href="cta.href"
              data-href={config.cta.href}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span data-editable="cta.text">{config.cta.text}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                {/* Mobile Brand */}
                <button
                  onClick={() => handleLinkClick(config.brand.href)}
                  className="flex items-center gap-2 font-bold text-xl text-foreground"
                >
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <span data-editable="brand.name">{config.brand.name}</span>
                </button>

                {/* Mobile Links */}
                <div className="flex flex-col gap-4">
                  {config.links.map((link, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleLinkClick(link.href)}
                      className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      <span data-editable={`links[${idx}].name`}>{link.name}</span>
                    </button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <Button
                  onClick={() => handleLinkClick(config.cta.href)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                >
                  <span data-editable="cta.text">{config.cta.text}</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
