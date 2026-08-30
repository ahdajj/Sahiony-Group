import {
  brands,
  companies as companiesEn,
  featuredProjects as featuredProjectsEn,
  groupHighlights as groupHighlightsEn,
  services as servicesEn,
  siteMap as siteMapEn,
  stats as statsEn,
  systems as systemsEn,
  type FeaturedProjectsData,
  valueProps as valuePropsEn,
} from './site-data';
import { categories as categoriesEn, products as productsEn, type Product } from './products-data';
import { productsAr } from './i18n-products';

// const productsAr = productsArRaw as Product[];

export type Language = 'en' | 'ar';

export type SearchParams = {
  lang?: string | string[];
};

export function resolveLanguage(searchParams?: SearchParams): Language {
  const raw = Array.isArray(searchParams?.lang) ? searchParams?.lang[0] : searchParams?.lang;
  return raw === 'ar' ? 'ar' : 'en';
}

export function isArabic(lang: Language): boolean {
  return lang === 'ar';
}

export function withLang(path: string, lang: Language): string {
  if (lang === 'en') {
    return path;
  }

  const [base, hash] = path.split('#');
  const separator = base.includes('?') ? '&' : '?';
  const localized = `${base}${separator}lang=ar`;
  return hash ? `${localized}#${hash}` : localized;
}

const statsAr = [
  { value: '02', label: 'شركات المجموعة' },
  { value: '2015', label: 'بداية قطر' },
  { value: '2025', label: 'إعادة التأسيس في سوريا' },
  { value: '360°', label: 'قدرات هندسية متكاملة' },
] as const;

const groupHighlightsAr = [
  'هيكل ثنائي للشركات يغطي قطر وسوريا تحت مظلة مجموعة صهيوني.',
  'شركة HTA للإنشاءات والتجارة في قطر بخبرة في الأعمال الكهروميكانيكية والصيانة والبنية التحتية.',
  'شركة SEC للهندسة والمقاولات في سوريا بخبرة في المقاولات العامة والتأهيل وأنظمة الميكانيك والكهرباء والحريق والتيار الخفيف.',
  'هوية هندسية مشتركة تركّز على التنفيذ والدعم الفني والاختبارات والتشغيل والصيانة.',
] as const;

const companiesAr = companiesEn.map((company, index) => {
  if (index === 0) {
    return {
      ...company,
      country: 'قطر',
      description:
        'شركة HTA للإنشاءات والتجارة ذ.م.م. هي شركة مقاولات كهروميكانيكية متخصصة مقرها في الدوحة، قطر، وتقدم حلولاً هندسية متكاملة لأنظمة الحماية من الحرائق وأعمال الهندسة الميكانيكية والكهربائية والسباكة (MEP). تستند الشركة إلى خبرة فنية قوية، وخبرة عملية ميدانية، والتزام بتقديم أنظمة عالية الجودة تتوافق مع المعايير الدولية ومتطلبات السلطات المحلية. تقدم HTA خدمات شاملة، بما في ذلك دعم التصميم، وتوريد المواد، والتركيب، والاختبار، والتشغيل، والصيانة، مما يضمن أداءً موثوقًا وفعالًا للأنظمة.',
      bullets: [
        'مقاولات كهروميكانيكية',
        'خدمات صيانة المباني',
        'صيانة الطرق والبنية التحتية',
        'تخطيط المشاريع والدعم الفني',
      ],
      pages: ['نظرة عامة', 'الخدمات', 'المشاريع', 'الاعتمادات', 'اتصل بنا'],
    };
  }

  return {
    ...company,
    country: 'سوريا',
    description:
      'شركة SEC هي شركة تابعة لمجموعة SAHIONY Group of Co. W.L.L. المتخصصة في المقاولات العامة وصيانة المباني.تعود جذور شركة SEC، التي تتخذ من سوريا مقراً لها، إلى شركة مقاولات عامة تأسست منذ أكثر من عشرسنوات في قطر. وقد بدأت الشركة نشاطها في الدوحة، دولة قطر، في عام 2015، ونجحت في الحفاظ علىنمو مطرد في أعمالها. وبفضل كل الخبرات والتدريبات والتقنيات التي اكتسبتها، إلى جانب جهودها الدؤوبة لتقديم خدمات عالية الجودة.',
    bullets: [
      'مقاولات عامة وتأهيل',
      'أنظمة MEP وسلامة الحياة',
      'أنظمة كهرباء وتيار خفيف',
      'مكتب فني ودعم تنفيذي',
    ],
    pages: ['نظرة عامة', 'الخدمات', 'المشاريع', 'التحميلات', 'اتصل بنا'],
  };
});

const servicesAr = servicesEn.map((service, index) => {
  const text = [
    {
      title: 'المقاولات العامة والأعمال المدنية',
      description:
        'يتم تنفيذها بشكل رئيسي عبر SEC في سوريا مع دعم منطق التنفيذ على مستوى المجموعة في المشاريع المؤسسية وأعمال التأهيل والمباني.',
      bullets: ['أعمال مدنية', 'تأهيل', 'إدارة التنفيذ'],
    },
    {
      title: 'التكييف والتمديدات الصحية والصرف',
      description:
        'تعكس ملفات المجموعة أنظمة التكييف والسباكة والصرف والتهوية وسحب الدخان والتدفئة ودعم أنظمة المولدات.',
      bullets: ['تكييف', 'تمديدات صحية', 'صرف صحي'],
    },
    {
      title: 'مكافحة الحريق وإنذار الحريق',
      description:
        'الشركتان تقدمان خبرة قوية في أنظمة الحماية من الحريق، المضخات، الرش الآلي، الإنذار، الإطفاء، ودعم المكتب الفني للتصميم والحسابات.',
      bullets: ['رشاشات', 'مضخات حريق', 'سلامة الحياة'],
    },
    {
      title: 'الأنظمة الكهربائية والتيار الخفيف',
      description:
        'توزيع الجهد المنخفض، اللوحات، مجاري القضبان، التحكم بالدخول، المراقبة، النداء العام، البيانات والصوت، وأنظمة البنية التحتية الذكية.',
      bullets: ['أنظمة جهد منخفض', 'لوحات كهربائية', 'تيار خفيف'],
    },
    {
      title: 'الصيانة والدعم الفني',
      description:
        'ملف المجموعة يعكس قوة في أعمال الصيانة مع فرق فنية مدربة ودعم مواقع وصيانة طارئة ومجدولة.',
      bullets: ['صيانة مباني', 'دعم MEP', 'كوادر فنية مدربة'],
    },
    {
      title: 'إدارة المشاريع والمكتب الفني',
      description:
        'تصميم وتخطيط واختبارات وتشغيل ومنطق QA/QC ودعم المشتريات وتنسيق تسليم المشاريع عبر الشركتين.',
      bullets: ['تخطيط', 'ضبط جودة', 'اختبارات وتشغيل'],
    },
  ][index];

  return {
    ...service,
    title: text.title,
    description: text.description,
    bullets: text.bullets,
  };
});

const featuredProjectsHtaAr = featuredProjectsEn.hta.map((project, index) => {
  const text = [
    {
      title: 'ميدان الهدف للرماية المرحلة الثانية',
      category: 'HTA / قطر',
      summary: 'توريد وتركيب واختبار وتشغيل أنظمة الكهروميكانيكية'
    },
    {
      title: 'جونيورز',
      category: 'HTA / قطر',
      summary: 'أعمال الحماية من الحريق'
    },
    {
      title: 'الوكرة البدر',
      category: 'HTA / قطر',
      summary: 'نظام إنذار الحريق'
    },
    {
      title: 'الميرة الغرافة، الميرة القطيفية، الميرة إزغوا',
      category: 'HTA / قطر',
      summary: 'تجديد أنظمة الكهروميكانيكية'
    },
    {
      title: 'نجلاء',
      category: 'HTA / قطر',
      summary: 'أعمال التشطيب الداخلي الكاملة'
    },
    {
      title: 'كرافتيراس',
      category: 'HTA / قطر',
      summary: 'أعمال الحماية من الحريق'
    },
    {
      title: 'مباني جزيرة جيوان 7A/B - 5A/B - 4A/B ونادي النادي',
      category: 'HTA / قطر',
      summary: 'تركيب واختبار وتشغيل أنظمة التكييف والتهوية والتدفئة'
    },
    {
      title: 'فيلا أم السانيم',
      category: 'HTA / قطر',
      summary: 'أعمال مدنية وكهروميكانيكية'
    },
    {
      title: 'رأس لفان RLCI',
      category: 'HTA / قطر',
      summary: 'برمجة جميع أنواع لوحات التحكم في أنظمة إنذار الحريق'
    },
    {
      title: 'مبنى سكني وتجاري (قبو + أرضي + 4) منطقة النصر، الدوحة',
      category: 'HTA / قطر',
      summary: 'توريد وتركيب واختبار وتشغيل وصيانة أعمال الكهروميكانيكية'
    },
    {
      title: 'مزرعة الماجد منطقة روضة راشد، الدوحة',
      category: 'HTA / قطر',
      summary: 'توريد وتركيب واختبار وتشغيل نظام مياه الأمطار وأعمال التسطيح الصلب'
    },
    {
      title: 'إكسبو قطر: الجانب التركي',
      category: 'HTA / قطر',
      summary: 'توريد وتركيب واختبار وتشغيل أنظمة الحريق'
    },
    {
      title: 'إكسبو قطر: الجناح الياباني',
      category: 'HTA / قطر',
      summary: 'توريد وتركيب واختبار وتشغيل أنظمة الكهروميكانيكية'
    }
  ][index];

  return {
    ...project,
    title: text.title,
    category: text.category,
    summary: text.summary,
  };
});

const featuredProjectsSECAr = featuredProjectsEn.sec.map((project, index) => {
  const text = [
    {
      title: 'قيادة القوات البحرية والدفاع الساحلي',
      category: 'SEC / سوريا',
      summary: 'تجديد قيادة القوات البحرية والدفاع الساحلي – اللاذقية'
    },
    {
      title: 'مسجد باشورة',
      category: 'SEC / سوريا',
      summary: 'تجديد مسجد باشورة – اللاذقية'
    },
    {
      title: 'مطار ستامو',
      category: 'SEC / سوريا',
      summary: 'عنصر محفظة من الجانب السوري مناسب لتثبيت عرض مشاريع SEC المحلية كجزء من هيكل موقع المجموعة'
    },
    {
      title: 'مشروع أكشاك اللاذقية',
      category: 'SEC / سوريا',
      summary: 'توريد وتركيب 150 كشك في اللاذقية'
    },
    {
      title: 'مسجد الإحسان',
      category: 'SEC / سوريا',
      summary: 'تجديد مسجد الإحسان – كنسيبا - اللاذقية'
    },
    {
      title: 'مدرسة كنسيبا',
      category: 'SEC / سوريا',
      summary: 'تجديد مدرسة كنسيبا - اللاذقية'
    }
  ][index];

  return {
    ...project,
    title: text.title,
    category: text.category,
    summary: text.summary,
  };
});
const featuredProjectsAr: FeaturedProjectsData = {
  hta: featuredProjectsHtaAr,
  sec: featuredProjectsSECAr,
};

const systemsAr = [
  'المقاولات العامة والتأهيل',
  'صيانة الطرق وأعمال البنية التحتية',
  'أنظمة التكييف',
  'أنظمة السباكة والصرف',
  'أنظمة مكافحة الحريق',
  'أنظمة إنذار الحريق',
  'اللوحات الكهربائية ومجاري القضبان',
  'أنظمة التيار الخفيف',
  'خدمات صيانة المباني',
  'الاختبارات والتشغيل',
  'إدارة المشاريع والتخطيط',
  'دعم المكتب الفني',
] as const;

const siteMapAr = [
  { title: 'الرئيسية', description: 'صفحة المجموعة التعريفية التي تعرض مجموعة صهيوني والقيمة المضافة والشركات والقدرات المشتركة.' },
  { title: 'عن المجموعة', description: 'القصة المؤسسية والحضور في الأسواق والفلسفة الهندسية والتموضع الإقليمي.' },
  { title: 'HTA قطر', description: 'فرع الشركة في قطر مع الخدمات والمراجع ومعلومات التواصل.' },
  { title: 'SEC سوريا', description: 'فرع الشركة في سوريا مع الخدمات والمشاريع المحلية والملفات القابلة للتحميل.' },
  { title: 'خدمات المجموعة', description: 'تصنيفات الخدمات المشتركة ضمن إطار احترافي موحد.' },
  { title: 'المشاريع', description: 'مركز مشاريع موحد مع إمكانية التصفية حسب HTA قطر وSEC سوريا.' },
  { title: 'التحميلات', description: 'مساحة مستقبلية للبروفايلات والكتيبات ومستندات المناقصات.' },
  { title: 'اتصل بنا', description: 'تجربة تواصل موحدة مع توجيه الاستفسارات للمجموعة أو HTA قطر أو SEC سوريا.' },
] as const;

const valuePropsAr = valuePropsEn.map((item, index) => {
  const text = [
    {
      title: 'سوقان ومعيار واحد',
      description: 'صورة مجموعة قوية مع الحفاظ على وضوح الفصل التشغيلي بين HTA قطر وSEC سوريا.',
    },
    {
      title: 'هيكل مناسب للمناقصات',
      description: 'مصمم لدعم التأهيل المسبق وبيانات القدرات والتحميلات ودراسات الحالة.',
    },
    {
      title: 'هوية مبنية على التنفيذ',
      description: 'تركيز على التسليم والصيانة وأنظمة MEP وسلامة الحياة وعمق المكتب الفني.',
    },
  ][index];

  return {
    ...item,
    title: text.title,
    description: text.description,
  };
});

const categoriesAr = categoriesEn.map((category , index) => {
  const categorynames =[
    { name :'نظام إنذار الحريق العنواني'},
    {name :'نظام الرش'},
    {name:'طفايات الحريق'},
    {name: 'دولاب خرطوم الحريق والملحقات'},
    {name :'اللافتات الطوارئ، أضواء الخروج وكابل الحريق'},
    {name :'صمامات فرقة الإطفاء'} ,
    {name:'مضخات الإطفاء'},
    {name:'منافذ الحريق'},
    {name: 'نظام إنذار الحريق التقليدي وكاشف مستقل'},
    {name : 'نظام الرغوة'},
    {name :' الصمامات'},
    {name : 'صمام الديلوج'},
    {name :'نظام إطفاء الحريق الكيميائي الرطب'},
    {name :'نظام إطفاء الحريق'},
    {name : 'لوحة إطفاء الحريق' }
  ][index]
  return {
    ...category,
    name:categorynames.name,
  };
});

export function getLocalizedCategories(lang: Language) {
  return lang === 'ar' ? categoriesAr : categoriesEn;
}

export function getLocalizedProduct(product: Product, lang: Language): Product {
  if (lang !== 'ar') {
    return product;
  }

  return productsAr.find(p => p.id === product.id) || product;
}

export function getLocalizedProducts(lang: Language): Product[] {
  return lang === 'ar' ? productsAr : productsEn;
}

