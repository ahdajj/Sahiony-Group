import type { Metadata } from 'next';
import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import { CompanyCard } from '../../components/company-card';
import { CtaPanel } from '../../components/cta-panel';
import { PageHero } from '../../components/page-hero';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { getLocalizedSiteData, resolveLanguage, withLang, type SearchParams } from '../../lib/i18n';

export const metadata: Metadata = {
  title: 'Services | Sahiony Group',
  description: 'Engineering, contracting, MEP, fire protection and maintenance services across Qatar and Syria.',
};

export default async function ServicesPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const ar = lang === 'ar';
  const { services, companies, featuredProjects } = getLocalizedSiteData(lang);

  return (
    <div className="page-shell home-page services-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <PageHero
          eyebrow={ar ? 'قدرات هندسية متكاملة' : 'INTEGRATED ENGINEERING CAPABILITY'}
          title={ar ? 'من التخطيط إلى التسليم والصيانة.' : 'From planning to delivery and maintenance.'}
          description={ar ? 'مجموعة خدمات مترابطة للمباني والبنية التحتية والأنظمة الكهروميكانيكية وأنظمة السلامة.' : 'Connected expertise for buildings, infrastructure, MEP systems and life safety, delivered through our teams in Qatar and Syria.'}
          backgroundImage={featuredProjects.hta[6].img[0]}
          logo="/Sahiony_Group_Logo_Transparent.svg"
          logoAlt={ar ? 'مجموعة صهيوني' : 'Sahiony Group'}
          actions={[
            { href: withLang('/projects', lang), label: ar ? 'استكشف المشاريع' : 'Explore our projects' },
            { href: withLang('/contact', lang), label: ar ? 'ناقش متطلباتك' : 'Discuss your requirements', secondary: true },
          ]}
          facts={[
            { value: '06', label: ar ? 'مجالات خدمة رئيسية' : 'Core service disciplines' },
            { value: '02', label: ar ? 'شركتان متخصصتان' : 'Operating companies' },
            { value: ar ? 'قطر · سوريا' : 'Qatar · Syria', label: ar ? 'حضور إقليمي' : 'Regional presence' },
          ]}
        />

        <section className="container service-intro section">
          <SectionTitle
            eyebrow={ar ? 'خدمات المجموعة' : 'GROUP SERVICES'}
            title={ar ? 'فريق واحد لكل مرحلة من مراحل المشروع.' : 'One coordinated team for every project stage.'}
            description={ar ? 'نربط الخبرة الفنية بالتنفيذ العملي، مع نطاق واضح لكل تخصص.' : 'We connect technical planning with practical execution and a clear scope for every discipline.'}
          />
          <p>{ar ? 'تغطي قدراتنا الأعمال المدنية والأنظمة الكهروميكانيكية والحماية من الحريق والكهرباء والتيار الخفيف والصيانة وإدارة المشاريع.' : 'Our capability covers civil work, MEP, fire protection, electrical and low current systems, maintenance, and project management.'}</p>
        </section>

        <section className="container service-directory" aria-label={ar ? 'دليل الخدمات' : 'Service directory'}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-detail-card" key={service.title}>
                <div className="service-detail-icon"><Icon size={29} strokeWidth={1.5} aria-hidden="true" /></div>
                <div className="service-detail-copy"><h2>{service.title}</h2><p>{service.description}</p></div>
                <ul>{service.bullets.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul>
              </article>
            );
          })}
        </section>

        <section className="section section-alt service-companies">
          <div className="container">
            <div className="home-section-heading">
              <SectionTitle eyebrow={ar ? 'اختر فريقك' : 'OUR OPERATING COMPANIES'} title={ar ? 'خبرة محلية ضمن معيار موحد.' : 'Local expertise, one group standard.'} description={ar ? 'تعرف على الشركة الأقرب إلى موقع مشروعك ونطاقه.' : 'Meet the operating company aligned with your market and project scope.'} />
              <Link className="text-link" href={withLang('/about', lang)}>{ar ? 'عن المجموعة' : 'About the group'} <ArrowUpRight size={17} /></Link>
            </div>
            <div className="grid-2 service-company-grid">{companies.map((company) => <CompanyCard company={company} lang={lang} key={company.id} />)}</div>
          </div>
        </section>

        <CtaPanel eyebrow={ar ? 'خطوتك التالية' : 'YOUR NEXT STEP'} title={ar ? 'حدد نطاق العمل مع فريقنا.' : 'Define the right scope with our team.'} description={ar ? 'أرسل متطلباتك وسنوجه استفسارك إلى الشركة والتخصص المناسبين.' : 'Share your requirements and we will route the inquiry to the right company and discipline.'} href={withLang('/contact', lang)} action={ar ? 'اطلب عرضاً' : 'Request a proposal'} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
