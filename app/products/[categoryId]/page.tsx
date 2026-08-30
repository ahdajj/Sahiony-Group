import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter } from '../../../components/site-footer';
import { SiteHeader } from '../../../components/site-header';
import { categories, getCategoryById, getProductsByCategory } from '../../../lib/products-data';
import { resolveLanguage, type SearchParams, withLang } from '../../../lib/i18n';

export function generateStaticParams() {
	return categories.map(({ id: categoryId }) => ({ categoryId }));
}

export default async function CategoryPage({ params, searchParams }: { params: Promise<{ categoryId: string }>; searchParams?: Promise<SearchParams> }) {
	const lang = resolveLanguage(await searchParams);
	const { categoryId } = await params;
	const category = getCategoryById(categoryId);

	if (!category) notFound();

	const products = getProductsByCategory(category.id);
	const isArabicPage = lang === 'ar';

	return (
		<div className="page-shell" lang={lang} dir={isArabicPage ? 'rtl' : 'ltr'}>
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
								<Link key={product.id} href={withLang(`/products/${category.id}/${product.id}`, lang)} className="catalog-product-card">
									<div className="catalog-product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw" /></div>
									<div className="catalog-card-content">
										{product.model && <span className="catalog-model">{product.model}</span>}
										<h2>{product.name}</h2>
										<span>{isArabicPage ? 'عرض التفاصيل' : 'View details'} <span aria-hidden="true">{isArabicPage ? '←' : '→'}</span></span>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="catalog-empty-state"><h2>{isArabicPage ? 'لا توجد منتجات بعد' : 'No products yet'}</h2><p>{isArabicPage ? 'ستتوفر منتجات هذه الفئة قريباً.' : 'Products in this category will be added soon.'}</p></div>
					)}
				</section>
			</main>
			<SiteFooter lang={lang} />
		</div>
	);
}
