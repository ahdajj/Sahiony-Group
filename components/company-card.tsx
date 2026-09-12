import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Company } from '../lib/site-data';
import { LogoMark } from './logo-mark';
import { type Language, withLang } from '../lib/i18n';

export function CompanyCard({ company, lang }: { company: Company; lang: Language }) {
  const Icon = company.icon;


  return (
    <article className="card soft">
      <div className="card-body">
        <div className="company-top">
          <div>
            <div className="company-country">{company.country}</div>
            <h3 className="company-title">{company.name}</h3>
          </div>
          <LogoMark src={company.logo} alt={company.name} header />
        </div>

        <div className="spacer-24" />
        <div className="small-icon">
          <Icon size={20} color="#d8a11a" />
        </div>
        <p className="company-desc">{company.description}</p>

        <div className="pill-row" style={{ marginTop: 18 }}>
          {company.bullets.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>

        <div className="company-subpages">
          <Link className="text-link" href={withLang(`/companies/${company.id}`, lang)}>
            {lang === 'ar' ? 'استكشف الشركة ومشاريعها' : 'Explore company & projects'} <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}
