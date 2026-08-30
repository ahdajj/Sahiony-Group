import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import { categories } from '../../lib/products-data';
import { resolveLanguage, type SearchParams, withLang } from '../../lib/i18n';

export default async function ProductsPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
	const lang = resolveLanguage(await searchParams);
	const isArabicPage = lang === 'ar';

	return (
		<div className="page-shell" lang={lang} dir={isArabicPage ? 'rtl' : 'ltr'}>
			<SiteHeader lang={lang} />
			<main>
				<section className="container section catalog-page">
					<div className="catalog-heading">
						<p className="kicker">{isArabicPage ? 'كتالوج المنتجات' : 'Product catalogue'}</p>
						<h1>{isArabicPage ? 'أنظمة ومنتجات الحماية من الحريق' : 'Fire protection systems and products'}</h1>
						<p>{isArabicPage ? 'تصفح مجموعتنا حسب فئة المنتج.' : 'Browse our range by product category.'}</p>
					</div>
					<div className="catalog-category-grid">
						{categories.map((category) => (
							<Link key={category.id} href={withLang(`/products/${category.id}`, lang)} className="catalog-category-card">
								<div className="catalog-category-image">
									<Image src={category.img} alt={category.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" />
								</div>
								<div className="catalog-card-content">
									<h2>{category.name}</h2>
									<span>{isArabicPage ? 'عرض المنتجات' : 'View products'} <span aria-hidden="true">{isArabicPage ? '←' : '→'}</span></span>
								</div>
							</Link>
						))}
					</div>
				</section>
			</main>
			<SiteFooter lang={lang} />
		</div>
	);
}
