import {
  BadgeCheck,
  Building,
  Building2,
  Factory,
  Flame,
  Gauge,
  ScanSearch,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export type Company = {
  id: string;
  name: string;
  country: string;
  logo: string;
  icon: LucideIcon;
  description: string;
  bullets: string[];
  pages: string[];
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
    logo: '/HTA LOgo.jpg',
    icon: Factory,
    description:
      'HTA is positioned as the Qatar arm of the group, with a multidisciplinary electro-mechanical and maintenance profile covering design, supply, installation, testing, commissioning, project management, training, and planning.',
    bullets: [
      'Electro-mechanical contracting',
      'Building maintenance services',
      'Road maintenance & infrastructure',
      'Project planning & technical support',
    ],
    pages: ['Overview', 'Services', 'Projects', 'Certifications', 'Contact'],
  },
  {
    id: 'sec',
    name: 'SEC Engineering & Contracting',
    country: 'Syria',
    logo: '/SEC LOGO SAHIONY.jpg',
    icon: Building,
    description:
      'SEC is positioned as the Syria arm of the group, with general contracting, renovation, HVAC, plumbing and drainage, fire fighting, fire alarm, electrical systems, low current systems, and building maintenance capability.',
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
    title: 'General Contracting & Civil Works',
    icon: Building2,
    description:
      'Delivered primarily through SEC in Syria and supported by group execution logic across institutional, renovation, and building projects.',
    bullets: ['Civil works', 'Renovation', 'Execution management'],
  },
  {
    title: 'HVAC, Plumbing & Drainage',
    icon: Gauge,
    description:
      'Across the group, the profiles show HVAC, plumbing, drainage, ventilation, smoke exhaust, heating, and generator-linked support systems.',
    bullets: ['HVAC', 'Plumbing', 'Drainage'],
  },
  {
    title: 'Fire Fighting & Fire Alarm',
    icon: Flame,
    description:
      'Both companies strongly position fire protection, fire pumps, sprinklers, fire alarm, suppression systems, and technical-office support for design and calculations.',
    bullets: ['Sprinklers', 'Fire pumps', 'Life safety'],
  },
  {
    title: 'Electrical & Low Current',
    icon: Zap,
    description:
      'Low-voltage distribution, panels, busbar trunking, access control, CCTV, public address, data and voice, SMATV, and audio-visual infrastructure.',
    bullets: ['LV systems', 'Panels', 'ELV / low current'],
  },
  {
    title: 'Maintenance & Technical Support',
    icon: Wrench,
    description:
      'The group profile supports a strong maintenance position with trained technicians, site support, reactive and planned maintenance capability.',
    bullets: ['Building maintenance', 'MEP support', 'Skilled technicians'],
  },
  {
    title: 'Project Management & Technical Office',
    icon: ScanSearch,
    description:
      'Design, planning, testing, commissioning, QA/QC logic, procurement support, and project delivery coordination across both companies.',
    bullets: ['Planning', 'QA/QC', 'Commissioning'],
  },
] as const;

export type FeaturedProject = {
  slug:string,
  title: string;
  category: string;
  summary: string;
};

export type FeaturedProjectsData = {
  hta: readonly FeaturedProject[];
  sec: readonly FeaturedProject[];
};

export const featuredProjects: FeaturedProjectsData = {
  hta: [
    {
      slug:'HTA-1',
      title: 'Qatar Group Project Experience',
      category: 'HTA / Qatar',
      summary:
        'A dedicated HTA project branch for Qatar-based references in residential, commercial, healthcare, and infrastructure-related work.',
    },
  ],
  sec: [
    {
      slug:'SEC-1',
      title: 'Lattakia Kiosk Project',
      category: 'SEC / Syria',
      summary:
        'A Syria-side portfolio item suitable to anchor SEC’s local project showcase as part of the group website structure.',
    },
    {
      slug:'SEC-2',
      title: 'Institutional Renovation Portfolio',
      category: 'SEC / Syria',
      summary:
        'A future project category page for mosque, school, and public-sector renovation references under SEC.',
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