type LocalizedSiteData = {
  stats: ReadonlyArray<{ value: string; label: string }>;
  groupHighlights: ReadonlyArray<string>;
  companies: typeof companiesEn;
  services: ReadonlyArray<{
    title: string;
    icon: (typeof servicesEn)[number]['icon'];
    description: string;
    bullets: ReadonlyArray<string>;
  }>;
  featuredProjects: FeaturedProjectsData;
  systems: ReadonlyArray<string>;
  brands: ReadonlyArray<string>;
  siteMap: ReadonlyArray<{ title: string; description: string }>;
  valueProps: ReadonlyArray<{
    title: string;
    description: string;
    icon: (typeof valuePropsEn)[number]['icon'];
  }>;
};

export function getLocalizedSiteData(lang: Language): LocalizedSiteData {
  if (lang === 'ar') {
    return {
      stats: statsAr,
      groupHighlights: groupHighlightsAr,
      companies: companiesAr,
      services: servicesAr,
      featuredProjects: featuredProjectsAr,
      systems: systemsAr,
      brands,
      siteMap: siteMapAr,
      valueProps: valuePropsAr,
    };
  }

  return {
    stats: statsEn,
    groupHighlights: groupHighlightsEn,
    companies: companiesEn,
    services: servicesEn,
    featuredProjects: featuredProjectsEn,
    systems: systemsEn,
    brands,
    siteMap: siteMapEn,
    valueProps: valuePropsEn,
  };
}

export const uiText = {
  en: {
    groupName: 'Sahiony Group',
    brandSubtitle: 'Qatar & Syria Engineering Companies',
    nav: {
      home: 'Home',
      about: 'About',
      hta: 'HTA Qatar',
      sec: 'SEC Syria',
      services: 'Services',
      projects: 'Projects',
      careers: 'Careers',
      contact: 'Contact',
    },
    ctaProposal: 'Request Proposal',
    menu: 'Menu',
    close: 'Close',
    switchTo: 'العربية',
    mobileNavLabel: 'Mobile site navigation',
    hero: {
      badge: 'Sahiony Group • Qatar • Syria • Contracting • MEP • Fire Protection',
      title: 'Sahiony Group — engineering capability across Qatar and Syria.',
      description:
        'This website presents one corporate group with two dedicated company branches: HTA Construction & Trading in Qatar and SEC Engineering & Contracting in Syria.',
      explore: 'Explore Group Structure',
      viewProjects: 'View Projects',
      identity: 'Group Identity',
      identityTitle: 'Two engineering companies under one Sahiony Group presence',
      chips: ['HTA Qatar', 'SEC Syria', 'MEP Systems', 'Fire Protection', 'General Contracting', 'Maintenance & Projects'],
    },
    sections: {
      overviewBadge: 'Group Overview',
      overviewTitle: 'One group structure. Two operating companies. Distinct markets.',
      companiesEyebrow: 'Group Companies',
      companiesTitle: 'One group website with two dedicated company branches.',
      companiesDesc:
        'This architecture lets you market Sahiony Group as the umbrella while giving HTA Qatar and SEC Syria dedicated, professional spaces inside the same website.',
      servicesEyebrow: 'Group Services',
      servicesTitle: 'Shared services organized under one premium framework.',
      servicesDesc: 'The group site starts with a strong shared services page, then routes users to HTA Qatar or SEC Syria where needed.',
      projectsEyebrow: 'Projects',
      projectsTitle: 'One project hub, filtered later by HTA Qatar and SEC Syria.',
      projectsDesc:
        'The group website should use one central project area, with filters and future dedicated case studies for each company branch.',
      structureEyebrow: 'Site Structure',
      structureTitle: 'Recommended full site architecture for Sahiony Group.',
      structureDesc: 'This is the structure recommended for the production website.',
      primaryNavigation: 'Primary navigation',
      unifiedCapability: 'Unified capability',
      suppliers: 'Group suppliers and brands',
      qhseTitle: 'One professional quality and safety language across the group.',
      qhseDesc:
        'The group website should present a consistent quality and safety mindset even while each company keeps its own operating profile.',
      qhseItems: [
        'Continuous quality process',
        'Customer satisfaction focus',
        'Safe execution culture',
        'Compliance-oriented delivery',
        'Management accountability',
        'Execution with discipline',
      ],
      operationalCredibility: 'Operational credibility',
      operationalDesc:
        'The site is ready to hold policies, certifications, safety statistics, QA/QC flowcharts, and governance highlights. Later, HTA and SEC can each have their own compliance and credentials subsection without breaking the group structure.',
      groupContactEyebrow: 'Group Contact',
      groupContactTitle: 'One inquiry point with routing for HTA Qatar and SEC Syria.',
      groupContactDesc: 'The contact experience should feel unified at group level while still letting users choose the relevant company.',
      contactCards: [
        { title: 'Phone', value: 'Syria +963 933 33 5671\nQatar +974 5517 7960' },
        { title: 'Email', value: 'info@htaqatar.com\ngm@htaqatar.com\nanas@htaqatar.com' },
        { title: 'Offices', value: '-Doha, Qatar:Office no.1, Building no 78,Street 840, Zone 39 \nP.O Box: 55015\n-Lattakia, Syria , Baghdad Street \nP.O. Box: 796' },
        { title: 'Inquiry Type', value: 'Group, HTA Qatar, SEC Syria, tenders, projects' },
      ],
      requestProposal: 'Request a Proposal',
      fullName: 'Full name',
      companyName: 'Company name',
      emailAddress: 'Email address',
      phoneNumber: 'Phone number',
      inquiryPlaceholder: 'Tell us whether your inquiry is for Sahiony Group, HTA Qatar, or SEC Syria...',
      submitInquiry: 'Submit Inquiry',
      openCaseStudy: 'Open case study',
      caseStudyReady: 'Case Study Ready',
      plannedSubpages: 'Planned subpages',
      plannedPages: 'Planned pages',
    },
    about: {
      eyebrow: 'About the Group',
      title: 'Sahiony Group',
      description:
        'A cross-market engineering umbrella connecting Qatar execution capability with Syria contracting and reconstruction positioning.',
    },
    servicesPage: {
      eyebrow: 'Services',
      title: 'Group Services',
      description: 'Shared service lines across the group structure.',
    },
    projectsPage: {
      eyebrow: 'Projects',
      title: 'Group Projects',
      description: 'A combined project hub for both companies.',
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'Group Contact',
      description: 'One inquiry point with routing for HTA Qatar and SEC Syria.',
    },
    careersPage: {
      eyebrow: 'Careers',
      title: 'Build Your Career With Us',
      description: 'Join our team of skilled professionals dedicated to engineering excellence.',
      intro: 'At Sahiony Group, we build more than projects—we build lasting careers. We are always looking for skilled, motivated people who take pride in quality work, safety, and teamwork.',
      whyWorkTitle: 'Why work with us?',
      whyWorkItems: [
        'Competitive salary and fair working conditions',
        'Safe, professional worksites',
        'Training, qualifications, and career development',
        'Supportive team culture',
        'Varied projects you can be proud of',
        'Opportunities for experienced professionals and apprentices',
      ],
      whoWeAreTitle: 'Who we are looking for',
      whoWeAreItems: [
        'General construction and renovation',
        'Carpentry, masonry, plastering, and painting',
        'Electrical, plumbing, and installation work',
        'Site supervision and project management',
        'Engineering, planning, and administration',
        'Apprenticeships and entry-level construction roles',
      ],
      whatWeValueTitle: 'What we value',
      whatWeValue: 'We look for people who are reliable, safety-conscious, respectful, and committed to doing excellent work. Construction experience is valued, but a good attitude and willingness to learn matter just as much.',
      applyFormTitle: 'Apply Now',
      applyFormDesc: 'Submit your CV and tell us about yourself. Include the role you are applying for and your relevant experience or qualifications.',
      fullName: 'Full name',
      emailAddress: 'Email address',
      phoneNumber: 'Phone number',
      position: 'Position you are applying for',
      experience: 'Tell us about your experience and qualifications',
      attachCv: 'Attach your CV',
      submitApplication: 'Submit Application',
    },
    footer: {
      note: 'Engineering and contracting excellence across Qatar and Syria.',
    },
  },
  ar: {
    groupName: 'مجموعة صهيوني',
    brandSubtitle: 'شركات هندسية في قطر وسوريا',
    nav: {
      home: 'الرئيسية',
      about: 'عن المجموعة',
      hta: 'HTA قطر',
      sec: 'SEC سوريا',
      services: 'الخدمات',
      projects: 'المشاريع',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
    },
    ctaProposal: 'اطلب عرض سعر',
    menu: 'القائمة',
    close: 'إغلاق',
    switchTo: 'English',
    mobileNavLabel: 'تنقل الموقع على الجوال',
    hero: {
      badge: 'مجموعة صهيوني • قطر • سوريا • مقاولات • MEP • أنظمة حريق',
      title: 'مجموعة صهيوني — قدرات هندسية متكاملة عبر قطر وسوريا.',
      description:
        'يعرض هذا الموقع مجموعة مؤسسية واحدة تضم فرعين متخصصين: HTA للإنشاءات والتجارة في قطر وSEC للهندسة والمقاولات في سوريا.',
      explore: 'استكشف هيكل المجموعة',
      viewProjects: 'عرض المشاريع',
      identity: 'هوية المجموعة',
      identityTitle: 'شركتان هندسيتان تحت حضور موحد لمجموعة صهيوني',
      chips: ['HTA قطر', 'SEC سوريا', 'أنظمة MEP', 'أنظمة الحريق', 'المقاولات العامة', 'الصيانة والمشاريع'],
    },
    sections: {
      overviewBadge: 'نظرة عامة على المجموعة',
      overviewTitle: 'هيكل مجموعة واحد. شركتان تشغيليتان. أسواق مختلفة.',
      companiesEyebrow: 'شركات المجموعة',
      companiesTitle: 'موقع مجموعة واحد مع فرعين مخصصين لكل شركة.',
      companiesDesc:
        'يتيح هذا الهيكل تسويق مجموعة صهيوني كمظلة موحدة مع منح HTA قطر وSEC سوريا مساحات احترافية مستقلة داخل نفس الموقع.',
      servicesEyebrow: 'خدمات المجموعة',
      servicesTitle: 'خدمات مشتركة ضمن إطار احترافي موحد.',
      servicesDesc: 'يبدأ الموقع بصفحة خدمات مشتركة قوية ثم يوجه الزوار إلى HTA قطر أو SEC سوريا حسب الحاجة.',
      projectsEyebrow: 'المشاريع',
      projectsTitle: 'مركز مشاريع موحد مع تصفية لاحقة حسب HTA قطر وSEC سوريا.',
      projectsDesc: 'يجب أن يعتمد الموقع على مركز مشاريع موحد مع فلاتر ودراسات حالة مستقبلية لكل فرع.',
      structureEyebrow: 'هيكل الموقع',
      structureTitle: 'الهيكل الكامل المقترح لموقع مجموعة صهيوني.',
      structureDesc: 'هذا هو الهيكل المقترح للموقع الإنتاجي.',
      primaryNavigation: 'التنقل الرئيسي',
      unifiedCapability: 'قدرات موحدة',
      suppliers: 'موردو وعلامات المجموعة',
      qhseTitle: 'لغة موحدة للجودة والسلامة المهنية على مستوى المجموعة.',
      qhseDesc:
        'يجب أن يعكس موقع المجموعة ثقافة ثابتة للجودة والسلامة حتى مع احتفاظ كل شركة بملفها التشغيلي الخاص.',
      qhseItems: [
        'عملية جودة مستمرة',
        'التركيز على رضا العملاء',
        'ثقافة تنفيذ آمنة',
        'تسليم متوافق مع المتطلبات',
        'مساءلة إدارية واضحة',
        'تنفيذ منضبط',
      ],
      operationalCredibility: 'مصداقية تشغيلية',
      operationalDesc:
        'الموقع جاهز لعرض السياسات والشهادات وإحصاءات السلامة ومخططات QA/QC وحوكمة الأعمال. ويمكن لاحقا تخصيص أقسام امتثال وشهادات منفصلة لكل من HTA وSEC دون كسر هيكل المجموعة.',
      groupContactEyebrow: 'تواصل المجموعة',
      groupContactTitle: 'نقطة تواصل واحدة مع توجيه الاستفسارات إلى HTA قطر وSEC سوريا.',
      groupContactDesc: 'يجب أن تكون تجربة التواصل موحدة على مستوى المجموعة مع تمكين المستخدم من اختيار الشركة المناسبة.',
      contactCards: [
        { title: 'الهاتف', value: '+963 933 33 5671 / +974 5517 7960' },
        { title: 'البريد الإلكتروني', value: 'info@htaqatar.com / gm@htaqatar.com / anas@htaqatar.com' },
        { title: 'المكاتب', value: 'الدوحة، قطر / اللاذقية، سوريا' },
        { title: 'نوع الاستفسار', value: 'المجموعة، HTA قطر، SEC سوريا، مناقصات، مشاريع' },
      ],
      requestProposal: 'اطلب عرض سعر',
      fullName: 'الاسم الكامل',
      companyName: 'اسم الشركة',
      emailAddress: 'البريد الإلكتروني',
      phoneNumber: 'رقم الهاتف',
      inquiryPlaceholder: 'أخبرنا إن كان الاستفسار يخص مجموعة صهيوني أو HTA قطر أو SEC سوريا...',
      submitInquiry: 'إرسال الاستفسار',
      openCaseStudy: 'عرض دراسة الحالة',
      caseStudyReady: 'جاهز كدراسة حالة',
      plannedSubpages: 'الصفحات المخطط لها',
      plannedPages: 'الصفحات المخطط لها',
    },
    about: {
      eyebrow: 'عن المجموعة',
      title: 'مجموعة صهيوني',
      description: 'مظلة هندسية عابرة للأسواق تربط قدرات التنفيذ في قطر بخبرة المقاولات وإعادة الإعمار في سوريا.',
    },
    servicesPage: {
      eyebrow: 'الخدمات',
      title: 'خدمات المجموعة',
      description: 'خطوط خدمات مشتركة على مستوى هيكل المجموعة.',
    },
    projectsPage: {
      eyebrow: 'المشاريع',
      title: 'مشاريع المجموعة',
      description: 'مركز مشاريع موحد للشركتين.',
    },
    contactPage: {
      eyebrow: 'اتصل بنا',
      title: 'تواصل المجموعة',
      description: 'نقطة تواصل موحدة مع توجيه الاستفسارات إلى HTA قطر وSEC سوريا.',
    },
    careersPage: {
      eyebrow: 'الوظائف',
      title: 'ابنِ مسيرتك المهنية معنا',
      description: 'انضم إلى فريقنا من المحترفين المكرسين لتحقيق التميز الهندسي.',
      intro: 'في مجموعة صهيوني، نبني أكثر من المشاريع - نبني مسيرات مهنية طويلة الأجل. نحن دائماً نبحث عن أشخاص ماهرين ومتحمسين يفتخرون بجودة العمل والسلامة والعمل الجماعي.',
      whyWorkTitle: 'لماذا تعمل معنا؟',
      whyWorkItems: [
        'راتب تنافسي وظروف عمل عادلة',
        'مواقع عمل آمنة واحترافية',
        'التدريب والمؤهلات وتطوير المسار الوظيفي',
        'ثقافة فريق داعمة',
        'مشاريع متنوعة يمكنك أن تفتخر بها',
        'فرص للمحترفين ذوي الخبرة والمتدربين',
      ],
      whoWeAreTitle: 'من نبحث عنهم',
      whoWeAreItems: [
        'المقاولات العامة والتجديد',
        'النجارة والبناء والتشطيب والدهان',
        'الأعمال الكهربائية والسباكة والتركيب',
        'إشراف المواقع وإدارة المشاريع',
        'الهندسة والتخطيط والإدارة',
        'التدريب والأدوار التدريبية في المقاولات',
      ],
      whatWeValueTitle: 'ما نقدره',
      whatWeValue: 'نبحث عن أشخاص موثوقين وواعين للسلامة واحترافيين والمتزامين بالعمل الممتاز. الخبرة في المقاولات مهمة، لكن الموقف الإيجابي والاستعداد للتعلم مهمة بنفس القدر.',
      applyFormTitle: 'قدِّم طلبك الآن',
      applyFormDesc: 'أرسل سيرتك الذاتية وأخبرنا عن نفسك. أضف الوظيفة التي تتقدم لها وخبرتك أو مؤهلاتك الملائمة.',
      fullName: 'الاسم الكامل',
      emailAddress: 'البريد الإلكتروني',
      phoneNumber: 'رقم الهاتف',
      position: 'الوظيفة التي تتقدم لها',
      experience: 'حدثنا عن خبرتك ومؤهلاتك',
      attachCv: 'أرفق سيرتك الذاتية',
      submitApplication: 'إرسال الطلب',
    },
    footer: {
      note: 'تميّز هندسي ومقاولاتي عبر قطر وسوريا.',
    },
  },
} as const;

