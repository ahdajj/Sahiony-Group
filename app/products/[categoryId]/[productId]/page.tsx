import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter } from '../../../../components/site-footer';
import { SiteHeader } from '../../../../components/site-header';
import { categories, getProductById, products } from '../../../../lib/products-data';
import { resolveLanguage, type SearchParams, withLang } from '../../../../lib/i18n';

export function generateStaticParams() {
	return products.map((product) => ({ categoryId: product.categoryId, productId: product.id }));
}

export default async function ProductPage({ params, searchParams }: { params: Promise<{ categoryId: string; productId: string }>; searchParams?: Promise<SearchParams> }) {
	const lang = resolveLanguage(await searchParams);
	const { categoryId, productId } = await params;
	const product = getProductById(productId);
	const category = categories.find((item) => item.id === categoryId);

	if (!product || !category || product.categoryId !== category.id) notFound();

	const isArabicPage = lang === 'ar';
	const specifications = product.specifications ?? [];
	const variants = product.variants ?? [];

	return (
		<div className="page-shell" lang={lang} dir={isArabicPage ? 'rtl' : 'ltr'}>
			<SiteHeader lang={lang} />
			<main>
				<section className="container section product-detail-page">
					<Link href={withLang(`/products/${category.id}`, lang)} className="catalog-back-link">{isArabicPage ? `← العودة إلى ${category.name}` : `← Back to ${category.name}`}</Link>
					<div className="product-detail-layout">
						<div className="product-detail-image"><Image src={product.image} alt={product.name} fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div>
						<div className="product-detail-copy">
							<p className="kicker">{category.name}</p>
							<h1>{product.name}</h1>
							{product.model && <p className="product-detail-model">{product.model}</p>}
							<p className="product-detail-description">{product.description}</p>
							<Link href={withLang('/contact', lang)} className="btn btn-primary">{isArabicPage ? 'اطلب معلومات' : 'Request information'}</Link>
						</div>
					</div>
					{specifications.length > 0 && <section className="product-detail-section"><h2>{isArabicPage ? 'المواصفات' : 'Specifications'}</h2><dl className="product-specifications">{specifications.map((specification) => <div key={specification.label}><dt>{specification.label}</dt><dd>{specification.value}</dd></div>)}</dl></section>}
					{variants.length > 0 && <section className="product-detail-section"><h2>{isArabicPage ? 'الطرازات المتوفرة' : 'Available variants'}</h2><div className="product-variants">{variants.map((variant) => <article className="product-variant" key={variant.model}><div className="product-variant-heading"><h3>{variant.model}</h3><span>{isArabicPage ? 'طراز' : 'Variant'}</span></div>{variant.description && <p>{variant.description}</p>}{variant.specifications && variant.specifications.length > 0 && <dl className="product-variant-specifications">{variant.specifications.map((specification) => <div key={specification.label}><dt>{specification.label}</dt><dd>{specification.value}</dd></div>)}</dl>}</article>)}</div></section>}
					{product.features && <section className="product-detail-section"><h2>{isArabicPage ? 'المميزات' : 'Features'}</h2><ul className="product-bullet-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>}
					{product.applications && <section className="product-detail-section"><h2>{isArabicPage ? 'الاستخدامات' : 'Applications'}</h2><ul className="product-bullet-list">{product.applications.map((application) => <li key={application}>{application}</li>)}</ul></section>}
					{product.certifications && <section className="product-detail-section"><h2>{isArabicPage ? 'الاعتمادات' : 'Certifications'}</h2><div className="pill-row">{product.certifications.map((certification) => <span className="pill" key={certification}>{certification}</span>)}</div></section>}
				</section>
			</main>
			<SiteFooter lang={lang} />
		</div>
	);
}
