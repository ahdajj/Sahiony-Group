import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { type Language, uiText, withLang } from '../lib/i18n';

export function SiteFooter({ lang }: { lang: Language }) {
  const text = uiText[lang];
  const ar = lang === 'ar';
  const links = [
    { href: '/about', label: text.nav.about },
    { href: '/projects', label: ar ? 'المشاريع' : 'Projects' },
    { href: '/services', label: text.nav.services },
    { href: '/products', label: text.nav.products },
    { href: '/careers', label: text.nav.careers },
    { href: '/contact', label: text.nav.contact },
  ];

  return (
    <footer className="footer site-footer">
      <div className="container site-footer-grid">
        <div className="site-footer-brand">
          <Image src="/Sahiony_Group_Logo_Transparent.svg" alt={text.groupName} width={1173} height={932} />
          <p>{text.footer.note}</p>
        </div>
        <div>
          <h2>{ar ? 'شركات المجموعة' : 'Group companies'}</h2>
          <Link href={withLang('/companies/hta', lang)}>{text.nav.hta}</Link>
          <Link href={withLang('/companies/sec', lang)}>{text.nav.sec}</Link>
        </div>
        <div>
          <h2>{ar ? 'روابط سريعة' : 'Quick links'}</h2>
          {links.map((item) => <Link href={withLang(item.href, lang)} key={item.href}>{item.label}</Link>)}
        </div>
        <address>
          <h2>{ar ? 'تواصل معنا' : 'Contact'}</h2>
          <a href="tel:+97455177960"><Phone size={15} aria-hidden="true" />+974 5517 7960</a>
          <a href="tel:+963933335671"><Phone size={15} aria-hidden="true" />+963 933 33 5671</a>
          <a href="mailto:info@htaqatar.com"><Mail size={15} aria-hidden="true" />info@htaqatar.com</a>
          <span><MapPin size={15} aria-hidden="true" />{ar ? 'الدوحة · اللاذقية' : 'Doha · Lattakia'}</span>
        </address>
      </div>
      <div className="container site-footer-bottom"><span>© {new Date().getFullYear()} {text.groupName}</span><span>{ar ? 'الهندسة · المقاولات · التجارة' : 'Engineering · Contracting · Trading'}</span></div>
    </footer>
  );
}
