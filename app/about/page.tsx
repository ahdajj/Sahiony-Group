import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { groupHighlights, valueProps } from '../../lib/site-data';

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="container section">
          <SectionTitle
            eyebrow="About the Group"
            title="Sahiony Group"
            description="A cross-market engineering umbrella connecting Qatar execution capability with Syria contracting and reconstruction positioning."
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
      <SiteFooter />
    </div>
  );
}
