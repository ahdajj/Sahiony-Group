'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { type Language, withLang } from '../lib/i18n';

export function Heroarea({ lang }: { lang: Language }) {
  const ar = lang === 'ar';
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePlayback = () => {
      if (preference.matches) videoRef.current?.pause();
      else void videoRef.current?.play().catch(() => {});
    };
    updatePlayback();
    preference.addEventListener('change', updatePlayback);
    return () => preference.removeEventListener('change', updatePlayback);
  }, []);

  return (
    <section className="Main-Hero" aria-labelledby="hero-title">
      <video ref={videoRef} className="Hero-video" muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <div className="Hero-overlay">
        <div className="container Hero-meta">
          <div className="Hero-brand"><Image src="/Sahiony_Group_Logo_Transparent.svg" alt={ar ? 'مجموعة صهيوني' : 'Sahiony Group'} width={1173} height={932} className="Hero-logo" priority /></div>
          <p className="Hero-eyebrow">{ar ? 'قطر وسوريا · المقاولات والحلول الهندسية' : 'QATAR & SYRIA · CONTRACTING & ENGINEERING'}</p>
          <h1 id="hero-title">{ar ? 'خبرة تبني.\nوثقة تدوم.' : 'Built on expertise.\nDriven by trust.'}</h1>
          <p className="Hero-description">{ar ? 'خبرات متكاملة في المقاولات والأنظمة الكهروميكانيكية والحماية من الحريق. مجموعة واحدة، من الرؤية إلى التنفيذ.' : 'Contracting, MEP and fire protection expertise.\nOne group, from vision to delivery.'}</p>
          <div className="actions"><Link className="btn btn-primary" href="#companies">{ar ? 'استكشف شركاتنا' : 'Explore our companies'}<ArrowUpRight size={18} /></Link><Link className="Hero-project-link" href={withLang('/projects', lang)}>{ar ? 'شاهد مشاريعنا' : 'View our work'}<ArrowUpRight size={18} /></Link></div>
        </div>
      </div>
    </section>
  );
}

