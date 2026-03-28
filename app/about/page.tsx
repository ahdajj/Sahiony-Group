import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { getLocalizedSiteData, resolveLanguage, uiText, type SearchParams } from '../../lib/i18n';

export default async function AboutPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const text = uiText[lang];
  const { groupHighlights, valueProps } = getLocalizedSiteData(lang);

  return (
    <div className="page-shell" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <section className="container section">
          <SectionTitle
            eyebrow={text.about.eyebrow}
            title={text.about.title}
            description={text.about.description}
          />
          <div className="spacer-32" />
          <div className="grid-2">
            <article className="card soft">
              <div className="card-body card-grid">
                {groupHighlights.map((item) => (
                  <div key={item} className="highlight-box">{item}</div>
                ))}
              </div>
            </article>
            <article className="card">
              <div className="card-body card-grid">
                {valueProps.map((item) => (
                  <div key={item.title} className="highlight-box">
                    <strong>{item.title}</strong>
                    <div className="spacer-16" />
                    {item.description}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
