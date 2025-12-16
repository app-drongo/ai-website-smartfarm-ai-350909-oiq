'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'SmartFarm AI',
  tagline: 'Revolutionizing Agriculture Through Intelligent AI-Powered Farming Solutions',
  description:
    'Empowering farmers with cutting-edge AI technology to optimize crop yields, reduce waste, and create sustainable farming practices for the future.',

  // Company Links
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],

  // Social Media
  socialLinks: [
    { platform: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { platform: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { platform: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],

  // Contact Info
  contactEmail: 'hello@smartfarmai.com',
  contactPhone: '+1 (555) 123-4567',
  address: '123 Innovation Drive, Tech Valley, CA 94025',

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest insights on AI farming technology',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',

  // Copyright
  copyrightText: '© 2024 SmartFarm AI. All rights reserved.',

  // Additional Legal
  additionalLegal: 'Cookie Policy',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                <span data-editable="companyName">{config.companyName}</span>
              </h3>
              <p className="text-sm mb-4">
                <span data-editable="tagline">{config.tagline}</span>
              </p>
              <p className="text-sm leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm" data-editable="contactEmail">
                  {config.contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm" data-editable="contactPhone">
                  {config.contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm" data-editable="address">
                  {config.address}
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <nav className="space-y-4">
              {config.companyLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`companyLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                </Button>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">
              <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
            </h4>
            <p className="text-sm mb-4">
              <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder={config.newsletterPlaceholder}
                className="w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                data-editable="newsletterPlaceholder"
              />
              <Button size="sm" className="w-full">
                <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Legal */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <span data-editable="copyrightText">{config.copyrightText}</span>
            <div className="flex items-center gap-4">
              {config.legalLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                </Button>
              ))}
              <Button
                variant="ghost"
                className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
                onClick={() => handleLinkClick('/cookies')}
                data-editable-href="cookiePolicy"
                data-href="/cookies"
              >
                <span data-editable="additionalLegal">{config.additionalLegal}</span>
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {config.socialLinks.map((social, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                className="h-10 w-10 p-0 text-muted-foreground hover:text-foreground hover:bg-accent"
                onClick={() => handleLinkClick(social.href)}
                data-editable-href={`socialLinks[${idx}].href`}
                data-href={social.href}
                aria-label={social.platform}
              >
                {renderSocialIcon(social.icon)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
