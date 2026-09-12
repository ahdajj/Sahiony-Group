import type { Metadata } from 'next';
import { Check, HardHat, Lightbulb, Users } from 'lucide-react';
import CareerApplicationForm from '../../components/career-application-form';
import { PageHero } from '../../components/page-hero';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { getLocalizedSiteData, resolveLanguage, uiText, type SearchParams } from '../../lib/i18n';

export const metadata: Metadata = {
  title: 'Careers | Sahiony Group',
  description: 'Explore career opportunities with Sahiony Group in engineering, construction, site operations and administration.',
};

export default async function CareersPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const ar = lang === 'ar';
  const text = uiText[lang].careersPage;
  const { featuredProjects } = getLocalizedSiteData(lang);
  const values = [
    { icon: HardHat, title: ar ? 'السلامة أولاً' : 'Safety first', copy: ar ? 'مواقع منظمة ومسؤوليات واضحة ومعايير مهنية.' : 'Organized worksites, clear responsibilities and professional standards.' },
    { icon: Lightbulb, title: ar ? 'تطور مستمر' : 'Continuous growth', copy: ar ? 'خبرة عملية وفرص لتطوير المهارات الفنية والإدارية.' : 'Practical experience and opportunities to develop technical and leadership skills.' },
    { icon: Users, title: ar ? 'فريق واحد' : 'One team', copy: ar ? 'ثقافة تحترم التعاون والموثوقية وجودة العمل.' : 'A culture that values teamwork, reliability and quality work.' },
  ];

  return (
    <div className="page-shell home-page careers-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <PageHero eyebrow={ar ? 'وظائف مجموعة صهيوني' : 'CAREERS AT SAHIONY GROUP'} title={text.title} description={text.description} backgroundImage={featuredProjects.sec[2].img[0]} actions={[]} facts={[{ value: ar ? 'هندسة' : 'Engineering', label: ar ? 'المكتب الفني' : 'Technical office' }, { value: ar ? 'تنفيذ' : 'Delivery', label: ar ? 'المواقع والمشاريع' : 'Sites and projects' }, { value: ar ? 'دعم' : 'Support', label: ar ? 'الإدارة والعمليات' : 'Administration and operations' }]} />

        <section className="container careers-intro section">
          <SectionTitle eyebrow={ar ? 'اعمل معنا' : 'WORK WITH US'} title={ar ? 'ابنِ خبرتك ضمن مشاريع حقيقية.' : 'Build your experience through real projects.'} description={text.intro} />
          <div className="career-value-grid">{values.map(({ icon: Icon, title, copy }) => <article key={title}><span><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></span><h2>{title}</h2><p>{copy}</p></article>)}</div>
        </section>

        <section className="section section-alt careers-apply-section">
          <div className="container careers-apply-layout">
            <div className="career-opportunities">
              <SectionTitle eyebrow={ar ? 'مجالات العمل' : 'OPPORTUNITY AREAS'} title={text.whoWeAreTitle} description={text.whatWeValue} />
              <ul>{text.whoWeAreItems.map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul>
              <aside><h2>{text.whyWorkTitle}</h2><ul>{text.whyWorkItems.slice(0, 4).map((item) => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul></aside>
            </div>
            <CareerApplicationForm text={text} lang={lang} />
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
