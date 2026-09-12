import {
  BadgeCheck,
  Building,
  Building2,
  Factory,
  Gauge,
  Route,
  ScanSearch,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export type CompanyProfileContent = {
  heroDescription: string;
  eyebrow: string;
  title: string;
  introduction: string;
  deliveryPillars: { title: string; description: string }[];
  methodology: { title: string; description: string }[];
  readiness: string[];
  governance: { title: string; description: string }[];
  experience: { title: string; scope: string }[];
  gallery: { src: string; alt: string; label: string }[];
};

export type Company = {
  id: string;
  name: string;
  country: string;
  logo: string;
  icon: LucideIcon;
  description: string;
  bullets: string[];
  pages: string[];
  profile?: CompanyProfileContent;
};

export const stats = [
  { value: '02', label: 'Group companies' },
  { value: '2015', label: 'Qatar roots' },
  { value: '2025', label: 'Syria re-established' },
  { value: '360°', label: 'Engineering capability' },
] as const;

export const groupHighlights = [
  'A two-company structure spanning Qatar and Syria under a unified Sahiony Group direction.',
  'HTA Construction & Trading in Qatar with electro-mechanical contracting, maintenance, and infrastructure positioning.',
  'SEC Engineering & Contracting in Syria with general contracting, renovation, MEP systems, fire protection, electrical, and low current capability.',
  'A shared engineering DNA shaped by project delivery, technical-office support, testing, commissioning, and maintenance services.',
] as const;

export const companies: Company[] = [
  {
    id: 'hta',
    name: 'HTA Construction & Trading',
    country: 'Qatar',
    logo: '/hta-logo.jpg',
    icon: Factory,
    description: 'HTA is an integrated construction and engineering partner in Qatar, coordinating roads, civil works, MEP, life safety and building systems through one accountable delivery structure.',
    bullets: [
      'Roads & infrastructure',
      'General contracting & civil works',
      'MEP engineering systems',
      'Fire, ELV & building controls',
    ],
    pages: ['Overview', 'Services', 'Projects', 'Certifications', 'Contact'],
    profile: {
      heroDescription: 'One accountable delivery partner for roads, civil works, MEP, life safety and intelligent building systems across Qatar.',
      eyebrow: 'INTEGRATED DELIVERY PLATFORM',
      title: 'One project. One coordinated execution system.',
      introduction: 'HTA brings multidisciplinary scopes under a single delivery structure, giving clients clearer responsibility, controlled interfaces and consistent reporting from mobilization through handover.',
      deliveryPillars: [
        { title: 'Roads & Infrastructure', description: 'Surveying, earthworks, road layers, asphalt, rehabilitation, drainage and traffic-safety works.' },
        { title: 'Civil Works', description: 'Structural and civil packages, site development, renovation, interiors and exterior finishes.' },
        { title: 'MEP Systems', description: 'HVAC, plumbing, drainage and electrical systems coordinated from technical review to commissioning.' },
        { title: 'Fire, ELV & BMS', description: 'Life-safety, security, low-current and building-control systems delivered as an integrated package.' },
      ],
      methodology: [
        { title: 'Understand the scope', description: 'Review requirements, interfaces, risks and delivery priorities.' },
        { title: 'Plan mobilization', description: 'Align resources, procurement, programme and site logistics.' },
        { title: 'Control execution', description: 'Coordinate disciplines through quality, safety and progress controls.' },
        { title: 'Test and hand over', description: 'Complete inspections, commissioning, documentation and closeout.' },
        { title: 'Support after handover', description: 'Provide responsive technical and maintenance support.' },
      ],
      readiness: [
        'Road crews, equipment and execution resources',
        'Engineering and technical-office support',
        'QA/QC and HSE controls',
        'Supply-chain and interface coordination',
      ],
      governance: [
        { title: 'Single accountability', description: 'One delivery partner with clear ownership of scope and interfaces.' },
        { title: 'Integrated project control', description: 'Programme, procurement, quality and site progress managed together.' },
        { title: 'Early risk visibility', description: 'Constraints and decisions surfaced early through structured reporting.' },
        { title: 'Structured handover', description: 'Testing, records and closeout organized for a controlled transition.' },
      ],
      experience: [
        { title: 'Road & Infrastructure Works in Qatar', scope: 'Road construction and rehabilitation' },
        { title: 'ISF Camp – Al Rayyan', scope: 'Civil and infrastructure works' },
        { title: 'Asphalt Access Road – Umm Taqa', scope: 'Asphalt access-road delivery' },
        { title: 'GWC Logistics Park', scope: 'ELV systems' },
        { title: 'Educational Facilities', scope: 'Electrical and life-safety upgrades and maintenance' },
        { title: 'Protech Buildings', scope: 'Integrated MEP delivery' },
      ],
      gallery: [
        { src: '/hta-roads-delivery.webp', alt: 'HTA road paving team delivering asphalt works in Qatar', label: 'Roads & Infrastructure' },
        { src: '/Projetcs/HTA/RAS-LAFAN/img-3.jpg', alt: 'Architectural view of a multidisciplinary building project supported by HTA', label: 'Integrated Building Delivery' },
        { src: '/Projetcs/HTA/AL-MAJED-FARM/img-21.jpg', alt: 'Landscape and site-development design delivered by HTA', label: 'Civil & Site Development' },
      ],
    },
  },
  {
    id: 'sec',
    name: 'SEC Engineering & Contracting',
    country: 'Syria',
    logo: '/sec-logo-sahiony.jpg',
    icon: Building,
    description: 'SEC brings engineering experience to Syria through general contracting, building renovation, MEP systems and maintenance services.',
    bullets: [
      'General contracting & renovation',
      'MEP and life safety systems',
      'Electrical & low current systems',
      'Technical office & execution support',
    ],
    pages: ['Overview', 'Services', 'Projects', 'Downloads', 'Contact'],
  },
];

export const services = [
  {
    title: 'Roads & Infrastructure',
    icon: Route,
    description: 'Road construction, rehabilitation, earthworks, asphalt, drainage and traffic-safety packages delivered through controlled field execution.',
    bullets: ['Road construction', 'Asphalt & rehabilitation', 'Drainage & road safety'],
  },
  {
    title: 'General Contracting & Civil Works',
    icon: Building2,
    description: 'Structural, civil and site-development works, including renovation and coordinated interior and exterior finishes.',
    bullets: ['Civil & structural works', 'Renovation', 'Site development'],
  },
  {
    title: 'MEP Systems',
    icon: Gauge,
    description: 'Coordinated HVAC, plumbing, drainage and electrical systems supported by installation, testing and commissioning.',
    bullets: ['HVAC', 'Plumbing & drainage', 'Electrical systems'],
  },
  {
    title: 'Fire, ELV & BMS',
    icon: ShieldCheck,
    description: 'Integrated life-safety, security, low-current and intelligent building-control systems for coordinated operation.',
    bullets: ['Fire fighting & alarm', 'Security & low current', 'BMS & controls'],
  },
  {
    title: 'Maintenance & Technical Support',
    icon: Wrench,
    description: 'Planned and reactive maintenance, backed by trained technicians and practical support for buildings and MEP systems.',
    bullets: ['Building maintenance', 'MEP support', 'Skilled technicians'],
  },
  {
    title: 'Project Management & Technical Office',
    icon: ScanSearch,
    description: 'Project planning, procurement support, quality control, testing and commissioning across both companies.',
    bullets: ['Planning', 'QA/QC', 'Commissioning'],
  },
] as const;

export type FeaturedProject = {
  slug:string,
  title: string;
  category: string;
  summary: string;
  img:string[]
};

export type FeaturedProjectsData = {
  hta: readonly FeaturedProject[];
  sec: readonly FeaturedProject[];
};

export const featuredProjects: FeaturedProjectsData = {
  hta: [
    {
      slug:'Shooting-Range',
      title: 'Al Hadaf Shooting Range PH-2',
      category: 'HTA / Qatar',
      summary:
        'Supply, Installation , T&C of MEP systems',
      img:['/Projetcs/HTA/Shooting-Range/img-1.jpg','/Projetcs/HTA/Shooting-Range/img-2.jpg','/Projetcs/HTA/Shooting-Range/img-3.jpg','/Projetcs/HTA/Shooting-Range/img-4.jpg','/Projetcs/HTA/Shooting-Range/img-5.jpg']
    },
    {
      slug:'JUNIORS',
      title: 'JUNIORS',
      category: 'HTA / Qatar',
      summary:
        'Fire Works',
      img:['/Projetcs/HTA/JUNIORS/img-1.jPG']
    },
    {
      slug:'ALWAKRAH-ALBADER',
      title: 'ALWAKRAH ALBADER ',
      category: 'HTA / Qatar',
      summary:
        'Fire Alarm system',
      img:['/Projetcs/HTA/ALWAKRAH-ALBADER/img-1.jpg','/Projetcs/HTA/ALWAKRAH-ALBADER/img-2.jpg','/Projetcs/HTA/ALWAKRAH-ALBADER/img-3.jpg']
    },
    {
      slug:'Almeera',
      title: 'Almeera Algarafah , Almeera Al-Qutaifiah , ALMEERA IZGHAWA',
      category: 'HTA / Qatar',
      summary:
        'Renovation of MEP system',
      img:['/Projetcs/HTA/Almeera/img-1.jpg','/Projetcs/HTA/Almeera/img-2.jpg','/Projetcs/HTA/Almeera/img-3.jpg','/Projetcs/HTA/Almeera/img-4.jpg','/Projetcs/HTA/Almeera/img-5.jpg','/Projetcs/HTA/Almeera/img-6.jpg']
    },
    {
      slug:'NJLAA',
      title: 'NJLAA Schools',
      category: 'HTA / Qatar',
      summary:
        'NJLAA Schools Maintainance',
     img:['/Projetcs/HTA/NJLAA/img-1.jpg','/Projetcs/HTA/NJLAA/img-2.jpg','/Projetcs/HTA/NJLAA/img-3.jpg','/Projetcs/HTA/NJLAA/img-4.jpg']
    },
    {
      slug:'CRAFTERAS',
      title: 'CRAFTERAS',
      category: 'HTA / Qatar',
      summary:
        'Fire Works',
      img:['/Projetcs/HTA/CRAFTERAS/img-1.jpg','/Projetcs/HTA/CRAFTERAS/img-2.jpg','/Projetcs/HTA/CRAFTERAS/img-3.jpg','/Projetcs/HTA/CRAFTERAS/img-4.jpg','/Projetcs/HTA/CRAFTERAS/img-5.jpg','/Projetcs/HTA/CRAFTERAS/img-6.jpg']
    },
    {
      slug:'Gewan',
      title: 'Gewan island buildings 7A/B - 5A/b - 4A/B club house',
      category: 'HTA / Qatar',
      summary:
        'Installation T&C of HVAC systems',
      img:['/Projetcs/HTA/Gewan/img-1.jpg' ,'/Projetcs/HTA/Gewan/img-2.jpg','/Projetcs/HTA/Gewan/img-3.jpg']
    },
    {
      slug:'VILLA-HASAN',
      title: 'Um Al-Saneem Villa',
      category: 'HTA / Qatar',
      summary:
        'Civil & MEP works',
      img:['/Projetcs/HTA/VILLA-HASAN/img-1.jpg','/Projetcs/HTA/VILLA-HASAN/img-2.jpg','/Projetcs/HTA/VILLA-HASAN/img-3.jpg']
    },
    {
      slug:'RAS-LAFAN',
      title: 'RAS LAFAN RLCI',
      category: 'HTA / Qatar',
      summary:
        'Programing for all types of fire alarm control panel',
      img:['/Projetcs/HTA/RAS-LAFAN/img-1.jpg','/Projetcs/HTA/RAS-LAFAN/img-2.jpg','/Projetcs/HTA/RAS-LAFAN/img-3.jpg','/Projetcs/HTA/RAS-LAFAN/img-4.jpg','/Projetcs/HTA/RAS-LAFAN/img-5.jpg','/Projetcs/HTA/RAS-LAFAN/img-6.jpg','/Projetcs/HTA/RAS-LAFAN/img-7.jpg','/Projetcs/HTA/RAS-LAFAN/img-8.jpg']
    },
    {
      slug:'ALNASR-PROMAN-FABIO',
      title: 'RESIDENTIAL & COMMERCIALBUILDING (B + G + 4) Al Naser Area, Doha',
      category: 'HTA / Qatar',
      summary:
        'Supply , Installation , T&C & Maintenance of MEP works',
      img:['/Projetcs/HTA/ALNASR-PROMAN-FABIO/img-1.jpg','/Projetcs/HTA/ALNASR-PROMAN-FABIO/img-2.jpg','/Projetcs/HTA/ALNASR-PROMAN-FABIO/img-3.jpg','/Projetcs/HTA/ALNASR-PROMAN-FABIO/img-4.jpg']
    },
    {
      slug:'AL-MAJED-FARM',
      title: 'AL-MAJED FARM Rawdit Rashed Area, Doha',
      category: 'HTA / Qatar',
      summary:
        'Supply , Installation , T&C of rain water system & hardscaping',
      img:['/Projetcs/HTA/AL-MAJED-FARM/img-1.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-2.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-3.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-4.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-5.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-6.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-8.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-9.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-10.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-11.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-12.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-13.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-14.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-15.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-16.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-17.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-18.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-19.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-20.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-21.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-22.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-23.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-24.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-25.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-26.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-27.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-28.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-29.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-30.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-31.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-32.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-33.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-34.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-35.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-36.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-37.jpg','/Projetcs/HTA/AL-MAJED-FARM/img-38.jpg']
    },
    {
      slug:'Turkey-PAVILION',
      title: 'EXPO QATAR : Turkey side',
      category: 'HTA / Qatar',
      summary:
        'Supply , Installation , T&C of Fire Systems',
      img:['/Projetcs/HTA/Turkey-PAVILION/img-1.jpg','/Projetcs/HTA/Turkey-PAVILION/img-2.jpg']
    },
    {
      slug:'JAPANESE-PAVILION',
      title: 'EXPO QATAR :JAPANESE PAVILION',
      category: 'HTA / Qatar',
      summary:
        'Supply , Installation , T&C of MEP systems',
      img:['/Projetcs/HTA/JAPANESE-PAVILION/img-1.png','/Projetcs/HTA/JAPANESE-PAVILION/img-2.png']
    },
  ],
  sec: [
    {
      slug:'Naval-Forces',
      title: 'Naval Forces and Coastal Defense Command',
      category: 'SEC / Syria',
      summary:
        'Renovation Naval Forces and Coastal Defense Command – Lattakia',
      img:['/Projetcs/SEC/Naval-Forces/img-1.jpg','/Projetcs/SEC/Naval-Forces/img-2.jpg','/Projetcs/SEC/Naval-Forces/img-3.jpg']
    },
     {
      slug:'BASHOURA-MOSQUE',
      title: 'BASHOURA MOSQUE',
      category: 'SEC / Syria',
      summary:
        'Renovation Bashura Mosque – Lattakia',
      img:['/Projetcs/SEC/BASHOURA-MOSQUE/img-1.jpg','/Projetcs/SEC/BASHOURA-MOSQUE/img-2.jpg' , '/Projetcs/SEC/BASHOURA-MOSQUE/img-3.jpg','/Projetcs/SEC/BASHOURA-MOSQUE/img-4.jpg','/Projetcs/SEC/BASHOURA-MOSQUE/img-5.jpg','/Projetcs/SEC/BASHOURA-MOSQUE/img-6.jpg','/Projetcs/SEC/BASHOURA-MOSQUE/img-7.jpg','/Projetcs/SEC/BASHOURA-MOSQUE/img-8.jpg']
    },
    {
      slug:'STAMO-AIRPORT',
      title: 'STAMO AIRPORT',
      category: 'SEC / Syria',
      summary:
        'Stamo Airport, Syria.',
      img:['/Projetcs/SEC/STAMO-AIRPORT/img-1.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-2.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-3.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-4.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-5.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-6.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-7.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-8.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-9.jpg','/Projetcs/SEC/STAMO-AIRPORT/img-10.jpg']
    },
    {
      slug:'Lattakia-Kiosk',
      title: 'Lattakia Kiosk Project',
      category: 'SEC / Syria',
      summary:
        'Supply, Installation, of 150 Kiosk in Lattakia',
      img:['/Projetcs/SEC/Lattakia-Kiosk/img-1.jpg','/Projetcs/SEC/Lattakia-Kiosk/img-2.jpg','/Projetcs/SEC/Lattakia-Kiosk/img-3.jpg','/Projetcs/SEC/Lattakia-Kiosk/img-4.jpg']
    },
     {
      slug:'AL-Ihsan-Mosque',
      title: 'AL-Ihsan Mosque',
      category: 'SEC / Syria',
      summary:
        'Renovation IhsanMosque – Kinsiba - Lattakia.',
      img:['/Projetcs/SEC/AL-Ihsan-Mosque/img-1.jpg','/Projetcs/SEC/AL-Ihsan-Mosque/img-2.jpg','/Projetcs/SEC/AL-Ihsan-Mosque/img-3.jpg','/Projetcs/SEC/AL-Ihsan-Mosque/img-4.jpg','/Projetcs/SEC/AL-Ihsan-Mosque/img-5.jpg','/Projetcs/SEC/AL-Ihsan-Mosque/img-6.jpg']
    },
     {
      slug:'KINSIBA-SHCOOL',
      title: 'KINSIBA SHCOOL',
      category: 'SEC / Syria',
      summary:
        'Renovation Kinsiba Shcool - Lattakia',
      img:['/Projetcs/SEC/KINSIBA-SHCOOL/img-1.jpg','/Projetcs/SEC/KINSIBA-SHCOOL/img-2.jpg','/Projetcs/SEC/KINSIBA-SHCOOL/img-3.jpg','/Projetcs/SEC/KINSIBA-SHCOOL/img-4.jpg','/Projetcs/SEC/KINSIBA-SHCOOL/img-5.jpg','/Projetcs/SEC/KINSIBA-SHCOOL/img-6.jpg','/Projetcs/SEC/KINSIBA-SHCOOL/img-7.jpg','/Projetcs/SEC/KINSIBA-SHCOOL/img-8.jpg','/Projetcs/SEC/KINSIBA-SHCOOL/img-9.jpg']
    },
  ],
};

export const systems = [
  'General contracting & renovation',
  'Road maintenance & infrastructure works',
  'HVAC systems',
  'Plumbing & drainage systems',
  'Fire fighting systems',
  'Fire alarm systems',
  'Electrical panels & busbar trunking',
  'Low current systems',
  'Building maintenance services',
  'Testing & commissioning',
  'Project management & planning',
  'Technical office support',
] as const;

export const brands = [
  'Schneider Electric',
  'Legrand',
  'SCAME',
  'Bosch',
  'Dahua',
  'Victaulic',
  'Notifier',
  'Simplex',
  'VES',
  'GST',
  'Fireguard',
  'Prysmian',
] as const;

export const siteMap = [
  { title: 'Home', description: 'Group-level landing page introducing Sahiony Group, value proposition, companies, and shared capability.' },
  { title: 'About the Group', description: 'Corporate story, market presence, engineering philosophy, and cross-border positioning.' },
  { title: 'HTA Qatar', description: 'Dedicated company branch for Qatar operations, services, references, and contact information.' },
  { title: 'SEC Syria', description: 'Dedicated company branch for Syria operations, services, local project references, and downloadable credentials.' },
  { title: 'Group Services', description: 'Shared service categories organized under one professional framework.' },
  { title: 'Projects', description: 'A combined project hub with filters for HTA Qatar and SEC Syria.' },
  { title: 'Downloads', description: 'Future-ready area for company profiles, capability statements, brochures, and tender documentation.' },
  { title: 'Contact', description: 'Unified contact experience with routing for group, HTA Qatar, and SEC Syria inquiries.' },
] as const;

export const valueProps = [
  {
    title: 'Two markets, one standard',
    description: 'Present one strong group image while keeping HTA Qatar and SEC Syria clearly separated.',
    icon: BadgeCheck,
  },
  {
    title: 'Tender-friendly structure',
    description: 'Built to support prequalification, capability statements, downloads, and project case studies.',
    icon: ScanSearch,
  },
  {
    title: 'Execution-led identity',
    description: 'Focused on delivery, maintenance, MEP systems, life safety, and technical office depth.',
    icon: Wrench,
  },
] as const;

export const Partners = ['Partners/brands1.jpeg','Partners/brands2.jpg','Partners/brands3.png','Partners/brands4.jpg','Partners/brands5.png','Partners/brands6.png','Partners/brands7.jpg','Partners/brands8.jpg','Partners/brands9.jpg','Partners/brands10.jpg','Partners/brands11.jpg' 
] as const
