import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SiteFooter } from '../../../components/site-footer';
import { SiteHeader } from '../../../components/site-header';
import { CtaPanel } from '../../../components/cta-panel';
import { categories as categoriesEn, getCategoryById, getProductsByCategory } from '../../../lib/products-data';
import { getLocalizedCategories, getLocalizedProduct, resolveLanguage, type SearchParams, withLang } from '../../../lib/i18n';

export function generateStaticParams() {
	return categoriesEn.map(({ id: categoryId }) => ({ categoryId }));
}

export default async function CategoryPage({ params, searchParams }: { params: Promise<{ categoryId: string }>; searchParams?: Promise<SearchParams> }) {
	const lang = resolveLanguage(await searchParams);
	const categories = getLocalizedCategories(lang);
	const { categoryId } = await params;
	const category = categories.find((item) => item.id === categoryId) ?? getCategoryById(categoryId);

	if (!category) notFound();

	const products = getProductsByCategory(category.id).map((product) => getLocalizedProduct(product, lang));
	const isArabicPage = lang === 'ar';

	return (
		<div className="page-shell home-page product-category-page" lang={lang} dir={isArabicPage ? 'rtl' : 'ltr'}>
			<SiteHeader lang={lang} />
			<main>
				<section className="container section catalog-page">
					<Link href={withLang('/products', lang)} className="catalog-back-link">{isArabicPage ? '← كل الفئات' : '← All categories'}</Link>
					<div className="catalog-heading catalog-heading-row">
						<div>
							<p className="kicker">{isArabicPage ? 'الفئة' : 'Product category'}</p>
							<h1>{category.name}</h1>
							<p>{products.length} {isArabicPage ? 'منتجات' : products.length === 1 ? 'product' : 'products'}</p>
						</div>
						<div className="catalog-category-hero-image"><Image src={category.img} alt="" fill sizes="(max-width: 700px) 100vw, 320px" /></div>
					</div>
					{products.length > 0 ? (
						<div className="catalog-product-grid">
							{products.map((product) => (
								<Link key={product.id} href={withLang(`/products/${category.id}/${product.id}`, lang)} className="catalog-product-card" aria-label={`${isArabicPage ? 'عرض تفاصيل' : 'View details'}: ${product.name}`}>
									<div className="catalog-product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw" />{product.model && <span className="catalog-product-badge">{product.model}</span>}<span className="editorial-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span></div>
									<div className="catalog-card-content">
										<span className="catalog-card-eyebrow">{category.name}</span>
										<h2>{product.name}</h2>
										<p>{product.description}</p>
										<span className="catalog-card-action">{isArabicPage ? 'عرض التفاصيل' : 'View details'} <ArrowUpRight size={16} aria-hidden="true" /></span>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="catalog-empty-state"><h2>{isArabicPage ? 'لا توجد منتجات بعد' : 'No products yet'}</h2><p>{isArabicPage ? 'ستتوفر منتجات هذه الفئة قريباً.' : 'Products in this category will be added soon.'}</p></div>
					)}
				</section>
				<CtaPanel eyebrow={isArabicPage ? 'هل تحتاج إلى مساعدة؟' : 'NEED TECHNICAL GUIDANCE?'} title={isArabicPage ? 'دع فريقنا يساعدك في تحديد المنتج المناسب.' : 'Let our team help define the right product.'} description={isArabicPage ? 'أرسل المتطلبات أو المواصفات وسنساعدك في الخطوة التالية.' : 'Share your requirements or specification and we will help with the next step.'} href={withLang('/contact', lang)} action={isArabicPage ? 'تواصل معنا' : 'Contact our team'} />
			</main>
			<SiteFooter lang={lang} />
		</div>
	);
}
