import { ChevronRight } from 'lucide-react';
import { LogoMark } from './logo-mark';
import { type Language, uiText } from '../lib/i18n';

export function ProjectCard({
  title,
  category,
  summary,
  lang,
}: {
  title: string;
  category: string;
  summary: string;
  lang: Language;
}) {
  const text = uiText[lang];

  return (
    <article className="card soft">
      <div className="project-hero">
        <div className="project-logo">
          <LogoMark src="/SEC LOGO SAHIONY.jpg" alt="Sahiony Group" />
        </div>
        <div className="project-hero-inner">
          <div>
            <span className="badge">{text.sections.caseStudyReady}</span>
            <h3 className="project-title" style={{ marginTop: 16 }}>{title}</h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="project-category">{category}</div>
        <p className="project-summary">{summary}</p>
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
          {text.sections.openCaseStudy} <ChevronRight size={16} />
        </div>
      </div>
    </article>
  );
}
