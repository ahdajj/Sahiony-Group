import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { services } from '../../lib/site-data';

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="container section">
          <SectionTitle eyebrow="Services" title="Group Services" description="Shared service lines across the group structure." />
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
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
