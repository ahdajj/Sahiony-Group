import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCard } from '../../components/project-card';
import { SiteHeader } from '../../components/site-header';
import { SiteFooter } from '../../components/site-footer';
import { getLocalizedSiteData, resolveLanguage, withLang, type SearchParams } from '../../lib/i18n';

export const metadata: Metadata = {
  title: 'Projects | Sahiony Group',
  description: 'Explore engineering and contracting projects by HTA in Qatar and SEC in Syria.',
};

type ProjectParams = SearchParams & { company?: string | string[] };
const first = (value?: string | string[]) => Array.isArray(value) ? value[0] : value;

export default async function ProjectsPage({ searchParams }: { searchParams?: Promise<ProjectParams> }) {
  const params = await searchParams;
  const lang = resolveLanguage(params);
  const ar = lang === 'ar';
  const { featuredProjects } = getLocalizedSiteData(lang);
  const rawCompany = first(params?.company);
  const company = rawCompany === 'hta' || rawCompany === 'sec' ? rawCompany : 'all';
  const allProjects = [...featuredProjects.hta, ...featuredProjects.sec];
  const projects = company === 'all' ? allProjects : featuredProjects[company];
  const filterHref = (selected: string) => {
    const next = new URLSearchParams();
    if (lang === 'ar') next.set('lang', lang);
    if (selected !== 'all') next.set('company', selected);
    return `/projects${next.size ? `?${next}` : ''}`;
  };
  const filters = [
    { id: 'all', label: ar ? 'جميع المشاريع' : 'All projects', count: allProjects.length },
    { id: 'hta', label: 'HTA', count: featuredProjects.hta.length },
    { id: 'sec', label: 'SEC', count: featuredProjects.sec.length },
  ];

  return (
    <div className="page-shell home-page projects-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <section className="portfolio-hero" aria-labelledby="portfolio-title">
          <div className="container portfolio-hero-inner">
            <div className="portfolio-hero-copy">
              <nav className="portfolio-breadcrumb" aria-label={ar ? 'مسار الصفحة' : 'Breadcrumb'}><Link href={withLang('/', lang)}>{ar ? 'الرئيسية' : 'Home'}</Link><span aria-hidden="true">/</span><span>{ar ? 'المشاريع' : 'Projects'}</span></nav>
              <span className="kicker">{ar ? 'أعمال مجموعة صهيوني' : 'THE SAHIONY PORTFOLIO'}</span>
              <h1 id="portfolio-title">{ar ? 'خبراتنا على أرض الواقع.' : 'Expertise, built into reality.'}</h1>
              <p>{ar ? 'استكشف مشاريعنا في قطر وسوريا، من الأنظمة الهندسية إلى أعمال البناء والتأهيل.' : 'Explore our work across Qatar and Syria. From engineering systems to construction and renovation.'}</p>
              <div className="portfolio-hero-facts"><span>{allProjects.length} {ar ? 'مشروعاً في محفظتنا' : 'projects in our portfolio'}</span><span>{ar ? 'شركتان · رؤية مشتركة' : 'Two companies · One shared vision'}</span></div>
            </div>
            <div className="portfolio-visual-grid" aria-label={ar ? 'صور مختارة من مشاريعنا' : 'Selected project photography'}>
              <figure className="portfolio-visual-featured"><Image src={featuredProjects.hta[0].img[0]} alt={featuredProjects.hta[0].title} fill priority sizes="(max-width: 940px) 100vw, 36vw" /><figcaption>HTA · {ar ? 'قطر' : 'Qatar'}</figcaption></figure>
              <figure><Image src={featuredProjects.hta[4].img[1] ?? featuredProjects.hta[4].img[0]} alt={featuredProjects.hta[4].title} fill priority sizes="(max-width: 940px) 50vw, 20vw" /><figcaption>MEP · {ar ? 'تنفيذ' : 'Delivery'}</figcaption></figure>
              <figure><Image src={featuredProjects.sec[1].img[0]} alt={featuredProjects.sec[1].title} fill priority sizes="(max-width: 940px) 50vw, 20vw" /><figcaption>SEC · {ar ? 'سوريا' : 'Syria'}</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="container portfolio-content" aria-labelledby="portfolio-results-title">
          <div className="portfolio-filter-panel">
            <nav className="portfolio-tabs" aria-label={ar ? 'تصفية حسب الشركة' : 'Filter by company'}>
              {filters.map(filter => <Link href={filterHref(filter.id)} key={filter.id} scroll={false} className={company === filter.id ? 'is-selected' : ''} aria-current={company === filter.id ? 'true' : undefined}>{filter.label}<span>{filter.count}</span></Link>)}
            </nav>
          </div>
          <div className="portfolio-results-heading"><h2 id="portfolio-results-title">{ar ? 'المشاريع' : 'The projects'} <span>({projects.length})</span></h2></div>
          <div className="grid-3 portfolio-grid">{projects.map(project => <ProjectCard key={project.slug} {...project} lang={lang} />)}</div>
        </section>
        <section className="container home-contact"><div><span className="kicker">{ar ? 'لنعمل معاً' : 'YOUR PROJECT, NEXT'}</span><h2>{ar ? 'لنتحدث عن مشروعك.' : 'Let’s build what comes next.'}</h2><p>{ar ? 'تواصل مع فريقنا لمناقشة متطلبات مشروعك.' : 'Talk to our team about your project and the expertise you need.'}</p></div><Link className="btn btn-primary" href={withLang('/contact', lang)}>{ar ? 'تواصل معنا' : 'Start a conversation'}<ArrowUpRight size={18} /></Link></section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
