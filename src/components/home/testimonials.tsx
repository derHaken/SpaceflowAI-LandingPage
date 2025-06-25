import React from 'react';
import { TrendingUp, Timer, DollarSign, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ProductBenefits() {
    return (
        <section className="relative py-20 bg-gradient from-white to-indigo-50 dark:bg-zinc-900 overflow-hidden">
            {/* Top gradient overlay for smooth transition */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-16 z-10"
                style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                }}
            >
                <style>{`
                    @media (prefers-color-scheme: dark) {
                        .dark .gradient-top-transition {
                            background: linear-gradient(to bottom, #18181b 0%, rgba(24,24,27,0) 100%);
                        }
                    }
                `}</style>
            </div>
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-space-grotesk-bold mb-4 text-zinc-900 dark:text-white">
                    Kazanımlarınız
                </h2>
                <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-300 font-space-grotesk-regular max-w-2xl">
                    Spaceflow AI ile ihale süreçlerinizde elde edebileceğiniz somut faydalar. Platformumuzun sağladığı ölçülebilir avantajları keşfedin.
                </p>
                {/* Fayda Kartları */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mt-8">
                    <Card className="bg-white dark:bg-zinc-800 border-0 shadow-xl text-zinc-900 dark:text-white transition-transform hover:scale-105 hover:shadow-2xl">
                        <CardContent className="flex flex-col items-center py-10">
                            <DollarSign className="mb-4 text-green-500" size={40} strokeWidth={2.5} />
                            <span className="text-4xl font-space-grotesk-bold mb-1 tracking-tight">21.000$+</span>
                            <span className="text-lg font-semibold mb-1">Yıllık Tasarruf</span>
                            <span className="text-zinc-500 dark:text-zinc-300 text-base font-space-grotesk-regular">Her yıl elde edilen ortalama maliyet avantajı</span>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-zinc-800 border-0 shadow-xl text-zinc-900 dark:text-white transition-transform hover:scale-105 hover:shadow-2xl">
                        <CardContent className="flex flex-col items-center py-10">
                            <Timer className="mb-4 text-blue-500" size={40} strokeWidth={2.5} />
                            <span className="text-4xl font-space-grotesk-bold mb-1 tracking-tight">%85</span>
                            <span className="text-lg font-semibold mb-1">Zaman Tasarrufu</span>
                            <span className="text-zinc-500 dark:text-zinc-300 text-base font-space-grotesk-regular">İhale süreçlerinde ortalama zaman kazancı</span>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-zinc-800 border-0 shadow-xl text-zinc-900 dark:text-white transition-transform hover:scale-105 hover:shadow-2xl">
                        <CardContent className="flex flex-col items-center py-10">
                            <TrendingUp className="mb-4 text-purple-500" size={40} strokeWidth={2.5} />
                            <span className="text-4xl font-space-grotesk-bold mb-1 tracking-tight">8.000$+</span>
                            <span className="text-lg font-semibold mb-1">İhale Başına Yeni Fırsat</span>
                            <span className="text-zinc-500 dark:text-zinc-300 text-base font-space-grotesk-regular">Her ihale için potansiyel ek kazanç</span>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-zinc-800 border-0 shadow-xl text-zinc-900 dark:text-white transition-transform hover:scale-105 hover:shadow-2xl">
                        <CardContent className="flex flex-col items-center py-10">
                            <Trophy className="mb-4 text-yellow-500" size={40} strokeWidth={2.5} />
                            <span className="text-4xl font-space-grotesk-bold mb-1 tracking-tight">%15</span>
                            <span className="text-lg font-semibold mb-1">Kazanma Oranı Artışı</span>
                            <span className="text-zinc-500 dark:text-zinc-300 text-base font-space-grotesk-regular">Başarı oranında gözle görülür yükseliş</span>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
} 