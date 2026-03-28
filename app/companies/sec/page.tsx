import { CompanyDetailPage } from '../../../components/company-detail-page';
import { companies } from '../../../lib/site-data';

export default function SecPage() {
  return <CompanyDetailPage company={companies[1]} />;
}
