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
}as const

