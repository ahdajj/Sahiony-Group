import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaPanel } from '../../../components/cta-panel';
import { PageHero } from '../../../components/page-hero';
import { ProjectCard } from '../../../components/project-card';
import { SectionTitle } from '../../../components/section-title';
import { SiteFooter } from '../../../components/site-footer';
import { SiteHeader } from '../../../components/site-header';
import { featuredProjects as projectsEn } from '../../../lib/site-data';
import { getLocalizedSiteData, resolveLanguage, withLang, type SearchParams } from '../../../lib/i18n';
import Image from 'next/image';

export function generateStaticParams() {
  return [...projectsEn.hta, ...projectsEn.sec].map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailPage({ searchParams, params }: { searchParams?: Promise<SearchParams>; params: Promise<{ slug: string }> }) {
  const lang = resolveLanguage(await searchParams);
  const ar = lang === 'ar';
  const { slug } = await params;
  const { featuredProjects } = getLocalizedSiteData(lang);
  const allProjects = [...featuredProjects.hta, ...featuredProjects.sec];
  const project = allProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  const companyId = project.category.toLowerCase().includes('hta') ? 'hta' : 'sec';
  const related = featuredProjects[companyId].filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <div className="page-shell home-page project-case-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <PageHero
          eyebrow={project.category}
          title={project.title}
          description={project.summary}
          backgroundImage={project.img[0]}
          actions={[
            { href: withLang(`/projects?company=${companyId}`, lang), label: ar ? 'العودة إلى المشاريع' : 'Back to projects', secondary: true },
            { href: withLang('/contact', lang), label: ar ? 'ناقش مشروعاً مماثلاً' : 'Discuss a similar project' },
          ]}
          facts={[
            { value: companyId.toUpperCase(), label: ar ? 'شركة التنفيذ' : 'Operating company' },
            { value: companyId === 'hta' ? (ar ? 'قطر' : 'Qatar') : (ar ? 'سوريا' : 'Syria'), label: ar ? 'السوق' : 'Market' },
            { value: String(project.img.length).padStart(2, '0'), label: ar ? 'صور المشروع' : 'Project images' },
          ]}
        />

        <section className="container project-case-overview section">
          <SectionTitle eyebrow={ar ? 'نطاق المشروع' : 'PROJECT SCOPE'} title={ar ? 'الخبرة المطبقة على أرض الواقع.' : 'Expertise applied in the field.'} description={project.summary} />
          <div className="project-case-meta"><div><span>{ar ? 'الشركة' : 'Company'}</span><strong>{companyId === 'hta' ? 'HTA Construction & Trading' : 'SEC Engineering & Contracting'}</strong></div><div><span>{ar ? 'الموقع' : 'Location'}</span><strong>{companyId === 'hta' ? (ar ? 'قطر' : 'Qatar') : (ar ? 'سوريا' : 'Syria')}</strong></div><Link className="text-link" href={withLang(`/companies/${companyId}`, lang)}>{ar ? 'عرض ملف الشركة' : 'View company profile'} <ArrowUpRight size={16} /></Link></div>
        </section>

        <section className="section section-alt project-case-gallery">
          <div className="container">
            <SectionTitle eyebrow={ar ? 'معرض المشروع' : 'PROJECT GALLERY'} title={ar ? 'تفاصيل التنفيذ.' : 'A closer look at the work.'} />
            <div className="project-case-grid">{project.img.map((image, index) => <figure className={index === 0 ? 'is-featured' : ''} key={`${image}-${index}`}><Image src={image} alt={`${project.title} — ${ar ? 'صورة' : 'image'} ${index + 1}`} fill sizes={index === 0 ? '100vw' : '(max-width: 760px) 100vw, 50vw'} /></figure>)}</div>
          </div>
        </section>

        {related.length > 0 && <section className="container project-related section"><div className="home-section-heading"><SectionTitle eyebrow={ar ? 'المزيد من أعمالنا' : 'RELATED WORK'} title={ar ? 'مشاريع أخرى من نفس الفريق.' : 'More projects from the same team.'} /><Link className="text-link" href={withLang(`/projects?company=${companyId}`, lang)}>{ar ? 'عرض الكل' : 'View all'} <ArrowUpRight size={16} /></Link></div><div className="grid-3 profile-project-grid">{related.map((item) => <ProjectCard {...item} lang={lang} key={item.slug} />)}</div></section>}

        <CtaPanel eyebrow={ar ? 'مشروعك القادم' : 'YOUR PROJECT, NEXT'} title={ar ? 'هل تبحث عن خبرة مماثلة؟' : 'Looking for similar expertise?'} description={ar ? 'شاركنا نطاق العمل وسيتواصل معك الفريق المناسب.' : 'Share the scope with us and the right team will follow up.'} href={withLang('/contact', lang)} action={ar ? 'تواصل معنا' : 'Start a conversation'} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
