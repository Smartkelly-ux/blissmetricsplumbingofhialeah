/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useState } from 'react';
import { Preloader } from './components/Preloader.tsx';
import { HeaderNav } from './components/HeaderNav.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { SectionTheUnknown } from './components/SectionTheUnknown.tsx';
import { ServiceAtlas } from './components/ServiceAtlas.tsx';
import { SectionRepairFullWidth } from './components/SectionRepairFullWidth.tsx';
import { SectionInstallation } from './components/SectionInstallation.tsx';
import { SectionTheDetails } from './components/SectionTheDetails.tsx';
import { SectionTheHome } from './components/SectionTheHome.tsx';
import { SectionHowItWorks } from './components/SectionHowItWorks.tsx';
import { SectionEmergency } from './components/SectionEmergency.tsx';
import { SectionRequestService } from './components/SectionRequestService.tsx';
import { SectionLocal } from './components/SectionLocal.tsx';
import { SectionFinalCta } from './components/SectionFinalCta.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const handlePreloaderComplete = useCallback(() => setPreloaderDone(true), []);

  return (
    <div className="relative min-h-screen bg-[#F4F3EE] text-[#1B211F] selection:bg-[#21403D] selection:text-[#FBFAF6]">
      {/* Precision 'METRICS' Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Top Header Navigation (Compact top-left anchor + unified tablet/mobile right panel) */}
      <HeaderNav />

      {/* Main One-Page Content */}
      <main id="main-content">
        {/* Editorial Hero */}
        <HeroSection preloaderFinished={preloaderDone} />

        {/* Section 01: The Unknown (Horizontal Text Tracking) */}
        <SectionTheUnknown />

        {/* Section 02: Service Atlas (Editorial Index + Anchored Hover / Accordion) */}
        <ServiceAtlas />

        {/* Section 03: Full-Width Image (Exposure Reveal + 25% Offset Text Block) */}
        <SectionRepairFullWidth />

        {/* Section 04: Installation (Asymmetric 3-Col, Soft Clip-Path Reveal) */}
        <SectionInstallation />

        {/* Section 05: The Details (Spacious Canvas, Opacity + Tracking Motion) */}
        <SectionTheDetails />

        {/* Section 06: The Home (60/40 Split, Image Cropping Scroll Motion) */}
        <SectionTheHome />

        {/* Section 07: How It Works (Scroll-Scrubbed Horizontal Typography) */}
        <SectionHowItWorks />

        {/* Section 08: Emergency (Dark Teal, Slow Type Expansion, 24/7 Phone) */}
        <SectionEmergency />

        {/* Section 09: Inline Request Service (Bottom-Border Form, Mineral Line, No Popups) */}
        <SectionRequestService />

        {/* Section 10: Local (Line Draw Motion, Business Data, Directions) */}
        <SectionLocal />

        {/* Final Off-Center CTA */}
        <SectionFinalCta />
      </main>

      {/* Editorial Horizontal Footer with Mineral Line Reveal */}
      <Footer />
    </div>
  );
}
