import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CtaPanel({ eyebrow, title, description, href, action }: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <section className="container site-cta">
      <div><span className="kicker">{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>
      <Link className="btn btn-primary" href={href}>{action} <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </section>
  );
}
