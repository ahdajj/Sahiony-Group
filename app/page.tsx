import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CompanyCard } from '../components/company-card';
import { Heroarea } from '../components/Hero-area';
import { LogoMark } from '../components/logo-mark';
import { ProjectCard } from '../components/project-card';
import { SectionTitle } from '../components/section-title';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { getLocalizedSiteData, resolveLanguage, withLang, type SearchParams } from '../lib/i18n';
import { Partners } from '../lib/site-data';

export default async function HomePage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const ar = lang === 'ar';
  const { companies, featuredProjects, services, stats } = getLocalizedSiteData(lang);
  return (
    <div className="page-shell home-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main id="main-content">
        <Heroarea lang={lang} />
        <nav className="container home-gateways" id="services" aria-label={ar ? 'خدماتنا' : 'Our services'}>
          {services.map(({ icon: Icon, title, description }) => (
            <Link className="home-gateway" href={withLang('/services', lang)} key={title}>
              <span className="gateway-icon"><Icon size={30} strokeWidth={1.4} aria-hidden="true" /></span>
              <h2>{title}</h2>
              <p>{description}</p>
              <span className="gateway-action">{ar ? 'اكتشف المزيد' : 'Learn more'}<ArrowUpRight size={17} aria-hidden="true" /></span>
            </Link>
          ))}
        </nav>

        <section className="container section home-intro" id="container-hero">
          <div>
            <span className="kicker">{ar ? 'مجموعة صهيوني' : 'THE SAHIONY GROUP'}</span>
            <h2>{ar ? 'خبرات متكاملة.\nرؤية مشتركة.' : 'Distinct expertise.\nShared ambition.'}</h2>
          </div>
          <div>
            <p className="lead">{ar ? 'نجمع خبرات HTA في قطر وSEC في سوريا لتقديم خدمات المقاولات والأنظمة الهندسية، من التنفيذ والاختبار والتشغيل إلى الصيانة.' : 'Bringing together HTA in Qatar and SEC in Syria to deliver contracting and engineering systems — from installation and commissioning to ongoing maintenance.'}</p>
            <Link className="text-link" href={withLang('/about', lang)}>{ar ? 'المزيد عن المجموعة' : 'Discover our story'}<ArrowUpRight size={18} /></Link>
          </div>
          <div className="home-stats">{stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        </section>

        <section className="section section-alt" id="companies">
          <div className="container">
            <SectionTitle eyebrow={ar ? 'شركات المجموعة' : 'OUR COMPANIES'} title={ar ? 'حضور محلي. خبرات متكاملة.' : 'Two markets. One commitment.'} description={ar ? 'اختر الشركة لاستكشاف خبراتها ومشاريعها.' : 'Discover the people, capabilities and projects behind each company.'} />
            <div className="spacer-32" />
            <div className="grid-2">{companies.map(company => <CompanyCard key={company.id} company={company} lang={lang} />)}</div>
          </div>
        </section>



        <section className="section section-alt" id="projects">
          <div className="container">
            <SectionTitle eyebrow={ar ? 'مشاريع مختارة' : 'SELECTED PROJECTS'} title={ar ? 'خبرات على أرض الواقع.' : 'Our expertise. In action.'} description={ar ? 'نماذج من أعمالنا في قطر وسوريا.' : 'A selection of our work across Qatar and Syria.'} />
            {(['hta', 'sec'] as const).map(id => <div key={id} className="home-project-group">
              <div className="home-section-heading"><h3>{id === 'hta' ? (ar ? 'HTA · قطر' : 'HTA · Qatar') : (ar ? 'SEC · سوريا' : 'SEC · Syria')}</h3><Link className="text-link" href={withLang(`/projects?company=${id}`, lang)}>{ar ? 'استكشف المشاريع' : 'Explore projects'}<ArrowUpRight size={18} /></Link></div>
              <div className="grid-3">{featuredProjects[id].slice(0, 3).map(project => <ProjectCard key={project.slug} {...project} lang={lang} />)}</div>
            </div>)}
          </div>
        </section>

        <section className="section partner-strip" aria-label={ar ? 'العلامات التجارية' : 'Partner brands'}>
          <div className="container">
            <div className="partner-header"><span className="kicker">{ar ? 'العلامات التجارية' : 'OUR SUPPLY NETWORK'}</span><h2>{ar ? 'علامات تجارية تدعم أعمالنا.' : 'Established brands. Integrated solutions.'}</h2></div>
            <div className="partner-logo-grid">{Partners.map((src, index) => <div className="partner-logo-card" key={src}><LogoMark src={`/${src}`} alt={ar ? `علامة تجارية ${index + 1}` : `Partner brand ${index + 1}`} /></div>)}</div>
          </div>
        </section>

        <section className="container home-contact" id="contact">
          <div><span className="kicker">{ar ? 'لنعمل معاً' : 'LET’S BUILD TOGETHER'}</span><h2>{ar ? 'مشروعك القادم\nيبدأ بمحادثة.' : 'Your next project\nstarts with a conversation.'}</h2><p>{ar ? 'تواصل مع فريقنا في قطر أو سوريا لمناقشة متطلباتك.' : 'Connect with our team in Qatar or Syria to discuss what you need.'}</p></div>
          <Link className="btn btn-primary" href={withLang('/contact', lang)}>{ar ? 'ناقش مشروعك معنا' : 'Discuss your project'}<ArrowUpRight size={19} /></Link>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
