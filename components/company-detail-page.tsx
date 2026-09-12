import { Building2, ClipboardCheck, ShieldCheck, Wrench } from 'lucide-react';
import type { Company } from '../lib/site-data';
import { getLocalizedSiteData, type Language, withLang } from '../lib/i18n';
import { CtaPanel } from './cta-panel';
import { PageHero } from './page-hero';
import { ProjectCard } from './project-card';
import { SectionTitle } from './section-title';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

const capabilityIcons = [Building2, ShieldCheck, Wrench, ClipboardCheck] as const;

export function CompanyDetailPage({ company, lang }: { company: Company; lang: Language }) {
  const ar = lang === 'ar';
  const { featuredProjects } = getLocalizedSiteData(lang);
  const companyProjects = featuredProjects[company.id === 'hta' ? 'hta' : 'sec'];
  const projectHref = withLang(`/projects?company=${company.id}`, lang);
  const heroDescription = company.id === 'hta'
    ? (ar ? 'حلول متكاملة للأنظمة الكهروميكانيكية والحماية من الحريق في قطر.' : 'Integrated MEP and fire protection delivery across Qatar.')
    : (ar ? 'خبرة في المقاولات العامة وتأهيل المباني والأنظمة الهندسية في سوريا.' : 'General contracting, building renovation and engineering systems across Syria.');

  return (
    <div className="page-shell home-page company-profile" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <PageHero
          eyebrow={`${company.country} · ${ar ? 'مجموعة صهيوني' : 'Sahiony Group'}`}
          title={company.name}
          description={heroDescription}
          backgroundImage={companyProjects[0].img[0]}
          logo={company.logo}
          logoAlt={company.name}
          actions={[
            { href: projectHref, label: ar ? 'استكشف مشاريعنا' : 'Explore our projects' },
            { href: withLang('/contact', lang), label: ar ? 'تواصل معنا' : 'Contact our team', secondary: true },
          ]}
          facts={[
            { value: company.country, label: ar ? 'سوق العمل' : 'Operating market' },
            { value: String(companyProjects.length).padStart(2, '0'), label: ar ? 'مشاريع في المحفظة' : 'Portfolio projects' },
            { value: '04', label: ar ? 'مجالات خبرة رئيسية' : 'Core capabilities' },
          ]}
        />

        <section className="container profile-overview section">
          <div className="profile-overview-heading">
            <SectionTitle
              eyebrow={ar ? 'نبذة عن الشركة' : 'COMPANY OVERVIEW'}
              title={ar ? 'خبرة محلية بدعم من مجموعة متكاملة.' : 'Local expertise. Group-wide capability.'}
            />
            <p>{company.description}</p>
          </div>
          <div className="profile-capabilities">
            {company.bullets.map((item, index) => {
              const Icon = capabilityIcons[index] ?? Building2;
              return <article className="profile-capability" key={item}><span><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span><h3>{item}</h3></article>;
            })}
          </div>
        </section>

        <section className="section section-alt profile-projects">
          <div className="container">
            <div className="home-section-heading">
              <SectionTitle
                eyebrow={ar ? 'مشاريع مختارة' : 'SELECTED PROJECTS'}
                title={ar ? 'خبرتنا على أرض الواقع.' : 'Our expertise, in action.'}
                description={ar ? 'نماذج مختارة من أعمال الشركة.' : `A selection of ${company.name} projects.`}
              />
              <a className="text-link" href={projectHref}>{ar ? 'عرض جميع المشاريع' : 'View all projects'}</a>
            </div>
            <div className="grid-3 profile-project-grid">
              {companyProjects.slice(0, 3).map((project) => <ProjectCard key={project.slug} {...project} lang={lang} />)}
            </div>
          </div>
        </section>

        <CtaPanel
          eyebrow={ar ? 'ابدأ مشروعك' : 'START A CONVERSATION'}
          title={ar ? 'لنتحدث عن متطلبات مشروعك.' : 'Let’s discuss what your project needs.'}
          description={ar ? `تواصل مع فريق ${company.name} لمناقشة نطاق العمل والخطوة التالية.` : `Connect with the ${company.name} team to discuss scope, requirements and next steps.`}
          href={withLang('/contact', lang)}
          action={ar ? 'تواصل معنا' : 'Contact our team'}
        />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
