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
import {
  brands,
  companies,
  featuredProjects,
  groupHighlights,
  services,
  siteMap,
  stats,
  systems,
  valueProps,
} from '../lib/site-data';

export default function HomePage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="container hero">
          <div style={{ display: 'grid', gap: 24 }}>
            <span className="badge">Sahiony Group • Qatar • Syria • Contracting • MEP • Fire Protection</span>
            <h1>Sahiony Group — engineering capability across Qatar and Syria.</h1>
            <p className="lead">
              This website presents one corporate group with two dedicated company branches: HTA Construction & Trading in Qatar and SEC Engineering & Contracting in Syria.
            </p>
            <div className="actions">
              <a href="#companies" className="btn btn-primary">
                Explore Group Structure <ArrowRight size={16} />
              </a>
              <a href="/projects" className="btn btn-secondary">View Projects</a>
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
                  <div className="kicker">Group Identity</div>
                  <h3 style={{ fontSize: 34, marginTop: 10 }}>Two engineering companies under one Sahiony Group presence</h3>
                </div>
                <div className="logo-stack">
                  <LogoMark src="/SEC LOGO SAHIONY.jpg" alt="SEC Engineering and Contracting" large />
                  <LogoMark src="/HTA LOgo.jpg" alt="HTA Construction and Trading" large />
                </div>
              </div>

              <div className="chip-grid">
                {['HTA Qatar', 'SEC Syria', 'MEP Systems', 'Fire Protection', 'General Contracting', 'Maintenance & Projects'].map((item) => (
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
              <span className="badge gold">Group Overview</span>
              <h2>One group structure. Two operating companies. Distinct markets.</h2>
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
            eyebrow="Group Companies"
            title="One group website with two dedicated company branches."
            description="This architecture lets you market Sahiony Group as the umbrella while giving HTA Qatar and SEC Syria dedicated, professional spaces inside the same website."
          />
          <div className="spacer-32" />
          <div className="grid-2">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </section>

        <section className="section section-alt" id="services">
          <div className="container">
            <SectionTitle
              eyebrow="Group Services"
              title="Shared services organized under one premium framework."
              description="The group site starts with a strong shared services page, then routes users to HTA Qatar or SEC Syria where needed."
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
            eyebrow="Projects"
            title="One project hub, filtered later by HTA Qatar and SEC Syria."
            description="The group website should use one central project area, with filters and future dedicated case studies for each company branch."
          />
          <div className="spacer-32" />
          <div className="grid-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} category={project.category} summary={project.summary} />
            ))}
          </div>
        </section>

        <section className="section section-alt" id="structure">
          <div className="container">
            <SectionTitle
              eyebrow="Site Structure"
              title="Recommended full site architecture for Sahiony Group."
              description="This is the structure recommended for the production website."
            />
            <div className="spacer-32" />
            <div className="grid-2">
              <article className="card soft">
                <div className="card-body">
                  <div className="small-icon"><Layers3 size={18} color="#d8a11a" /></div>
                  <div className="spacer-16" />
                  <strong>Primary navigation</strong>
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
                    <strong>Unified capability</strong>
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
                    <strong>Group suppliers and brands</strong>
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
                  title="One professional quality and safety language across the group."
                  description="The group website should present a consistent quality and safety mindset even while each company keeps its own operating profile."
                />
                <div className="spacer-24" />
                <div className="grid-2">
                  {['Continuous quality process', 'Customer satisfaction focus', 'Safe execution culture', 'Compliance-oriented delivery', 'Management accountability', 'Execution with discipline'].map((item) => (
                    <div key={item} className="highlight-box">{item}</div>
                  ))}
                </div>
              </div>
            </article>

            <article className="card">
              <div className="card-body">
                <div className="small-icon"><ShieldCheck size={18} color="#d8a11a" /></div>
                <div className="spacer-16" />
                <strong>Operational credibility</strong>
                <div className="spacer-24" />
                <p className="lead" style={{ fontSize: 15 }}>
                  The site is ready to hold policies, certifications, safety statistics, QA/QC flowcharts, and governance highlights. Later, HTA and SEC can each have their own compliance and credentials subsection without breaking the group structure.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="contact">
          <div className="container grid-2">
            <div>
              <SectionTitle
                eyebrow="Group Contact"
                title="One inquiry point with routing for HTA Qatar and SEC Syria."
                description="The contact experience should feel unified at group level while still letting users choose the relevant company."
              />
              <div className="spacer-32" />
              <div className="grid-2">
                {[
                  { icon: Phone, title: 'Phone', value: '+963 933 33 5671 / +974 5517 7960' },
                  { icon: Mail, title: 'Email', value: 'info@htaqatar.com / gm@htaqatar.com / anas@htaqatar.com' },
                  { icon: MapPin, title: 'Offices', value: 'Doha, Qatar / Lattakia, Syria' },
                  { icon: Briefcase, title: 'Inquiry Type', value: 'Group, HTA Qatar, SEC Syria, tenders, projects' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="card soft">
                      <div className="card-body">
                        <div className="small-icon"><Icon size={18} color="#d8a11a" /></div>
                        <div className="spacer-16" />
                        <strong>{item.title}</strong>
                        <div className="spacer-16" />
                        <span className="subtle" style={{ lineHeight: 1.8 }}>{item.value}</span>
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
                <strong>Request a Proposal</strong>
                <div className="spacer-24" />
                <div className="form-grid">
                  <input className="input" placeholder="Full name" />
                  <input className="input" placeholder="Company name" />
                  <input className="input" placeholder="Email address" />
                  <input className="input" placeholder="Phone number" />
                </div>
                <div className="spacer-16" />
                <textarea className="textarea" placeholder="Tell us whether your inquiry is for Sahiony Group, HTA Qatar, or SEC Syria..." />
                <div className="spacer-24" />
                <a href="/contact" className="btn btn-primary">
                  Submit Inquiry <ArrowRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
