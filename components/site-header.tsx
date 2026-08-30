'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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

  const navItems = [
    { href: '/', label: text.nav.home },
    { href: '/companies/hta', label: text.nav.hta },
    { href: '/companies/sec', label: text.nav.sec },
    { href: '/services', label: text.nav.services },
    { href: '/about', label: text.nav.about },
    { href: '/careers', label: text.nav.careers },
    { href: '/contact', label: text.nav.contact },
  ] as const;

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
          <div className="brand-meta">
            <small>{text.groupName}</small>
          </div>
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.href} href={withLang(item.href, lang)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions" style={{ display: open ? 'none' : undefined }}>
          <div className={`lang-switch ${lang === 'ar' ? 'is-ar' : ''}`} role="group" aria-label="Language selector">
            <span className="lang-switch-track">
              <span className="lang-switch-thumb" aria-hidden="true" />
              {lang === 'en' ? (
                <span className="lang-switch-label lang-en" aria-current="true">English</span>
              ) : (
                <Link href={switchLanguageHref} className="lang-switch-label lang-en">English</Link>
              )}
              {lang === 'ar' ? (
                <span className="lang-switch-label lang-ar" aria-current="true">العربية</span>
              ) : (
                <Link href={switchLanguageHref} className="lang-switch-label lang-ar">العربية</Link>
              )}
            </span>
          </div>
          <Link href={withLang('/contact', lang)} className="btn btn-primary desktop-only">
            {text.ctaProposal}
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
          {navItems.map((item) => (
            <Link key={item.href} href={withLang(item.href, lang)} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-drawer-actions">
          <div className={`lang-switch mobile-lang-switch ${lang === 'ar' ? 'is-ar' : ''}`} role="group" aria-label="Language selector">
            <span className="lang-switch-track">
              <span className="lang-switch-thumb" aria-hidden="true" />
              {lang === 'en' ? (
                <span className="lang-switch-label lang-en" aria-current="true">English</span>
              ) : (
                <Link href={switchLanguageHref} className="lang-switch-label lang-en" onClick={() => setOpen(false)}>English</Link>
              )}
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
