import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { type Language, uiText, withLang } from '../lib/i18n';
import { featuredProjects } from '../lib/site-data';

export function ProjectCard({ title, category, summary, lang, slug }: {
  title: string; category: string; summary: string; lang: Language; slug: string;
}) {
  const project = [...featuredProjects.hta, ...featuredProjects.sec].find(item => item.slug === slug);
  const cover = project?.img?.[0];
  return (
    <article className="card soft">
      {cover && <Image className="project-cover" src={cover} alt={title} width={640} height={440} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />}
      <div className="card-body">
        <div className="project-category">{category}</div>
        <h3 className="project-title" style={{ marginTop: 12 }}>{title}</h3>
        <p className="project-summary">{summary}</p>
        <Link className="project-card-link" href={withLang(`/projects/${slug}`, lang)}>{uiText[lang].sections.openCaseStudy}<ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
