import { CompanyDetailPage } from '../../../components/company-detail-page';
import { companies } from '../../../lib/site-data';

export default function HtaPage() {
  return <CompanyDetailPage company={companies[0]} />;
}
