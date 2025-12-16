'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Leaf, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brand: {
    name: 'SmartFarm AI',
    description: 'Revolutionizing agriculture through intelligent automation and data-driven insights.',
    icon: 'leaf',
  },
  sections: [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#about' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Demo', href: '/demo' },
        { name: 'API', href: '/api' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact', href: '#contact' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Status', href: '/status' },
      ],
    },
  ],
  contact: {
    email: 'hello@smartfarm-ai.com',
    phone: '+1 (555) 123-4567',
    address: '123 AgTech Plaza, Farm Valley, CA 94105',
  },
  social: [
    { name: 'Twitter', href: 'https://twitter.com/smartfarmai', icon: 'twitter' },
    { name: 'Facebook', href: 'https://facebook.com/smartfarmai', icon: 'facebook' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/smartfarmai', icon: 'linkedin' },
    { name: 'Instagram', href: 'https://instagram.com/smartfarmai', icon: 'instagram' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  copyright: '© 2024 SmartFarm AI. All rights reserved.',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf':
        return Leaf;
      case 'twitter':
        return Twitter;
      case 'facebook':
        return Facebook;
      case 'linkedin':
        return Linkedin;
      case 'instagram':
        return Instagram;
      case 'mail':
        return Mail;
      case 'phone':
        return Phone;
      case 'mapPin':
        return MapPin;
      default:
        return Leaf;
    }
  };

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const BrandIcon = getIcon(config.brand.icon);

  return (
    <footer className="bg-muted/30 text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-primary/10 rounded-lg">
                <BrandIcon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl">
                <span data-editable="brand.name">{config.brand.name}</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <span data-editable="brand.description">{config.brand.description}</span>
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  <span data-editable="contact.email">{config.contact.email}</span>
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a 
                  href={`tel:${config.contact.phone.replace(/\D/g, '')}`}
                  className="hover:text-foreground transition-colors"
                >
                  <span data-editable="contact.phone">{config.contact.phone}</span>
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span data-editable="contact.address">{config.contact.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {config.social.map((social, idx) => {
                const SocialIcon = getIcon(social.icon);
                return (
                  <Button
                    key={idx}
                    variant="ghost"
                    size="icon"
                    onClick={() => handleLinkClick(social.href)}
                    data-editable-href={`social[${idx}].href`}
                    data-href={social.href}
                    className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-accent"
                  >
                    <SocialIcon className="h-4 w-4" />
                    <span className="sr-only">
                      <span data-editable={`social[${idx}].name`}>{social.name}</span>
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Navigation Sections */}
          {config.sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="font-semibold text-foreground mb-4">
                <span data-editable={`sections[${sectionIdx}].title`}>{section.title}</span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`sections[${sectionIdx}].links[${linkIdx}].href`}
                      data-href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      <span data-editable={`sections[${sectionIdx}].links[${linkIdx}].name`}>
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyright">{config.copyright}</span>
          </p>
          <div className="flex gap-6">
            {config.legal.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(item.href)}
                data-editable-href={`legal[${idx}].href`}
                data-href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span data-editable={`legal[${idx}].name`}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