export const HeroText ={
  en :{
    groupName: 'Sahiony Group',
    brandSubtitle: 'Qatar & Syria Engineering Companies',
    Greeting:'Welcome',
    Herobutton:'Explore Properties'
  },
  ar:{
    groupName:'مجموعة صهيوني',
    brandSubtitle: 'شركات هندسية في قطر وسوريا',
    Greeting:"مرحبا",
    Herobutton:"اكتشف خدماتنا"
  }
}as const;


// const productsArLegacy: Product[] = [
//   // =========================================================
//   // ADDRESSABLE FIRE ALARM SYSTEM

//   {
//     id: "iq601",
//     categoryId: "addressable-fire-alarm",

//     name: "فايرغارد IQ601 لوحة إنذار حريق قابلة للعنونة",
//     model: "IQ601",

//     description:
//       "لوحة تحكم إنذار حريق قابلة للعنونة designed for small to medium-scale commercial, institutional and industrial facilities.",

//     image: "/products/addressable-fire-alarm/iq601.jpg",

//     specifications: [
//       {
//         label: "حلقات قابلة للعنونة",
//         value: "1",
//       },
//       {
//         label: "الأجهزة لكل حلقة",
//         value: "252 جهاز/نقطة قابلة للعنونة",
//       },
//       {
//         label: "دوائر أجهزة التنبيه",
//         value: "2 to 4",
//       },
//       {
//         label: "الشاشة",
//         value: '7" LCD, 800 × 480',
//       },
//       {
//         label: "مفاتيح الوظائف",
//         value: "6",
//       },
//       {
//         label: "مؤشرات LED",
//         value: "9",
//       },
//       {
//         label: "لوحات بعيدة / وحدات بيان",
//         value: "حتى 109",
//       },
//       {
//         label: "المعيار",
//         value: "UL864 10th Edition",
//       },
//     ],

//     features: [
//       "تحكم إنذار حريق قابل للعنونة",
//       "مناسب للتركيبات الجديدة وتطبيقات التحديث",
//       "اتصال شبكي باللوحات البعيدة ووحدات البيان",
//       "متوفر بهيكل أحمر أو رمادي",
//     ],

//     applications: [
//       "المنشآت التجارية",
//       "المنشآت المؤسسية",
//       "المنشآت الصناعية",
//     ],

//     certifications: ["UL864 10th Edition"],
//   },

//   {
//     id: "iq600",
//     categoryId: "addressable-fire-alarm",

//     name: "فايرغارد IQ600 لوحة إنذار حريق قابلة للعنونة",
//     model: "IQ600",

//     description:
//       "لوحة تحكم إنذار حريق قابلة للعنونة designed for small to medium-sized facilities and new or retrofit installations.",

//     image: "/products/addressable-fire-alarm/iq600.jpg",

//     specifications: [
//       {
//         label: "حلقات قابلة للعنونة",
//         value: "حتى 4",
//       },
//       {
//         label: "الأجهزة لكل حلقة",
//         value: "252 جهاز/نقطة قابلة للعنونة",
//       },
//       {
//         label: "دوائر أجهزة التنبيه",
//         value: "2 to 10",
//       },
//       {
//         label: "نقاط تلامس المرحل",
//         value: "4+1 Form C dry relay contacts",
//       },
//       {
//         label: "الشاشة",
//         value: '7" LCD, 800 × 480',
//       },
//       {
//         label: "مفاتيح الوظائف",
//         value: "6",
//       },
//       {
//         label: "مؤشرات LED",
//         value: "9",
//       },
//       {
//         label: "لوحات بعيدة / وحدات بيان",
//         value: "حتى 109",
//       },
//     ],

//     features: [
//       "حتى four addressable signalling line circuits",
//       "252 devices or points per loop",
//       "إمكانية الاتصال بالشبكة",
//       "واجهة مستخدم LCD سهلة الاستخدام",
//     ],

//     certifications: ["UL864 10th Edition"],
//   },

//   {
//     id: "iq605",
//     categoryId: "addressable-fire-alarm",
//     name: "فايرغارد IQ605 لوحة إنذار حريق قابلة للعنونة",
//     model: "IQ605",
//     description:
//       "لوحة تحكم إنذار حريق قابلة للعنونة with مدمج 30-zone switch/LED annunciator for small to medium-scale facilities.",
//     image: "/products/addressable-fire-alarm/iq605.jpg",
//     specifications: [
//       {
//         label: "حلقات قابلة للعنونة",
//         value: "1",
//       },
//       {
//         label: "الأجهزة",
//         value: "252 أجهزة قابلة للعنونة",
//       },
//       {
//         label: "دوائر أجهزة التنبيه",
//         value: "4 الفئة A/B, قابلة للتوسعة إلى 8",
//       },
//       {
//         label: "المناطق",
//         value: "30 مدمج zones",
//       },
//       {
//         label: "مخارج المرحل",
//         value: "4 Form C dry relay contacts",
//       },
//       {
//         label: "الشاشة",
//         value: '7" LCD, 800 × 480',
//       },
//       {
//         label: "لوحات بعيدة / وحدات بيان",
//         value: "حتى 109",
//       },
//       {
//         label: "شحن الطاقة الثانوية",
//         value: "40 AH",
//       },
//     ],
//     features: [
//       "تصميم قائم على معالج الإشارة الرقمية",
//       "إعدادات اللوحة الأمامية محمية بكلمة مرور",
//       "30-zone switch/LED annunciator",
//       "دوائر تنبيه قابلة للتوسعة",
//     ],
//     certifications: ["UL864 10th Edition"],
//   },
//   {
//     id: "fg-evac-500",
//     categoryId: "addressable-fire-alarm",
//     name: "فايرغارد FG-EVAC صوتي نظام",
//     model: "FG-EVAC-500",
//     description:
//       "EVAC صوتي نظامs provide voice communication. The صوتي وحدة تحكم has built in two amplifier 500 واط with backup and built in power supply charger 30 ساعة استعداد + 30 دقيقة Evac. It continues to provide two simultaneous channels EVAC and Alert 10 دقيقة and optional 3 x balanced audio input + 2 Mixer. Digitized alarm tones and digitally recorded voice messages and message تصنيع, and manages both multiple 8 button microphone zone inputs and 3 audio inputs with 1 Mixer and 2 message player and 6 audio output.",
//     image: "/products/addressable-fire-alarm/fg-evac-500.jpg", 
//     features: [
//       "إنذار/evacuation signal generation with multiple مدمج tones",
//       "المعيار or customized digital message storage and message generation",
//       "تشغيل آلي أو يدوي",
//       "Mass Notification operation 1-2 channels simultaneously and optional above 2 channels are available",
//       "صوتي systems provide dual channel operation",
//       "3x audio balance Input and Dry contact to interface external صوتي Source and MIC and 1x Mixer and 2 amplifier's Mixer output",
//       "1x Bus ACSI to interface 8 Voice alarm panel or 8x MIC or Mixed together up to 8 units",
//       "Up 10 x 500 واط المضخمات can connect in RS485 to distribute in a group of floors",
//       "Each Amplifier support 6x Speakers zones to configure channel #1 EVAC and Channel #2 x Alert and phase evacuation other Speaker zones can be customised message",
//       "3 Dry contact relay 1. General إنذار 2. طوارئ Evac 3.",
//       "يمكن استيراد الرسائل الصوتية المسجلة عبر USB",
//       "نسخ احتياطي واستعادة عبر USB",
//       "Backup المضخمات 500واط",
//       "Advanced integration Override output 24V, Attenuators, Flash light and 3rd party system",
//       "6x صوتي Output 24V for Attenuator and Flash إنارةs and 4 x Pre-Amplifier output",
//       "تكامل إنذار الحريق مع المراقبة",
//       "مراقبة خط السماعات",
//       "مراقبة البطارية",
//       "Wiring Method A+B",
//       "تصميم للتركيب على الحائط أو الرف",
//     ],
//     specifications: [
//       {
//         label: "المضخمات",
//         value: "Built-in two amplifier 500 واط with backup",
//       },
//       {
//         label: "مزود الطاقة / الشاحن",
//         value: "30 ساعة استعداد + 30 دقيقة Evac",
//       },
//       {
//         label: "القنوات",
//         value: "Two simultaneous channels EVAC and Alert (10 دقيقة)",
//       },
//       {
//         label: "مداخل الصوت",
//         value: "Optional 3 x balanced audio input + 2 Mixer",
//       },
//       {
//         label: "مداخل مناطق الميكروفون",
//         value: "Multiple 8 button microphone zone inputs",
//       },
//       {
//         label: "مخارج الصوت",
//         value: "6 audio output",
//       },
//       {
//         label: "مخارج ما قبل المضخم",
//         value: "4 pre-AMP outputs",
//       },
//       {
//         label: "مخارج التجاوز",
//         value: "6 override outputs",
//       },
//     ],
//     variants: [
//       {
//         model: "FG901CP_AP",
//         description: "لوحة تحكم إنذار الحريق 1-9 Loop",
//       },
//       {
//         model: "FG901-MININET_AP",
//         description: "لوحة تحكم إنذار الحريق 1 Loop",
//       },
//       {
//         model: "FG-EVAC-500",
//         description:
//           "PUBLIC ADDRESS AND VOICE ALARM SYSTEM 500 W 6 zones. Line supervision without return cable (EOL devices not included). DSP processor. 6 control zones. Possibility of wall installation, rack and desk. Integrated battery charger and housing EN 54-4 certified (OPTIONAL: To be activated with USD card). Integration interface with fire alarm panel. EVAC and ALERT pre-recorded messages. All integrated, no need for external applications. 4 pre-AMP outputs. 3 audio inputs with priority and mixed audio input. 6 override outputs.",
//       },
//       {
//         model: "FG-EVAC-VAP1",
//         description:
//           "VOICE ALARM PANEL MODEL VAP-1: External remote control that incorporates an emergency microphone and provides direct access to voice evacuation",
//       },
//       {
//         model: "FG-EVAC-BC",
//         description:
//           "USD CARD FOR ACTIVATION OF EN54-4 BATTERY CHARGER IN EVAC-500. Battery charger update and activation card EN54-4 for EVAC-500. Once activated, the card becomes a key for the charger to work permanently.",
//       },
//       {
//         model: "FG-EVAC-MPS8Z",
//         description: "PAGING MICROPHONE",
//       },
//       {
//         model: "FG-EVAC-MPS8Z",
//         description: "Speaker line End Of Line Device",
//       },
//       {
//         model: "FG-EVAC-RMA2",
//         description: '19" Rack Fixed Mounting Kit',
//       },
//       {
//         model: "FG-EVAC-WMA",
//         description: "Wall Mount Kit For FG-EVAC-500",
//       },
//     ],
//   },
  
