'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Leaf, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'SmartFarm AI',
  brandTagline: 'Intelligent Agriculture',
  ctaText: 'Get Started',
  ctaHref: '#contact',
  navigationItems: [
    { label: 'Home', href: '#hero' },
    { label: 'Technology', href: '#features' },
    { label: 'Dashboard', href: '#ai-dashboard' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
    setIsOpen(false);
  };

  return (
    <section
      id="navigation"
      className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span
                className="font-bold text-lg text-foreground cursor-pointer"
                onClick={() => handleNavClick('#hero')}
                data-editable="brandName"
              >
                {config.brandName}
              </span>
              <span
                className="text-xs text-muted-foreground hidden sm:block"
                data-editable="brandTagline"
              >
                {config.brandTagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {config.navigationItems.map((item, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className="text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => handleNavClick(item.href)}
                data-editable-href={`navigationItems[${idx}].href`}
                data-href={item.href}
              >
                <span data-editable={`navigationItems[${idx}].label`}>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              onClick={handleCtaClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <Zap className="h-4 w-4 mr-2" />
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card text-card-foreground w-80">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg" data-editable="brandName">
                        {config.brandName}
                      </span>
                      <span className="text-xs text-muted-foreground" data-editable="brandTagline">
                        {config.brandTagline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  {config.navigationItems.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      className="justify-start text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => handleNavClick(item.href)}
                      data-editable-href={`navigationItems[${idx}].href`}
                      data-href={item.href}
                    >
                      <span data-editable={`navigationItems[${idx}].label`}>{item.label}</span>
                    </Button>
                  ))}

                  <div className="pt-4 mt-4 border-t border-border">
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      onClick={handleCtaClick}
                      data-editable-href="ctaHref"
                      data-href={config.ctaHref}
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  );
}
