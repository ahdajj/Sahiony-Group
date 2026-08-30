import { CheckCircle } from 'lucide-react';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { resolveLanguage, uiText, type SearchParams } from '../../lib/i18n';
import CareerApplicationForm from '../../components/career-application-form';

export default async function CareersPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const text = uiText[lang];
  const isArabic = lang === 'ar';

  return (
    <div className="page-shell" lang={lang} dir={isArabic ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        {/* Hero Section */}
        <section className="container section">
          <SectionTitle
            eyebrow={text.careersPage.eyebrow}
            title={text.careersPage.title}
            description={text.careersPage.description}
          />
        </section>

        {/* Main Content + Form Layout */}
        <section className="container section">
          <div className="grid-2">
            {/* Left Column: Content */}
            <div>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '28px' }}>
                {text.careersPage.intro}
              </p>

              {/* Why Work With Us */}
              <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{text.careersPage.whyWorkTitle}</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                {text.careersPage.whyWorkItems.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} color="#d8a11a" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Who We're Looking For */}
              <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{text.careersPage.whoWeAreTitle}</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                {text.careersPage.whoWeAreItems.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} color="#d8a11a" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* What We Value */}
              <h3 style={{ marginBottom: '16px', fontSize: '1.25rem' }}>{text.careersPage.whatWeValueTitle}</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#5e6472' }}>
                {text.careersPage.whatWeValue}
              </p>
            </div>

            {/* Right Column: Application Form */}
            <CareerApplicationForm text={text.careersPage} />
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
