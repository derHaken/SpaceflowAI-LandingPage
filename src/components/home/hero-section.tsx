"use client";

import React, { useEffect, useState, useRef } from 'react'
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
    const benefits = [
        { text: '%85 Tasarruf Sağlayın.', color: 'text-green-600' },
        { text: 'Fırsatları Yakalayın.', color: 'text-blue-600' },
        { text: 'Daha Fazla Kazanın.', color: 'text-orange-500' },
        { text: 'Tek Tıkla Hazırlanın.', color: 'text-purple-600' },
    ];
    const [activeBenefit, setActiveBenefit] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);
    const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveBenefit((prev) => (prev + 1) % benefits.length);
        }, 4000);
        return () => clearTimeout(timeout);
    }, [activeBenefit]);
    useEffect(() => {
        let maxW = 0;
        let maxH = 0;
        measureRefs.current.forEach((el) => {
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.width > maxW) maxW = rect.width;
                if (rect.height > maxH) maxH = rect.height;
            }
        });
        setMaxWidth(Math.max(maxW, 250));
        setMaxHeight(Math.max(maxH, 56)); // 56px ≈ 3.5rem
    }, [benefits]);

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
                                className="font-space-grotesk-bold text-balance text-6xl font-medium md:text-7xl">
                                Kamu İhalelerini Tek Platformdan Yönetin,
                            </TextEffect>
                            <div style={{ position: 'absolute', visibility: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
                                {benefits.map((b, i) => (
                                    <span
                                        key={i}
                                        ref={el => { measureRefs.current[i] = el; }}
                                        className="font-space-grotesk-bold text-6xl md:text-7xl"
                                        style={{ whiteSpace: 'nowrap', padding: 0, margin: 0 }}
                                    >
                                        {b.text}
                                    </span>
                                ))}
                            </div>
                            <div
                                style={{
                                    height: maxHeight,
                                    width: maxWidth,
                                    minWidth: 250,
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    display: 'block',
                                    margin: '0 auto',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transform: `translateY(-${activeBenefit * maxHeight}px)`,
                                        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                                    }}
                                >
                                    {benefits.map((b, i) => (
                                        <span
                                            key={i}
                                            className={`font-space-grotesk-bold text-6xl md:text-7xl flex items-center justify-center w-full ${b.color}`}
                                            style={{
                                                minHeight: maxHeight,
                                                lineHeight: maxHeight ? `${maxHeight}px` : '3.5rem',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {b.text}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="font-space-grotesk-regular mx-auto mt-6 max-w-2xl text-pretty text-lg">
                                SpaceFlow AI teklif süreçlerinizi otomatikleştiren, kamu ihalelerinde sizi zirveye taşıyan yapay zeka destekli platformunuz.
                            </TextEffect>
                        </div>
                    </div>
                </section>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="text-lg px-8 py-6">
                        Request a Demo
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                        Watch a 2-min Explainer Video
                    </Button>
                </div>
                <div className=' flex items-center justify-center pt-20'>
                    <LogoCloud />
                </div>
                <div className="flex justify-center my-8">
                    {/* [PLACEHOLDER: CLEAN, ABSTRACT AI-DRIVEN TENDER AUTOMATION VISUAL/ANIMATION HERE] */}
                </div>
            </main>
        </>
    )
}