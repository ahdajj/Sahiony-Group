'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { LogoMark } from './logo-mark';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/companies/hta', label: 'HTA Qatar' },
  { href: '/companies/sec', label: 'SEC Syria' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerId = 'mobile-nav-drawer';

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
        <Link href="/" className="brand">
          <LogoMark src="/SEC LOGO SAHIONY.jpg" alt="Sahiony Group" header />
          <div className="brand-meta">
            <small>Sahiony Group</small>
            <span>Qatar & Syria Engineering Companies</span>
          </div>
        </Link>

        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-primary desktop-only" style={{ display: open ? 'none' : undefined }}>
          Request Proposal
        </Link>

        <button
          ref={toggleButtonRef}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
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
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer-header">
          <h2>Menu</h2>
          <button type="button" className="drawer-close-btn" onClick={() => setOpen(false)}>
            <X size={18} aria-hidden="true" />
            <span>Close</span>
          </button>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile site navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-primary mobile-drawer-cta" onClick={() => setOpen(false)}>
          Request Proposal
        </Link>
      </aside>
    </header>
  );
}
