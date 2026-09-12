import type { Metadata } from 'next';
import { BadgeCheck, Building2, Handshake, Wrench } from 'lucide-react';
import { CompanyCard } from '../../components/company-card';
import { CtaPanel } from '../../components/cta-panel';
import { PageHero } from '../../components/page-hero';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { getLocalizedSiteData, resolveLanguage, withLang, type SearchParams } from '../../lib/i18n';

export const metadata: Metadata = {
  title: 'About | Sahiony Group',
  description: 'Discover Sahiony Group and its engineering and contracting companies in Qatar and Syria.',
};

const pillars = {
  en: [
    { title: 'Engineering-led delivery', description: 'Technical planning, disciplined execution, testing and commissioning are connected from the start.', icon: Building2 },
    { title: 'Quality and safety', description: 'Clear responsibilities, careful coordination and accountable site practice guide our work.', icon: BadgeCheck },
    { title: 'Long-term support', description: 'Maintenance and technical support extend our relationship beyond project handover.', icon: Wrench },
  ],
  ar: [
    { title: 'تنفيذ تقوده الهندسة', description: 'نربط التخطيط الفني بالتنفيذ المنضبط والاختبار والتشغيل منذ البداية.', icon: Building2 },
    { title: 'الجودة والسلامة', description: 'تقود أعمالنا مسؤوليات واضحة وتنسيق دقيق وممارسات ميدانية منضبطة.', icon: BadgeCheck },
    { title: 'دعم طويل الأمد', description: 'تمتد علاقتنا بعد التسليم من خلال الصيانة والدعم الفني.', icon: Wrench },
  ],
} as const;

export default async function AboutPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const ar = lang === 'ar';
  const { companies, featuredProjects, groupHighlights } = getLocalizedSiteData(lang);

  return (
    <div className="page-shell home-page about-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <PageHero
          eyebrow={ar ? 'عن مجموعة صهيوني' : 'ABOUT SAHIONY GROUP'}
          title={ar ? 'خبرة هندسية. حضور محلي. رؤية مشتركة.' : 'Engineering depth. Local presence. Shared direction.'}
          description={ar ? 'مجموعة هندسية ومقاولات تجمع بين خبرة التنفيذ في قطر وقدرات البناء والتأهيل في سوريا.' : 'An engineering and contracting group bringing together delivery experience in Qatar with construction and renovation capability in Syria.'}
          backgroundImage={featuredProjects.sec[0].img[0]}
          logo="/Sahiony_Group_Logo_Transparent.svg"
          logoAlt={ar ? 'مجموعة صهيوني' : 'Sahiony Group'}
          actions={[
            { href: withLang('/companies/hta', lang), label: ar ? 'تعرف على HTA' : 'Discover HTA Qatar' },
            { href: withLang('/companies/sec', lang), label: ar ? 'تعرف على SEC' : 'Discover SEC Syria', secondary: true },
          ]}
          facts={[
            { value: '2015', label: ar ? 'انطلاقة قطر' : 'Qatar roots' },
            { value: '2025', label: ar ? 'إعادة تأسيس سوريا' : 'Syria re-established' },
            { value: '360°', label: ar ? 'قدرة هندسية' : 'Engineering capability' },
          ]}
        />

        <section className="container about-story section">
          <div className="about-story-heading">
            <SectionTitle eyebrow={ar ? 'قصتنا' : 'OUR GROUP'} title={ar ? 'شركتان. سوقان. التزام واحد بالتنفيذ.' : 'Two companies. Two markets. One commitment to delivery.'} />
            <p>{ar ? 'تعمل كل شركة بهوية محلية واضحة، بينما تشترك الشركتان في الخبرة الفنية والانضباط والنهج العملي.' : 'Each company operates with a clear local identity while sharing technical experience, discipline and a practical approach to delivery.'}</p>
          </div>
          <div className="about-highlights">{groupHighlights.map((item) => <div key={item}><Handshake size={19} strokeWidth={1.5} aria-hidden="true" /><p>{item}</p></div>)}</div>
        </section>

        <section className="section section-alt about-companies">
          <div className="container">
            <SectionTitle eyebrow={ar ? 'شركات المجموعة' : 'GROUP COMPANIES'} title={ar ? 'قدرة متخصصة في كل سوق.' : 'Specialist capability in each market.'} description={ar ? 'ملفات واضحة ومشاريع مستقلة لكل شركة ضمن حضور موحد للمجموعة.' : 'Clear company profiles and dedicated portfolios within one professional group presence.'} />
            <div className="grid-2 about-company-grid">{companies.map((company) => <CompanyCard company={company} lang={lang} key={company.id} />)}</div>
          </div>
        </section>

        <section className="container about-principles section">
          <SectionTitle eyebrow={ar ? 'طريقة عملنا' : 'HOW WE WORK'} title={ar ? 'أساس عملي للمشاريع طويلة الأمد.' : 'A practical foundation for lasting projects.'} />
          <div className="about-principle-grid">
            {pillars[lang].map(({ title, description, icon: Icon }) => <article key={title}><span><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </section>

        <CtaPanel eyebrow={ar ? 'ابدأ محادثة' : 'START A CONVERSATION'} title={ar ? 'تحدث مع فريق يعرف سوقك.' : 'Talk to a team that knows your market.'} description={ar ? 'اختر HTA في قطر أو SEC في سوريا، وسنوجه استفسارك إلى الشخص المناسب.' : 'Choose HTA in Qatar or SEC in Syria and we will connect your inquiry with the right team.'} href={withLang('/contact', lang)} action={ar ? 'تواصل معنا' : 'Contact the group'} />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
