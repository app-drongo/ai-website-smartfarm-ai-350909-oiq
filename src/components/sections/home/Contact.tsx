'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const DEFAULT_CONTACT = {
  title: 'Get in Touch with SmartFarm AI',
  subtitle: 'Ready to transform your agricultural operations? Contact our team of experts to learn how SmartFarm AI can optimize your farm.',
  contactInfo: [
    {
      icon: 'mail',
      label: 'Email',
      value: 'hello@smartfarm-ai.com',
      href: 'mailto:hello@smartfarm-ai.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: 'mapPin',
      label: 'Address',
      value: '123 AgTech Plaza, Farm Valley, CA 94105',
      href: 'https://maps.google.com/?q=123+AgTech+Plaza+Farm+Valley+CA',
    },
    {
      icon: 'clock',
      label: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM PST',
      href: null,
    },
  ],
  formFields: [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email address',
      required: true,
    },
    {
      name: 'company',
      label: 'Company/Farm Name',
      type: 'text',
      placeholder: 'Enter your company or farm name',
      required: false,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number',
      required: false,
    },
    {
      name: 'farmSize',
      label: 'Farm Size (acres)',
      type: 'number',
      placeholder: 'Enter farm size in acres',
      required: false,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Tell us about your farming operation and how we can help...',
      required: true,
    },
  ],
  ctaText: 'Send Message',
  successMessage: 'Thank you for your message! Our team will get back to you within 24 hours.',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const { handleSubmit, isSubmitting, isSuccess, message } = useFormSubmit();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return Mail;
      case 'phone':
        return Phone;
      case 'mapPin':
        return MapPin;
      case 'clock':
        return Clock;
      default:
        return Mail;
    }
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {config.contactInfo.map((info, idx) => {
                  const IconComponent = getIcon(info.icon);
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground mb-1">
                          <span data-editable={`contactInfo[${idx}].label`}>{info.label}</span>
                        </div>
                        <div className="text-muted-foreground">
                          <span data-editable={`contactInfo[${idx}].value`}>{info.value}</span>
                        </div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={idx}
                      href={info.href}
                      data-editable-href={`contactInfo[${idx}].href`}
                      className="block hover:bg-accent/50 rounded-lg p-2 -m-2 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={idx} className="p-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Why Choose SmartFarm AI?</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Free consultation and farm assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">24/7 technical support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Custom implementation plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">ROI guarantee within 12 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <h3 className="text-2xl font-bold">Send us a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              {/* Success/Error Message */}
              {message && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  isSuccess 
                    ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
                    : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
                }`}>
                  {isSuccess ? (
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <div className="h-5 w-5 rounded-full bg-red-600 dark:bg-red-400 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  )}
                  <span className="text-sm font-medium">{message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} data-form-id="contact-form" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {config.formFields.map((field, idx) => {
                    if (field.type === 'textarea') {
                      return (
                        <div key={field.name} className="md:col-span-2">
                          <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                            <span data-editable={`formFields[${idx}].label`}>{field.label}</span>
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                          <Textarea
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            data-editable-placeholder={`formFields[${idx}].placeholder`}
                            required={field.required}
                            disabled={isSubmitting}
                            className="min-h-[120px]"
                          />
                        </div>
                      );
                    }

                    return (
                      <div key={field.name} className={field.name === 'name' || field.name === 'email' ? 'md:col-span-1' : 'md:col-span-2'}>
                        <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                          <span data-editable={`formFields[${idx}].label`}>{field.label}</span>
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        <Input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          data-editable-placeholder={`formFields[${idx}].placeholder`}
                          required={field.required}
                          disabled={isSubmitting}
                        />
                      </div>
                    );
                  })}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