//   // =========================================================
//   // FIRE HOSE REEL
//   // =========================================================
//    {
//     id: "fghr-1930m",
//     categoryId: "fire-hose-reel",
//     name: "بكرة خرطوم حريق يدوية متأرجحة",
//     model: "FGHR 1930M",
//     description:
//       "يدوي swinging fire hose reel designed for fast and steady water delivery during firefighting.",
//     image: "/products/fire-hose-reel/fghr-1930m.jpg",
//     specifications: [
//       {
//         label: "Type",
//         value: "يدوي swinging",
//       },
//       {
//         label: "Approval",
//         value: "EN671",
//       },
//     ],
//      variants: [{
//         model: "FGHR 1930M",
//         description:'يدوي swinging type',
//      },
//      {
//         model: "FGHR 1930A",
//         description:'Auto swinging 3/4 type',
//      },
//      {
//         model: "FGHR 2530M",
//         description:'يدوي swinging 1" × 30m type',
//      },
//      {
//         model: "FGHR 2530A",
//         description:'Auto swinging 1" × 30m type',
//      }],
//   },
//   {
//     id: "fire-hose-reel-cabinet",
//     categoryId: "fire-hose-reel",
//     name: "خزائن بكرات خراطيم الحريق",
//     description:
//       "فايرغارد has a wide range of cabinets manufactured with 1.2mm thickness Steel بودرة Coated RAL 3001 Red. Can be customized according to the architectural requirements. Door sign according to 92/58/EEC. 35mm Ø Knockouts for inlet pipework both sides.",
//     image: "/products/fire-hose-reel/fire-hose-reel-cabinet.jpg",
//     features: [
//       "1.2mm thickness steel تصنيع",
//       "بودرة coated RAL 3001 Red finish as standard",
//       "Customizable according to architectural requirements",
//       "Door sign according to 92/58/EEC",
//       "35mm Ø knockouts for inlet pipework on both sides",
//       "Available finishes: Red powder coated, Stainless Steel / Brush / Mirror / Satin upon request",
//     ],
//     specifications: [
//       {
//         label: "Material",
//         value: "1.2mm thickness steel",
//       },
//       {
//         label: "المعيار Finish",
//         value: "بودرة coated RAL 3001 Red",
//       },
//       {
//         label: "Optional Finishes",
//         value: "Stainless Steel / Brush / Mirror / Satin",
//       },
//       {
//         label: "Single خزانة Size",
//         value: "760 × 760 × 280 mm",
//       },
//       {
//         label: "Double خزانة Size",
//         value: "1400 × 760 × 250 mm",
//       },
//       {
//         label: "Knockouts",
//         value: "35mm Ø for inlet pipework (both sides)",
//       },
//     ],
//     certifications: ["BSI"],
//     variants: [
//       {
//         model: "Single Cabinet",
//         description: "المعيار single fire hose reel cabinet",
//         specifications: [
//           { label: "Dimensions", value: "760 × 760 × 280 mm" },
//         ],
//       },
//       {
//         model: "Double Cabinet",
//         description: "المعيار double fire hose reel cabinet",
//         specifications: [
//           { label: "Dimensions", value: "1400 × 760 × 250 mm" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "fire-hose",
//     categoryId: "fire-hose-reel",
//     name: "خرطوم حريق",
//     description:
//       "فايرغارد produces various types of fire fighting hoses with high quality for most demanding situations. All hoses are manufactured according to National حريق Protection Association (NFPA) 1961 latest edition. The فايرغارد Model 150, 200, 250 & 300 synthetic fire hose is widely used by firefighters worldwide. This hose features: tough, durable and abrasion resistant, supplied with different couplings. The all synthetic تصنيع makes it rot proof and easy to clean.",
//     image:  "/products/fire-hose-reel/fire-hose.jpg",
//     features: [
//       "Tough, durable and abrasion resistant",
//       "Supplied with different couplings",
//       "All synthetic تصنيع – rot proof and easy to clean",
//       "Manufactured according to NFPA 1961 latest edition",
//     ],
//     specifications: [
//       {
//         label: "Construction",
//         value: "Polyester filaments in wrap and weft direction with smooth EPDM lining for low friction loss",
//       },
//     ],
//     certifications: ["FM Approved", "UL Listed"],
//     variants: [
//       { model: "FGH150", description: "Synthetic fire hose" },
//       { model: "FGH15-250", description: "Synthetic fire hose" },
//       { model: "FGH200", description: "Synthetic fire hose" },
//       { model: "FGH25-250", description: "Synthetic fire hose" },
//       { model: "FGH300", description: "Synthetic fire hose" },
//     ],
//   },
//   {
//     id: "fire-hose-dura-line",
//     categoryId: "fire-hose-reel",
//     name: "خرطوم حريق دورا-لاين، النوع 3",
//     model: "FGH303N",
//     description:
//       "فايرغارد produces various types of fire fighting hoses with high quality for most demanding situations. All hoses are manufactured according to National حريق Protection Association (NFPA) 1961 latest edition. The فايرغارد Model Dura-line FGH303N synthetic fire hose is widely used by firefighters worldwide. This hose features: tough, durable and abrasion resistant, supplied with different couplings. The Nitrile rubber cover makes it rot proof and easy to clean.",
//     image: "/products/fire-hose-reel/fire-hose-dura-line.jpg",
//     features: [
//       "Tough, durable and abrasion resistant",
//       "Supplied with different couplings",
//       "Nitrile rubber cover – rot proof and easy to clean",
//       "Manufactured according to NFPA 1961 latest edition",
//     ],
//     specifications: [
//       {
//         label: "Construction",
//         value: "Polyester reinforcement with Nitrile rubber cover and inner liner Nitrile rubber",
//       },
//     ],
//     certifications: ["UL Listed"],
//     variants: [
//       { model: "FGH303N", description: "Dura-Line Type 3 synthetic fire hose" },
//     ],
//   },
//   {
//     id: "angle-hose-valve",
//     categoryId: "fire-hose-reel",
//     name: "صمام زاوية للخرطوم",
//     description:
//       "Angle pattern brass hose valves, with threaded connections, intended to control the flow of water from the main risers in standpipe systems. Turning the handle counter clockwise the hose valve opens, allowing the water to flow out from the valve; turning the handle clockwise, the valve shuts off. Hose valves are used with a خرطوم حريق Rack Assembly, or as حريق Department outlet connections.",
//     image:  "/products/fire-hose-reel/angle-hose-valve.jpg",
//     features: [
//       "Angle pattern brass تصنيع",
//       "Threaded connections",
//       "تحكمs flow from main risers in standpipe systems",
//       "Suitable for خرطوم حريق Rack Assembly or حريق Department outlet connections",
//     ],
//     certifications: ["FM Approved", "UL Listed"],
//     variants: [
//       {
//         model: "FGAV105",
//         description: "1.5\" & 2.5\" صمام زاوية للخرطوم",
//       },
//     ],
//   },
//   {
//     id: "pressure-reducing-angle-valve",
//     categoryId: "fire-hose-reel",
//     name: "صمام زاوية مخفّض للضغط",
//     description:
//       "الضغط reducing device angle valve 300 lb. Rated adjustable restrictions of residual pressure up to 300 lb. Locking pin device restricts full opening of valve – removed by firefighters to allow full opening of valve. Female × male. المعيار Equipment: Female NPT inlet × male hose thread outlet, forged brass valve, Red hand wheel.",
//     image: "/products/fire-hose-reel/pressure-reducing-angle-valve.jpg",
//     features: [
//       "الضغط reducing device",
//       "Rated adjustable restrictions of residual pressure up to 300 lb",
//       "Locking pin device restricts full opening (removed by firefighters for full flow)",
//       "Forged brass valve with red hand wheel",
//     ],
//     specifications: [
//       {
//         label: "Inlet",
//         value: "Female NPT",
//       },
//       {
//         label: "Outlet",
//         value: "Male hose thread",
//       },
//       {
//         label: "الضغط Rating",
//         value: "300 lb",
//       },
//     ],
//     certifications: ["FM Approved"],
//     variants: [
//       {
//         model: "FGPRV115",
//         description: "1.5\" Pressure Reducing Angle Valve",
//       },
//       {
//         model: "FGPRV125",
//         description: "2.5\" Pressure Reducing Angle Valve",
//       },
//     ],
//   },
//   {
//     id: "branch-pipes-lever-operated",
//     categoryId: "fire-hose-reel",
//     name: "فوهات مزودة بذراع تشغيل",
//     description:
//       "فايرغارد branchpipes are lever operated fire nozzles manufactured in light alloy to achieve a robust, durable fire branch that remains extremely light and manoeuvrable for ease of use. The selection between Jet and Spray and On / Off modes is easily achieved by adjusting the lever arm accordingly. This simple to use system allows for complete control by the operator to adjust his water flow to suit the individual application required.",
//     image: "/products/fire-hose-reel/branch-pipes-lever-operated.jpg",
//     features: [
//       "Lever operated",
//       "إنارة alloy تصنيع – robust yet lightweight and manoeuvrable",
//       "Easy selection between Jet, Spray and On/Off modes via lever arm",
//       "Complete control of water flow for different applications",
//     ],
//     certifications: ["LPCB"],
//     variants: [
//       { model: "FG07-131C-00", description: "Lever operated branch pipe" },
//       { model: "FG07-131A-00", description: "Lever operated branch pipe" },
//       { model: "FG07-131B-00", description: "Lever operated branch pipe" },
//     ],
//   },
//   // =========================================================
//   // FIRE HYDRANT
//   // =========================================================

//   {
//     id: "fgh-701",
//     categoryId: "fire-hydrant",
//     name: "صنبور حريق عمودي جاف",
//     model: "FGH 701",
//     description:
//       "Dry barrel pillar hydrant designed for high-performance fire protection applications.",
//     image: "/products/fire-hydrant/fgh-701.jpg",
//     specifications: [
//       {
//         label: "الضغط rating",
//         value: "250 PSI",
//       },
//       {
//         label: "Body material",
//         value: "Ductile iron",
//       },
//       {
//         label: "Outlet",
//         value: '2 × 2½" instantaneous outlets',
//       },
//       {
//         label: "Pumper",
//         value: '1 × 4" pumper',
//       },
//       {
//         label: "Working pressure",
//         value: "16 Bar",
//       },
//     ],
//     certifications: [
//       "BS EN 14384:2005",
//       "BS 1074-1",
//       "BS 1074-2",
//       "BS 1074-6",
//     ],
//   },

//   {
//     id: "fgdh100",
//     categoryId: "fire-hydrant",
//     name: "صنبور حريق جاف 4 Inch",
//     model: "FGDH100",
//     description:
//       "Dry barrel hydrant with ductile iron body and corrosion-protected تصنيع.",
//     image: "/products/fire-hydrant/fgdh100.jpg",
//     specifications: [
//       {
//         label: "Size",
//         value: '4"',
//       },
//       {
//         label: "Type",
//         value: "Dry barrel hydrant",
//       },
//     ],
//     certifications: [
//       "AWWA C502",
//       "UL 246",
//       "FM 1510",
//       "BS EN 14384:2005",
//     ],
//   },

//   {
//     id: "fgdh150",
//     categoryId: "fire-hydrant",
//     name: "صنبور حريق جاف 6 Inch",
//     model: "FGDH150",
//     description:
//       "Dry barrel hydrant designed for reliable fire protection applications.",
//     image: "/products/fire-hydrant/fgdh100.jpg",
//     specifications: [
//       {
//         label: "Size",
//         value: '6"',
//       },
//       {
//         label: "Type",
//         value: "Dry barrel hydrant",
//       },
//     ],

//     certifications: [
//       "AWWA C502",
//       "UL 246",
//       "FM 1510",
//     ],
//   },

//   {
//     id: "fghw-511",
//     categoryId: "fire-hydrant",
//     name: "صنبور حريق رطب",
//     model: "FGHW 511",
//     description:
//       "Wet barrel fire hydrant designed for locations where freezing conditions are not expected.",
//     image: "/products/fire-hydrant/fghw-511.jpg",
//     specifications: [
//       {
//         label: "Working pressure",
//         value: "250 PSI",
//       },
//       {
//         label: "Type",
//         value: "Wet barrel",
//       },
//     ],

//     certifications: ["UL Listed", "AWWA C503"],
//   },
//   {
//     id: "underground-hydrant",
//     categoryId: "fire-hydrant",
//     name: "صنبور حريق تحت الأرض",
//     description:
//       "Our type 2 underground hydrant is manufactured with a cast iron body and complies with BS 750, BS EN1074-2:2000 and EN 14339:2005 requirements. It is supplied with a 2½\" male outlet secured with M12 bolts and is protected by a removable plastic cap. The inlet flange is universally drilled to EN1092-2 PN10/16 and BS10 table D/E. The underground hydrant has a blue epoxy resin coating internally and externally and is for cold water use. Fire hydrant standpipes are then screwed onto the outlet of the underground hydrant and a fire hydrant key and bar is used to open the valve to allow water flow.",
//     image: "/products/fire-hydrant/underground-hydrant.jpg",
//     applications: [
//       "ماء Companies",
//       "صناعي Sectors",
//       "Construction",
//       "Groundworks",
//     ],
//     certifications: [
//       "BS 750",
//       "BS EN1074-2:2000",
//       "EN 14339:2005",
//     ],
//     specifications: [
//       {
//         label: "Body Material",
//         value: "Cast iron",
//       },
//       {
//         label: "Outlet",
//         value: "2½\" male outlet secured with M12 bolts",
//       },
//       {
//         label: "Outlet Protection",
//         value: "Removable plastic cap",
//       },
//       {
//         label: "Inlet Flange",
//         value: "Universally drilled to EN1092-2 PN10/16 and BS10 table D/E",
//       },
//       {
//         label: "Coating",
//         value: "Blue epoxy resin coating (internal and external)",
//       },
//       {
//         label: "Service",
//         value: "Cold water use",
//       },
//     ],
//   },
//   // =========================================================
//   // FOAM SYSTEM
//   // =========================================================
//   {
//     id: "bladder-tank",
//     categoryId: "foam-system",
//     name: "خزان خزان مرن",
//     description:
//       "The خزان خزان مرن رغوة Proportioning نظام utilises the water pressure to inject foam concentrate into a water supply and automatically proportions foam concentrate over a wide range of flow and pressure, with very low pressure drop. This system does not require a concentrate supply pump.",
//     image:"/products/foam-system/ratio-controller.jpg",
//     features: [
//       "Utilises water pressure to inject foam concentrate",
//       "Automatically proportions foam concentrate over a wide range of flow and pressure",
//       "Very low pressure drop",
//       "No concentrate supply pump required",
//     ],
//     specifications: [
//       {
//         label: "Tank Mounting Type",
//         value: "Vertical or Horizontal",
//       },
//       {
//         label: "Concentrate Storage السعة (Vertical)",
//         value: "150 litres to 5000 litres (40 to 1320 Gallons US)",
//       },
//       {
//         label: "Concentrate Storage السعة (Horizontal)",
//         value: "150 litres to 10000 litres (40 to 2640 Gallons US)",
//       },
//       {
//         label: "Rated الضغط",
//         value: "12 Bar (175 PSI)",
//       },
//       {
//         label: "Factory Test الضغط",
//         value: "18 Bar (262 PSI)",
//       },
//       {
//         label: "Vessel Construction",
//         value: "Carbon steel as per ASME Code Section VIII for unfired pressure vessels",
//       },
//       {
//         label: "Bladder",
//         value: "Thermo Plastic, Mullen burst pressure +800 PSI. Thickness 1.44 / 0.127 mm",
//       },
//       {
//         label: "Centre Tube",
//         value: "PVC",
//       },
//       {
//         label: "External Piping",
//         value: "ماء side: Carbon steel seamless pipe sch 40. رغوة concentrate side: SS sch 40",
//       },
//       {
//         label: "Vent and Drain",
//         value: "Ball valve (برونز / SS)",
//       },
//       {
//         label: "Optional",
//         value: "Sight gauge with shut off and drain valve, ladder and concentrate supply control valve",
//       },
//       {
//         label: "Finish",
//         value: "Epoxy red painted",
//       },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "foam-chamber",
//     categoryId: "foam-system",
//     name: "حجرة الرغوة",
//     description:
//       "Heavy duty welded تصنيع foam chamber with choice of Carbon Steel or Stainless Steel material. الميزات frangible glass vapour seal and controlled air flow proportional to liquid flow for optimum foam quality.",
//     image: "/products/foam-system/foam-chamber.jpg",
//     features: [
//       "UL Listed",
//       "Heavy duty welded تصنيع with choice of Carbon Steel or Stainless Steel material",
//       "Frangible Glass Vapour Seal",
//       "تحكمled Air Flow proportional to liquid flow for optimum foam quality and rupture of vapour seal in narrow pressure tolerances for increased reliability",
//       "Field replaceable orifice plate fitted with حجرة الرغوة",
//     ],
//     certifications: ["UL Listed"],
//   },

//   {
//     id: "rim-seal-foam-pourer",
//     categoryId: "foam-system",
//     name: "موزع رغوة لختم الحافة",
//     model: "RPA / RPA-S",
//     description:
//       "Air-aspirating foam generator designed to deliver foam into the tank seal area.",
//     image: "/products/foam-system/rim-seal-foam-pourer.jpg",
//     specifications: [
//       {
//         label: "Flow range",
//         value: "50–550 L/min",
//       },
//       {
//         label: "Inlet pressure",
//         value: "2.8–7 kg/cm²",
//       },
//     ],

//     features: [
//       "Air aspirating foam generation",
//       "Field replaceable orifice plate",
//       "Stainless steel screen protects against insects and nesting birds",
//     ],
//   },

//   {
//     id: "fgrc",
//     categoryId: "foam-system",
//     name: "Ratio وحدة تحكم",
//     model: "FGRC-B / FGRC-S",
//     description:
//       "رغوة proportioning ratio controller for proportioning foam concentrate into the water supply.",
//     image: "/products/foam-system/ratio-controller.jpg",
//     specifications: [
//       {
//         label: "Models",
//         value: "FGRC-B برونز / FGRC-S Stainless Steel",
//       },
//       {
//         label: "Maximum service pressure",
//         value: "14 Bar (200 PSI)",
//       },
//       {
//         label: "Factory hydro test pressure",
//         value: "25 kg/cm² (350 PSI)",
//       },
//       {
//         label: "Sizes",
//         value: "65, 80, 100 & 150 NB",
//       },
//     ],
//     certifications: ["UL approval with AFFF 3%"],
//   },

