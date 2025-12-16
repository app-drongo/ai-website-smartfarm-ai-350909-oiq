'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Zap, Shield, Headphones } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Choose Your SmartFarm Plan',
  subtitle: 'Scale your agricultural operations with AI-powered solutions designed for farms of every size',
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small farms getting started with smart agriculture',
      price: '$99',
      period: '/month',
      popular: false,
      features: [
        { name: 'Up to 10 acres monitoring', included: true },
        { name: 'Basic weather alerts', included: true },
        { name: 'Soil moisture tracking', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Email support', included: true },
        { name: 'Advanced AI predictions', included: false },
        { name: 'Automated irrigation control', included: false },
        { name: 'Priority support', included: false },
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced features for growing agricultural operations',
      price: '$299',
      period: '/month',
      popular: true,
      features: [
        { name: 'Up to 100 acres monitoring', included: true },
        { name: 'Advanced weather forecasting', included: true },
        { name: 'Complete soil analysis', included: true },
        { name: 'Mobile & web dashboard', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'AI-powered crop predictions', included: true },
        { name: 'Automated irrigation control', included: true },
        { name: 'Custom reporting', included: false },
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=professional',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large-scale agricultural enterprises',
      price: '$799',
      period: '/month',
      popular: false,
      features: [
        { name: 'Unlimited acres monitoring', included: true },
        { name: 'Predictive weather modeling', included: true },
        { name: 'Advanced soil & crop analytics', included: true },
        { name: 'Full platform access', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Machine learning optimization', included: true },
        { name: 'Complete automation suite', included: true },
        { name: 'Custom integrations & API', included: true },
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
    },
  ],
  features: [
    {
      icon: 'zap',
      title: 'Real-time Monitoring',
      description: '24/7 monitoring of soil conditions, weather patterns, and crop health with instant alerts.',
    },
    {
      icon: 'shield',
      title: 'Data Security',
      description: 'Enterprise-grade security with encrypted data storage and secure API access.',
    },
    {
      icon: 'headphones',
      title: 'Expert Support',
      description: 'Get help from agricultural technology experts whenever you need assistance.',
    },
  ],
  faq: [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'We offer a 14-day free trial for all plans. No credit card required to get started.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide email support for Starter plans, priority email and chat for Professional, and 24/7 dedicated support for Enterprise customers.',
    },
    {
      question: 'Can I integrate with my existing farm management software?',
      answer: 'Yes, our Enterprise plan includes custom integrations and API access. Professional plans have limited integration options.',
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap':
        return Zap;
      case 'shield':
        return Shield;
      case 'headphones':
        return Headphones;
      default:
        return Zap;
    }
  };

  const handlePlanClick = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-3 mb-20">
          {config.plans.map((plan, idx) => {
            const IconComponent = getIcon('star');
            return (
              <Card
                key={plan.id}
                className={`relative bg-card text-card-foreground border-border ${
                  plan.popular
                    ? 'ring-2 ring-primary/20 border-primary/50 shadow-lg scale-105'
                    : 'hover:shadow-lg transition-shadow duration-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold mb-2">
                    <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">
                      <span data-editable={`plans[${idx}].price`}>{plan.price}</span>
                    </span>
                    <span className="text-muted-foreground ml-1">
                      <span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-foreground' : 'text-muted-foreground'
                          }`}
                        >
                          <span data-editable={`plans[${idx}].features[${featureIdx}].name`}>
                            {feature.name}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handlePlanClick(plan.ctaHref)}
                    data-editable-href={`plans[${idx}].ctaHref`}
                    data-href={plan.ctaHref}
                    className={`w-full py-6 text-lg font-semibold ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Why Choose SmartFarm AI?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {config.features.map((feature, idx) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-muted-foreground">
                    <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {config.faq.map((item, idx) => (
              <Card key={idx} className="bg-card text-card-foreground border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    <span data-editable={`faq[${idx}].question`}>{item.question}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`faq[${idx}].answer`}>{item.answer}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of farmers already using SmartFarm AI to optimize their operations.
          </p>
          <Button
            onClick={() => handlePlanClick('/signup')}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}