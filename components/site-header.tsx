'use client';

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
        <a href="/" className="brand">
          <LogoMark src="/SEC LOGO SAHIONY.jpg" alt="Sahiony Group" header />
          <div className="brand-meta">
            <small>Sahiony Group</small>
            <span>Qatar & Syria Engineering Companies</span>
          </div>
        </a>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="btn btn-primary desktop-only" style={{ display: open ? 'none' : undefined }}>
          Request Proposal
        </a>

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
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
