'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
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
          aria-label="toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="small-icon mobile-only"
          style={{ background: 'rgba(255,255,255,0.92)', color: '#29336e', borderColor: 'rgba(41,51,110,0.2)' }}
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="container mobile-nav">
          <div className="card soft">
            <div className="card-body card-grid">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                Request Proposal
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