//   {
//     id: "foam-maker",
//     categoryId: "foam-system",
//     name: "مولد رغوة",
//     model: "FMA-50 / FMA-65 / FMA-S50 / FMA-S65",
//     description:
//       "Low-expansion aspirated foam maker used for protection of tank seals in liquid storage tanks.",
//     image: "/products/foam-system/foam-maker.jpg",
//     specifications: [
//       {
//         label: "Inlet sizes",
//         value: "50 / 65 NB",
//       },
//       {
//         label: "Working pressure",
//         value: "2.8–7 kg/cm²",
//       },
//       {
//         label: "Construction",
//         value: "Carbon steel or فولاذ مقاوم للصدأ",
//       },
//     ],

//     certifications: ["UL Listed"],
//   },
//   {
//     id: "foam-concentrate-control-valve",
//     categoryId: "foam-system",
//     name: "صمام تحكم في مركز الرغوة",
//     model: "CV",
//     description:
//       "رغوة concentrate control valve is designed for use in bladder tank foam system or inline balance pressure proportioning system. The valve opens automatically when water supply is established through the inlet pipe of ratio controller of bladder tank or in the inline balance pressure proportioning system. The valve opens at minimum of 3 Kg. (42.8 psi) water pressure. No electric power is required to operate the valve.",
//     image: "/products/foam-system/foam-concentrate-control-valve.jpg", 
//     features: [
//       "Designed for bladder tank foam system or inline balance pressure proportioning system",
//       "Opens automatically when water supply is established",
//       "Opens at minimum of 3 Kg (42.8 psi) water pressure",
//       "No electric power required to operate",
//     ],
//     specifications: [
//       {
//         label: "Model",
//         value: "CV",
//       },
//       {
//         label: "Size",
//         value: "40NB, 50NB & 65NB",
//       },
//       {
//         label: "Rated الضغط",
//         value: "14 Kg./sq.cm. (200 PSI)",
//       },
//       {
//         label: "End Connection",
//         value: "Flanged end to ANSI B 16.5 الفئة 150#",
//       },
//       {
//         label: "الضغط Sensing Hose",
//         value: "Teflon tube with Stainless Steel braided cover",
//       },
//       {
//         label: "Trim Connection",
//         value: "Brass / Stainless Steel",
//       },
//       {
//         label: "Factory Hydrotested",
//         value: "25 Kg./sq.cm. (365 PSI)",
//       },
//       {
//         label: "Finish",
//         value: "Epoxy red painted",
//       },
//     ],
//   },
//   {
//     id: "inline-balance-pressure-foam-proportioner",
//     categoryId: "foam-system",
//     name: "خلاط رغوة خطي بموازنة الضغط",
//     description:
//       "The خلاط رغوة خطي بموازنة الضغطs are used with positive displacement foam concentrate supply pump. The system controls accurately the flow of foam concentrate into the water stream over a wide range of flow rate and pressure. The Inline Balance الضغط رغوة Proportioning نظام is used for simultaneous operation of the multiple foam injection even with different pressures between the two-injection point with a single concentrate supply line. Various sizes of inline balance pressure proportioners can be combined to suit the flow requirement of each hazard area.",
//     image: "/products/foam-system/inline-balance-pressure.jpg",
//     features: [
//       "Used with positive displacement foam concentrate supply pump",
//       "Accurately controls foam concentrate flow into the water stream over a wide range of flow rate and pressure",
//       "Supports simultaneous operation of multiple foam injection points",
//       "Works with different pressures between injection points using a single concentrate supply line",
//       "Multiple sizes can be combined to suit hazard area flow requirements",
//     ],
//     specifications: [
//       {
//         label: "Model",
//         value: "IB - برونز تصنيع IS 318 / ASTM B62 | IBS - Stainless Steel (304) تصنيع (ASTM A351-CF8)",
//       },
//       {
//         label: "Size",
//         value: "80, 100 & 150 NB",
//       },
//       {
//         label: "Maximum Working الضغط",
//         value: "14 Bar (200 PSI)",
//       },
//       {
//         label: "Minimum Working الضغط",
//         value: "3.0 Bar (44 PSI)",
//       },
//       {
//         label: "Mounting Between the Flanges",
//         value: "ANSI B16.5-150#",
//       },
//       {
//         label: "Thread Opening",
//         value: "BSPT/NPT optional",
//       },
//       {
//         label: "Rim Connection and Various تحكم صمامs",
//         value: "Stainless Steel",
//       },
//       {
//         label: "Factory Hydrostatic Test الضغط",
//         value: "25 Kg./Sq.cm. (350 PSI)",
//       },
//       {
//         label: "Finish",
//         value: "Epoxy red painted",
//       },
//     ],
//     variants: [
//       {
//         model: "IB",
//         description: "برونز تصنيع (IS 318 / ASTM B62)",
//       },
//       {
//         model: "IBS",
//         description: "Stainless Steel (304) تصنيع (ASTM A351-CF8)",
//       },
//     ],
//   },
//   {
//     id: "sl-19mp",
//     categoryId: "foam-system",
//     name: "فوهة رغوة يدوية",
//     model: "SL-19MP",
//     description:
//       "Hand-held nozzle for manual application of low-expansion foam systems.",
//     image: "/products/foam-system/sl-19mp.jpg",

//     specifications: [
//       {
//         label: "Construction",
//         value: "Aluminium",
//       },
//       {
//         label: "Inlet",
//         value: '2-1/2" BS 336 male',
//       },
//       {
//         label: "Flow",
//         value: "560 LPM @ 7 Bar",
//       },
//       {
//         label: "رغوة",
//         value: "AFFF 3%",
//       },
//       {
//         label: "Effective reach",
//         value: "Approximately 30m @ 7 Bar",
//       },
//       {
//         label: "Weight",
//         value: "Approximately 3.2 kg including pickup hose",
//       },
//     ],
//   },

//   // =========================================================
//   // STANDALONE DETECTORS
//   // =========================================================
//   {
//     id: "fg-s01",
//     categoryId: "conventional-fire-alarm",
//     name: "كاشف دخان مستقل",
//     model: "FG-S01",
//     description:
//       "This alarm is a smoke detector of the photo cell principle. This means that the alarm checks the air for smoke resulting from fire. It does not detect heat, gas or fire. If the smoke detector is properly mounted and maintained it will sound an alarm in an early stage. In the event of a fire this can give you those extra seconds needed to vacate your home and call the fire brigade. The alarm is designed to detect smoke. It cannot prevent a fire. Read the instructions through carefully before using the smoke detector.",
//     image: "/products/detectors/fg-s01.jpg", 
//     features: [
//       "Photoelectric sensing technology",
//       "Easy installation and maintenance",
//       "Battery case at the back of a sensor for easy removal of a battery",
//       "Sleek low-profile housing design",
//       "Low battery warning",
//       "Test button verifies battery and alarm operation",
//       "Sounding a loud alarm signal or exceeding 85db in alarm mode",
//     ],
//     specifications: [
//       {
//         label: "دخان Sensitivity",
//         value: "0.086 dB/m to 0.14 dB/m",
//       },
//       {
//         label: "Power Supply",
//         value: "9V Carbon Zinc/Alkaline Lithium Battery",
//       },
//       {
//         label: "Battery Life",
//         value: ">12 months",
//       },
//       {
//         label: "Low Battery Life",
//         value: ">30 days",
//       },
//       {
//         label: "إنذار Indicator",
//         value: "Continuously emitting red light and alarm sound",
//       },
//       {
//         label: "إنذار Sound Level",
//         value: ">85dB at 10 feet (3m)",
//       },
//       {
//         label: "Temperature",
//         value: "0°C - 50°C",
//       },
//       {
//         label: "Humidity",
//         value: "10%-90%RH, no condensation or icing",
//       },
//       {
//         label: "Dimensions (LxWxH)",
//         value: "FG-S01/FG-S02: ø107×35mm (FG-S03: ø130×40mm)",
//       },
//     ],
//   },
//   {
//     id: "fg-731",
//     categoryId: "conventional-fire-alarm",
//     name: "CO كاشف",
//     model: "FG-731",
//     description:
//       "FG731 CO ALARMS ARE UL APPROVED STAND-ALONE CO DETECTORS POWERED FROM 5-YEAR LONG-LIFE INTERNAL BATTERIES.",
//     image: "/products/detectors/fg-731.jpg",
//     features: [
//       "Advanced algorithms provide advanced detection discrimination",
//       "Attractive housing design",
//       "Japan-made highly reliable stable CO sensor, with automatic adjustment",
//       "High immunity against unwanted alarms",
//       "Loud 85 dB internal alarm sounder",
//       "Dual function action button to temporarily silence unwanted alarms (Hush), and to verify alarm operation (Test)",
//       "Separate indicators for Power, إنذار and Service",
//       "Service sounder",
//       "Low power consumption",
//       "Low battery audible indication",
//       "Easy installation. No programming required",
//       '5-year "end-of-life" timer alerts owner to replace the unit',
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "fg-920",
//     categoryId: "conventional-fire-alarm",
//     name: "غاز كاشف",
//     model: "FG-920",
//     description:
//       "Standalone gas detector using FIGARO semiconductor sensor heads for accurate flammable gas detection. Available in methane (FG-920-N) and propane (FG-920-L) versions.",
//     image: "/products/detectors/fg-920.jpg", 
//     features: [
//       "FIGARO semiconductor sensor heads used for accurate flammable غاز detection",
//       "Using microprocessor for circuit control and gas monitoring to assure performance stability and reliability",
//       "FG-920-N detects methane gas, FG-920-L detects propane gas in a continuous manner",
//       "SMT circuit board design with FR4 double sides PCB satisfactory quality and reliability guaranteed",
//       "Test button verifies alarm operation any time",
//       "Sounding a loud alarm signal of exceeding 85 dB at 10ft",
//       "Easy installation and maintenance",
//       "Complying the UL-1484 standard and EN50194",
//       "No battery is required for circuit control",
//       "Ergonomic design of detector casing",
//     ],
//     certifications: ["UL-1484", "EN50194"],
//     variants: [
//       {
//         model: "FG-920-N",
//         description: "Detects methane gas",
//       },
//       {
//         model: "FG-920-L",
//         description: "Detects propane gas",
//       },
//     ],
//   },
  
