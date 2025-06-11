'use client';

import { motion } from 'framer-motion';
import { BrainCog, Rocket, SearchCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const steps = [
  {
    icon: <SearchCheck className="size-6" />,
    title: 'Step 1: Discover',
    description: 'Start by identifying your needs through intelligent analysis and smart recommendations.'
  },
  {
    icon: <BrainCog className="size-6" />,
    title: 'Step 2: Personalize',
    description: 'Customize the platform to suit your exact workflow and use case with ease.'
  },
  {
    icon: <Sparkles className="size-6" />,
    title: 'Step 3: Automate',
    description: 'Enable AI to handle routine tasks, saving you time and boosting consistency.'
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Step 4: Secure',
    description: 'Your data and processes are protected with enterprise-grade security.'
  },
  {
    icon: <Rocket className="size-6" />,
    title: 'Step 5: Launch',
    description: 'Deploy and scale your optimized workflow with confidence and speed.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-muted/20 dark:bg-zinc-900 bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple yet powerful 5-step process to get the most out of your experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="group border-0 bg-background shadow-sm hover:shadow-md transition-all">
                <CardHeader className="pb-3 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-zinc-800">
                    {step.icon}
                  </div>
                  <h3 className="font-medium">{step.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
