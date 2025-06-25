'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function BookConsultation() {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-space-grotesk-bold mb-6 text-zinc-900 dark:text-white">
          Request a Demo
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          See how Spaceflow AI can help you win more tenders and save costs. Book a personalized demo with our team.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="text-lg px-8 py-6">
            Request a Demo
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Watch a 2-min Explainer Video
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
