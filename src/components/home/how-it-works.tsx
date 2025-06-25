'use client';

import { motion } from 'framer-motion';
import { BrainCog, Rocket, SearchCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const steps = [
  {
    icon: <SearchCheck className="size-6" />,
    title: 'Otomatik Fırsat Tespiti',
    description: "EKAP'ta yayınlanan ihaleler arasından sizi ilgilendirenleri tespit ediyoruz."
  },
  {
    icon: <BrainCog className="size-6" />,
    title: 'Otomatik Ürün Eşleştirme',
    description: 'Mal alım ihalelerinde ürün portföyünüzdeki ürünleri %95 doğruluk oranıyla eşleştiriyoruz.'
  },
  {
    icon: <Sparkles className="size-6" />,
    title: 'Yaklaşık Maliyet Hesabı',
    description: 'Fiyat cetvelini ve lokal ücretlerle yaklaşık maliyetinizi hesaplıyoruz.'
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Teklif Optimizasyonu',
    description: 'Otomatik olarak teklif dosyanızı hazırlıyor ve fiyatınızı optimize etmenize yardımcı oluyoruz.'
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-indigo-50 dark:bg-zinc-900 bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl font-space-grotesk-bold">Yapay Zeka ile <br /> Rekabet Avantajını Elinize Alın</h2>
            <p className="mt-4 font-space-grotesk-regular">Yılda 21.000$'a varan tasarruf sağlayın. Gözden kaçan fırsatları bulun. <br /> En rekabetçi teklfi hazırlayarak 15%'e varan artış sağlayın.</p>
          </div>
        </motion.div>

        {/* Step 1: Mal Alımı İhaleleri için Odaklanmış, Medikal Sektör ve Eşleşen Ürünler Skoru ile */}
        <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16 px-4 md:px-8 bg-white rounded-3xl shadow-lg border border-zinc-100 mb-24">
          {/* Large Step Number */}
          <div className="absolute left-0 top-0 md:static md:relative flex-shrink-0 select-none" style={{ zIndex: 1 }}>
            <span className="text-[7rem] md:text-[9rem] font-space-grotesk-bold text-zinc-100 leading-none block md:ml-0 ml-[-0.5rem]">1</span>
          </div>
          {/* Content */}
          <div className="flex-1 min-w-0 z-10">
            <h3 className="text-2xl md:text-3xl font-space-grotesk-bold text-zinc-900 mb-4">
              Anında İhale Fırsatlarını Keşfet
            </h3>
            <p className="text-lg text-zinc-600 font-space-grotesk-regular max-w-xl">
              Spaceflow AI, EKAP'taki ihaleleri otomatik bulur, portföyünüze göre eşleştirir ve skorlar. Tüm fırsatlar tek ekranda, hiçbirini kaçırmayın.
            </p>
          </div>
          {/* Product UI Mockup - Only Mal Alımı, Medical, with Matched Products & Relevance Score (Condensed) */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-[500px] max-w-2xl w-full z-10">
            {/* Notification Component */}
            <div className="w-full flex items-center gap-3 mb-6 px-6 py-3 rounded-lg bg-indigo-50 border border-indigo-100 shadow-sm">
              <Mail className="text-indigo-500" size={24} />
              <span className="text-base text-indigo-900 font-space-grotesk-regular font-medium">Yeni Fırsatlar! Teklif verebileceğiniz 3 yeni ihale var.</span>
            </div>
            <div className="relative w-full bg-white border border-zinc-200 rounded-2xl shadow-lg overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center justify-between px-8 py-4 bg-zinc-50 border-b border-zinc-200">
                <span className="text-zinc-400 text-sm font-mono tracking-widest">EKAP Mal Alımı İhaleleri</span>
                <span className="rounded-full bg-green-100 text-green-700 text-sm px-4 py-1 font-semibold">Canlı</span>
              </div>
              {/* Mockup Table */}
              <div className="p-6">
                <table className="w-full text-left table-fixed">
                  <thead>
                    <tr className="text-zinc-500 text-sm">
                      <th className="pb-4 w-[30%]">İhale Adı</th>
                      <th className="pb-4 w-[15%]">Tür</th>
                      <th className="pb-4 w-[15%]">Bitiş</th>
                      <th className="pb-4 w-[25%]">Ürün Skoru</th>
                      <th className="pb-4 w-[15%]">Durum</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-800 text-base">
                    <tr className="bg-indigo-50/60">
                      <td className="py-3 font-semibold">Maske & Eldiven</td>
                      <td>Mal Alımı</td>
                      <td>12.06</td>
                      <td>
                        <span className="block">Maske 98%</span>
                        <span className="block">Eldiven 92%</span>
                      </td>
                      <td><span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2 align-middle"></span>Uygun</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold">Enjektör</td>
                      <td>Mal Alımı</td>
                      <td>15.06</td>
                      <td>
                        <span className="block">Enjektör 87%</span>
                      </td>
                      <td><span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2 align-middle"></span>Uygun</td>
                    </tr>
                    <tr className="bg-indigo-50/60">
                      <td className="py-3 font-semibold">Gazlı Bez</td>
                      <td>Mal Alımı</td>
                      <td>18.06</td>
                      <td>
                        <span className="block">Gazlı Bez 95%</span>
                      </td>
                      <td><span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2 align-middle"></span>Uygun</td>
                    </tr>
                  </tbody>
                </table>
                {/* Filtering UI - Only Mal Alımı */}
                <div className="mt-6 flex gap-2 flex-wrap">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Mal Alımı</span>
                </div>
              </div>
            </div>
          </div>
          {/* Optional: Dashed line for visual flow to next step */}
          <div className="hidden md:block absolute right-[-60px] top-1/2 z-0">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20 Q60 0 120 20" stroke="#e0e7ff" strokeWidth="3" strokeDasharray="8 8" fill="none" />
            </svg>
          </div>
        </div>

        {/* Step 2: Otomatik Ürün Eşleştirme */}
        <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16 px-4 md:px-8 bg-white rounded-3xl shadow-lg border border-zinc-100 mb-24">
          {/* Large Step Number */}
          <div className="absolute left-0 top-0 md:static md:relative flex-shrink-0 select-none" style={{ zIndex: 1 }}>
            <span className="text-[7rem] md:text-[9rem] font-space-grotesk-bold text-zinc-100 leading-none block md:ml-0 ml-[-0.5rem]">2</span>
          </div>
          {/* Content (Left) */}
          <div className="flex-1 min-w-0 z-10">
            <h3 className="text-2xl md:text-3xl font-space-grotesk-bold text-zinc-900 mb-4">
              Ürünlerinizi İhalelerle Akıllıca Eşleştirin
            </h3>
            <p className="text-lg text-zinc-600 font-space-grotesk-regular max-w-xl">
              Fırsatı tespit ettikten sonra, ihale detaylarına girerek portföyünüzdeki ürünlerin her bir ihale kalemiyle nasıl eşleştiğini ve uyum yüzdesini görebilirsiniz. Eşleşmeleri onaylayın veya alternatif ürün önerilerini inceleyin.
            </p>
          </div>
          {/* Tender Detail UI Mockup (Right) - COMPACT VERSION */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-[340px] max-w-md w-full z-10">
            <div className="relative w-full bg-white border border-zinc-200 rounded-xl shadow-md overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 bg-zinc-50">
                <div>
                  <div className="text-base font-bold text-zinc-900 leading-tight">Tıbbi Cihaz Alımı İhalesi</div>
                  <div className="text-xs text-zinc-500">Sağlık Bakanlığı</div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="flex items-center gap-1 px-2 py-1 rounded bg-green-100 text-green-800 text-[11px] font-semibold hover:bg-green-200 transition">
                    <span className="text-base">+</span> Teklif Alanına Ekle
                  </button>
                  <button className="flex items-center gap-1 px-2 py-1 rounded bg-indigo-100 text-indigo-800 text-[11px] font-semibold hover:bg-indigo-200 transition">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    Özeti Görüntüle
                  </button>
                  {/* User/Profile Icon */}
                  <div className="ml-1 w-7 h-7 rounded-full bg-zinc-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex border-b border-zinc-200 bg-white text-xs">
                <button className="px-4 py-2 font-medium text-zinc-500 hover:text-indigo-700 focus:outline-none border-b-2 border-transparent hover:border-indigo-200 transition">Genel Bakış</button>
                <button className="px-4 py-2 font-medium text-indigo-700 border-b-2 border-indigo-600 focus:outline-none transition">Ürün Eşleşmeleri</button>
              </div>
              {/* Tab Content: Ürün Eşleşmeleri */}
              <div className="p-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-zinc-700 font-semibold text-sm">Tıbbi Cihaz Alımı</span>
                  <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">Mal Alımı</span>
                </div>
                <div className="space-y-2">
                  {/* Match Row 1 */}
                  <div className="flex items-center justify-between bg-indigo-50/60 rounded-lg px-3 py-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-zinc-500 mb-0.5">İhale Ürünü</div>
                      <div className="font-semibold text-zinc-900 text-sm leading-tight">Cerrahi Maske</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-zinc-500 mb-0.5">Portföy Ürünü</div>
                      <div className="text-zinc-900 text-sm leading-tight">X Marka Cerrahi Maske</div>
                    </div>
                    <div className="w-24 flex flex-col items-end gap-1">
                      <span className="inline-block rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-semibold">%98 Uyumlu</span>
                      <button className="px-2 py-1 rounded-md bg-indigo-600 text-white text-[11px] font-medium hover:bg-indigo-700 transition">Onayla</button>
                    </div>
                  </div>
                  {/* Match Row 2 */}
                  <div className="flex items-center justify-between rounded-lg px-3 py-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-zinc-500 mb-0.5">İhale Ürünü</div>
                      <div className="font-semibold text-zinc-900 text-sm leading-tight">Lateks Eldiven</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-zinc-500 mb-0.5">Portföy Ürünü</div>
                      <div className="text-zinc-900 text-sm leading-tight">Y Marka Lateks Eldiven</div>
                    </div>
                    <div className="w-24 flex flex-col items-end gap-1">
                      <span className="inline-block rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-semibold">%95 Uyumlu</span>
                      <button className="px-2 py-1 rounded-md bg-indigo-600 text-white text-[11px] font-medium hover:bg-indigo-700 transition">Onayla</button>
                    </div>
                  </div>
                  {/* Match Row 3 */}
                  <div className="flex items-center justify-between bg-indigo-50/60 rounded-lg px-3 py-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-zinc-500 mb-0.5">İhale Ürünü</div>
                      <div className="font-semibold text-zinc-900 text-sm leading-tight">Enjektör 5ml</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-zinc-500 mb-0.5">Portföy Ürünü</div>
                      <div className="text-zinc-900 text-sm leading-tight">Z Marka Enjektör 5ml</div>
                    </div>
                    <div className="w-24 flex flex-col items-end gap-1">
                      <span className="inline-block rounded-full bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs font-semibold">%87 Uyumlu</span>
                      <button className="px-2 py-1 rounded-md bg-zinc-200 text-zinc-700 text-[11px] font-medium cursor-not-allowed" disabled>Alternatif Bak</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Optional: Dashed line for visual flow to next step */}
          <div className="hidden md:block absolute right-[-60px] top-1/2 z-0">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20 Q60 0 120 20" stroke="#e0e7ff" strokeWidth="3" strokeDasharray="8 8" fill="none" />
            </svg>
          </div>
        </div>

        {/* Step 3: Teklif Optimizasyonu & Belge Oluşturma */}
        <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16 px-4 md:px-8 bg-white rounded-3xl shadow-lg border border-zinc-100 mb-24">
          {/* Large Step Number */}
          <div className="absolute left-0 top-0 md:static md:relative flex-shrink-0 select-none" style={{ zIndex: 1 }}>
            <span className="text-[7rem] md:text-[9rem] font-space-grotesk-bold text-zinc-100 leading-none block md:ml-0 ml-[-0.5rem]">3</span>
          </div>
          {/* Content (Left) */}
          <div className="flex-1 min-w-0 z-10">
            <h3 className="text-2xl md:text-3xl font-space-grotesk-bold text-zinc-900 mb-4">
              Teklifinizi Optimize Edin ve Belgelerinizi Hazırlayın
            </h3>
            <p className="text-lg text-zinc-600 font-space-grotesk-regular max-w-xl">
              Sistemimiz, rekabetçi ve kârlı bir teklif oluşturmanız için size öneriler sunar, ardından tüm gerekli ihale belgelerini otomatik olarak hazırlar. Son adımda, kazanan teklifinizi kolayca tamamlayın ve başvurunuzu zahmetsizce iletin.
            </p>
          </div>
          {/* Product UI Mockup (Right) */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-[340px] max-w-md w-full z-10">
            <div className="relative w-full bg-white border border-zinc-200 rounded-xl shadow-md overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 bg-zinc-50">
                <div>
                  <div className="text-base font-bold text-zinc-900 leading-tight">Teklif Optimizasyonu</div>
                  <div className="text-xs text-zinc-500">Tıbbi Cihaz Alımı</div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="flex items-center gap-1 px-2 py-1 rounded bg-indigo-100 text-indigo-800 text-[11px] font-semibold hover:bg-indigo-200 transition">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M12 4v16m0 0l-4-4m4 4l4-4"></path></svg>
                    İndir
                  </button>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex border-b border-zinc-200 bg-white text-xs">
                <button className="px-4 py-2 font-medium text-indigo-700 border-b-2 border-indigo-600 focus:outline-none transition">Optimizasyon</button>
                <button className="px-4 py-2 font-medium text-zinc-500 hover:text-indigo-700 focus:outline-none border-b-2 border-transparent hover:border-indigo-200 transition">Belge Oluşturma</button>
              </div>
              {/* Tab Content: Optimizasyon */}
              <div className="p-3">
                {/* Optimization Dashboard */}
                <div className="mb-3 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Önerilen Teklif Fiyatı</span>
                    <span className="font-semibold text-zinc-900">₺ 125.000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Kâr Marjı</span>
                    <span className="font-semibold text-green-700">%18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Rakip Ortalama Teklif</span>
                    <span className="font-semibold text-zinc-900">₺ 127.500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Kazanma Olasılığı</span>
                    <span className="inline-block rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-semibold">%92</span>
                  </div>
                </div>
                {/* Optimization Recommendation */}
                <div className="mb-3 p-2 rounded bg-indigo-50 text-xs text-indigo-900">
                  <span className="font-semibold">Öneri:</span> Teklifinizi ₺125.000 seviyesinde tutarak hem kârlılığınızı hem de kazanma şansınızı artırabilirsiniz.
                </div>
                {/* Document Generation Preview */}
                <div className="mt-4 border-t pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-zinc-700">Teklif Belgesi</span>
                    <button className="px-2 py-1 rounded bg-indigo-600 text-white text-[11px] font-medium hover:bg-indigo-700 transition">Belgeyi Oluştur</button>
                  </div>
                  <div className="bg-zinc-50 rounded p-2 text-xs text-zinc-700">
                    <div className="font-semibold mb-1">Teklif Mektubu (Önizleme)</div>
                    <div>
                      <span className="block">Firma: X Üretici</span>
                      <span className="block">Teklif Tutarı: ₺125.000</span>
                      <span className="block">Tarih: 12.06.2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient overlay at the bottom for smooth transition to white */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 z-20" style={{ background: 'linear-gradient(to bottom, transparent, white)' }} />
    </section>
  );
}
