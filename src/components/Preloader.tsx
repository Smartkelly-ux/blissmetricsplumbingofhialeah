import { useEffect, useRef, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'initial' | 'aligning' | 'aligned' | 'subtitle' | 'exit' | 'done'>('initial');
  const onCompleteRef = useRef(onComplete);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (hasCompletedRef.current) return;

    const complete = () => {
      if (hasCompletedRef.current) return;
      hasCompletedRef.current = true;
      setPhase('done');
      onCompleteRef.current();
    };

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      complete();
      return;
    }

    // Sequence of precision metric alignment
    // Phase 1: measurement marks start at differing widths
    const t1 = setTimeout(() => setPhase('aligning'), 350);
    // Phase 2: marks align into unified horizontal system
    const t2 = setTimeout(() => setPhase('aligned'), 1100);
    // Phase 3: "PLUMBING OF HIALEAH" appears
    const t3 = setTimeout(() => setPhase('subtitle'), 1750);
    // Phase 4: measurement system slides toward top-left
    const t4 = setTimeout(() => setPhase('exit'), 2400);
    // Phase 5: finish preloader
    const t5 = setTimeout(complete, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F4F3EE] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === 'exit' ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div
        className={`flex flex-col items-start transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          phase === 'exit' ? '-translate-x-12 -translate-y-8 opacity-80' : 'translate-x-0 translate-y-0'
        }`}
      >
        {/* Three Measurement Marks System */}
        <div className="flex items-center gap-6 mb-4 h-6">
          {/* Mark 01 */}
          <div className="flex flex-col items-start gap-1.5">
            <div
              className="h-[2px] bg-[#1B211F] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: phase === 'initial' ? '28px' : phase === 'aligning' ? '40px' : '48px',
              }}
            />
            <span className="font-mono text-[11px] text-[#4A514E] tracking-widest tabular-nums">01</span>
          </div>

          {/* Mark 02 */}
          <div className="flex flex-col items-start gap-1.5">
            <div
              className="h-[2px] bg-[#1B211F] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: phase === 'initial' ? '68px' : phase === 'aligning' ? '56px' : '48px',
              }}
            />
            <span className="font-mono text-[11px] text-[#4A514E] tracking-widest tabular-nums">02</span>
          </div>

          {/* Mark 03 */}
          <div className="flex flex-col items-start gap-1.5">
            <div
              className="h-[2px] bg-[#1B211F] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: '48px',
              }}
            />
            <span className="font-mono text-[11px] text-[#4A514E] tracking-widest tabular-nums">03</span>
          </div>
        </div>

        {/* Brand Typography */}
        <div className="overflow-hidden">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[#1B211F]">
            BLISS METRICS
          </h1>
        </div>

        {/* Subtitle reveal */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === 'subtitle' || phase === 'exit'
              ? 'max-h-10 opacity-100 mt-1'
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#4A514E]">
            PLUMBING OF HIALEAH
          </p>
        </div>

        {/* Precision coordinate indicator */}
        <div className="mt-6 flex items-center gap-3">
          <span className="h-[1px] w-6 bg-[#B78C72]" />
          <span className="font-mono text-[10px] tracking-wider text-[#929792] uppercase">
            Hialeah, FL · 25.8576° N, 80.2781° W
          </span>
        </div>
      </div>
    </div>
  );
}
