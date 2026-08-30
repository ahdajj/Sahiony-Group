import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building,
  FileText,
  HardHat,
  Layers3,
  Mail,
  MapPin,
  MoveLeft,
  MoveRight,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { CompanyCard } from '../components/company-card';
import { LogoMark } from '../components/logo-mark';
import { ProjectCard } from '../components/project-card';
import { SectionTitle } from '../components/section-title';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import {Heroarea} from '../components/Hero-area'
import { getLocalizedSiteData, resolveLanguage, uiText, withLang, type SearchParams } from '../lib/i18n';
import { Partners } from '../lib/site-data';
import Link from "next/link";

export default async function HomePage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const text = uiText[lang];
  const {
    brands,
    companies,
    featuredProjects,
    groupHighlights,
    services,
    siteMap,
    stats,
    systems,
    valueProps,
  } = getLocalizedSiteData(lang);
  // const allFeaturedProjects = [...featuredProjects.hta, ...featuredProjects.sec];

  return (
    <div className="page-shell" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <Heroarea lang={lang}/>
      <main>
        <section className="container hero" id='container-hero'>
          <div style={{ display: 'grid', gap: 24 }}>
            <span className="badge">{text.hero.badge}</span>
            <h1>{text.hero.title}</h1>
            <p className="lead">
              {text.hero.description}
            </p>
            <div className="actions">
              <a href="#companies" className="btn btn-primary">
                {text.hero.explore} <ArrowRight size={16} />
              </a>
              <a href={withLang('/projects', lang)} className="btn btn-secondary">{text.hero.viewProjects}</a>
            </div>
            <div className="grid-4">
              {stats.map((stat) => (
                <article key={stat.label} className="card">
                  <div className="card-body">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <article className="card">
            <div className="hero-visual-header">
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <div className="kicker">{text.hero.identity}</div>
                  <h3 style={{ fontSize: 34, marginTop: 10 }}>{text.hero.identityTitle}</h3>
                </div>
                <div className="logo-stack">
                  <LogoMark src="/sec-logo-sahiony.jpg" alt="SEC Engineering and Contracting" large />
                  <LogoMark src="/hta-logo.jpg" alt="HTA Construction and Trading" large />
                </div>
              </div>

              <div className="chip-grid">
                {text.hero.chips.map((item) => (
                  <div key={item} className="chip">{item}</div>
                ))}
              </div>
            </div>

            <div className="card-body feature-list">
              {groupHighlights.map((item) => (
                <div key={item} className="feature-item">
                  <BadgeCheck className="icon-dot" />
                  <p className="subtle" style={{ lineHeight: 1.8 }}>{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="section section-alt" id="group">
          <div className="container grid-2">
            <div className="section-title">
              <span className="badge gold">{text.sections.overviewBadge}</span>
              <h2>{text.sections.overviewTitle}</h2>
            </div>
            <div className="inline-grid">
              {valueProps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="highlight-box">
                    <div className="small-icon"><Icon size={18} color="#d8a11a" /></div>
                    <div className="spacer-16" />
                    <strong>{item.title}</strong>
                    <div className="spacer-16" />
                    {item.description}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container section" id="companies">
          <SectionTitle
            eyebrow={text.sections.companiesEyebrow}
            title={text.sections.companiesTitle}
            description={text.sections.companiesDesc}
          />
          <div className="spacer-32" />
          <div className="grid-2">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} lang={lang} />
            ))}
          </div>
        </section>

        <section className="section section-alt" id="services">
          <div className="container">
            <SectionTitle
              eyebrow={text.sections.servicesEyebrow}
              title={text.sections.servicesTitle}
              description={text.sections.servicesDesc}
            />
            <div className="spacer-32" />
            <div className="grid-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="card soft">
                    <div className="card-body">
                      <div className="service-icon"><Icon size={24} color="#d8a11a" /></div>
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-desc">{service.description}</p>
                      <div className="pill-row" style={{ marginTop: 18 }}>
                        {service.bullets.map((item) => (
                          <span key={item} className="pill">{item}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container section" id="projects">
          <SectionTitle
            eyebrow={text.sections.projectsEyebrow}
            title={text.sections.projectsTitle}
            description={text.sections.projectsDesc}
          />
          <div className="spacer-32" />
          <div className="grid-5">
            {featuredProjects.hta.slice(0,3).map((project, index) => (
              <ProjectCard key={project.title} title={project.title} category={project.category} summary={project.summary} lang={lang} slug={project.slug} />
            ))}
            {lang === 'en' ? 
             <Link className='Reedmore en' href={`/companies/hta?lang=en`}>
             More HTA Projects <span >
            <MoveRight color='#ffcf63' size="32"/></span> </Link>
            :
            <Link className='Reedmore ar' href={`/companies/hta?lang=ar`}>
            المزيد من مشاريع HTA <span >
            <MoveLeft color='#ffcf63' size="32"/></span> </Link>  
            } 
          </div>

          <div className="spacer-32" />
          <div className="grid-5">
            {featuredProjects.hta.slice(0,3).map((project, index) => (
              <ProjectCard key={project.title} title={project.title} category={project.category} summary={project.summary} lang={lang} slug={project.slug} />
            ))}
            {lang === 'en' ? 
             <Link className='Reedmore en' href={`/companies/hta?lang=en`}>
             More SEC Projects <span >
            <MoveRight color='#ffcf63' size="32"/></span> </Link>
            :
            <Link className='Reedmore ar' href={`/companies/hta?lang=ar`}>
            المزيد من مشاريع SEC <span >
            <MoveLeft color='#ffcf63' size="32"/></span> </Link>  
            } 
          </div>
        </section>

        <section className="section section-alt" id="structure">
          <div className="container">
            <SectionTitle
              eyebrow={text.sections.structureEyebrow}
              title={text.sections.structureTitle}
              description={text.sections.structureDesc}
            />
            <div className="spacer-32" />
            <div className="grid-2">
              <article className="card soft">
                <div className="card-body">
                  <div className="small-icon"><Layers3 size={18} color="#d8a11a" /></div>
                  <div className="spacer-16" />
                  <strong>{text.sections.primaryNavigation}</strong>
                  <div className="spacer-24" />
                  <div className="card-grid">
                    {siteMap.map((item) => (
                      <div key={item.title} className="highlight-box">
                        <strong>{item.title}</strong>
                        <div className="spacer-16" />
                        {item.description}
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <div className="inline-grid">
                <article className="card">
                  <div className="card-body">
                    <div className="small-icon"><Building size={18} color="#d8a11a" /></div>
                    <div className="spacer-16" />
                    <strong>{text.sections.unifiedCapability}</strong>
                    <div className="spacer-24" />
                    <div className="grid-2">
                      {systems.map((item) => (
                        <div key={item} className="highlight-box" style={{ padding: 14 }}>
                          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                            <HardHat size={16} color="#d8a11a" style={{ marginTop: 2 }} />
                            <span>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <article className="card soft">
                  <div className="card-body">
                    <div className="small-icon"><FileText size={18} color="#d8a11a" /></div>
                    <div className="spacer-16" />
                    <strong>{text.sections.suppliers}</strong>
                    <div className="spacer-24" />
                    <div className="pill-row">
                      {brands.map((item) => (
                        <span key={item} className="pill gold">{item}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="container section" id="qhse">
          <div className="grid-2">
            <article className="card soft">
              <div className="card-body">
                <SectionTitle
                  eyebrow="QHSE"
                  title={text.sections.qhseTitle}
                  description={text.sections.qhseDesc}
                />
                <div className="spacer-24" />
                <div className="grid-2">
                  {text.sections.qhseItems.map((item) => (
                    <div key={item} className="highlight-box">{item}</div>
                  ))}
                </div>
              </div>
            </article>

            <article className="card">
              <div className="card-body">
                <div className="small-icon"><ShieldCheck size={18} color="#d8a11a" /></div>
                <div className="spacer-16" />
                <strong>{text.sections.operationalCredibility}</strong>
                <div className="spacer-24" />
                <p className="lead" style={{ fontSize: 15 }}>
                  {text.sections.operationalDesc}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container grid-2">
            <div>
              <SectionTitle
                eyebrow={text.sections.groupContactEyebrow}
                title={text.sections.groupContactTitle}
                description={text.sections.groupContactDesc}
              />
              <div className="spacer-32" />
              <div className="grid-2">
                {[
                  { icon: Phone, ...text.sections.contactCards[0] },
                  { icon: Mail, ...text.sections.contactCards[1] },
                  { icon: MapPin, ...text.sections.contactCards[2] },
                  { icon: Briefcase, ...text.sections.contactCards[3] },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="card soft">
                      <div className="card-body">
                        <div className="small-icon"><Icon size={18} color="#d8a11a" /></div>
                        <div className="spacer-16" />
                        <strong>{item.title}</strong>
                        <div className="spacer-16" />
                        <span className="subtle" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{item.value}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <article className="card soft">
              <div className="card-body">
                <div className="small-icon"><Sparkles size={18} color="#d8a11a" /></div>
                <div className="spacer-16" />
                <strong>{text.sections.requestProposal}</strong>
                <div className="spacer-24" />
                <div className="form-grid">
                  <input className="input" placeholder={text.sections.fullName} />
                  <input className="input" placeholder={text.sections.companyName} />
                  <input className="input" placeholder={text.sections.emailAddress} />
                  <input className="input" placeholder={text.sections.phoneNumber} />
                </div>
                <div className="spacer-16" />
                <textarea className="textarea" placeholder={text.sections.inquiryPlaceholder} />
                <div className="spacer-24" />
                <a href={withLang('/contact', lang)} className="btn btn-primary">
                  {text.sections.submitInquiry} <ArrowRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section partner-strip" aria-label="Partner brands">
          <div className="container">
            <div className="partner-header">
              <span className="badge gold">Partners</span>
              <h2>Trusted brands behind our delivery</h2>
            </div>
            <div className="partner-logo-grid">
                {Partners?.map((element , index)=>(
                  <div className="partner-logo-card" key={index}>
                    <LogoMark src={element} alt="SEC Engineering and Contracting" large />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
