import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    step: '01',
    word: 'TELL US',
    desc: 'Describe the problem.',
    detail: 'Share the visible symptoms, fixture type, or emergency signs.',
  },
  {
    step: '02',
    word: 'CHECK',
    desc: 'Understand the source.',
    detail: 'Precise diagnostic tracing to isolate the genuine cause of failure.',
  },
  {
    step: '03',
    word: 'FIX',
    desc: 'Make the repair.',
    detail: 'Accurate mechanical restoration with verified replacement parts.',
  },
  {
    step: '04',
    word: 'TEST',
    desc: 'Confirm the result.',
    detail: 'Full pressure and flow testing before marking the job done.',
  },
];

export function SectionHowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate progress through this section (0 to 1)
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
        
        // Map progress to active step 0, 1, 2, 3
        const stepIndex = Math.min(Math.floor(progress * 4), 3);
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full border-t border-[#D9DEDA] py-20 md:py-32 bg-[#F4F3EE]"
    >
      <div className="w-full px-5 md:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#D9DEDA] pb-4 mb-14 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4A514E]">
              06 / PROCESS
            </span>
            <span className="h-[1px] w-6 bg-[#B78C72]" />
            <span className="font-mono text-[11px] text-[#929792] uppercase">
              HOW IT WORKS
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#4A514E] uppercase">
            CALIBRATED 4-STAGE CYCLE
          </span>
        </div>

        {/* Large Horizontal Sequence: TELL US → CHECK → FIX → TEST */}
        {/* No connected circles or timeline bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {STEPS.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={item.word}
                className="flex flex-col justify-between min-h-[220px] transition-all duration-300"
              >
                <div>
                  {/* Step metadata */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-mono text-xs text-[#B78C72] tracking-widest">
                      PHASE {item.step}
                    </span>
                    {index < STEPS.length - 1 && (
                      <span className="hidden lg:inline font-mono text-sm text-[#D9DEDA]">
                        →
                      </span>
                    )}
                  </div>

                  {/* Scroll-Scrubbed Big Word: dark ink when active, muted gray when inactive */}
                  <h3
                    className={`text-[28px] xs:text-[32px] sm:text-4xl lg:text-[44px] font-bold tracking-tight uppercase transition-colors duration-400 select-none break-words leading-tight ${
                      isActive ? 'text-[#1B211F]' : 'text-[#929792]/50'
                    }`}
                  >
                    {item.word}
                  </h3>
                </div>

                {/* Underneath Short Description */}
                <div className="pt-6 border-t border-[#D9DEDA]/70">
                  <p
                    className={`text-base font-semibold transition-colors duration-300 ${
                      isActive ? 'text-[#1B211F]' : 'text-[#4A514E]'
                    }`}
                  >
                    {item.desc}
                  </p>
                  <p className="mt-2 text-xs text-[#4A514E] leading-relaxed">
                    {item.detail}
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
