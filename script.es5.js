"use strict";

var revealItems = document.querySelectorAll('.reveal');
var counters = document.querySelectorAll('[data-counter]');
var year = document.getElementById('year');
var translationNodes = document.querySelectorAll('[data-i18n]');
var languageButtons = document.querySelectorAll('.lang-btn');
var translations = {
  en: {
    pageTitle: 'SEC Sahiony | Engineering & Contracting',
    metaDescription: 'SEC Sahiony Engineering & Contracting - Professional engineering, MEP contracting, maintenance, and project delivery.',
    brandText: 'SEC Sahiony',
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navProjects: 'Projects',
    navQhse: 'QHSE',
    navContact: 'Contact',
    headerCta: 'Start a Project',
    heroEyebrow: 'Sahiony Engineering & Contracting',
    heroTitleTop: 'Building',
    heroTitleBottom: 'Systems That Perform',
    heroLead: 'SEC delivers civil, mechanical, electrical, and life-safety engineering with precision, speed, and uncompromising quality.',
    heroExplore: 'Explore Services',
    heroViewProjects: 'View Projects',
    statOne: 'Years of tracked market experience',
    statTwo: 'Core technical divisions',
    statThree: 'Kiosks delivered in a single program',
    statFour: 'Integrated MEP and maintenance services',
    aboutEyebrow: 'Who We Are',
    aboutTitle: 'From Regional Contracting Roots to Multi-Disciplinary Delivery',
    aboutBodyOne: 'SEC, an affiliate of Sahiony Group Co. W.L.L., has grown from a trusted contracting base into a full-scale engineering organization focused on design, supply, installation, testing, commissioning, and maintenance.',
    aboutBodyTwo: 'The company operates with a continuous quality mindset and a customer-first culture, delivering project outcomes across civil works, MEP systems, and building renovation scopes.',
    visionTitle: 'Vision',
    visionBody: 'Serve at the highest standards and stay ahead of future industry challenges.',
    missionTitle: 'Mission',
    missionBody: 'Achieve customer satisfaction through a continuous quality process and trusted execution.',
    goalTitle: 'Goal',
    goalBody: 'Create a culture where every associate drives constant improvement.',
    servicesEyebrow: 'What We Do',
    servicesTitle: 'Engineering Services Across Every Critical System',
    serviceCivilTitle: 'Civil Works',
    serviceCivilBody: 'All types of civil scope execution for new builds, refurbishment, and infrastructure support.',
    serviceMechanicalTitle: 'Mechanical Systems',
    serviceMechanicalBody: 'HVAC, plumbing, drainage, ventilation, smoke exhaust, heating, and generator solutions.',
    serviceElectricalTitle: 'Electrical Systems',
    serviceElectricalBody: 'Low-voltage and low-current installations, electrical panels, busbar trunking, and controls.',
    serviceFireTitle: 'Fire Protection',
    serviceFireBody: 'Sprinklers, alarm, suppression, pumps, and hydraulic design aligned with NFPA code frameworks.',
    serviceBmsTitle: 'BMS & Low Current',
    serviceBmsBody: 'Integrated fire alarm, access control, data/voice, CCTV, PA, SMATV, and audio-visual systems.',
    serviceMaintenanceTitle: 'Building Maintenance',
    serviceMaintenanceBody: 'Reliable MEP maintenance teams including engineers, foremen, technicians, and field specialists.',
    projectsEyebrow: 'Project Snapshot',
    projectsTitle: 'Field-Proven Delivery with Real Impact',
    projectCardTitle: 'Lattakia Kiosk Program',
    projectCardBody: 'Main contractor role for supply and installation of 150 kiosks in Lattakia, demonstrating SEC capacity for high-volume coordinated execution.',
    projectCta: 'Discuss Your Project',
    qhseEyebrow: 'Standards',
    qhseTitle: 'Quality, Health, Safety, and Environmental Commitment',
    qhseOneTitle: 'Quality-Driven Process',
    qhseOneBody: 'System-based management and documented procedures for design, procurement, installation, commissioning, and maintenance quality.',
    qhseTwoTitle: 'Safety-First Culture',
    qhseTwoBody: 'SEC prioritizes incident prevention through training, supervision accountability, and safe execution at every work level.',
    qhseThreeTitle: 'Responsible Delivery',
    qhseThreeBody: 'The company is committed to protecting people and environment while meeting applicable project and regulatory requirements.',
    contactTitle: 'Let Us Engineer Your Next Milestone',
    contactLead: 'For tenders, partnerships, and project consultations, contact SEC directly.',
    contactAddress: 'Syria, Lattakia, Baghdad Street',
    footerText: 'SEC Sahiony Engineering & Contracting. All rights reserved.'
  },
  ar: {
    pageTitle: 'شركة SEC صهيوني | الهندسة والمقاولات',
    metaDescription: 'شركة SEC صهيوني للهندسة والمقاولات - حلول هندسية وميكانيكية وكهربائية وصيانة باحترافية عالية.',
    brandText: 'SEC صهيوني',
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navServices: 'الخدمات',
    navProjects: 'المشاريع',
    navQhse: 'الجودة والسلامة',
    navContact: 'تواصل معنا',
    headerCta: 'ابدأ مشروعك',
    heroEyebrow: 'صهيوني للهندسة والمقاولات',
    heroTitleTop: 'نبني',
    heroTitleBottom: 'أنظمة تعمل بكفاءة',
    heroLead: 'تقدم SEC حلول الهندسة المدنية والميكانيكية والكهربائية وأنظمة السلامة بدقة وسرعة وجودة لا تقبل التنازل.',
    heroExplore: 'استكشف الخدمات',
    heroViewProjects: 'عرض المشاريع',
    statOne: 'سنوات من الخبرة العملية المتراكمة',
    statTwo: 'أقسام فنية أساسية',
    statThree: 'كشك تم تنفيذه ضمن برنامج واحد',
    statFour: 'خدمة متكاملة في أنظمة MEP والصيانة',
    aboutEyebrow: 'من نحن',
    aboutTitle: 'من جذور المقاولات الإقليمية إلى تنفيذ هندسي متعدد التخصصات',
    aboutBodyOne: 'تطورت SEC، التابعة لمجموعة صهيوني، من قاعدة موثوقة في المقاولات إلى مؤسسة هندسية متكاملة تركز على التصميم والتوريد والتركيب والاختبار والتشغيل والصيانة.',
    aboutBodyTwo: 'تعمل الشركة بعقلية التحسين المستمر وثقافة تتمحور حول العميل، مع تنفيذ فعال في الأعمال المدنية وأنظمة MEP وتجديد المباني.',
    visionTitle: 'الرؤية',
    visionBody: 'تقديم أعلى المعايير ومواكبة تحديات الصناعة اليوم وفي المستقبل.',
    missionTitle: 'الرسالة',
    missionBody: 'تحقيق رضا العملاء عبر عملية جودة مستمرة وتنفيذ موثوق.',
    goalTitle: 'الهدف',
    goalBody: 'بناء ثقافة يشارك فيها كل فرد في التطوير المستمر.',
    servicesEyebrow: 'ماذا نقدم',
    servicesTitle: 'خدمات هندسية تغطي كل الأنظمة الحيوية',
    serviceCivilTitle: 'الأعمال المدنية',
    serviceCivilBody: 'تنفيذ مختلف نطاقات الأعمال المدنية للمشاريع الجديدة وأعمال التأهيل والدعم البنيوي.',
    serviceMechanicalTitle: 'الأنظمة الميكانيكية',
    serviceMechanicalBody: 'حلول التكييف والتهوية والسباكة والصرف والدخان والتدفئة والمولدات.',
    serviceElectricalTitle: 'الأنظمة الكهربائية',
    serviceElectricalBody: 'أنظمة الجهد المنخفض والتيار الخفيف ولوحات الكهرباء والباص بار والتحكم.',
    serviceFireTitle: 'أنظمة مكافحة الحريق',
    serviceFireBody: 'رشاشات وإنذار وإخماد ومضخات وتصميم هيدروليكي وفق الأطر المعتمدة مثل NFPA.',
    serviceBmsTitle: 'BMS والتيار الخفيف',
    serviceBmsBody: 'تكامل أنظمة إنذار الحريق والتحكم بالدخول والبيانات والصوت وCCTV وPA وSMATV والأنظمة السمعية البصرية.',
    serviceMaintenanceTitle: 'صيانة المباني',
    serviceMaintenanceBody: 'فرق صيانة MEP موثوقة تشمل مهندسين ومشرفين وفنيين وكوادر ميدانية متخصصة.',
    projectsEyebrow: 'لمحة مشروع',
    projectsTitle: 'تنفيذ مثبت ميدانيا بنتائج مؤثرة',
    projectCardTitle: 'برنامج أكشاك اللاذقية',
    projectCardBody: 'تولت SEC دور المقاول الرئيسي لتوريد وتركيب 150 كشكا في اللاذقية، بما يثبت قدرتها على تنفيذ مشاريع كبيرة بتنسيق عال.',
    projectCta: 'ناقش مشروعك',
    qhseEyebrow: 'المعايير',
    qhseTitle: 'التزام الجودة والصحة والسلامة والبيئة',
    qhseOneTitle: 'عملية تقودها الجودة',
    qhseOneBody: 'إدارة منهجية موثقة تشمل التصميم والتوريد والتركيب والتشغيل والصيانة بأعلى مستويات الجودة.',
    qhseTwoTitle: 'ثقافة السلامة أولا',
    qhseTwoBody: 'تعطي SEC أولوية لمنع الحوادث من خلال التدريب والمساءلة والإشراف والتنفيذ الآمن في كل مستوى.',
    qhseThreeTitle: 'تنفيذ مسؤول',
    qhseThreeBody: 'تلتزم الشركة بحماية الأفراد والبيئة مع الالتزام بالمتطلبات التنظيمية ومتطلبات المشاريع.',
    contactTitle: 'دعنا ننفذ إنجازك القادم',
    contactLead: 'للعطاءات والشراكات والاستشارات الفنية، تواصل مباشرة مع SEC.',
    contactAddress: 'سوريا، اللاذقية، شارع بغداد',
    footerText: 'شركة SEC صهيوني للهندسة والمقاولات. جميع الحقوق محفوظة.'
  }
};
var currentLang = localStorage.getItem('sec-lang') || 'en';
function formatNumber(value) {
  var locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
  return value.toLocaleString(locale);
}
function updateCounterDisplay() {
  counters.forEach(function (counter) {
    var target = Number(counter.getAttribute('data-counter'));
    if (!Number.isNaN(target)) {
      counter.textContent = formatNumber(target);
    }
  });
}
function setLanguage(lang) {
  var selected = translations[lang] ? lang : 'en';
  currentLang = selected;
  localStorage.setItem('sec-lang', selected);
  document.documentElement.lang = selected;
  document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = selected === 'ar' ? 'rtl' : 'ltr';
  var selectedMap = translations[selected];
  translationNodes.forEach(function (node) {
    var key = node.getAttribute('data-i18n');
    if (key && selectedMap[key]) {
      node.textContent = selectedMap[key];
    }
  });
  if (selectedMap.pageTitle) {
    document.title = selectedMap.pageTitle;
  }
  var metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && selectedMap.metaDescription) {
    metaDescription.setAttribute('content', selectedMap.metaDescription);
  }
  languageButtons.forEach(function (button) {
    button.classList.toggle('active', button.dataset.lang === selected);
  });
  updateCounterDisplay();
}
if (year) {
  year.textContent = String(new Date().getFullYear());
}
languageButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    setLanguage(button.dataset.lang || 'en');
  });
});
setLanguage(currentLang);
var revealObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18
});
revealItems.forEach(function (item) {
  return revealObserver.observe(item);
});
var counterObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }
    var counter = entry.target;
    var target = Number(counter.getAttribute('data-counter'));
    var duration = 1300;
    var start = performance.now();
    function update(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = formatNumber(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = formatNumber(target);
      }
    }
    requestAnimationFrame(update);
    observer.unobserve(counter);
  });
}, {
  threshold: 0.7
});
counters.forEach(function (counter) {
  return counterObserver.observe(counter);
});

// ── Mobile navigation toggle ──────────────────────
var navToggle = document.querySelector('.nav-toggle');
var siteHeader = document.querySelector('.site-header');
if (navToggle && siteHeader) {
  navToggle.addEventListener('click', function () {
    var isOpen = siteHeader.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      siteHeader.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (!siteHeader.contains(e.target)) {
      siteHeader.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      siteHeader.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

//# sourceMappingURL=script.es5.js.map