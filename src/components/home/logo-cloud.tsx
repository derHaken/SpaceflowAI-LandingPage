import clsx from 'clsx'

export const LogoCloud = () => (
    <section className="w-full relative py-16 bg-gradient-to-b from-white via-[#e0e7ff] to-white overflow-x-hidden">
        <div className="mx-auto max-w-full py-16 px-0 relative">
            <h3 className="text-2xl md:text-3xl font-space-grotesk-bold tracking-tight text-center text-zinc-900 dark:text-white mb-10">
                En iyiler ile inşa edildi
            </h3>
            <div className="relative w-full overflow-x-hidden">
                {/* Left indigo horizontal+vertical blur overlay */}
                <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-48 z-10"
                    style={{
                        background: 'linear-gradient(90deg, #e0e7ff 0%, rgba(224,231,255,0.7) 60%, rgba(224,231,255,0) 100%)',
                        WebkitMaskImage:
                            'linear-gradient(90deg, black 60%, transparent 100%), linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)',
                        maskImage:
                            'linear-gradient(90deg, black 60%, transparent 100%), linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)',
                        WebkitMaskComposite: 'intersect',
                        maskComposite: 'intersect',
                        filter: 'blur(0px)'
                    }}
                />
                {/* Right indigo horizontal+vertical blur overlay */}
                <div
                    className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-48 z-10"
                    style={{
                        background: 'linear-gradient(270deg, #e0e7ff 0%, rgba(224,231,255,0.7) 60%, rgba(224,231,255,0) 100%)',
                        WebkitMaskImage:
                            'linear-gradient(270deg, black 60%, transparent 100%), linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)',
                        maskImage:
                            'linear-gradient(270deg, black 60%, transparent 100%), linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)',
                        WebkitMaskComposite: 'intersect',
                        maskComposite: 'intersect',
                        filter: 'blur(0px)'
                    }}
                />
                <div className="logo-cloud-slider-outer w-full overflow-x-hidden">
                    <div className="logo-cloud-slider flex flex-nowrap gap-x-32 items-center animate-logo-slide px-12 md:px-24" style={{ width: 'max-content' }}>
                        {/* First set of logos */}
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-cambridge">
                            <img
                                src="/support-logos/cdnlogo.com_university-of-cambridge.png"
                                alt="University of Cambridge"
                                className="h-[74px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-harvard">
                            <img
                                src="/support-logos/Harvard-Logo.png"
                                alt="Harvard"
                                className="h-[74px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-nvidia">
                            <img
                                src="/support-logos/nvidia_logo.png"
                                alt="NVIDIA"
                                className="h-[52px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-ford-otosan">
                            <img
                                src="/support-logos/fordotosanhigh-1.png"
                                alt="Ford Otosan"
                                className="h-[27px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-sterling-road">
                            <img
                                src="/support-logos/sterling_road_logo.svg"
                                alt="Sterling Road"
                                className="h-[42px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        {/* Second set of logos (duplicate for seamless loop) */}
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-cambridge">
                            <img
                                src="/support-logos/cdnlogo.com_university-of-cambridge.png"
                                alt="University of Cambridge"
                                className="h-[74px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-harvard">
                            <img
                                src="/support-logos/Harvard-Logo.png"
                                alt="Harvard"
                                className="h-[74px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-nvidia">
                            <img
                                src="/support-logos/nvidia_logo.png"
                                alt="NVIDIA"
                                className="h-[52px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-ford-otosan">
                            <img
                                src="/support-logos/fordotosanhigh-1.png"
                                alt="Ford Otosan"
                                className="h-[27px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                        <div className="flex items-center justify-center h-[115px] w-auto flex-shrink-0 logo-sterling-road">
                            <img
                                src="/support-logos/sterling_road_logo.svg"
                                alt="Sterling Road"
                                className="h-[42px] w-auto object-contain"
                                loading="lazy"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            @keyframes logo-slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-logo-slide {
                animation: logo-slide 30s linear infinite;
            }
        `}</style>
    </section>
)
