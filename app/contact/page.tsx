import { ArrowRight, Briefcase, Mail, MapPin, Phone } from 'lucide-react';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { resolveLanguage, uiText, type SearchParams } from '../../lib/i18n';
import InquiryForm from '../../components/inquiry-form';

export default async function ContactPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const text = uiText[lang];

  return (
    <div className="page-shell" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <section className="container section">
          <div className="grid-2">
            <div>
              <SectionTitle eyebrow={text.contactPage.eyebrow} title={text.contactPage.title} description={text.contactPage.description} />
              <div className="spacer-32" />
              <div className="grid-2">
                {[
                  { icon: Phone, ...text.sections.contactCards[0] },
                  { icon: Mail, ...text.sections.contactCards[1] },
                  { icon: MapPin, ...text.sections.contactCards[2] },
                  { icon: Briefcase, ...text.sections.contactCards[3] },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="card soft">
                      <div className="card-body">
                        <div className="small-icon"><Icon size={18} color="#d8a11a" /></div>
                        <div className="spacer-16" />
                        <strong>{item.title}</strong>
                        <div className="spacer-16" />
                        <span className="subtle" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{item.value}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <InquiryForm text={text.sections} />
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
