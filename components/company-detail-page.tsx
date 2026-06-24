import type { Company } from '../lib/site-data';
import { LogoMark } from './logo-mark';
import { SectionTitle } from './section-title';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';
import { ProjectCard } from './project-card';
import { type Language, uiText } from '../lib/i18n';
import { getLocalizedSiteData} from '../lib/i18n'

export function CompanyDetailPage({ company, lang }: { company: Company; lang: Language }) {
  const Icon = company.icon;
  const text = uiText[lang];
  const { featuredProjects } = getLocalizedSiteData(lang);
  let companyfeaturedProjects =[]

  if (company.id === 'hta'){
     companyfeaturedProjects = featuredProjects.filter((item)=>item.category.includes('HTA'))
  }
  else {
     companyfeaturedProjects = featuredProjects.filter((item)=>item.category.includes('SEC'))
  }

  return (
    <div className="page-shell" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
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
        </section>
        <section className="container section">
          <SectionTitle eyebrow={text.projectsPage.eyebrow} title={text.projectsPage.title} description={text.projectsPage.description} />
          <div className="spacer-32" />
          <div className="grid-3">
            {companyfeaturedProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} category={project.category} summary={project.summary} lang={lang} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
