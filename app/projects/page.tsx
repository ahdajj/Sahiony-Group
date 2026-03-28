import { ProjectCard } from '../../components/project-card';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { featuredProjects } from '../../lib/site-data';

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="container section">
          <SectionTitle eyebrow="Projects" title="Group Projects" description="A combined project hub for both companies." />
          <div className="spacer-32" />
          <div className="grid-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} category={project.category} summary={project.summary} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
