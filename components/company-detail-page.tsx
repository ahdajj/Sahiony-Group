import type { Company } from '../lib/site-data';
import { LogoMark } from './logo-mark';
import { SectionTitle } from './section-title';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export function CompanyDetailPage({ company }: { company: Company }) {
  const Icon = company.icon;

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="container section">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <SectionTitle eyebrow={company.country} title={company.name} description={company.description} />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <LogoMark src={company.logo} alt={company.name} large />
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: 40 }}>
            {company.bullets.map((item) => (
              <article key={item} className="card soft">
                <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--muted)' }}>
                  <div className="small-icon">
                    <Icon size={20} color="#d8a11a" />
                  </div>
                  <span>{item}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="card" style={{ marginTop: 32 }}>
            <div className="card-body">
              <div className="kicker">Planned pages</div>
              <div className="pill-row" style={{ marginTop: 14 }}>
                {company.pages.map((page) => (
                  <span key={page} className="pill gold">{page}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
