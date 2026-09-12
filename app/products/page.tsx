import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { PageHero } from '../../components/page-hero';
import { SectionTitle } from '../../components/section-title';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { products } from '../../lib/products-data';
import { getLocalizedCategories, getLocalizedSiteData, resolveLanguage, withLang, type SearchParams } from '../../lib/i18n';

export const metadata: Metadata = {
  title: 'Products | Sahiony Group',
  description: 'Browse Sahiony Group fire alarm, firefighting and life safety product categories.',
};

type ProductSearchParams = SearchParams & { q?: string | string[] };
const first = (value?: string | string[]) => Array.isArray(value) ? value[0] : value;

export default async function ProductsPage({ searchParams }: { searchParams?: Promise<ProductSearchParams> }) {
  const params = await searchParams;
  const lang = resolveLanguage(params);
  const ar = lang === 'ar';
  const categories = getLocalizedCategories(lang);
  const { featuredProjects } = getLocalizedSiteData(lang);
  const query = (first(params?.q) ?? '').trim().slice(0, 100);
  const filtered = categories.filter((category) => category.name.toLocaleLowerCase(lang).includes(query.toLocaleLowerCase(lang)));
  const productCounts = new Map(categories.map((category) => [category.id, products.filter((product) => product.categoryId === category.id).length]));

  return (
    <div className="page-shell home-page products-page" lang={lang} dir={ar ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <main>
        <PageHero eyebrow={ar ? 'أنظمة السلامة والحماية' : 'FIRE & LIFE SAFETY SYSTEMS'} title={ar ? 'منتجات موثوقة. مواصفات واضحة.' : 'Trusted products. Clear specifications.'} description={ar ? 'تصفح أنظمة الإنذار والإطفاء ومضخات الحريق والصمامات ومعدات السلامة حسب الفئة.' : 'Browse fire alarm, suppression, pump, valve and safety equipment by category.'} backgroundImage={featuredProjects.hta[1].img[0]} logo="/Sahiony_Group_Logo_Transparent.svg" logoAlt={ar ? 'مجموعة صهيوني' : 'Sahiony Group'} actions={[{ href: withLang('/contact', lang), label: ar ? 'اطلب معلومات فنية' : 'Request technical information' }]} facts={[{ value: String(categories.length).padStart(2, '0'), label: ar ? 'فئة منتجات' : 'Product categories' }, { value: String(products.length).padStart(2, '0'), label: ar ? 'منتجاً موثقاً' : 'Documented products' }, { value: '24/7', label: ar ? 'سلامة المنشآت' : 'Life safety focus' }]} />

        <section className="container catalog-page section">
          <div className="catalog-toolbar"><SectionTitle eyebrow={ar ? 'كتالوج المنتجات' : 'PRODUCT CATALOGUE'} title={ar ? 'ابحث حسب النظام أو المعدات.' : 'Find the right system or equipment.'} description={ar ? 'ابدأ بالفئة ثم راجع المواصفات والموديلات المتاحة.' : 'Start with a category, then review product specifications and available models.'} /><form action="/products" method="get" role="search">{ar && <input type="hidden" name="lang" value="ar" />}<label htmlFor="category-query">{ar ? 'البحث في الفئات' : 'Search categories'}</label><div><Search size={18} aria-hidden="true" /><input id="category-query" name="q" type="search" defaultValue={query} placeholder={ar ? 'مثال: إنذار أو مضخة...' : 'E.g. alarm, pump or valve…'} /><button type="submit" aria-label={ar ? 'بحث' : 'Search'}><ArrowUpRight size={17} /></button></div></form></div>
          <div className="catalog-results-line"><strong>{filtered.length}</strong> {ar ? 'فئة متاحة' : filtered.length === 1 ? 'category available' : 'categories available'}{query && <Link href={withLang('/products', lang)}>{ar ? 'مسح البحث' : 'Clear search'}</Link>}</div>
          {filtered.length ? <div className="catalog-category-grid">{filtered.map((category) => {
            const count = productCounts.get(category.id) ?? 0;
            return <Link key={category.id} href={withLang(`/products/${category.id}`, lang)} className="catalog-category-card" aria-label={`${category.name}, ${count} ${ar ? 'منتجات' : count === 1 ? 'product' : 'products'}`}><div className="catalog-category-image"><Image src={category.img} alt={category.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" /><span className="catalog-count-badge">{count} {ar ? 'منتجات' : count === 1 ? 'product' : 'products'}</span><span className="editorial-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span></div><div className="catalog-card-content"><span className="catalog-card-eyebrow">{ar ? 'نظام سلامة' : 'Life safety system'}</span><h2>{category.name}</h2><span className="catalog-card-action">{ar ? 'استكشف المنتجات' : 'Explore products'} <ArrowUpRight size={16} /></span></div></Link>;
          })}</div> : <div className="catalog-empty-state"><h2>{ar ? 'لا توجد فئات مطابقة' : 'No matching categories'}</h2><p>{ar ? 'جرّب مصطلحاً آخر أو امسح البحث.' : 'Try another term or clear the search.'}</p><Link className="btn btn-primary" href={withLang('/products', lang)}>{ar ? 'عرض جميع الفئات' : 'View all categories'}</Link></div>}
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
