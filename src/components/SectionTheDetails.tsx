import { useEffect, useRef, useState } from 'react';

const DETAILS = [
  {
    word: 'CLEAR',
    label: 'TRANSPARENT DIAGNOSIS',
    position: 'justify-start',
    sub: 'Direct explanation of why the component failed and what it takes to restore it properly.',
  },
  {
    word: 'TIMELY',
    label: 'PROMPT RESPONSE',
    position: 'justify-end lg:pr-12',
    sub: 'Arriving when promised with the appropriate tools and fittings on hand.',
  },
  {
    word: 'CLEAN',
    label: 'IMMACULATE TURNOVER',
    position: 'justify-start lg:pl-16',
    sub: 'Leaving work areas, cabinets, and flooring in spotless, dry condition.',
  },
  {
    word: 'THOROUGH',
    label: 'SYSTEM VERIFICATION',
    position: 'justify-end',
    sub: 'Multiple pressure and flow checks before any job is marked complete.',
  },
];

export function SectionTheDetails() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeWords, setActiveWords] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setActiveWords((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.35 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-detail-item]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-t border-[#D9DEDA] py-24 md:py-36 bg-[#F4F3EE] overflow-hidden"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Subtle section label */}
        <div className="flex items-center gap-3 mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4A514E]">
            04 / STANDARDS
          </span>
          <span className="h-[1px] w-8 bg-[#B78C72]" />
          <span className="font-mono text-[11px] text-[#929792] uppercase">
            OPERATING PRINCIPLES
          </span>
        </div>

        {/* Four Large Words Dispersed with Generous Negative Space */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {DETAILS.map((item, idx) => {
            const isActive = activeWords[idx];
            return (
              <div
                key={item.word}
                data-detail-item
                data-index={idx}
                className={`flex ${item.position}`}
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B78C72]">
                      {item.label}
                    </span>
                  </div>

                  {/* Word with Opacity + Tracking Motion (tightens on enter, 0 movement) */}
                  <h3
                    className="text-[28px] xs:text-[34px] sm:text-5xl md:text-6xl lg:text-[76px] font-bold text-[#1B211F] leading-[1.05] sm:leading-none uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none break-words"
                    style={{
                      opacity: isActive ? 1 : 0.25,
                      letterSpacing: isActive ? '-0.03em' : '0.02em',
                    }}
                  >
                    {item.word}
                  </h3>

                  <p
                    className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] md:text-[17px] text-[#4A514E] leading-relaxed max-w-sm transition-opacity duration-700"
                    style={{
                      opacity: isActive ? 1 : 0.4,
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
