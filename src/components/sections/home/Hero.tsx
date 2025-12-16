'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Zap, Droplets, Eye } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'The Future of Farming is Here',
  subtitle:
    'Transform your agricultural operations with cutting-edge AI technology that maximizes yield, minimizes waste, and optimizes every aspect of your farm.',
  ctaText: 'Start Your Smart Farm',
  ctaHref: '/get-started',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop',
  heroImageAlt: 'AI-controlled greenhouse with robotic systems and digital displays',
  keyPoints: [
    { icon: 'zap', text: '30% increase in crop yield', label: 'Yield Boost' },
    { icon: 'droplets', text: '50% reduction in water usage', label: 'Water Savings' },
    { icon: 'eye', text: '24/7 autonomous monitoring', label: 'Smart Monitoring' },
  ],
  badgeText: 'AI-Powered Agriculture',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentPoint, setCurrentPoint] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPoint(prev => (prev + 1) % config.keyPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [config.keyPoints.length]);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return <Zap className="h-5 w-5" />;
      case 'droplets':
        return <Droplets className="h-5 w-5" />;
      case 'eye':
        return <Eye className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="flex justify-start">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 px-4 py-2"
              >
                <span data-editable="badgeText">{config.badgeText}</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span data-editable="title">{config.title}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Key Points */}
            <div className="grid gap-4 sm:gap-6">
              {config.keyPoints.map((point, idx) => (
                <Card
                  key={idx}
                  className={`bg-card/50 border-border/50 transition-all duration-500 hover:bg-card hover:border-border ${
                    currentPoint === idx ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  }`}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                        {getIcon(point.icon)}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          <span data-editable={`keyPoints[${idx}].label`}>{point.label}</span>
                        </div>
                        <div className="font-semibold text-foreground">
                          <span data-editable={`keyPoints[${idx}].text`}>{point.text}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
              <Image
                src={config.heroImageUrl}
                alt={config.heroImageAlt}
                data-editable-src="heroImageUrl"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-foreground">AI Active</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-3">
                <div className="text-sm font-medium text-foreground">Smart Monitoring</div>
                <div className="text-xs text-muted-foreground">Real-time optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
