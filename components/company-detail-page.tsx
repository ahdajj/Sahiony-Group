import Image from 'next/image';
import { Building2, Check, ClipboardCheck, Gauge, Route, ShieldCheck, Wrench } from 'lucide-react';
import type { Company } from '../lib/site-data';
import { getLocalizedSiteData, type Language, withLang } from '../lib/i18n';
import { CtaPanel } from './cta-panel';
import { PageHero } from './page-hero';
import { ProjectCard } from './project-card';
import { SectionTitle } from './section-title';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

const capabilityIcons = [Building2, ShieldCheck, Wrench, ClipboardCheck] as const;
const deliveryIcons = [Route, Building2, Gauge, ShieldCheck] as const;

export function CompanyDetailPage({ company, lang }: { company: Company; lang: Language }) {
  const ar = lang === 'ar';
  const { featuredProjects } = getLocalizedSiteData(lang);
  const companyProjects = featuredProjects[company.id === 'hta' ? 'hta' : 'sec'];
  const profile = company.profile;
  const projectHref = withLang(`/projects?company=${company.id}`, lang);
  const heroDescription = profile?.heroDescription ?? (company.id === 'hta'
    ? (ar ? 'حلول متكاملة للأنظمة الكهروميكانيكية والحماية من الحريق في قطر.' : 'Integrated MEP and fire protection delivery across Qatar.')
    : (ar ? 'خبرة في المقاولات العامة وتأهيل المباني والأنظمة الهندسية في سوريا.' : 'General contracting, building renovation and engineering systems across Syria.'));

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

        {profile && (
          <>
            <section className="container section hta-platform">
              <div className="hta-section-heading">
                <SectionTitle eyebrow={profile.eyebrow} title={profile.title} />
                <p>{profile.introduction}</p>
              </div>
              <div className="hta-platform-grid">
                {profile.deliveryPillars.map((pillar, index) => {
                  const Icon = deliveryIcons[index] ?? Building2;
                  return (
                    <article className="hta-platform-card" key={pillar.title}>
                      <span className="hta-platform-icon"><Icon size={27} strokeWidth={1.45} aria-hidden="true" /></span>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.description}</p>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="section section-alt hta-delivery-section">
              <div className="container">
                <SectionTitle
                  eyebrow={ar ? 'منهجية التنفيذ' : 'EXECUTION METHODOLOGY'}
                  title={ar ? 'تخطيط قبل التنفيذ. ضبط حتى التسليم.' : 'Planned before site. Controlled through handover.'}
                  description={ar ? 'مسار عمل واضح يربط القرار الهندسي بالتنفيذ والإغلاق المنظم.' : 'A clear delivery path connecting engineering decisions with field execution and organized closeout.'}
                />
                <div className="hta-delivery-layout">
                  <ol className="hta-methodology">
                    {profile.methodology.map((step, index) => (
                      <li key={step.title}>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <div><h3>{step.title}</h3><p>{step.description}</p></div>
                      </li>
                    ))}
                  </ol>

                  <aside className="hta-readiness">
                    <div className="hta-readiness-copy">
                      <span className="kicker">{ar ? 'الجاهزية التشغيلية' : 'OPERATIONAL READINESS'}</span>
                      <h3>{ar ? 'الموارد والرقابة التي تدعم التنفيذ.' : 'The resources and controls behind delivery.'}</h3>
                      <ul>{profile.readiness.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
                    </div>
                    <div className="hta-proof-gallery">
                      {profile.gallery.map((item, index) => (
                        <figure className={index === 0 ? 'hta-proof-featured' : undefined} key={item.src}>
                          <Image src={item.src} alt={item.alt} fill sizes={index === 0 ? '(max-width: 820px) 100vw, 34vw' : '(max-width: 820px) 50vw, 17vw'} />
                          <figcaption>{item.label}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </section>

            <section className="section hta-assurance-section">
              <div className="container">
                <SectionTitle
                  eyebrow={ar ? 'ضبط المشروع' : 'PROJECT GOVERNANCE'}
                  title={ar ? 'وضوح تنفيذي في كل مرحلة.' : 'Executive clarity at every stage.'}
                  description={ar ? 'ضوابط عملية تمنح العميل رؤية واضحة للمسؤوليات والمخاطر والتقدم والتسليم.' : 'Practical controls give clients a clear view of responsibility, risk, progress and handover.'}
                />
                <div className="hta-governance-grid">
                  {profile.governance.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
                </div>
                <div className="hta-experience">
                  <div className="hta-experience-heading">
                    <span className="kicker">{ar ? 'خبرات مختارة' : 'SELECTED EXPERIENCE'}</span>
                    <h3>{ar ? 'نطاق متنوع. منظومة تنفيذ واحدة.' : 'Diverse scopes. One delivery standard.'}</h3>
                  </div>
                  <div className="hta-experience-grid">
                    {profile.experience.map((item) => <article key={item.title}><span>{item.scope}</span><h4>{item.title}</h4></article>)}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

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
