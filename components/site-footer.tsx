import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
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

  const offices = [
    {
      market: ar ? 'قطر' : 'Qatar',
      company: 'HTA Construction & Trading',
      location: ar ? 'الدوحة، قطر' : 'Doha, Qatar',
      phone: '+974 5517 7960',
      phoneHref: 'tel:+97455177960',
      companyHref: '/companies/hta',
    },
    {
      market: ar ? 'سوريا' : 'Syria',
      company: 'SEC Engineering & Contracting',
      location: ar ? 'اللاذقية، سوريا' : 'Lattakia, Syria',
      phone: '+963 933 33 5671',
      phoneHref: 'tel:+963933335671',
      companyHref: '/companies/sec',
    },
  ];

  return (
    <footer className="footer site-footer" id="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-lead">
          <div className="site-footer-brand">
            <span className="site-footer-logo"><Image src="/Sahiony_Group_Logo_Transparent.svg" alt={text.groupName} width={1173} height={932} /></span>
            <div>
              <span className="site-footer-eyebrow">{ar ? 'الهندسة عبر سوقين' : 'ENGINEERING ACROSS TWO MARKETS'}</span>
              <h2>{ar ? 'حضور محلي. معيار تنفيذ واحد.' : 'Local presence. One delivery standard.'}</h2>
              <p>{text.footer.note}</p>
            </div>
          </div>
          <Link className="site-footer-cta" href={withLang('/contact', lang)}>
            <span><small>{ar ? 'لديك مشروع؟' : 'HAVE A PROJECT?'}</small>{ar ? 'ابدأ محادثة معنا' : 'Start a conversation'}</span>
            <ArrowUpRight size={21} aria-hidden="true" />
          </Link>
        </div>

        <div className="site-footer-content">
          <section className="site-footer-offices" aria-labelledby={`footer-offices-${lang}`}>
            <div className="site-footer-section-heading">
              <span>{ar ? 'مكاتبنا' : 'OUR OFFICES'}</span>
              <h2 id={`footer-offices-${lang}`}>{ar ? 'فرق قريبة من مشاريعكم.' : 'Teams close to your projects.'}</h2>
            </div>
            <div className="site-footer-office-grid">
              {offices.map((office) => (
                <article className="site-footer-office" key={office.company}>
                  <div><span>{office.market}</span><h3>{office.company}</h3></div>
                  <address>
                    <span><MapPin size={15} aria-hidden="true" />{office.location}</span>
                    <a href={office.phoneHref}><Phone size={15} aria-hidden="true" />{office.phone}</a>
                  </address>
                  <Link href={withLang(office.companyHref, lang)}>{ar ? 'ملف الشركة' : 'Company profile'}<ArrowUpRight size={15} aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          </section>

          <nav className="site-footer-navigation" aria-label={ar ? 'روابط التذييل' : 'Footer navigation'}>
            <div>
              <h2>{ar ? 'استكشف' : 'Explore'}</h2>
              {links.map((item) => <Link href={withLang(item.href, lang)} key={item.href}>{item.label}</Link>)}
            </div>
            <div>
              <h2>{ar ? 'شركات المجموعة' : 'Group companies'}</h2>
              <Link href={withLang('/companies/hta', lang)}>{text.nav.hta}</Link>
              <Link href={withLang('/companies/sec', lang)}>{text.nav.sec}</Link>
              <a className="site-footer-email" href="mailto:info@htaqatar.com"><Mail size={15} aria-hidden="true" />info@htaqatar.com</a>
            </div>
          </nav>
        </div>

        <div className="site-footer-bottom">
          <span>© {new Date().getFullYear()} {text.groupName}</span>
          <span>{ar ? 'الهندسة · المقاولات · التجارة' : 'Engineering · Contracting · Trading'}</span>
        </div>
      </div>
    </footer>
  );
}
