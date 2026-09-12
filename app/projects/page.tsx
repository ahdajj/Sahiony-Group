import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Search, SlidersHorizontal, FolderSearch } from 'lucide-react';
import { ProjectCard } from '../../components/project-card';
import { SiteHeader } from '../../components/site-header';
import { SiteFooter } from '../../components/site-footer';
import { getLocalizedSiteData, resolveLanguage, withLang, type SearchParams } from '../../lib/i18n';

export const metadata: Metadata = {
  title: 'Projects | Sahiony Group',
  description: 'Explore engineering and contracting projects by HTA in Qatar and SEC in Syria.',
};

type ProjectParams = SearchParams & { company?: string | string[]; q?: string | string[]; sort?: string | string[] };
const first = (value?: string | string[]) => Array.isArray(value) ? value[0] : value;

export default async function ProjectsPage({ searchParams }: { searchParams?: Promise<ProjectParams> }) {
  const params = await searchParams;
  const lang = resolveLanguage(params);
  const ar = lang === 'ar';
  const { featuredProjects } = getLocalizedSiteData(lang);
  const rawCompany = first(params?.company);
  const company = rawCompany === 'hta' || rawCompany === 'sec' ? rawCompany : 'all';
  const query = (first(params?.q) ?? '').trim().slice(0, 200);
  const sort = first(params?.sort) === 'name' ? 'name' : 'featured';
  const allProjects = [...featuredProjects.hta, ...featuredProjects.sec];
  const source = company === 'all' ? allProjects : featuredProjects[company];
  const normalize = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, '').toLocaleLowerCase(lang);
  const projects = source.filter(project => normalize(`${project.title} ${project.category} ${project.summary} ${project.slug}`).includes(normalize(query)));
  if (sort === 'name') projects.sort((a, b) => a.title.localeCompare(b.title, lang));
  const filterHref = (selected: string) => {
    const next = new URLSearchParams();
    if (lang === 'ar') next.set('lang', lang);
    if (selected !== 'all') next.set('company', selected);
    if (query) next.set('q', query);
    if (sort !== 'featured') next.set('sort', sort);
    return `/projects${next.size ? `?${next}` : ''}`;
  };
  const filters = [
    { id: 'all', label: ar ? 'جميع المشاريع' : 'All projects', count: allProjects.length },
    { id: 'hta', label: ar ? 'HTA · قطر' : 'HTA · Qatar', count: featuredProjects.hta.length },
    { id: 'sec', label: ar ? 'SEC · سوريا' : 'SEC · Syria', count: featuredProjects.sec.length },
  ];
  const filtered = company !== 'all' || !!query || sort !== 'featured';

  return (
    <div className="page-shell home-page projects-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <section className="portfolio-hero" aria-labelledby="portfolio-title">
          <Image src={featuredProjects.hta[0].img[0]} alt="" fill priority sizes="100vw" className="portfolio-hero-image" />
          <div className="container portfolio-hero-inner">
            <nav className="portfolio-breadcrumb" aria-label={ar ? 'مسار الصفحة' : 'Breadcrumb'}><Link href={withLang('/', lang)}>{ar ? 'الرئيسية' : 'Home'}</Link><span aria-hidden="true">/</span><span>{ar ? 'المشاريع' : 'Projects'}</span></nav>
            <span className="kicker">{ar ? 'أعمال مجموعة صهيوني' : 'THE SAHIONY PORTFOLIO'}</span>
            <h1 id="portfolio-title">{ar ? 'خبراتنا على أرض الواقع.' : 'Expertise, built into reality.'}</h1>
            <p>{ar ? 'استكشف مشاريعنا في قطر وسوريا، من الأنظمة الهندسية إلى أعمال البناء والتأهيل.' : 'Explore our work across Qatar and Syria. From engineering systems to construction and renovation.'}</p>
            <div className="portfolio-hero-facts"><span>{allProjects.length} {ar ? 'مشروعاً في محفظتنا' : 'projects in our portfolio'}</span><span>{ar ? 'شركتان · رؤية مشتركة' : 'Two companies · One shared vision'}</span></div>
          </div>
        </section>

        <section className="container portfolio-content" aria-labelledby="portfolio-results-title">
          <div className="portfolio-filter-panel">
            <div className="portfolio-filter-heading"><SlidersHorizontal size={18} aria-hidden="true" /><h2>{ar ? 'اكتشف مشاريعنا' : 'Find your inspiration'}</h2></div>
            <nav className="portfolio-tabs" aria-label={ar ? 'تصفية حسب الشركة' : 'Filter by company'}>
              {filters.map(filter => <Link href={filterHref(filter.id)} key={filter.id} scroll={false} className={company === filter.id ? 'is-selected' : ''} aria-current={company === filter.id ? 'true' : undefined}>{filter.label}<span>{filter.count}</span></Link>)}
            </nav>
            <form action="/projects" method="get" className="portfolio-search" role="search">
              {ar && <input type="hidden" name="lang" value="ar" />}
              {company !== 'all' && <input type="hidden" name="company" value={company} />}
              <div className="portfolio-search-field"><label htmlFor="project-query">{ar ? 'ابحث عن مشروع' : 'Search projects'}</label><div><Search size={18} aria-hidden="true" /><input id="project-query" name="q" key={query} defaultValue={query} maxLength={200} placeholder={ar ? 'اسم المشروع أو نوع الأعمال...' : 'Project name, location or scope…'} type="search" /></div></div>
              <div className="portfolio-sort"><label htmlFor="project-sort">{ar ? 'ترتيب حسب' : 'Sort by'}</label><select name="sort" id="project-sort" defaultValue={sort} key={sort}><option value="featured">{ar ? 'الترتيب المختار' : 'Featured order'}</option><option value="name">{ar ? 'اسم المشروع' : 'Project name'}</option></select></div>
              <button className="btn btn-primary" type="submit">{ar ? 'عرض النتائج' : 'Show results'}<ArrowUpRight size={16} aria-hidden="true" /></button>
            </form>
          </div>
          <div className="portfolio-results-heading"><h2 id="portfolio-results-title">{ar ? 'المشاريع' : 'The projects'} <span>({projects.length})</span></h2><div>{query && <span className="portfolio-query">{ar ? 'نتائج البحث عن' : 'Results for'} “{query}”</span>}{filtered && <Link className="text-link" href={withLang('/projects', lang)} scroll={false}>{ar ? 'مسح الفلاتر' : 'Clear filters'}</Link>}</div></div>
          {projects.length ? <div className="grid-3 portfolio-grid">{projects.map(project => <ProjectCard key={project.slug} {...project} lang={lang} />)}</div> : <div className="portfolio-empty"><FolderSearch size={42} strokeWidth={1.3} aria-hidden="true" /><h3>{ar ? 'لا توجد مشاريع مطابقة' : 'No matching projects'}</h3><p>{ar ? 'جرّب كلمة بحث أخرى أو اعرض جميع المشاريع.' : 'Try another search term or browse the complete portfolio.'}</p><Link className="btn btn-primary" href={withLang('/projects', lang)}>{ar ? 'عرض جميع المشاريع' : 'View all projects'}</Link></div>}
        </section>
        <section className="container home-contact"><div><span className="kicker">{ar ? 'لنعمل معاً' : 'YOUR PROJECT, NEXT'}</span><h2>{ar ? 'لنتحدث عن مشروعك.' : 'Let’s build what comes next.'}</h2><p>{ar ? 'تواصل مع فريقنا لمناقشة متطلبات مشروعك.' : 'Talk to our team about your project and the expertise you need.'}</p></div><Link className="btn btn-primary" href={withLang('/contact', lang)}>{ar ? 'تواصل معنا' : 'Start a conversation'}<ArrowUpRight size={18} /></Link></section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
