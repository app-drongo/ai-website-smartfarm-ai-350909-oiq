'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Brain, Leaf, Users, Target, Calendar, Award } from 'lucide-react';

const DEFAULT_ABOUT = {
  title: 'Pioneering Smart Agriculture',
  description:
    "SmartFarm AI combines advanced machine learning algorithms with precision agriculture to create the world's most intelligent farming ecosystem. Our proprietary AI system continuously analyzes soil conditions, weather patterns, and crop health to make real-time decisions that optimize your farm's performance.",
  mission:
    'To revolutionize global food production through sustainable, AI-driven agricultural practices that feed the world while protecting our planet.',
  vision:
    'Creating a world where every farm operates at peak efficiency through intelligent automation.',
  foundedYear: '2021',
  teamSize: '50+ agricultural and AI experts',
  achievements: [
    'First fully autonomous AI farm in North America',
    'Patent-pending crop prediction algorithms',
    'Partnership with leading agricultural universities',
  ],
  stats: [
    { icon: 'Brain', label: 'AI Models', value: '25+' },
    { icon: 'Leaf', label: 'Crops Optimized', value: '100+' },
    { icon: 'Users', label: 'Expert Team', value: '50+' },
  ],
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return Brain;
      case 'Leaf':
        return Leaf;
      case 'Users':
        return Users;
      default:
        return Brain;
    }
  };

  return (
    <section id="about" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span data-editable="title">{config.title}</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {config.stats.map((stat, idx) => {
              const IconComponent = getIcon(stat.icon);
              return (
                <Card key={idx} className="bg-card text-card-foreground border-border">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold mb-2">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable="mission">{config.mission}</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 text-accent-foreground mr-3" />
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable="vision">{config.vision}</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Info */}
          <Card className="bg-card text-card-foreground border-border mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">Founded</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    <span data-editable="foundedYear">{config.foundedYear}</span>
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">Team</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    <span data-editable="teamSize">{config.teamSize}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Key Achievements</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {config.achievements.map((achievement, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  <span data-editable={`achievements[${idx}]`}>{achievement}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
