import { ProjectCard } from '../../components/project-card';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { getLocalizedSiteData, resolveLanguage, uiText, type SearchParams } from '../../lib/i18n';

export default async function ProjectsPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const text = uiText[lang];
  const { featuredProjects } = getLocalizedSiteData(lang);

  return (
    <div className="page-shell" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <section className="container section">
          <SectionTitle eyebrow={text.projectsPage.eyebrow} title={text.projectsPage.title} description={text.projectsPage.description} />
          <div className="spacer-32" />
          <div className="grid-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} category={project.category} summary={project.summary} lang={lang} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
