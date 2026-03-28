import { ArrowRight, Briefcase, Mail, MapPin, Phone } from 'lucide-react';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="container section">
          <div className="grid-2">
            <div>
              <SectionTitle eyebrow="Contact" title="Group Contact" description="One inquiry point with routing for HTA Qatar and SEC Syria." />
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
                <div className="kicker">Request a Proposal</div>
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
                <button className="btn btn-primary" type="button">
                  Submit Inquiry <ArrowRight size={16} />
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