//   // =========================================================
//   //  EMERGENCY LIGHTING & FIRE CABLE
//   // =========================================================
//   {
//     id: "distributed-controller",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "وحدة تحكم موزعة (واجهة)",
//     model: "FG-INT01",
//     description:
//       "It is responsible for information transfer within a certain area, thus increasing the number of subordinate devices and facilitating data.",
//     image: "/products/emergency-signs/distributed-controller.jpg",
//     specifications: [
//       {
//         label: "Model",
//         value: "FG-INT01",
//       },
//       {
//         label: "Voltage",
//         value: "AC120V/0.035A or AC277/0.016A 50/60Hz",
//       },
//       {
//         label: "AC Power",
//         value: "3W",
//       },
//       {
//         label: "Battery",
//         value: "Ni-MH - AA 600MAH/4.8V",
//       },
//       {
//         label: "طوارئ Duration",
//         value: "3 Hours",
//       },
//       {
//         label: "Communication BUS",
//         value: "CAN BUS AND 485 BUS",
//       },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "corresponding-controller",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "وحدة تحكم مقابلة (مكرر)",
//     model: "FG-REP01",
//     description:
//       "It is responsible for information transfer within a certain area, thus increasing the number of subordinate devices and facilitating data.",
//     image: "/products/emergency-signs/corresponding-controller.jpg",
//     specifications: [
//       {
//         label: "Model",
//         value: "FG-REP01",
//       },
//       {
//         label: "Voltage",
//         value: "AC120V/0.035A or AC277/0.016A 50/60Hz",
//       },
//       {
//         label: "AC Power",
//         value: "3W",
//       },
//       {
//         label: "Battery",
//         value: "Ni-MH - AA 600MAH/4.8V",
//       },
//       {
//         label: "طوارئ Duration",
//         value: "3 Hours",
//       },
//       {
//         label: "Communication BUS",
//         value: "485 BUS",
//       },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "addressable-emergency-lights",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "إنارات طوارئ قابلة للعنونة",
//     model: "FG-T632L/FG-T603L",
//     description:
//       "UL Listed addressable emergency lights with 485 BUS communication.",
//     image: "/products/emergency-signs/addressable-emergency-lights.jpg",
//     specifications: [
//       {
//         label: "Voltage",
//         value: "AC120V/0.05A or AC277/0.025A 50/60Hz",
//       },
//       {
//         label: "AC Power",
//         value: "5.5W",
//       },
//       {
//         label: "Battery",
//         value: "Ni-MH SC 2200MAH/4.8V",
//       },
//       {
//         label: "طوارئ Duration",
//         value: "3 Hours",
//       },
//       {
//         label: "LED",
//         value: "20pcs SMD2835",
//       },
//       {
//         label: "Communication BUS",
//         value: "485 BUS",
//       },
//     ],
//     certifications: ["UL Listed"],
//     variants: [
//       {
//         model: "FG-T632L",
//         description: "إنارة طوارئ قابلة للعنونة",
//       },
//       {
//         model: "FG-T604L",
//         description: "إنارة طوارئ قابلة للعنونة",
//       },
//     ],
//   },
//   {
//     id: "bulkhead-emergency-light-t603l",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "إنارة طوارئ جدارية",
//     model: "FG-T603L",
//     description:
//       "UL Listed bulkhead emergency light with high lumen output.",
//     image: "/products/emergency-signs/bulkhead-emergency-light.jpg",
//     specifications: [
//       {
//         label: "Model",
//         value: "FG-T603L",
//       },
//       {
//         label: "Voltage",
//         value: "85-265VAC 50/60Hz",
//       },
//       {
//         label: "AC Power",
//         value: "2W",
//       },
//       {
//         label: "Battery",
//         value: "Ni-MH - SC 4.8V / 2200MAH",
//       },
//       {
//         label: "طوارئ Duration",
//         value: "≥ 3 Hours",
//       },
//       {
//         label: "LED",
//         value: "20 pcs SMD2835",
//       },
//       {
//         label: "Lumen",
//         value: ">250LM",
//       },
//       {
//         label: "Color",
//         value: "White",
//       },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "bulkhead-emergency-light-t605l",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "إنارة طوارئ جدارية",
//     model: "FG-T605L",
//     description:
//       "UL Listed bulkhead emergency light with high lumen output.",
//     image: "/products/emergency-signs/bulkhead-emergency-light-2.jpg",
//     specifications: [
//       {
//         label: "Model",
//         value: "FG-T605L",
//       },
//       {
//         label: "Voltage",
//         value: "85-265VAC 50/60Hz",
//       },
//       {
//         label: "AC Power",
//         value: "2W",
//       },
//       {
//         label: "Battery",
//         value: "Ni-MH - SC 4.8V / 2200MAH",
//       },
//       {
//         label: "طوارئ Duration",
//         value: "≥ 3 Hours",
//       },
//       {
//         label: "LED",
//         value: "1 pc SMD 3W",
//       },
//       {
//         label: "Lumen",
//         value: ">310LM",
//       },
//       {
//         label: "Color",
//         value: "White",
//       },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "addressable-exit-sign-t741rg",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "لافتة مخرج طوارئ قابلة للعنونة",
//     model: "FG-T741R/G",
//     description:
//       "UL Listed addressable emergency exit sign with red or green LED options and 485 BUS communication.",
//     image: "/products/emergency-signs/addressable-exit-sign-t741rg.jpg",
//     specifications: [
//       { label: "Model", value: "FG-T741R/G" },
//       { label: "Input Voltage", value: "AC120V/0.038A or AC277/0.018A 50/60Hz" },
//       { label: "AC Power", value: "3.5W" },
//       { label: "Battery", value: "Ni-MH Battery: AA 600MAH/4.8V" },
//       { label: "طوارئ Duration", value: "3 Hours" },
//       { label: "LED", value: "8 pcs Φ5 Red or Green" },
//       { label: "Communication BUS", value: "485 BUS" },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "addressable-exit-sign-t740rg",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "لافتة مخرج طوارئ قابلة للعنونة",
//     model: "LX-T740R/G",
//     description:
//       "UL Listed addressable emergency exit sign with red or green LED options and 485 BUS communication.",
//     image: "/products/emergency-signs/addressable-exit-sign-t740rg.jpg",
//     specifications: [
//       { label: "Model", value: "LX-T740R/G" },
//       { label: "Input Voltage", value: "AC120V/0.038A or AC277/0.018A 50/60Hz" },
//       { label: "AC Power", value: "3.5W" },
//       { label: "Battery", value: "Ni-MH Battery: AA 600MAH/4.8V" },
//       { label: "طوارئ Duration", value: "3 Hours" },
//       { label: "LED", value: "12 pcs Φ5 Red or Green" },
//       { label: "Communication BUS", value: "485 BUS" },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "addressable-exit-sign-t705",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "لافتة مخرج طوارئ قابلة للعنونة",
//     model: "FG-T705",
//     description:
//       "UL Listed addressable emergency exit sign with running man pictogram and directional arrows. Supports 485 BUS communication.",
//     image: "/products/emergency-signs/addressable-exit-sign-t705.jpg",
//     specifications: [
//       { label: "Model", value: "FG-T705" },
//       { label: "Input Voltage", value: "AC120V/0.038A or AC277/0.018A 50/60Hz" },
//       { label: "AC Power", value: "3.5W" },
//       { label: "Battery", value: "Ni-MH Battery: AA 600MAH/4.8V" },
//       { label: "طوارئ Duration", value: "3 Hours" },
//       { label: "LED", value: "14 pcs SMD2835" },
//       { label: "Communication BUS", value: "485 BUS" },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "addressable-exit-sign-t741",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "لافتة مخرج طوارئ قابلة للعنونة",
//     model: "FG-T741",
//     description:
//       "UL Listed addressable emergency exit sign with running man pictogram and directional arrows. Supports 485 BUS communication.",
//     image: "/products/emergency-signs/addressable-exit-sign-t741.jpg",
//     specifications: [
//       { label: "Model", value: "FG-T741" },
//       { label: "Input Voltage", value: "AC120V/0.038A or AC277/0.018A 50/60Hz" },
//       { label: "AC Power", value: "3.5W" },
//       { label: "Battery", value: "Ni-MH Battery: AA 600MAH/4.8V" },
//       { label: "طوارئ Duration", value: "3 Hours" },
//       { label: "LED", value: "14 pcs SMD2835" },
//       { label: "Communication BUS", value: "485 BUS" },
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "fg-frc-180",
//     categoryId: "emergency-signs-exit-lights-fire-cable",
//     name: "كابل مقاوم للحريق",
//     model: "FG FRC 180",
//     description:
//       "فايرغارد fire performance cables are designed for augmented fire resistance in applications including the delivery of power and auxiliary control in fire alarm systems, voice alarm systems, and emergency lighting systems including those applications designed to meet BS5266. These cables will form part of the requirements of BS8519 for the installation of fire resistant power and control cable systems for life safety and fire-fighting applications.",
//     image: "/products/emergency-signs/fg-frc-180.jpg",
//     features: [
//       "Halogen Free Flame retardant",
//       "Low دخان",
//       "Supplied on robust plastic reels",
//       "Safe & Easy to handle",
//       "Weather & Moisture resistant",
//     ],
//     applications: [
//       "حريق alarm systems",
//       "Voice alarm systems",
//       "طوارئ lighting systems (BS5266)",
//       "Life safety and fire-fighting applications (BS8519)",
//     ],
//     certifications: [
//       "LPCB approved to BS 6387 CWZ",
//       "EN 50200 for 2, 3 & 4 cores",
//       "LPCB Ref. No. 1788a/01",
//     ],
//     specifications: [
//       {
//         label: "Conductor",
//         value: "Solid bare copper (IEC/ EN 228, BS 6360, VDE 0295, HD 383)",
//       },
//       {
//         label: "Insulation",
//         value:
//           "حريق resistant silicon rubber (HD 22.1, BS 7655 EI2), colors: BS7671/HD308 S2/VDE0293-308 (for more than 5 cores white core/black numbered)",
//       },
//       {
//         label: "Separator",
//         value: "Polyester tape",
//       },
//       {
//         label: "Drain Wire",
//         value: "0.80 mm Solid tinned copper",
//       },
//       {
//         label: "Shield",
//         value: "Aluminum laminated polyester tape",
//       },
//       {
//         label: "Sheath",
//         value:
//           "HFFR, Red (RAL 3000) or White; EN 50290-2, VDE 0207 HM2, BS 7655 LTS1 / LTS3",
//       },
//       {
//         label: "Conductor Resistance (max.)",
//         value: "1 mm²: 18.1 Ω/km – 1.5 mm²: 12.1 Ω/km – 2.5 mm²: 7.41 Ω/km",
//       },
//       {
//         label: "Insulation Resistance (min.)",
//         value: "200 MΩ·km",
//       },
//       {
//         label: "Operating Voltage",
//         value: "300 V / 500 V  Test Voltage 2000 V",
//       },
//       {
//         label: "Temperature Range",
//         value: "Fixed -30 °C … +90 °C   Flexing -5 °C … +60 °C",
//       },
//       {
//         label: "Min. Bending Radius",
//         value: "Fixed 8 × كابل Diameter,  Flexing 15 × كابل Diameter",
//       },
//       {
//         label: "Flame Tests",
//         value: "IEC / EN 60332-1, IEC 60332-3-24, (BS 4066 part 1&3), EN 50266-2-4",
//       },
//       {
//         label: "Insulation Integrity دخان",
//         value: "IEC 60331, BS 6387 C, W, Z, EN 50200 PH30",
//       },
//       {
//         label: "Density",
//         value: "IEC / EN 61034, BS 7622, HD 606",
//       },
//       {
//         label: "Corrosive غاز Measurement",
//         value: "IEC 60754-2, BS 6425, EN 50267",
//       },
//     ],
//     variants: [
//       // RE (Round/Enhanced?) series
//       {
//         model: "2 X 1 (RE)",
//         description: "المقطع العرضي 2×1 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "6.00 mm (±10%)" },
//           { label: "Conductor Resistance", value: "18.1 Ω/km" },
//           { label: "Approx weight", value: "59 kg/km" },
//         ],
//       },
//       {
//         model: "2 X 1.5 (RE)",
//         description: "المقطع العرضي 2×1.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "7.00 mm (±10%)" },
//           { label: "Conductor Resistance", value: "12.1 Ω/km" },
//           { label: "Approx weight", value: "77 kg/km" },
//         ],
//       },
//       {
//         model: "3 X 1.5 (RE)",
//         description: "المقطع العرضي 3×1.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "7.60 mm (±10%)" },
//           { label: "Conductor Resistance", value: "12.1 Ω/km" },
//           { label: "Approx weight", value: "103 kg/km" },
//         ],
//       },
//       {
//         model: "4 X 1.5 (RE)",
//         description: "المقطع العرضي 4×1.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "8.30 mm (±10%)" },
//           { label: "Conductor Resistance", value: "12.1 Ω/km" },
//           { label: "Approx weight", value: "126 kg/km" },
//         ],
//       },
//       {
//         model: "2 X 2.5 (RE)",
//         description: "المقطع العرضي 2×2.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "9.00 mm (±10%)" },
//           { label: "Conductor Resistance", value: "7.41 Ω/km" },
//           { label: "Approx weight", value: "111 kg/km" },
//         ],
//       },
//       {
//         model: "3 X 2.5 (RE)",
//         description: "المقطع العرضي 3×2.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "9.10 mm (±10%)" },
//           { label: "Conductor Resistance", value: "7.41 Ω/km" },
//           { label: "Approx weight", value: "151 kg/km" },
//         ],
//       },
//       {
//         model: "4 X 2.5 (RE)",
//         description: "المقطع العرضي 4×2.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "10.10 mm (±10%)" },
//           { label: "Conductor Resistance", value: "7.41 Ω/km" },
//           { label: "Approx weight", value: "193 kg/km" },
//         ],
//       },
//       // RM series
//       {
//         model: "2 X 1.5 (RM)",
//         description: "المقطع العرضي 2×1.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "7.40 mm (±10%)" },
//           { label: "Conductor Resistance", value: "7.41 Ω/km" },
//           { label: "Approx weight", value: "81 kg/km" },
//         ],
//       },
//       {
//         model: "3 X 1.5 (RM)",
//         description: "المقطع العرضي 3×1.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "8.00 mm (±10%)" },
//           { label: "Conductor Resistance", value: "7.41 Ω/km" },
//           { label: "Approx weight", value: "108 kg/km" },
//         ],
//       },
//       {
//         model: "4 X 1.5 (RM)",
//         description: "المقطع العرضي 4×1.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "9.00 mm (±10%)" },
//           { label: "Conductor Resistance", value: "7.41 Ω/km" },
//           { label: "Approx weight", value: "138 kg/km" },
//         ],
//       },
//       {
//         model: "2 X 2.5 (RM)",
//         description: "المقطع العرضي 2×2.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "8.80 mm (±10%)" },
//           { label: "Conductor Resistance", value: "12.1 Ω/km" },
//           { label: "Approx weight", value: "115 kg/km" },
//         ],
//       },
//       {
//         model: "3 X 2.5 (RM)",
//         description: "المقطع العرضي 3×2.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "9.50 mm (±10%)" },
//           { label: "Conductor Resistance", value: "12.1 Ω/km" },
//           { label: "Approx weight", value: "154 kg/km" },
//         ],
//       },
//       {
//         model: "4 X 2.5 (RM)",
//         description: "المقطع العرضي 4×2.5 mm²",
//         specifications: [
//           { label: "Approx. Overall Diameter", value: "10.60 mm (±10%)" },
//           { label: "Conductor Resistance", value: "12.1 Ω/km" },
//           { label: "Approx weight", value: "199 kg/km" },
//         ],
//       },
//     ],
//   },

//   // =========================================================
//   // FIRE EXTINGUISHERS
//   // =========================================================

//   {
//     id: "fg-co2-2kg",
//     categoryId: "fire-extinguishers",
//     name: "طفاية حريق CO2",
//     model: "FGFC2 / FGC2",
//     description:
//       "CO2 fire extinguishers manufactured according to BS EN3 standards and are available in 2 sizes, 2kg stored pressure, and 5kg stored pressure, and are easy to use and limit damage to delicate equipment and materials. CO2 gas fire extinguishers are highly effective against fires involving electrical equipment like computers, photocopiers and generators.",
//     image: "/products/fire-extinguishers/co2-2kg.jpg",
//     certifications: ["BS EN3"],
//      variants: [{
//         model: 'FGFC2 / FGC2',
//         specifications: [
//           {
//             label: "السعة",
//             value: "2 kg",
//           }]
//       },
//       {
//         model: 'FGFC5 / FGC5',
//         specifications: [
//           {
//             label: "السعة",
//             value: "2 kg",
//           },
//           {
//             label: "السعة",
//             value: "5 kg",
//           }]
//       }]
//   },

//   {
//     id: "fgfp1",
//     categoryId: "fire-extinguishers",
//     name: "طفاية حريق بودرة ABC",
//     model: "FGFP1",
//     description: "Description متنقل stored pressure ABC powder extinguishers are characterized by their high performance and simple method operation. The ABC Dry بودرة متنقل type extinguisher contains high and thus has achieved highest fire rating.",
//     image: "/products/fire-extinguishers/fgfp1.jpg",
//     specifications: [
//       {
//         label: "السعة",
//         value: "1 kg",
//       },
//     ],
//     variants:[{
//       model:'FGFP1',
//       specifications :[
//         {
//           label: "السعة",
//           value: "1 kg",
//         }]
//     },
//     {
//       model:'FGFP2',
//       specifications :[
//         {
//           label: "السعة",
//           value: "2 kg",
//         }]
//     },
//     {
//       model:'FGP4R',
//       specifications :[
//         {
//           label: "السعة",
//           value: "4 kg",
//         }]
//     }, 
//     {
//       model:'FGFP6',
//       specifications :[
//         {
//           label: "السعة",
//           value: "6 kg",
//         }]
//     },
//     {
//       model:'FGFP9',
//       specifications :[
//         {
//           label: "السعة",
//           value: "9 kg",
//         }]
//     },
//     {
//       model:'FGFP12',
//       specifications :[
//         {
//           label: "السعة",
//           value: "12 kg",
//         }]
//     }]
//   },

//   {
//     id: "fgwc6-f",
//     categoryId: "fire-extinguishers",
//     name: "طفاية حريق كيميائية رطبة",
//     model: "FGWC6-F/FGWC9-F",
//     description:
//       "Wet chemical حريق extinguishers are the new innovation for cooking fat fires. Wet chemical is the most effective means for extinguishing fires involving deep fat friers. The solution cools and emulsifies when applied to burning fats and oils.",
//     image: "/products/fire-extinguishers/fgwc6-f.jpg",
//     variants:[{
//       model:'FGWC6-F',
//       specifications:[
//       {
//         label: "السعة",
//         value: "6 L",
//       }]
//     },
//     {
//       model:'FGWC9-F',
//       specifications:[
//       {
//         label: "السعة",
//         value: "9 L",
//       }]
//     }]
//   },

//   {
//     id: "fgff6",
//     categoryId: "fire-extinguishers",
//     name: "طفاية حريق رغوية",
//     model: "FGFF6/FGFF9",
//     description:
//       "رغوة fire extinguishers are ideal for multi-risk environments, where the source of the fire could be freely burning solid materials, like wood and paper, or flammable liquids. طفاية حريق رغويةs provide a fast, powerful means of tackling class 'A' and class 'B' fires. FOAM Highly effective against petrol and volatile liquids, forming a flame smothering seal over the FIRE EXTINGUISHER surface and preventing re-ignition.",
//     image: "/products/fire-extinguishers/fgff.jpg",
//     variants:[{
//       model:'FGFF6',
//       specifications:[
//       {
//         label: "السعة",
//         value: "6 L",
//       }]
//     },
//     {
//       model:'FGFF9',
//       specifications:[
//       {
//         label: "السعة",
//         value: "9 L",
//       }]
//     }]
//   },

