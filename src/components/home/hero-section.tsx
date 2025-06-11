import React from 'react'
import { Mail, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { LogoCloud } from './logo-cloud'
import { TextLoop } from '@/components/motion-primitives/text-loop';


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
                <section>
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="font-space-grotesk-bold text-balance text-5xl font-medium md:text-6xl">
                                Healthier daily routine
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="font-space-grotesk-regular mx-auto mt-6 max-w-2xl text-pretty text-lg">
                                Tailwindcss highly customizable components for building modern websites and applications that look and feel the way you mean it.
                            </TextEffect>

                            
                        </div>
                    </div>
                </section>
                <div className="duration-200 flex items-center justify-center  mt-8 pb-4 pt-4 bg-indigo-200 rounded-xl max-w-2xs mx-auto">
                    <TextLoop className='font-space-grotesk-bold text-sm text-white text-center'>
                        <span>Daha hızlı analizler</span>
                        <span>Generate a logo</span>
                        <span>Create a component</span>
                        <span>Draw a diagram</span>
                    </TextLoop>
                </div>
                <div className=' flex items-center justify-center pt-20'>
                    <LogoCloud/>
                </div>
            </main>
        </>
    )
}