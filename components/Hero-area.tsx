'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { type Language, withLang } from '../lib/i18n';

export function Heroarea({ lang }: { lang: Language }) {
  const ar = lang === 'ar';
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePlayback = () => {
      if (preference.matches) videoRef.current?.pause();
      else void videoRef.current?.play().catch(() => setPlaying(false));
    };
    updatePlayback();
    preference.addEventListener('change', updatePlayback);
    return () => preference.removeEventListener('change', updatePlayback);
  }, []);

  return (
    <section className="Main-Hero" aria-labelledby="hero-title">
      <video ref={videoRef} className="Hero-video" muted loop playsInline preload="metadata" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
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
      <button className="Hero-video-toggle" type="button" onClick={() => { if (playing) videoRef.current?.pause(); else void videoRef.current?.play().catch(() => setPlaying(false)); }} aria-label={playing ? (ar ? 'إيقاف الفيديو مؤقتاً' : 'Pause background video') : (ar ? 'تشغيل الفيديو' : 'Play background video')}>
        {playing ? <Pause size={15} /> : <Play size={15} />}
      </button>
    </section>
  );
}

