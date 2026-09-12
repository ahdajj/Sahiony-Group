import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import InquiryForm from '../../components/inquiry-form';
import { PageHero } from '../../components/page-hero';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { getLocalizedSiteData, resolveLanguage, uiText, withLang, type SearchParams } from '../../lib/i18n';

export const metadata: Metadata = {
  title: 'Contact | Sahiony Group',
  description: 'Contact Sahiony Group, HTA Qatar or SEC Syria about projects, tenders and engineering services.',
};

export default async function ContactPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const ar = lang === 'ar';
  const text = uiText[lang];
  const { featuredProjects } = getLocalizedSiteData(lang);
  const offices = [
    { name: ar ? 'مكتب قطر · HTA' : 'Qatar office · HTA', address: ar ? 'مكتب 1، مبنى 78، شارع 840، منطقة 39، الدوحة\nص.ب. 55015' : 'Office 1, Building 78, Street 840, Zone 39, Doha\nP.O. Box 55015', phone: '+974 5517 7960', phoneHref: 'tel:+97455177960', email: 'info@htaqatar.com', emailHref: 'mailto:info@htaqatar.com' },
    { name: ar ? 'مكتب سوريا · SEC' : 'Syria office · SEC', address: ar ? 'شارع بغداد، اللاذقية، سوريا\nص.ب. 796' : 'Baghdad Street, Lattakia, Syria\nP.O. Box 796', phone: '+963 933 33 5671', phoneHref: 'tel:+963933335671', email: 'gm@htaqatar.com', emailHref: 'mailto:gm@htaqatar.com' },
  ];

  return (
    <div className="page-shell home-page contact-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <PageHero eyebrow={ar ? 'تواصل مع المجموعة' : 'CONTACT SAHIONY GROUP'} title={ar ? 'لنبدأ بمحادثة واضحة.' : 'Let’s start with a clear conversation.'} description={ar ? 'للمشاريع والمناقصات والصيانة والاستفسارات العامة في قطر وسوريا.' : 'For projects, tenders, maintenance and general inquiries across Qatar and Syria.'} backgroundImage={featuredProjects.hta[0].img[1] ?? featuredProjects.hta[0].img[0]} logo="/Sahiony_Group_Logo_Transparent.svg" logoAlt={ar ? 'مجموعة صهيوني' : 'Sahiony Group'} actions={[{ href: withLang('/projects', lang), label: ar ? 'شاهد أعمالنا' : 'View our work', secondary: true }]} facts={[{ value: '02', label: ar ? 'مكتبان إقليميان' : 'Regional offices' }, { value: ar ? 'قطر' : 'Qatar', label: 'HTA' }, { value: ar ? 'سوريا' : 'Syria', label: 'SEC' }]} />

        <section className="container contact-layout section">
          <div className="contact-details">
            <SectionTitle eyebrow={ar ? 'تفاصيل التواصل' : 'DIRECT CONTACT'} title={ar ? 'اختر المكتب المناسب.' : 'Choose the right office.'} description={ar ? 'للحصول على استجابة أسرع، تواصل مع الفريق الأقرب إلى موقع مشروعك.' : 'For the quickest response, contact the team closest to your project market.'} />
            <div className="office-list">
              {offices.map((office) => <article className="office-card" key={office.name}><h2>{office.name}</h2><div><MapPin size={18} aria-hidden="true" /><p>{office.address}</p></div><a href={office.phoneHref}><Phone size={18} aria-hidden="true" />{office.phone}</a><a href={office.emailHref}><Mail size={18} aria-hidden="true" />{office.email}</a></article>)}
            </div>
          </div>
          <InquiryForm text={text.sections} lang={lang} />
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
