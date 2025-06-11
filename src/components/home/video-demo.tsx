'use client';

import React from 'react';
import { motion } from "motion/react"


export const VideoDemo = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-space-grotesk-bold text-zinc-900 dark:text-white mb-6"
        >
          See it in Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 font-space-grotesk-regular md:text-xl"
        >
          Watch this quick demo to understand how our platform transforms your daily workflow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
};