//   {
//     id: "fghfc-2",
//     categoryId: "fire-extinguishers",
//     name: "HFC236fa عامل نظيف حريق Extinguisher",
//     model: "FGHFC-2",
//     description:
//       "Research shows that short circuits in the electrical mains or in sensitive electronic equipment such as computers and television sets are the most common causes of fire in homes and offices. بودرة-based extinguishers can certainly defeat these fires, but they cause serious collateral damage. That's where فايرغارد's عامل نظيف Extinguishers come in. فايرغارد's cutting edge HFC236fa عامل نظيف extinguishers are built to not only put out fires, but save sensitive electronic equipment too. Powered by one of the cleanest, most powerful extinguishing agents on the planet, these extinguishers are extremely lightweight, yet boast immense throw that penetrates even the finest mesh..",
//     image: "/products/fire-extinguishers/fghfc-2.jpg",
//     variants:[
//       {
//       model:'FGHFC-2',
//       specifications:[
//       {
//         label: "السعة",
//         value: "2 kg",
//       }]
//     },
//     {
//       model:'FGHFC-4',
//       specifications:[
//       {
//         label: "السعة",
//         value: "4 kg",
//       }]
//     },
//     {
//       model:'FGHFC-6',
//       specifications:[
//       {
//         label: "السعة",
//         value: "6 kg",
//       }]
//     },
//     {
//       model:'FGHFC-9',
//       specifications:[
//       {
//         label: "السعة",
//         value: "9 kg",
//       }]
//     }]
//   },

//   {
//     id: "fgw9",
//     categoryId: "fire-extinguishers",
//     name: "طفاية حريق مائية",
//     model: "FGW9",
//     description:
//       "Description ماء extinguishers are reliable and effective general purpose extinguishers, providing a cost effective solution for tackling freely burning material, such as paper, cloth, wood and furniture. ماء is still one of the most useful of all available fire extinguishants used in fire extinguishers. It works through its cooling effect on fire and under pressure from a controllable-discharge extinguisher, can penetrate and knock out deep- seatedالفئة A fires. Operated.",
//     image: "/products/fire-extinguishers/fgw9.jpg",
//     specifications: [
//       {
//         label: "السعة",
//         value: "9 L",
//       },
//       {
//         label: "Agent",
//         value: "ماء",
//       },
//     ],
//   },

//   {
//     id: "powder-fire-extinguisher-mobile",
//     categoryId: "fire-extinguishers",
//     name: "طفايات حريق بودرة متنقلة",
//     description:
//       "متنقل stored pressure ABC powder extinguishers are characterized by their high performance and simple method of operation. The ABC Dry بودرة متنقل type extinguisher contains high performance powder and thus has achieved highest fire rating.",
//     image: "/products/fire-extinguishers/FGPT.jpg",
//     features: [
//       "High performance ABC dry powder",
//       "Simple method of operation",
//       "Highest fire rating",
//       "متنقل stored pressure design",
//     ],
//     certifications: ["BSI"],
//     variants: [
//       {
//         model: "FGPT-25S",
//         description: "السعة: 25 Kg",
//       },
//       {
//         model: "FGPT-25C",
//         description: "السعة: 25 Kg",
//       },
//       {
//         model: "FGPT-50S",
//         description: "السعة: 50 Kg",
//       },
//       {
//         model: "FGPT-50C",
//         description: "السعة: 50 Kg",
//       },
//     ],
//   },
//   {
//     id: "foam-fire-extinguisher-mobile",
//     categoryId: "fire-extinguishers",
//     name: "طفايات حريق رغوية متنقلة",
//     description:
//       "متنقل Stored الضغط and external cartridge operated رغوة fire extinguishers are characterized by their high performance and simple method of operation. The extinguisher contains high performance extinguishing agent 6% AFFF foam and thus has achieved highest fire rating. متنقل رغوة extinguishers are most suitable for fires involving flammable liquids and freely burning materials such as paper, cloth and wood.",
//     image: "/products/fire-extinguishers/FGPT.jpg", 
//     features: [
//       "High performance 6% AFFF foam",
//       "Simple method of operation",
//       "Highest fire rating",
//       "Suitable for flammable liquids and freely burning materials (paper, cloth, wood)",
//       "Available as stored pressure or external cartridge operated",
//     ],
//     certifications: ["BSI"],
//     variants: [
//       {
//         model: "FGFT50S",
//         description: "السعة: 50 Kg (Stored الضغط)",
//       },
//       {
//         model: "FGFT50C",
//         description: "السعة: 50 Kg (External gas cartridge filled with CO2)",
//       },
//     ],
//   },
//   {
//     id: "co2-fire-extinguisher-mobile",
//     categoryId: "fire-extinguishers",
//     name: "طفايات حريق CO2 متنقلة",
//     description:
//       "متنقل CO2 fire extinguishers designed for high performance and reliability.",
//     image: "/products/fire-extinguishers/FGC.jpg", 
//     features: [
//       "Cylinders made of seamless carbon-manganese pipes with high mechanical properties",
//       "Cylinder designed to withstand high pressure and tested at 250 bar",
//       "High-grade brass head valve ensures reliability and optimizes efficiency",
//       "Head valves are either lever operated or rotary operated",
//       "Unbreakable rising pipe made of aluminium to ensure long lasting life",
//       "High gloss polyester powder painted, UV stabilized after shot-blasting for corrosion resistance under extreme conditions",
//       "Safety valve fitted in each extinguisher for maximum safety",
//       "Discharge nozzle designed to produce a jet of extinguishing gas",
//     ],
//     certifications: ["BSI"],
//     variants: [
//       {
//         model: "FGC10",
//         description: "السعة: 10 Kg",
//       },
//       {
//         model: "FGC20",
//         description: "السعة: 20 Kg",
//       },
//     ],
//   },
//   // =========================================================
//   // FIRE EXTINGUISHING PANEL
//   // =========================================================

//   {
//     id: "iq805",
//     categoryId: "fire-extinguishing-panel",
//     name: "IQ805 Intelligent لوحة تحكم الإطفاء",
//     model: "IQ805",
//     description:
//       "Intelligent fire alarm control panel designed for fire extinguishing and hazard agent releasing applications.",
//     image: "/products/fire-extinguishing-panel/iq805.jpg",

//     specifications: [
//       {
//         label: "الأجهزة",
//         value: "حتى 252",
//       },
//       {
//         label: "NACs",
//         value: "2",
//       },
//       {
//         label: "Relays",
//         value: "3 Form-C",
//       },
//       {
//         label: "تطبيق",
//         value: "Hazard agent releasing",
//       },
//     ],

//     features: [
//       "Dual hazard agent releasing",
//       "SLC loop support",
//       "Releasing-zone capability",
//       "Suitable for new and retrofit installations",
//     ],

//     certifications: ["UL864", "CAN/ULC-S527"],
//   },
//   {
//     id: "fgms-abort-and-release-station",
//     categoryId: "fire-extinguishing-panel",
//     name: "FGMS محطة إيقاف وإطلاق",
//     description:
//       "FGMS يدوي Pull Station is a high-quality non-toxic die-cast manual pull station. Low profile design and smooth edges offer an attractive yet functional design. All components are prepainted or have plated surfaces to inhibit corrosion. Electrically the FGMS يدوي pull station is unbeatable with 10 Amp snap action switch offered in all possible contact arrangements (including gold contacts). The FGMS pull station can be used with or without a break glass rod with replacement requiring no special tools.",
//     image: "/products/fire-extinguishing-panel/FGMS.jpg",
//     features: [
//       "Lift and pull",
//       "Break glass cover",
//       "Weather and Explosion proof versions",
//       "All stations offer hex screw or key lock access",
//     ],
//     specifications: [
//       {
//         label: "Electrical Switch",
//         value: "10A @ 120VAC",
//       },
//       {
//         label: "Dimensions Station",
//         value: "Width: 3.200 in | Length: 4.750 in | Depth: 0.875 in",
//       },
//       {
//         label: "Weight Mount",
//         value: "15.5 oz / 420 grams Single gang",
//       },
//       {
//         label: "Construction Material",
//         value: "Painted Die Cast Housing, 14 Ga plated steel black plate, Corrosion Inhibited surfaces",
//       },
//       {
//         label: "Terminal Block",
//         value: "4 Position",
//       },
//       {
//         label: "Mounting",
//         value: "Single Gang Mounting",
//       },
//       {
//         label: "Switch Type",
//         value: "10 A, 120VAC snap Action Switch (S.P.S.T.)",
//       },
//     ],
//   },
//   // =========================================================
//   //fire-extinguishing-system
//   // =========================================================

//   {
//     id: "hfc-227ea-system",
//     categoryId: "fire-extinguishing-system",
//     name: "HFC-227ea نظام إخماد حرائق بعامل نظيف",
//     model: "IQ Series",
//     description:
//       "Clean agent fire suppression system using HFC-227ea as the extinguishing medium.",
//     image: "/products//fire-extinguishing-system/hfc-227ea-system.jpg",
//     features: [
//       "Cylinder storage components",
//       "Discharge nozzles and distribution piping",
//       "الضغط gauge and supervisory components",
//       "Electric and manual valve actuators",
//       "Slave cylinder arrangement components",
//       "Discharge pressure switch",
//       "Manifold check valve",
//     ],

//     applications: [
//       "High-value assets",
//       "Occupied spaces",
//       "Electrical equipment",
//       "Areas where clean-up from other agents is problematic",
//     ],

//     certifications: ["NFPA 2001"],
//   },
//   {
//     id: "aqrs-automatic-quick-response-suppression-system",
//     categoryId: "fire-extinguishing-system",
//     name: "نظام إخماد أوتوماتيكي سريع الاستجابة (AQRS)",
//     model: "AQRS",
//     description:
//       "Electrical mains, server racks, MCB, wiring tray, automobile engine & industrial machinery have one thing in common. These spaces are high-risk spaces because they are most vulnerable to fire. What's more, these spaces hide fires until it becomes too large to handle. The In-لوحة Tube-Based نظام (AQRS) is an innovative firefighting solution that is ideal for enclosed electrical cabinets that are highly vulnerable to fire.",
//     image: "/products//fire-extinguishing-system/aqrs.jpg",
//     features: [
//       "الفئةification: Works on class A, B, C fires and fires involving electrically charged devices and is effective on a wide range of flammable and combustible materials",
//       "Self-actuated: Does not require any power supply and will function normally in the event of a power outage",
//       "Electronics-Friendly: Shown to be electrically non conductive and safe for use on electrically charged equipment",
//       "High-value Risk Protection: Suitable for protecting a range of high-value risks as it virtually eliminates damage to high-tech equipment, artwork and other delicate and sensitive objects",
//       "No Clean-up Required After Discharge: After a discharge, the extinguishing agent can be removed by simple ventilation",
//       "24-hour Protection: Automatic detection and actuation controls ensure fire protection is always 'on'",
//       "Targeting the source of a fire rapidly and accurately, suppress the fire in seconds, preventing further damage and minimizing remedial work",
//       "Multiple Enclosures or compartment protection with the use of single cylinder of extinguishing agent by routing additional tubing to each enclosed space",
//       "No false activations",
//     ],
//     applications: [
//       "Electrical لوحةs",
//       "Electrical خزانةs",
//       "Switching Areas",
//       "Printing Press",
//       "Server Racks",
//       "متنقل Tower",
//       "Diagnostic Machines",
//       "UPS Rooms",
//     ],
//   },
//   //  {
//   //   id: "iq-hfc-227ea-nozzle",
//   //   categoryId: "hfc-227ea",

//   //   name: "HFC-227ea Discharge Nozzle",
//   //   model: "IQ Discharge Nozzles",

//   //   description:
//   //     "Performance-tested discharge nozzles used to uniformly distribute HFC-227ea agent throughout the protected area.",

//   //   image: "/products/hfc-227ea/discharge-nozzle.jpg",

//   //   specifications: [
//   //     {
//   //       label: "Maximum nozzle height per tier",
//   //       value: "5500 mm",
//   //     },
//   //     {
//   //       label: "Radial nozzle",
//   //       value: "360° / 8 port",
//   //     },
//   //     {
//   //       label: "Sidewall nozzle",
//   //       value: "180° / 8 port",
//   //     },
//   //   ],
//   // },

//   // =========================================================
//   // WET CHEMICAL
//   // =========================================================

//   {
//     id: "k12",
//     categoryId: "wet-chemical",
//     name: "K12 نظام إخماد حرائق كيميائي رطب",
//     model: "K12-Series",
//     description:
//       "فايرغارد K12 تجاري Kitchen إخماد نظامs are a cutting-edge, automated,engineered solution that are designed to address the unique fire risks that a commercial kitchen environment poses. These systems are certified to the UL 300 standard and adhere to the NFPA 96/17A guidelines.",
//     image: "/products/wet-chemical/k12.jpg",
//     features :[
//       "Only Two Nozzle Type. 15 degrees nozzle for the plenum , 40 degrees nozzle for all types of equipment.",
//       "Chef-Friendly & Aesthetically Pleasing Design",
//       "Powerful & Enviroment-friendly Extinguishing Agent",
//       "Easy to Monitor نظام Readiness",
//       "Fully Compliant to EN 16282-7",
//       "Protects wide range of Equipment & Appliances",
//       "Capable Of Protecting Small To Big Kitchen Hoods"
//     ],
//     variants :[
//       {
//         model:'K12-14E',
//         specifications:[
//           {
//             label: "Cylinder size",
//             value: "14 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "9 L",
//           },
//           {
//             label: "Nozzles",
//             value: "3",
//           },
//         ]
//       },
//       {
//         model:'K12-18E',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "18 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "12 L",
//           },
//           {
//             label: "Nozzles",
//             value: "4",
//           },
//         ]
//       },
//       {
//         model:'K12-22E',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "22 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "16.5 L",
//           },
//           {
//             label: "Nozzles",
//             value: "7",
//           },
//         ]
//       },
//       {
//         model:'K12-27E',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "27 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "20 L",
//           },
//           {
//             label: "Nozzles",
//             value: "10",
//           },
//         ]
//       },
//       {
//         model:'K12-32E',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "32 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "24 L",
//           },
//           {
//             label: "Nozzles",
//             value: "12",
//           },
//         ]
//       },
//       {
//         model:'K12-44E',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "44 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "30 L",
//           },
//           {
//             label: "Nozzles",
//             value: "14",
//           },
//         ]
//       },
//       {
//         model:'K12-64E',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "64 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "45 L",
//           },
//           {
//             label: "Nozzles",
//             value: "18",
//           },
//         ]
//       },
//       {
//         model:'K12-14M',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "14 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "9 L",
//           },
//           {
//             label: "Nozzles",
//             value: "3",
//           },
//         ]
//       },
//       {
//         model:'K12-18M',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "18 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "12 L",
//           },
//           {
//             label: "Nozzles",
//             value: "4",
//           },
//         ]
//       },
//       {
//         model:'K12-22M',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "22 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "16.5 L",
//           },
//           {
//             label: "Nozzles",
//             value: "7",
//           },
//         ]
//       },
//       {
//         model:'K12-27M',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "27 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "20 L",
//           },
//           {
//             label: "Nozzles",
//             value: "10",
//           },
//         ]
//       },
//       {
//         model:'K12-32M',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "32 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "24 L",
//           },
//           {
//             label: "Nozzles",
//             value: "12",
//           },
//         ]
//       },
//       {
//         model:'K12-44M',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "44 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "30 L",
//           },
//           {
//             label: "Nozzles",
//             value: "14",
//           },
//         ]
//       },
//       {
//         model:'K12-64M',
//         specifications :[
//           {
//             label: "Cylinder size",
//             value: "64 L",
//           },
//           {
//             label: "Agent capacity",
//             value: "45 L",
//           },
//           {
//             label: "Nozzles",
//             value: "18",
//           },
//         ]
//       }
//     ],
//     certifications: ["UL 300", "NFPA 96/17A", "EN 16282-7"],
//   },


