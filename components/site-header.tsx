'use client';

import Link from 'next/link';
import Image from 'next/image';

import { usePathname, useSearchParams } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { isArabic, type Language, uiText, withLang } from '../lib/i18n';

export function SiteHeader({ lang }: { lang: Language }) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const drawerId = 'mobile-nav-drawer';
  const text = uiText[lang];

  const primaryNavItems = [
    { href: '/', label: text.nav.home },
    { href: '/projects', label: lang === 'ar' ? 'المشاريع' : 'Projects' },
    { href: '/services', label: text.nav.services },
    { href: '/products', label: text.nav.products },
    { href: '/contact', label: text.nav.contact },
  ] as const;
  const mobileNavItems = [
    primaryNavItems[0],
    { href: '/companies/hta', label: text.nav.hta },
    { href: '/companies/sec', label: text.nav.sec },
    ...primaryNavItems.slice(1),
    { href: '/about', label: text.nav.about },
    { href: '/careers', label: text.nav.careers },
  ] as const;
  const isActive = (href: string) => pathname === href || (href === '/projects' && pathname.startsWith('/projects/'));

  const switchLanguageHref = useMemo(() => {
    const nextIsArabic = lang === 'en';
    const params = new URLSearchParams(searchParams.toString());

    if (nextIsArabic) {
      params.set('lang', 'ar');
    } else {
      params.delete('lang');
    }

    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [lang, pathname, searchParams]);

  // Keep page content from scrolling while the mobile drawer is open.
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  // Add keyboard accessibility: close on Escape and trap focus inside drawer.
  useEffect(() => {
    if (!open) {
      return;
    }

    const drawer = drawerRef.current;
    if (!drawer) {
      return;
    }

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href={withLang('/', lang)} className="brand">
          <Image src="/Sahiony_Group_Logo_Transparent.svg" alt={text.groupName} width={1173} height={932} className="brand-icon" priority />
        </Link>

        <nav className="nav" aria-label={text.mobileNavLabel}>
          <Link href={withLang('/', lang)} aria-current={isActive('/') ? 'page' : undefined}>{text.nav.home}</Link>
          <details className={`nav-dropdown ${pathname.startsWith('/companies/') ? 'is-active' : ''}`}>
            <summary>{lang === 'ar' ? 'الشركات' : 'Companies'} <ChevronDown size={14} aria-hidden="true" /></summary>
            <div className="nav-dropdown-menu">
              <Link href={withLang('/companies/hta', lang)}>{text.nav.hta}<small>{lang === 'ar' ? 'المقاولات والأنظمة الهندسية' : 'Contracting & engineering systems'}</small></Link>
              <Link href={withLang('/companies/sec', lang)}>{text.nav.sec}<small>{lang === 'ar' ? 'الهندسة والمقاولات' : 'Engineering & contracting'}</small></Link>
            </div>
          </details>
          {primaryNavItems.slice(1).map((item) => <Link key={item.href} href={withLang(item.href, lang)} aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</Link>)}
        </nav>

        <div className="header-actions" style={{ display: open ? 'none' : undefined }}>
          <div className={`lang-switch ${lang === 'ar' ? 'is-ar' : ''}`} role="group" aria-label="Language selector">
            <span className="lang-switch-track">
              {lang === 'en' ? (
                <span className="lang-switch-label lang-en" aria-current="true">English</span>
              ) : (
                <Link href={switchLanguageHref} className="lang-switch-label lang-en">English</Link>
              )}
              <span className="lang-switch-sep" aria-hidden="true">|</span>
              {lang === 'ar' ? (
                <span className="lang-switch-label lang-ar" aria-current="true">العربية</span>
              ) : (
                <Link href={switchLanguageHref} className="lang-switch-label lang-ar">العربية</Link>
              )}
            </span>
          </div>
          <Link href={withLang('/contact', lang)} className="btn btn-topbar-cta desktop-only">
            {text.ctaProposal}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <button
          ref={toggleButtonRef}
          aria-label={open ? (isArabic(lang) ? 'إغلاق قائمة التنقل' : 'Close navigation menu') : (isArabic(lang) ? 'فتح قائمة التنقل' : 'Open navigation menu')}
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((v) => !v)}
          className="small-icon mobile-only"
          style={{ background: 'rgba(255,255,255,0.92)', color: '#29336e', borderColor: 'rgba(41,51,110,0.2)' }}
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={`mobile-drawer-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />

      <aside
        id={drawerId}
        ref={drawerRef}
        className={`mobile-drawer ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        inert={!open}
        aria-label={text.mobileNavLabel}
      >
        <div className="mobile-drawer-header">
          <h2>{text.menu}</h2>
          <button type="button" className="drawer-close-btn" onClick={() => setOpen(false)}>
            <X size={18} aria-hidden="true" />
            <span>{text.close}</span>
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label={text.mobileNavLabel}>
          {mobileNavItems.map((item) => (
            <Link key={item.href} href={withLang(item.href, lang)} aria-current={isActive(item.href) ? 'page' : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-drawer-actions">
          <div className={`lang-switch mobile-lang-switch ${lang === 'ar' ? 'is-ar' : ''}`} role="group" aria-label="Language selector">
            <span className="lang-switch-track">
              {lang === 'en' ? (
                <span className="lang-switch-label lang-en" aria-current="true">English</span>
              ) : (
                <Link href={switchLanguageHref} className="lang-switch-label lang-en" onClick={() => setOpen(false)}>English</Link>
              )}
              <span className="lang-switch-sep" aria-hidden="true">|</span>
              {lang === 'ar' ? (
                <span className="lang-switch-label lang-ar" aria-current="true">العربية</span>
              ) : (
                <Link href={switchLanguageHref} className="lang-switch-label lang-ar" onClick={() => setOpen(false)}>العربية</Link>
              )}
            </span>
          </div>
        </div>

        <Link href={withLang('/contact', lang)} className="btn btn-primary mobile-drawer-cta" onClick={() => setOpen(false)}>
          {text.ctaProposal}
        </Link>
      </aside>
    </header>
  );
}

