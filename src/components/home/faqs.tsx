'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'search',
            question: "Sistem EKAP'taki ihaleleri nasıl tespit ediyor?",
            answer: 'Yapay zeka tabanlı platformumuz, EKAP ve diğer resmi kaynaklardaki ihaleleri otomatik olarak tarar, katılımınıza uygun olanları anında tespit ederek size bildirir.',
        },
        {
            id: 'item-2',
            icon: 'stethoscope',
            question: 'Ürün eşleştirme ve filtreleme nasıl yapılıyor?',
            answer: 'Sistemimiz, ürün özelliklerini inceler, teknik şartnameler ve mevzuat gerekliliklerini analiz ederek, yalnızca sizin ürün portföyünüze uygun ihaleleri öne çıkarır.',
        },
        {
            id: 'item-3',
            icon: 'clock',
            question: 'Ürün bize zaman ve maliyet avantajı sağlar mı?',
            answer: 'Evet, manuel ihale arama ve inceleme süreçlerini otomatikleştirerek hem zamandan hem de iş gücünden tasarruf etmenizi sağlar. Ayrıca, uygunluk skoru ve önceliklendirme ile en kârlı fırsatlara odaklanabilirsiniz.',
        },
        {
            id: 'item-5',
            icon: 'shield-check',
            question: 'Veri güvenliği ve gizliliği nasıl sağlanıyor?',
            answer: 'Tüm verileriniz, uluslararası standartlara uygun olarak şifrelenir ve güvenli sunucularda saklanır. Kişisel ve ticari bilgileriniz üçüncü şahıslarla paylaşılmaz, fiyatlandırma bilginiz kullanılmaz.',
        },
        {
            id: 'item-7',
            icon: 'star',
            question: 'Sistemin manuel yöntemlerden farkı ve avantajı nedir?',
            answer: 'Yapay zeka destekli analiz, otomatik bildirimler, uygunluk skoru ve teklif hazırlama desteği ile manuel yöntemlere göre çok daha hızlı, verimli ve hatasız bir ihale yönetimi sunar.',
        },
    ]

    return (
        <section className="relative bg-indigo-50 dark:bg-background py-20">
            {/* Gradient at the top */}
            <div className="absolute left-0 top-0 w-full h-24 bg-gradient-to-b from-white to-indigo-50 pointer-events-none z-0" />
            <div className="relative mx-auto max-w-5xl px-4 md:px-6 z-10">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-space-grotesk-bold">Sıkça Sorulan Sorular</h2>
                            <p className="text-muted-foreground mt-4 font-space-grotesk-regular">
                                Aradığınız cevabı bulamadınız mı?{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    Destek ekibimizle iletişime geçin
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
