import { SiteFooter } from '../../../components/site-footer';
import { SiteHeader } from '../../../components/site-header';
import { getLocalizedSiteData, resolveLanguage, type SearchParams} from '../../../lib/i18n';
import Image from 'next/image';

export default async function ProjectsPage({ searchParams, params }: { searchParams?: Promise<SearchParams>;  params: Promise<{ slug: string }> }) {
  const lang = resolveLanguage(await searchParams);
  const { slug } = await params;
  const { featuredProjects } = getLocalizedSiteData(lang);
  const OneProject = [...featuredProjects.hta, ...featuredProjects.sec].find((project)=> project.slug === slug);
  const projectImages = OneProject?.img ?? [];


  return (
    <div className="page-shell" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteHeader lang={lang} />
      <section className="container section">

          <div className="card project-detail-card">
            <div className="project-detail-intro">
              <p className="kicker">{OneProject?.category}</p>
              <h1 className="project-detail-title">{OneProject?.title}</h1>
              <p className="project-detail-summary">{OneProject?.summary}</p>
            </div>
          </div>

          <div className="project-gallery">
            <div className="project-gallery-header">
              <p className="kicker"> {lang === 'en' ? 'Project Gallery' : 'صور المشروع'}</p>
              <h2>{lang === 'en' ? 'Project highlights' : 'أبرز النقاط في المشروع'}</h2>
            </div>
            {projectImages.length > 0 ? (
              <div className="project-gallery-grid">
                {projectImages.map((image, index) => {
                  const layouts = [
                    "large",
                    "tall",
                    "small",
                    "small",
                    "wide",
                    "tall",
                  ];

                  const layout = layouts[index % layouts.length];

                  return (
                    <figure
                      key={`${image}-${index}`}
                      className={`project-gallery-card ${layout}`}>
                      <Image
                        src={image}
                        alt={`${OneProject?.title ?? "Project"} image ${index + 1}`}
                        width={900}
                        height={600}
                        className="project-gallery-image"
                      />
                      <figcaption>
                        {index === 0
                          ? "Project overview"
                          : `Image ${index + 1}`}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
              ) : (
              <div className="project-gallery-placeholder">
                <p>No project images are available for this page yet.</p>
              </div>
            )}
          </div>

      </section>
      <SiteFooter lang={lang} />
    </div>
  );
}




// import { ProjectCard } from '../../components/project-card';
// import { SectionTitle } from '../../components/section-title';
// import { SiteFooter } from '../../components/site-footer';
// import { SiteHeader } from '../../components/site-header';
// import { getLocalizedSiteData, resolveLanguage, uiText, type SearchParams } from '../../lib/i18n';

// export default async function ProjectsPage({ searchParams }: { searchParams?: Promise<SearchParams> }) {
//   const lang = resolveLanguage(await searchParams);
//   const text = uiText[lang];
//   const { featuredProjects } = getLocalizedSiteData(lang);

//   return (
//     <div className="page-shell" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
//       <SiteHeader lang={lang} />
//       <main>
//         <section className="container section">
//           <SectionTitle eyebrow={text.projectsPage.eyebrow} title={text.projectsPage.title} description={text.projectsPage.description} />
//           <div className="spacer-32" />
//           <div className="grid-3">
//             {featuredProjects.map((project) => (
//               <ProjectCard key={project.title} title={project.title} category={project.category} summary={project.summary} lang={lang} />
//             ))}
//           </div>
//         </section>
//       </main>
//       <SiteFooter lang={lang} />
//     </div>
//   );
// }
