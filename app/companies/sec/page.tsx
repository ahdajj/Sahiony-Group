import { CompanyDetailPage } from '../../../components/company-detail-page';
import { getLocalizedSiteData, resolveLanguage, type SearchParams } from '../../../lib/i18n';

export default async function SecPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const lang = resolveLanguage(await searchParams);
  const { companies } = getLocalizedSiteData(lang);
  return <CompanyDetailPage company={companies[1]} lang={lang} />;
}
