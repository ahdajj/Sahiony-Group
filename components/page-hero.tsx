import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type HeroAction = { href: string; label: string; secondary?: boolean };
type HeroFact = { label: string; value: string };

export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  backgroundAlt = '',
  logo,
  logoAlt,
  actions = [],
  facts = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
  backgroundAlt?: string;
  logo?: string;
  logoAlt?: string;
  actions?: HeroAction[];
  facts?: HeroFact[];
}) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <Image className="page-hero-background" src={backgroundImage} alt={backgroundAlt} fill priority loading="eager" sizes="100vw" />
      <div className="container page-hero-inner">
        <div className="page-hero-copy">
          <span className="kicker">{eyebrow}</span>
          <h1 id="page-hero-title">{title}</h1>
          <p>{description}</p>
          {actions.length > 0 && (
            <div className="page-hero-actions">
              {actions.map((action) => (
                <Link className={action.secondary ? 'page-hero-link' : 'btn btn-primary'} href={action.href} key={action.href}>
                  {action.label} <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}
        </div>
        {logo && <div className="page-hero-logo"><Image src={logo} alt={logoAlt ?? title} width={430} height={240} priority loading="eager" /></div>}
      </div>
      {facts.length > 0 && (
        <div className="container page-hero-facts" aria-label={`${title} facts`}>
          {facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
        </div>
      )}
    </section>
  );
}
