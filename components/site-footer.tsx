import { LogoMark } from './logo-mark';
import { type Language, uiText, withLang } from '../lib/i18n';

export function SiteFooter({ lang }: { lang: Language }) {
  const text = uiText[lang];

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <LogoMark src="/sec-logo-sahiony.jpg" alt="Sahiony Group" />
          <div>
            <div className="kicker">{text.groupName}</div>
            <div className="footer-note">{text.footer.note}</div>
          </div>
        </div>
        <div className="pill-row">
          <a href={withLang('/about', lang)} className="pill">{text.nav.about}</a>
          <a href={withLang('/companies/hta', lang)} className="pill">{text.nav.hta}</a>
          <a href={withLang('/companies/sec', lang)} className="pill">{text.nav.sec}</a>
          <a href={withLang('/projects', lang)} className="pill">{lang === 'ar' ? 'المشاريع' : 'Projects'}</a>
          <a href={withLang('/services', lang)} className="pill">{text.nav.services}</a>
          <a href={withLang('/contact', lang)} className="pill">{text.nav.contact}</a>
        </div>
      </div>
    </footer>
  );
}