//   // =========================================================
//   // FIREFIGHTING PUMP
//   // =========================================================

//   {
//     id: "horizontal-split-case-pump",
//     categoryId: "firefighting-pump",
//     name: "Horizontal Split Case حريق Pump",
//     description:
//       "A horizontal split case pump is a unique type of Centrifugal Pump whose casing is divided into two distinct chambers, which is different from end suction pumps that are assembled with the suction nozzle,discharge nozzle and casing in one chamber.",
//     image: "/products/firefighting-pump/horizontal-split-case.jpg",
//     specifications: [
//       {
//         label: "Flow range",
//         value: "300–8000 US GPM",
//       },
//       {
//         label: "الضغط rating",
//         value: "80–300 PSI",
//       },
//       {
//         label: "Impeller",
//         value: "Fully enclosed double suction impeller",
//       },
//     ],
//     applications: [
//       "حريق hose reels",
//       "حريق hydrants",
//       "Sprinkler systems",
//     ],
//   },

//   {
//     id: "horizontal-end-suction-pump",
//     categoryId: "firefighting-pump",
//     name: "Horizontal End Suction حريق Pump",
//     description:
//       "NFPA 20 - المعيار for the installation of Stationery Pumps for حريق Protection defines End suction pumpsas follows: 'A single suction pump having its suction nozzle on the opposite side of the casing from the stuffing box and having the face of the suction nozzle perpendicular to the longitudinal axis of the shaft' The water flowing through an End suction pump makes a 90 degree radial turn from suction to discharge.",
//     image: "/products/firefighting-pump/horizontal-end-suction.jpg",
//     specifications: [
//       {
//         label: "Flow range",
//         value: "50–750 US GPM",
//       },
//       {
//         label: "الضغط rating",
//         value: "80–300 PSI",
//       },
//       {
//         label: "Impeller",
//         value: "Dynamically balanced enclosed impeller",
//       },
//     ],
//     applications: [
//       "حريق hose reels",
//       "حريق hydrants",
//       "Sprinkler systems",
//     ],
//   },
//   {
//     id: "diesel-engine",
//     categoryId: "firefighting-pump",
//     name: "Diesel Engine",
//     description:
//       "CLARKE fire engines has the worlds largest range of UL/FM approved diesel fire pump drivers. Clarke حريق Engine covers UL/FM pump requirements from 31 kw to 764 kw with operating speeds from 1470 RPM to 3000 RPM. All Clarke engines are supplied with a standard 24 month manufacturer's warranty. Clarke حريق engine has innovative and patented الضغط Limited Driver diesel engine which protects the sprinkler system from over pressurization by varying engine RPM. Clarke fire engine has dual starting technology as well as the technology for dual ECM electronic injection engines. Both increased diesel engine reliability and performance. Its driveshaft style couplings solved field alignment problems, and significantly reduced the time needed for engine/fire pump installation and maintenance. Clarke has implemented an exciting, ongoing and continuous product improvement program which will provide even more high quality Clarke engine models to meet and exceed the demands. A deduction of 3% of the power is made for each 1000 feet rise in altitude above 300 feet and 1% for each 10 DegC above 77 DegC ambient temperature. Minimum instrumentation and control including adjustable speed governor, over speed shutdown device set approximate 20 above rated engine speed, tachometer with hour meter, oil pressure gauge and temperature gauge. Most diesel engines models work seamlessly with FIREGUARD fire pumps. Working together, they deliver the most efficient and reliable fire pump solutions. Our integrated diesel pump units make us stand out in the market. Optional: NM حريق Engine, Kirloskar.",
//     image: "/products/firefighting-pump/diesel-engine.jpg", 
//     features: [
//       "UL/FM approved diesel fire pump drivers",
//       "Power range: 31 kW to 764 kW",
//       "Operating speeds: 1470 RPM to 3000 RPM",
//       "المعيار 24 month manufacturer's warranty",
//       "Patented الضغط Limited Driver – protects sprinkler system from over pressurization by varying engine RPM",
//       "Dual starting technology",
//       "Dual ECM electronic injection engines",
//       "Driveshaft style couplings – solves field alignment problems and reduces installation/maintenance time",
//       "Minimum instrumentation: adjustable speed governor, overspeed shutdown, tachometer with hour meter, oil pressure & temperature gauges",
//       "Optional brands: NM حريق Engine, Kirloskar",
//     ],
//     certifications: ["UL", "FM"],
//   },
//   {
//     id: "electric-motors",
//     categoryId: "firefighting-pump",
//     name: "Electric Motors",
//     description:
//       "Marathon electric motors are setup in FIREGUARD fire pump solution. Marathon Motors has been leader in providing high quality motors with wide range of UL listed حريق pump drip-proof totally enclosed fan cooled TEFC / ODP. The features of Marathon fire pump motor included horse power range of 3 to 450 HP, 2 and 4 pole capabilities, Cast iron تصنيع, ball bearings, red painted and 60/50 hz ratings, NEMA design B, Code G or less, EPAct efficiency. Marathon حريق pump motors meet NFPA 20 standards and are fully compliant with federal motor efficiency requirements as described in the energy independence and security act of 2007 also known as EISA. FIREGUARD also provides customization service to our customers. Customers can specify different motor brands on their own. Optional Brand Motors: WEG, Techtop.",
//     image: "/products/firefighting-pump/electric-motors.jpg",
//     features: [
//       "UL listed حريق pump motors",
//       "Drip-proof totally enclosed fan cooled (TEFC / ODP)",
//       "Horse power range: 3 to 450 HP",
//       "2 and 4 pole capabilities",
//       "Cast iron تصنيع",
//       "Ball bearings",
//       "Red painted",
//       "60/50 Hz ratings",
//       "NEMA design B, Code G or less",
//       "EPAct efficiency",
//       "Meets NFPA 20 standards",
//       "Fully compliant with EISA (Energy Independence and Security Act of 2007)",
//       "Customization available – customers can specify different motor brands",
//       "Optional brands: WEG, Techtop",
//     ],
//     certifications: ["UL Listed"],
//     variants: [
//       {
//         model: "ODP",
//         description: "Open Drip Proof",
//       },
//       {
//         model: "TEFC",
//         description: "Totally Enclosed Fan Cooled",
//       },
//     ],
//   },
//   {
//     id: "fire-pump-controllers",
//     categoryId: "firefighting-pump",
//     name: "حريق Pump وحدة تحكمs",
//     description:
//       "Tornatech specializes in the conception and manufacturing of fire pump controllers listed by UL and approved by FM and in accordance with the widely recognized NFPA 20 standard. In addition, controllers are developed to meet various local standards and approvals such as A2P (France) and LPCB (UK), to name a few. All FIREGUARD approved pumps are equipped with Tornatech controllers. FIREGUARD branded jockey pumps can also be supplied with Tornatech jockey controllers as additional feature.",
//     image: "/products/firefighting-pump/horizontal-end-suction.jpg",
//     features: [
//       "UL listed and FM approved",
//       "In accordance with NFPA 20 standard",
//       "Developed to meet local standards and approvals (A2P France, LPCB UK, and others)",
//       "All FIREGUARD approved pumps are equipped with Tornatech controllers",
//       "FIREGUARD branded jockey pumps can be supplied with Tornatech jockey controllers",
//     ],
//     certifications: ["UL Listed", "FM Approved", "NFPA 20", "A2P", "LPCB"],
//   },
//   {
//     id: "fuel-system-tank",
//     categoryId: "firefighting-pump",
//     name: "Fuel نظام Tank",
//     description:
//       "FIREGUARD single wall or double wall standard تصنيع fire pump fuel system tanks. Tanks and opening are fabricated and tested to the highest standard. المعيار NPT fittings and leg brackets configuration as specified. C3 standard painting suitable for residential and commercial environment. High standard C4 painting is optional.",
//     image: "/products/firefighting-pump/fuel-system-tank.jpg", 
//     features: [
//       "Single wall or double wall standard تصنيع",
//       "Fabricated and tested to the highest standard",
//       "المعيار NPT fittings",
//       "Leg brackets configuration as specified",
//       "C3 standard painting suitable for residential and commercial environment",
//       "High standard C4 painting optional",
//     ],
//     specifications: [
//       {
//         label: "Construction",
//         value: "Single wall or double wall",
//       },
//       {
//         label: "Fittings",
//         value: "المعيار NPT",
//       },
//       {
//         label: "المعيار Painting",
//         value: "C3 (residential and commercial)",
//       },
//       {
//         label: "Optional Painting",
//         value: "C4 (high standard)",
//       },
//     ],
//   },
//   {
//     id: "flowmeters",
//     categoryId: "firefighting-pump",
//     name: "Flowmeters",
//     description:
//       "FIREGUARD has a wide range of well engineered flowmeters able to meet the specific needs of different customers. A comprehensive, approved range of innovative and reliable flowmeters are available for use in حريق Pump Testing from GVI and INFLUX.",
//     image: "/products/firefighting-pump/flowmeters.jpg", 
//     features: [
//       "Wide range of well engineered flowmeters",
//       "Meets specific needs of different customers",
//       "Comprehensive approved range of innovative and reliable flowmeters",
//       "Available for use in حريق Pump Testing",
//       "Brands: GVI and INFLUX",
//     ],
//     certifications: ["UL Listed"],
//   },
//   {
//     id: "automatic-control-valves",
//     categoryId: "firefighting-pump",
//     name: "Automatic تحكم صمامs",
//     description:
//       "CLA-VAL has been a leading manufacturer of automatic control valves, serving waterworks, fire protection, aviation fueling and industrial customers throughout the world. Main relief valve is designed to relieve excess pressure in a fire protection system, while eliminating the damaging effects of cavitation. The valve features an adjustable pressure setting, fast opening to maintain steady line pressure, and gradual closing for surge free operation. Casing relief valve is designed to relieve excess pressure in a fire protection system, while eliminating the damaging effects of cavitation. The valve features an adjustable pressure setting, fast opening to maintain steady line pressure, and gradual closing for surge free operation. It is typically used in a fire protection system to trim water pressure, thus preventing pressure build-up whenever line pressure exceeds the setting of the spring. It will relieve excess pressure to atmosphere to prevent damage to the distribution network.",
//     image: "/products/firefighting-pump/automatic-control-valves.jpg",
//     features: [
//       "Leading manufacturer of automatic control valves for fire protection",
//       "Adjustable pressure setting",
//       "Fast opening to maintain steady line pressure",
//       "Gradual closing for surge-free operation",
//       "Eliminates damaging effects of cavitation",
//     ],
//     certifications: ["FM Approved"],
//     variants: [
//       {
//         model: "Main Relief Valve",
//         description:
//           "Designed to relieve excess pressure in a fire protection system while eliminating cavitation effects. الميزات adjustable pressure setting, fast opening, and gradual closing for surge-free operation.",
//       },
//       {
//         model: "Casing Relief Valve",
//         description:
//           "Typically used to trim water pressure and prevent pressure build-up. Relieves excess pressure to atmosphere to protect the distribution network. الميزات adjustable pressure setting, fast opening, and gradual closing.",
//       },
//     ],
//   },

//   {
//     id: "fgedj-fire-pump-set",
//     categoryId: "firefighting-pump",
//     name: "FGEDJ حريق Pump Set",
//     description:
//       "FGEDJ حريق Pump Set consists of End Suction Centrifugal Pump driven by Electric Motor, End Suction Diesel Pump, and Vertical Jockey Pump. Pumps are assembled with discharge line accessories as well as تحكم (100GPM - 2500GPM) and other capacity can be customized. Accessories include Suction pipe, Discharge pipe with Flanges, Battery, Gate صمامs, Check صمامs, Flexible Expansion Joints, الضغط Switches, الضغط Gauge, Base Frame, etc. حريق pumps are designed for whole operational life, the maximum reliability is always the first priority. The components are affixed onto a steel framing structure. Each controller has its own individual pressure sensing line. The suction line should never include a strainer. Check valve and butterfly valve in the discharge line.",
//     image: "/products/firefighting-pump/fgedj-fire-pump-set.jpg" , 
//     features: [
//       "Switch automatically among the three pumps",
//       "Both يدوي and Automatic operation is available",
//       "Can work when the power is off",
//       "Easy Installation",
//       "Customized size and pump group",
//       "FGYE high efficient motor with protection IP55 class F – High performance and low power consumption",
//       "Pump case with Anti-corrosive coating with quality NSK bearings, wear resistance mechanical seal",
//       "Circuit available up on request",
//       "Different Mounting Styles",
//       "Low Maintenance Cost and available spare parts",
//       "Electronic battery charger",
//     ],
//     applications: [
//       "حريق fighting system",
//     ],
//     specifications: [
//       {
//         label: "Flow Range",
//         value: "100 GPM – 2500 GPM (customizable)",
//       },
//       {
//         label: "Pump Type",
//         value: "End Suction Centrifugal (Electric) + End Suction Diesel + Vertical Jockey",
//       },
//     ],
//     variants: [
//       {
//         model: "FGEDJ",
//         description: "حريق pump set consists of Electric pump + Diesel pump + Jockey pump and all accessories",
//       },
//       {
//         model: "FGDJ",
//         description: "حريق pump set consists of Diesel pump + Jockey pump and all accessories",
//       },
//       {
//         model: "FGEJ",
//         description: "حريق pump set consists of Electric pump + Jockey pump and all accessories",
//       },
//       {
//         model: "FGEEJ",
//         description: "حريق pump set consists of Electric pump + Electric pump + Jockey pump and all accessories",
//       },
//     ],
//   },

//   {
//     id: "pump-controller",
//     categoryId: "firefighting-pump",
//     name: "Pump وحدة تحكم",
//     description:
//       "Equipped with integrated digitalization and network technologies for precise data measurement, alarm protection, remote control, measuring and communication. The fire pump control panel performs input (receives signals from alarm devices such as pressure operated switches or remote fire alarm equipment), output (provides electrical power to actuate the motor and sends signal to actuate the diesel engine), and monitoring (monitors the fire pump operation and performance). The pump consists of three separate controllers: electric, diesel and jockey controllers. Electrical components such as circuit breaker, switches, relays and other devices dedicated to the operation of fire pumps are SCHNEIDER products. All controllers are completely assembled, wired and tested by the manufacturer before shipment from factory.",
//     image: "/products/firefighting-pump/pump-controller.jpg",
//     features: [
//       "Equipped with integrated digitalization and network technologies for precise data measurement, alarm protection, remote control, measuring and communication",
//       "DOL, Star Delta starter or soft starter based on load or client requirement",
//       "All controllers are completely assembled, wired and tested",
//       "Self-acting to start, run and protect the driver",
//       "تشغيل آلي أو يدوي options",
//       "Degree of protection IP55",
//       "3 indicating lamps for phase status",
//       "Available phase failure/phase sequence relay for larger capacity",
//       "Available ammeter and voltmeter for larger capacity",
//       "Available over/under voltage relay for larger capacity",
//       "Custom made design based on request",
//       "Soft starter for larger capacity or upon request",
//     ],
//     variants: [
//       {
//         model: "Electrical Pump Controller",
//         description: "وحدة تحكم for electric-driven fire pump",
//       },
//       {
//         model: "Diesel Pump Controller",
//         description: "وحدة تحكم for diesel-driven fire pump",
//       },
//       {
//         model: "Jockey Pump Controller",
//         description: "وحدة تحكم for jockey pump",
//       },
//     ],
//   },
// ] as const;

