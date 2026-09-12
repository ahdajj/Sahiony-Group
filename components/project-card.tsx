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
    <article className="project-editorial-card">
      <Link className="project-editorial-link" href={withLang(`/projects/${slug}`, lang)} aria-label={`${uiText[lang].sections.openCaseStudy}: ${title}`}>
        <div className="project-editorial-media">
          {cover && <Image className="project-cover" src={cover} alt={title} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />}
          <span className="project-editorial-badge">{category}</span>
          <span className="editorial-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </div>
        <div className="project-editorial-body">
          <h3 className="project-title">{title}</h3>
          <div className="project-editorial-scope">
            <span>{lang === 'ar' ? 'نطاق العمل' : 'Scope'}</span>
            <p className="project-summary">{summary}</p>
          </div>
          <span className="project-editorial-action">{uiText[lang].sections.openCaseStudy}<ArrowUpRight size={16} aria-hidden="true" /></span>
        </div>
      </Link>
    </article>
  );
}
