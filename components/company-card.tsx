import type { Company } from '../lib/site-data';
import { LogoMark } from './logo-mark';
import { type Language, uiText } from '../lib/i18n';

export function CompanyCard({ company, lang }: { company: Company; lang: Language }) {
  const Icon = company.icon;
  const text = uiText[lang];

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
          <h4>{text.sections.plannedSubpages}</h4>
          <div className="pill-row">
            {company.pages.map((item) => (
              <span key={item} className="pill gold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
