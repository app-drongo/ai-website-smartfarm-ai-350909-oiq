'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = {
  title: 'Trusted by Leading Agricultural Innovators',
  subtitle: 'See how SmartFarm AI is transforming operations across the industry',
  testimonials: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Farm Operations Director',
      company: 'GreenHarvest Farms',
      content:
        "SmartFarm AI has revolutionized our crop management. We've seen a 35% increase in yield and 40% reduction in water usage. The AI predictions are incredibly accurate.",
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Sarah Chen profile photo',
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Agricultural Technology Manager',
      company: 'Valley Fresh Produce',
      content:
        'The automated monitoring and real-time alerts have saved us countless hours. Our pest management is now proactive rather than reactive, resulting in healthier crops.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Marcus Rodriguez profile photo',
    },
    {
      id: '3',
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Sustainable Agriculture Institute',
      content:
        "The data insights provided by SmartFarm AI have been invaluable for our research. The platform's ability to predict optimal planting times has improved our experimental outcomes significantly.",
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      avatarAlt: 'Dr. Emily Watson profile photo',
    },
  ],
} as const;

type TestimonialsProps = Partial<typeof DEFAULT_TESTIMONIALS>;

export default function Testimonials(props: TestimonialsProps) {
  const config = { ...DEFAULT_TESTIMONIALS, ...props };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`testimonials[${idx}].content`}>
                    "{testimonial.content}"
                  </span>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.avatarAlt}
                      data-editable-src={`testimonials[${idx}].avatarUrl`}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      <span data-editable={`testimonials[${idx}].name`}>{testimonial.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`testimonials[${idx}].role`}>{testimonial.role}</span>
                    </div>
                    <div className="text-sm text-primary font-medium">
                      <span data-editable={`testimonials[${idx}].company`}>
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">{renderStars(5)}</div>
            <span className="text-sm font-medium">
              Trusted by 500+ agricultural operations worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
