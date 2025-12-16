'use client';

import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brand: 'SmartFarm AI',
  tagline: 'Revolutionizing agriculture with intelligent automation',
  copyright: '© 2024 SmartFarm AI. All rights reserved.',
  links: {
    product: [
      { label: 'Features', href: '#about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'API', href: '/api' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact', href: '/contact' },
      { label: 'Status', href: '/status' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-4">
              <span data-editable="brand">{config.brand}</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              <span data-editable="tagline">{config.tagline}</span>
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {config.links.product.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`links.product[${idx}].href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <span data-editable={`links.product[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {config.links.company.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`links.company[${idx}].href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <span data-editable={`links.company[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {config.links.support.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`links.support[${idx}].href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <span data-editable={`links.support[${idx}].label`}>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              <span data-editable="copyright">{config.copyright}</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {config.links.legal.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`links.legal[${idx}].href`}
                  data-href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <span data-editable={`links.legal[${idx}].label`}>{link.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}