export type Category = {
  id: string;
  name: string;
  img: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  categoryId: string;

  name: string;
  model?: string;

  description: string;

  image: string;

  specifications?: ProductSpecification[];

  features?: string[];

  applications?: string[];

  certifications?: string[];

  variants?: {
    model: string;
    description?: string;
    specifications?: ProductSpecification[];
  }[];
};

export const categories: Category[] = [
  {
    id: "addressable-fire-alarm",
    name: "Addressable Fire Alarm System",
    img: "/categories/addressable-fire-alarm.jpg",
  },
  {
    id: "sprinkler-system",
    name: "Sprinkler System",
    img: "/categories/sprinkler-system.jpg",
  },
  {
    id: "fire-extinguishers",
    name: "Fire Extinguishers",
    img: "/categories/fire-extinguishers.jpg",
  },
  {
    id: "fire-hose-reel",
    name: "Fire Hose Reel & Accessories",
    img: "/categories/fire-hose-reel.jpg",
  },
  {
    id: "emergency-signs-exit-lights-fire-cable",
    name: "Emergency Signs, Exit Lights & Fire Cable",
    img: "/categories/emergency-signs.jpg",
  },
  {
    id: "fire-brigade-valve",
    name: "Fire Brigade Valve",
    img: "/categories/fire-brigade-valve.jpg",
  },
  {
    id: "firefighting-pump",
    name: "Firefighting Pump",
    img: "/categories/firefighting-pump.jpg",
  },
  {
    id: "fire-hydrant",
    name: "Fire Hydrant",
    img: "/categories/fire-hydrant.jpg",
  },
  {
    id: "conventional-fire-alarm",
    name: "Conventional Fire Alarm System & Standalone Detector",
    img: "/categories/conventional-fire-alarm.jpg",
  },
  {
    id: "foam-system",
    name: "Foam System",
    img: "/categories/foam-system.jpg",
  },
  {
    id: "valves",
    name: "Valves",
    img: "/categories/valves.jpg",
  },
  {
    id: "deluge-valve",
    name: "Deluge Valve",
    img: "/categories/deluge-valve.jpg",
  },
  {
    id: "wet-chemical",
    name: "Wet Chemical Fire Suppression System",
    img: "/categories/wet-chemical.jpg",
  },
  {
    id: "fire-extinguishing-system",
    name: "Fire Extinguishing System",
    img: "/categories/hfc-227ea.jpg",
  },
  {
    id: "fire-extinguishing-panel",
    name: "Fire Extinguishing Panel",
    img: "/categories/fire-extinguishing-panel.jpg",
  },
];


export const products: Product[] = [
  // =========================================================
  // ADDRESSABLE FIRE ALARM SYSTEM
  // =========================================================

  {
    id: "iq601",
    categoryId: "addressable-fire-alarm",

    name: "Fireguard IQ601 Addressable Fire Alarm Panel",
    model: "IQ601",

    description:
      "Addressable Fire Alarm Control Panel designed for small to medium-scale commercial, institutional and industrial facilities.",

    image: "/products/addressable-fire-alarm/iq601.jpg",

    specifications: [
      {
        label: "Addressable loops",
        value: "1",
      },
      {
        label: "Devices per loop",
        value: "252 addressable devices/points",
      },
      {
        label: "Notification Appliance Circuits",
        value: "2 to 4",
      },
      {
        label: "Display",
        value: '7" LCD, 800 × 480',
      },
      {
        label: "Function keys",
        value: "6",
      },
      {
        label: "LED indicators",
        value: "9",
      },
      {
        label: "Remote panels / annunciators",
        value: "Up to 109",
      },
      {
        label: "Standard",
        value: "UL864 10th Edition",
      },
    ],

    features: [
      "Addressable fire alarm control",
      "Suitable for new installations and retrofit applications",
      "Network connection to remote panels and annunciators",
      "Available with red or grey chassis",
    ],

    applications: [
      "Commercial facilities",
      "Institutional facilities",
      "Industrial facilities",
    ],

    certifications: ["UL864 10th Edition"],
  },

  {
    id: "iq600",
    categoryId: "addressable-fire-alarm",

    name: "Fireguard IQ600 Addressable Fire Alarm Panel",
    model: "IQ600",

    description:
      "Addressable Fire Alarm Control Panel designed for small to medium-sized facilities and new or retrofit installations.",

    image: "/products/addressable-fire-alarm/iq600.jpg",

    specifications: [
      {
        label: "Addressable loops",
        value: "Up to 4",
      },
      {
        label: "Devices per loop",
        value: "252 addressable devices/points",
      },
      {
        label: "Notification Appliance Circuits",
        value: "2 to 10",
      },
      {
        label: "Relay contacts",
        value: "4+1 Form C dry relay contacts",
      },
      {
        label: "Display",
        value: '7" LCD, 800 × 480',
      },
      {
        label: "Function keys",
        value: "6",
      },
      {
        label: "LED indicators",
        value: "9",
      },
      {
        label: "Remote panels / annunciators",
        value: "Up to 109",
      },
    ],

    features: [
      "Up to four addressable signalling line circuits",
      "252 devices or points per loop",
      "Network capability",
      "Intuitive LCD user interface",
    ],

    certifications: ["UL864 10th Edition"],
  },

  {
    id: "iq605",
    categoryId: "addressable-fire-alarm",
    name: "Fireguard IQ605 Addressable Fire Alarm Panel",
    model: "IQ605",
    description:
      "Addressable Fire Alarm Control Panel with built-in 30-zone switch/LED annunciator for small to medium-scale facilities.",
    image: "/products/addressable-fire-alarm/iq605.jpg",
    specifications: [
      {
        label: "Addressable loops",
        value: "1",
      },
      {
        label: "Devices",
        value: "252 addressable devices",
      },
      {
        label: "Notification Appliance Circuits",
        value: "4 Class A/B, expandable to 8",
      },
      {
        label: "Zones",
        value: "30 built-in zones",
      },
      {
        label: "Relay outputs",
        value: "4 Form C dry relay contacts",
      },
      {
        label: "Display",
        value: '7" LCD, 800 × 480',
      },
      {
        label: "Remote panels / annunciators",
        value: "Up to 109",
      },
      {
        label: "Secondary power charging",
        value: "40 AH",
      },
    ],
    features: [
      "Digital signal processor-based design",
      "Password protected front-panel configuration",
      "30-zone switch/LED annunciator",
      "Expandable notification circuits",
    ],
    certifications: ["UL864 10th Edition"],
  },
  {
    id: "fg-evac-500",
    categoryId: "addressable-fire-alarm",
    name: "Fireguard FG-EVAC Audio System",
    model: "FG-EVAC-500",
    description:
      "EVAC Audio Systems provide voice communication. The Audio Controller has built in two amplifier 500 watt with backup and built in power supply charger 30 hours stand by + 30 minutes Evac. It continues to provide two simultaneous channels EVAC and Alert 10 minutes and optional 3 x balanced audio input + 2 Mixer. Digitized alarm tones and digitally recorded voice messages and message construction, and manages both multiple 8 button microphone zone inputs and 3 audio inputs with 1 Mixer and 2 message player and 6 audio output.",
    image: "/products/addressable-fire-alarm/fg-evac-500.jpg", 
    features: [
      "Alarm/evacuation signal generation with multiple built-in tones",
      "Standard or customized digital message storage and message generation",
      "Automatic or manual operation",
      "Mass Notification operation 1-2 channels simultaneously and optional above 2 channels are available",
      "Audio systems provide dual channel operation",
      "3x audio balance Input and Dry contact to interface external Audio Source and MIC and 1x Mixer and 2 amplifier's Mixer output",
      "1x Bus ACSI to interface 8 Voice alarm panel or 8x MIC or Mixed together up to 8 units",
      "Up 10 x 500 Watt Amplifiers can connect in RS485 to distribute in a group of floors",
      "Each Amplifier support 6x Speakers zones to configure channel #1 EVAC and Channel #2 x Alert and phase evacuation other Speaker zones can be customised message",
      "3 Dry contact relay 1. General Alarm 2. Emergency Evac 3.",
      "Recorded Audio Messages can be import from USB",
      "USB Back up and Restore",
      "Backup Amplifiers 500Watt",
      "Advanced integration Override output 24V, Attenuators, Flash light and 3rd party system",
      "6x Audio Output 24V for Attenuator and Flash Lights and 4 x Pre-Amplifier output",
      "Fire Alarm integration with supervision",
      "Speakers line supervision",
      "Battery supervision",
      "Wiring Method A+B",
      "Wall Mount and Rack mount design",
    ],
    specifications: [
      {
        label: "Amplifiers",
        value: "Built-in two amplifier 500 watt with backup",
      },
      {
        label: "Power Supply / Charger",
        value: "30 hours stand by + 30 minutes Evac",
      },
      {
        label: "Channels",
        value: "Two simultaneous channels EVAC and Alert (10 minutes)",
      },
      {
        label: "Audio Inputs",
        value: "Optional 3 x balanced audio input + 2 Mixer",
      },
      {
        label: "Microphone Zone Inputs",
        value: "Multiple 8 button microphone zone inputs",
      },
      {
        label: "Audio Outputs",
        value: "6 audio output",
      },
      {
        label: "Pre-AMP Outputs",
        value: "4 pre-AMP outputs",
      },
      {
        label: "Override Outputs",
        value: "6 override outputs",
      },
    ],
    variants: [
      {
        model: "FG901CP_AP",
        description: "Fire Alarm Control Panel 1-9 Loop",
      },
      {
        model: "FG901-MININET_AP",
        description: "Fire Alarm Control Panel 1 Loop",
      },
      {
        model: "FG-EVAC-500",
        description:
          "PUBLIC ADDRESS AND VOICE ALARM SYSTEM 500 W 6 zones. Line supervision without return cable (EOL devices not included). DSP processor. 6 control zones. Possibility of wall installation, rack and desk. Integrated battery charger and housing EN 54-4 certified (OPTIONAL: To be activated with USD card). Integration interface with fire alarm panel. EVAC and ALERT pre-recorded messages. All integrated, no need for external applications. 4 pre-AMP outputs. 3 audio inputs with priority and mixed audio input. 6 override outputs.",
      },
      {
        model: "FG-EVAC-VAP1",
        description:
          "VOICE ALARM PANEL MODEL VAP-1: External remote control that incorporates an emergency microphone and provides direct access to voice evacuation",
      },
      {
        model: "FG-EVAC-BC",
        description:
          "USD CARD FOR ACTIVATION OF EN54-4 BATTERY CHARGER IN EVAC-500. Battery charger update and activation card EN54-4 for EVAC-500. Once activated, the card becomes a key for the charger to work permanently.",
      },
      {
        model: "FG-EVAC-MPS8Z",
        description: "PAGING MICROPHONE",
      },
      {
        model: "FG-EVAC-MPS8Z",
        description: "Speaker line End Of Line Device",
      },
      {
        model: "FG-EVAC-RMA2",
        description: '19" Rack Fixed Mounting Kit',
      },
      {
        model: "FG-EVAC-WMA",
        description: "Wall Mount Kit For FG-EVAC-500",
      },
    ],
  },
  
  // =========================================================
  // FIRE HOSE REEL
  // =========================================================
   {
    id: "fghr-1930m",
    categoryId: "fire-hose-reel",
    name: "Fire Hose Reel Manual Swinging",
    model: "FGHR 1930M",
    description:
      "Manual swinging fire hose reel designed for fast and steady water delivery during firefighting.",
    image: "/products/fire-hose-reel/fghr-1930m.jpg",
    specifications: [
      {
        label: "Type",
        value: "Manual swinging",
      },
      {
        label: "Approval",
        value: "EN671",
      },
    ],
     variants: [{
        model: "FGHR 1930M",
        description:'Manual swinging type',
     },
     {
        model: "FGHR 1930A",
        description:'Auto swinging 3/4 type',
     },
     {
        model: "FGHR 2530M",
        description:'Manual swinging 1" × 30m type',
     },
     {
        model: "FGHR 2530A",
        description:'Auto swinging 1" × 30m type',
     }],
  },
  {
    id: "fire-hose-reel-cabinet",
    categoryId: "fire-hose-reel",
    name: "Fire Hose Reel Cabinets",
    description:
      "Fireguard has a wide range of cabinets manufactured with 1.2mm thickness Steel Powder Coated RAL 3001 Red. Can be customized according to the architectural requirements. Door sign according to 92/58/EEC. 35mm Ø Knockouts for inlet pipework both sides.",
    image: "/products/fire-hose-reel/fire-hose-reel-cabinet.jpg",
    features: [
      "1.2mm thickness steel construction",
      "Powder coated RAL 3001 Red finish as standard",
      "Customizable according to architectural requirements",
      "Door sign according to 92/58/EEC",
      "35mm Ø knockouts for inlet pipework on both sides",
      "Available finishes: Red powder coated, Stainless Steel / Brush / Mirror / Satin upon request",
    ],
    specifications: [
      {
        label: "Material",
        value: "1.2mm thickness steel",
      },
      {
        label: "Standard Finish",
        value: "Powder coated RAL 3001 Red",
      },
      {
        label: "Optional Finishes",
        value: "Stainless Steel / Brush / Mirror / Satin",
      },
      {
        label: "Single Cabinet Size",
        value: "760 × 760 × 280 mm",
      },
      {
        label: "Double Cabinet Size",
        value: "1400 × 760 × 250 mm",
      },
      {
        label: "Knockouts",
        value: "35mm Ø for inlet pipework (both sides)",
      },
    ],
    certifications: ["BSI"],
    variants: [
      {
        model: "Single Cabinet",
        description: "Standard single fire hose reel cabinet",
        specifications: [
          { label: "Dimensions", value: "760 × 760 × 280 mm" },
        ],
      },
      {
        model: "Double Cabinet",
        description: "Standard double fire hose reel cabinet",
        specifications: [
          { label: "Dimensions", value: "1400 × 760 × 250 mm" },
        ],
      },
    ],
  },
  {
    id: "fire-hose",
    categoryId: "fire-hose-reel",
    name: "Fire Hose",
    description:
      "Fireguard produces various types of fire fighting hoses with high quality for most demanding situations. All hoses are manufactured according to National Fire Protection Association (NFPA) 1961 latest edition. The Fireguard Model 150, 200, 250 & 300 synthetic fire hose is widely used by firefighters worldwide. This hose features: tough, durable and abrasion resistant, supplied with different couplings. The all synthetic construction makes it rot proof and easy to clean.",
    image:  "/products/fire-hose-reel/fire-hose.jpg",
    features: [
      "Tough, durable and abrasion resistant",
      "Supplied with different couplings",
      "All synthetic construction – rot proof and easy to clean",
      "Manufactured according to NFPA 1961 latest edition",
    ],
    specifications: [
      {
        label: "Construction",
        value: "Polyester filaments in wrap and weft direction with smooth EPDM lining for low friction loss",
      },
    ],
    certifications: ["FM Approved", "UL Listed"],
    variants: [
      { model: "FGH150", description: "Synthetic fire hose" },
      { model: "FGH15-250", description: "Synthetic fire hose" },
      { model: "FGH200", description: "Synthetic fire hose" },
      { model: "FGH25-250", description: "Synthetic fire hose" },
      { model: "FGH300", description: "Synthetic fire hose" },
    ],
  },
  {
    id: "fire-hose-dura-line",
    categoryId: "fire-hose-reel",
    name: "Fire Hose - Dura-Line Type 3",
    model: "FGH303N",
    description:
      "Fireguard produces various types of fire fighting hoses with high quality for most demanding situations. All hoses are manufactured according to National Fire Protection Association (NFPA) 1961 latest edition. The Fireguard Model Dura-line FGH303N synthetic fire hose is widely used by firefighters worldwide. This hose features: tough, durable and abrasion resistant, supplied with different couplings. The Nitrile rubber cover makes it rot proof and easy to clean.",
    image: "/products/fire-hose-reel/fire-hose-dura-line.jpg",
    features: [
      "Tough, durable and abrasion resistant",
      "Supplied with different couplings",
      "Nitrile rubber cover – rot proof and easy to clean",
      "Manufactured according to NFPA 1961 latest edition",
    ],
    specifications: [
      {
        label: "Construction",
        value: "Polyester reinforcement with Nitrile rubber cover and inner liner Nitrile rubber",
      },
    ],
    certifications: ["UL Listed"],
    variants: [
      { model: "FGH303N", description: "Dura-Line Type 3 synthetic fire hose" },
    ],
  },
  {
    id: "angle-hose-valve",
    categoryId: "fire-hose-reel",
    name: "Angle Hose Valve",
    description:
      "Angle pattern brass hose valves, with threaded connections, intended to control the flow of water from the main risers in standpipe systems. Turning the handle counter clockwise the hose valve opens, allowing the water to flow out from the valve; turning the handle clockwise, the valve shuts off. Hose valves are used with a Fire Hose Rack Assembly, or as Fire Department outlet connections.",
    image:  "/products/fire-hose-reel/angle-hose-valve.jpg",
    features: [
      "Angle pattern brass construction",
      "Threaded connections",
      "Controls flow from main risers in standpipe systems",
      "Suitable for Fire Hose Rack Assembly or Fire Department outlet connections",
    ],
    certifications: ["FM Approved", "UL Listed"],
    variants: [
      {
        model: "FGAV105",
        description: "1.5\" & 2.5\" Angle Hose Valve",
      },
    ],
  },
  {
    id: "pressure-reducing-angle-valve",
    categoryId: "fire-hose-reel",
    name: "Pressure Reducing Angle Valve",
    description:
      "Pressure reducing device angle valve 300 lb. Rated adjustable restrictions of residual pressure up to 300 lb. Locking pin device restricts full opening of valve – removed by firefighters to allow full opening of valve. Female × male. Standard Equipment: Female NPT inlet × male hose thread outlet, forged brass valve, Red hand wheel.",
    image: "/products/fire-hose-reel/pressure-reducing-angle-valve.jpg",
    features: [
      "Pressure reducing device",
      "Rated adjustable restrictions of residual pressure up to 300 lb",
      "Locking pin device restricts full opening (removed by firefighters for full flow)",
      "Forged brass valve with red hand wheel",
    ],
    specifications: [
      {
        label: "Inlet",
        value: "Female NPT",
      },
      {
        label: "Outlet",
        value: "Male hose thread",
      },
      {
        label: "Pressure Rating",
        value: "300 lb",
      },
    ],
    certifications: ["FM Approved"],
    variants: [
      {
        model: "FGPRV115",
        description: "1.5\" Pressure Reducing Angle Valve",
      },
      {
        model: "FGPRV125",
        description: "2.5\" Pressure Reducing Angle Valve",
      },
    ],
  },
  {
    id: "branch-pipes-lever-operated",
    categoryId: "fire-hose-reel",
    name: "Branch Pipes Lever Operated",
    description:
      "Fireguard branchpipes are lever operated fire nozzles manufactured in light alloy to achieve a robust, durable fire branch that remains extremely light and manoeuvrable for ease of use. The selection between Jet and Spray and On / Off modes is easily achieved by adjusting the lever arm accordingly. This simple to use system allows for complete control by the operator to adjust his water flow to suit the individual application required.",
    image: "/products/fire-hose-reel/branch-pipes-lever-operated.jpg",
    features: [
      "Lever operated",
      "Light alloy construction – robust yet lightweight and manoeuvrable",
      "Easy selection between Jet, Spray and On/Off modes via lever arm",
      "Complete control of water flow for different applications",
    ],
    certifications: ["LPCB"],
    variants: [
      { model: "FG07-131C-00", description: "Lever operated branch pipe" },
      { model: "FG07-131A-00", description: "Lever operated branch pipe" },
      { model: "FG07-131B-00", description: "Lever operated branch pipe" },
    ],
  },
  // =========================================================
  // FIRE HYDRANT
  // =========================================================

  {
    id: "fgh-701",
    categoryId: "fire-hydrant",
    name: "Dry Barrel Pillar Hydrant",
    model: "FGH 701",
    description:
      "Dry barrel pillar hydrant designed for high-performance fire protection applications.",
    image: "/products/fire-hydrant/fgh-701.jpg",
    specifications: [
      {
        label: "Pressure rating",
        value: "250 PSI",
      },
      {
        label: "Body material",
        value: "Ductile iron",
      },
      {
        label: "Outlet",
        value: '2 × 2½" instantaneous outlets',
      },
      {
        label: "Pumper",
        value: '1 × 4" pumper',
      },
      {
        label: "Working pressure",
        value: "16 Bar",
      },
    ],
    certifications: [
      "BS EN 14384:2005",
      "BS 1074-1",
      "BS 1074-2",
      "BS 1074-6",
    ],
  },

  {
    id: "fgdh100",
    categoryId: "fire-hydrant",
    name: "Dry Barrel Hydrant 4 Inch",
    model: "FGDH100",
    description:
      "Dry barrel hydrant with ductile iron body and corrosion-protected construction.",
    image: "/products/fire-hydrant/fgdh100.jpg",
    specifications: [
      {
        label: "Size",
        value: '4"',
      },
      {
        label: "Type",
        value: "Dry barrel hydrant",
      },
    ],
    certifications: [
      "AWWA C502",
      "UL 246",
      "FM 1510",
      "BS EN 14384:2005",
    ],
  },

  {
    id: "fgdh150",
    categoryId: "fire-hydrant",
    name: "Dry Barrel Hydrant 6 Inch",
    model: "FGDH150",
    description:
      "Dry barrel hydrant designed for reliable fire protection applications.",
    image: "/products/fire-hydrant/fgdh100.jpg",
    specifications: [
      {
        label: "Size",
        value: '6"',
      },
      {
        label: "Type",
        value: "Dry barrel hydrant",
      },
    ],

    certifications: [
      "AWWA C502",
      "UL 246",
      "FM 1510",
    ],
  },

  {
    id: "fghw-511",
    categoryId: "fire-hydrant",
    name: "Wet Barrel Hydrant",
    model: "FGHW 511",
    description:
      "Wet barrel fire hydrant designed for locations where freezing conditions are not expected.",
    image: "/products/fire-hydrant/fghw-511.jpg",
    specifications: [
      {
        label: "Working pressure",
        value: "250 PSI",
      },
      {
        label: "Type",
        value: "Wet barrel",
      },
    ],

    certifications: ["UL Listed", "AWWA C503"],
  },
  {
    id: "underground-hydrant",
    categoryId: "fire-hydrant",
    name: "Underground Hydrant",
    description:
      "Our type 2 underground hydrant is manufactured with a cast iron body and complies with BS 750, BS EN1074-2:2000 and EN 14339:2005 requirements. It is supplied with a 2½\" male outlet secured with M12 bolts and is protected by a removable plastic cap. The inlet flange is universally drilled to EN1092-2 PN10/16 and BS10 table D/E. The underground hydrant has a blue epoxy resin coating internally and externally and is for cold water use. Fire hydrant standpipes are then screwed onto the outlet of the underground hydrant and a fire hydrant key and bar is used to open the valve to allow water flow.",
    image: "/products/fire-hydrant/underground-hydrant.jpg",
    applications: [
      "Water Companies",
      "Industrial Sectors",
      "Construction",
      "Groundworks",
    ],
    certifications: [
      "BS 750",
      "BS EN1074-2:2000",
      "EN 14339:2005",
    ],
    specifications: [
      {
        label: "Body Material",
        value: "Cast iron",
      },
      {
        label: "Outlet",
        value: "2½\" male outlet secured with M12 bolts",
      },
      {
        label: "Outlet Protection",
        value: "Removable plastic cap",
      },
      {
        label: "Inlet Flange",
        value: "Universally drilled to EN1092-2 PN10/16 and BS10 table D/E",
      },
      {
        label: "Coating",
        value: "Blue epoxy resin coating (internal and external)",
      },
      {
        label: "Service",
        value: "Cold water use",
      },
    ],
  },
  // =========================================================
  // FOAM SYSTEM
  // =========================================================
  {
    id: "bladder-tank",
    categoryId: "foam-system",
    name: "Bladder Tank",
    description:
      "The Bladder Tank Foam Proportioning System utilises the water pressure to inject foam concentrate into a water supply and automatically proportions foam concentrate over a wide range of flow and pressure, with very low pressure drop. This system does not require a concentrate supply pump.",
    image:"/products/foam-system/ratio-controller.jpg",
    features: [
      "Utilises water pressure to inject foam concentrate",
      "Automatically proportions foam concentrate over a wide range of flow and pressure",
      "Very low pressure drop",
      "No concentrate supply pump required",
    ],
    specifications: [
      {
        label: "Tank Mounting Type",
        value: "Vertical or Horizontal",
      },
      {
        label: "Concentrate Storage Capacity (Vertical)",
        value: "150 litres to 5000 litres (40 to 1320 Gallons US)",
      },
      {
        label: "Concentrate Storage Capacity (Horizontal)",
        value: "150 litres to 10000 litres (40 to 2640 Gallons US)",
      },
      {
        label: "Rated Pressure",
        value: "12 Bar (175 PSI)",
      },
      {
        label: "Factory Test Pressure",
        value: "18 Bar (262 PSI)",
      },
      {
        label: "Vessel Construction",
        value: "Carbon steel as per ASME Code Section VIII for unfired pressure vessels",
      },
      {
        label: "Bladder",
        value: "Thermo Plastic, Mullen burst pressure +800 PSI. Thickness 1.44 / 0.127 mm",
      },
      {
        label: "Centre Tube",
        value: "PVC",
      },
      {
        label: "External Piping",
        value: "Water side: Carbon steel seamless pipe sch 40. Foam concentrate side: SS sch 40",
      },
      {
        label: "Vent and Drain",
        value: "Ball valve (Bronze / SS)",
      },
      {
        label: "Optional",
        value: "Sight gauge with shut off and drain valve, ladder and concentrate supply control valve",
      },
      {
        label: "Finish",
        value: "Epoxy red painted",
      },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "foam-chamber",
    categoryId: "foam-system",
    name: "Foam Chamber",
    description:
      "Heavy duty welded construction foam chamber with choice of Carbon Steel or Stainless Steel material. Features frangible glass vapour seal and controlled air flow proportional to liquid flow for optimum foam quality.",
    image: "/products/foam-system/foam-chamber.jpg",
    features: [
      "UL Listed",
      "Heavy duty welded construction with choice of Carbon Steel or Stainless Steel material",
      "Frangible Glass Vapour Seal",
      "Controlled Air Flow proportional to liquid flow for optimum foam quality and rupture of vapour seal in narrow pressure tolerances for increased reliability",
      "Field replaceable orifice plate fitted with Foam Chamber",
    ],
    certifications: ["UL Listed"],
  },

  {
    id: "rim-seal-foam-pourer",
    categoryId: "foam-system",
    name: "Rim Seal Foam Pourer",
    model: "RPA / RPA-S",
    description:
      "Air-aspirating foam generator designed to deliver foam into the tank seal area.",
    image: "/products/foam-system/rim-seal-foam-pourer.jpg",
    specifications: [
      {
        label: "Flow range",
        value: "50–550 L/min",
      },
      {
        label: "Inlet pressure",
        value: "2.8–7 kg/cm²",
      },
    ],

    features: [
      "Air aspirating foam generation",
      "Field replaceable orifice plate",
      "Stainless steel screen protects against insects and nesting birds",
    ],
  },

  {
    id: "fgrc",
    categoryId: "foam-system",
    name: "Ratio Controller",
    model: "FGRC-B / FGRC-S",
    description:
      "Foam proportioning ratio controller for proportioning foam concentrate into the water supply.",
    image: "/products/foam-system/ratio-controller.jpg",
    specifications: [
      {
        label: "Models",
        value: "FGRC-B Bronze / FGRC-S Stainless Steel",
      },
      {
        label: "Maximum service pressure",
        value: "14 Bar (200 PSI)",
      },
      {
        label: "Factory hydro test pressure",
        value: "25 kg/cm² (350 PSI)",
      },
      {
        label: "Sizes",
        value: "65, 80, 100 & 150 NB",
      },
    ],
    certifications: ["UL approval with AFFF 3%"],
  },

  {
    id: "foam-maker",
    categoryId: "foam-system",
    name: "Foam Maker",
    model: "FMA-50 / FMA-65 / FMA-S50 / FMA-S65",
    description:
      "Low-expansion aspirated foam maker used for protection of tank seals in liquid storage tanks.",
    image: "/products/foam-system/foam-maker.jpg",
    specifications: [
      {
        label: "Inlet sizes",
        value: "50 / 65 NB",
      },
      {
        label: "Working pressure",
        value: "2.8–7 kg/cm²",
      },
      {
        label: "Construction",
        value: "Carbon steel or stainless steel",
      },
    ],

    certifications: ["UL Listed"],
  },
  {
    id: "foam-concentrate-control-valve",
    categoryId: "foam-system",
    name: "Foam Concentrate Control Valve",
    model: "CV",
    description:
      "Foam concentrate control valve is designed for use in bladder tank foam system or inline balance pressure proportioning system. The valve opens automatically when water supply is established through the inlet pipe of ratio controller of bladder tank or in the inline balance pressure proportioning system. The valve opens at minimum of 3 Kg. (42.8 psi) water pressure. No electric power is required to operate the valve.",
    image: "/products/foam-system/foam-concentrate-control-valve.jpg", 
    features: [
      "Designed for bladder tank foam system or inline balance pressure proportioning system",
      "Opens automatically when water supply is established",
      "Opens at minimum of 3 Kg (42.8 psi) water pressure",
      "No electric power required to operate",
    ],
    specifications: [
      {
        label: "Model",
        value: "CV",
      },
      {
        label: "Size",
        value: "40NB, 50NB & 65NB",
      },
      {
        label: "Rated Pressure",
        value: "14 Kg./sq.cm. (200 PSI)",
      },
      {
        label: "End Connection",
        value: "Flanged end to ANSI B 16.5 Class 150#",
      },
      {
        label: "Pressure Sensing Hose",
        value: "Teflon tube with Stainless Steel braided cover",
      },
      {
        label: "Trim Connection",
        value: "Brass / Stainless Steel",
      },
      {
        label: "Factory Hydrotested",
        value: "25 Kg./sq.cm. (365 PSI)",
      },
      {
        label: "Finish",
        value: "Epoxy red painted",
      },
    ],
  },
  {
    id: "inline-balance-pressure-foam-proportioner",
    categoryId: "foam-system",
    name: "Inline Balance Pressure Foam Proportioner",
    description:
      "The Inline Balance Pressure Foam Proportioners are used with positive displacement foam concentrate supply pump. The system controls accurately the flow of foam concentrate into the water stream over a wide range of flow rate and pressure. The Inline Balance Pressure Foam Proportioning System is used for simultaneous operation of the multiple foam injection even with different pressures between the two-injection point with a single concentrate supply line. Various sizes of inline balance pressure proportioners can be combined to suit the flow requirement of each hazard area.",
    image: "/products/foam-system/inline-balance-pressure.jpg",
    features: [
      "Used with positive displacement foam concentrate supply pump",
      "Accurately controls foam concentrate flow into the water stream over a wide range of flow rate and pressure",
      "Supports simultaneous operation of multiple foam injection points",
      "Works with different pressures between injection points using a single concentrate supply line",
      "Multiple sizes can be combined to suit hazard area flow requirements",
    ],
    specifications: [
      {
        label: "Model",
        value: "IB - Bronze construction IS 318 / ASTM B62 | IBS - Stainless Steel (304) construction (ASTM A351-CF8)",
      },
      {
        label: "Size",
        value: "80, 100 & 150 NB",
      },
      {
        label: "Maximum Working Pressure",
        value: "14 Bar (200 PSI)",
      },
      {
        label: "Minimum Working Pressure",
        value: "3.0 Bar (44 PSI)",
      },
      {
        label: "Mounting Between the Flanges",
        value: "ANSI B16.5-150#",
      },
      {
        label: "Thread Opening",
        value: "BSPT/NPT optional",
      },
      {
        label: "Rim Connection and Various Control Valves",
        value: "Stainless Steel",
      },
      {
        label: "Factory Hydrostatic Test Pressure",
        value: "25 Kg./Sq.cm. (350 PSI)",
      },
      {
        label: "Finish",
        value: "Epoxy red painted",
      },
    ],
    variants: [
      {
        model: "IB",
        description: "Bronze construction (IS 318 / ASTM B62)",
      },
      {
        model: "IBS",
        description: "Stainless Steel (304) construction (ASTM A351-CF8)",
      },
    ],
  },
  {
    id: "sl-19mp",
    categoryId: "foam-system",
    name: "Hand Line Foam Branch Pipe",
    model: "SL-19MP",
    description:
      "Hand-held nozzle for manual application of low-expansion foam systems.",
    image: "/products/foam-system/sl-19mp.jpg",

    specifications: [
      {
        label: "Construction",
        value: "Aluminium",
      },
      {
        label: "Inlet",
        value: '2-1/2" BS 336 male',
      },
      {
        label: "Flow",
        value: "560 LPM @ 7 Bar",
      },
      {
        label: "Foam",
        value: "AFFF 3%",
      },
      {
        label: "Effective reach",
        value: "Approximately 30m @ 7 Bar",
      },
      {
        label: "Weight",
        value: "Approximately 3.2 kg including pickup hose",
      },
    ],
  },

  // =========================================================
  // STANDALONE DETECTORS
  // =========================================================
  {
    id: "fg-s01",
    categoryId: "conventional-fire-alarm",
    name: "Standalone Smoke Detector",
    model: "FG-S01",
    description:
      "This alarm is a smoke detector of the photo cell principle. This means that the alarm checks the air for smoke resulting from fire. It does not detect heat, gas or fire. If the smoke detector is properly mounted and maintained it will sound an alarm in an early stage. In the event of a fire this can give you those extra seconds needed to vacate your home and call the fire brigade. The alarm is designed to detect smoke. It cannot prevent a fire. Read the instructions through carefully before using the smoke detector.",
    image: "/products/detectors/fg-s01.jpg", 
    features: [
      "Photoelectric sensing technology",
      "Easy installation and maintenance",
      "Battery case at the back of a sensor for easy removal of a battery",
      "Sleek low-profile housing design",
      "Low battery warning",
      "Test button verifies battery and alarm operation",
      "Sounding a loud alarm signal or exceeding 85db in alarm mode",
    ],
    specifications: [
      {
        label: "Smoke Sensitivity",
        value: "0.086 dB/m to 0.14 dB/m",
      },
      {
        label: "Power Supply",
        value: "9V Carbon Zinc/Alkaline Lithium Battery",
      },
      {
        label: "Battery Life",
        value: ">12 months",
      },
      {
        label: "Low Battery Life",
        value: ">30 days",
      },
      {
        label: "Alarm Indicator",
        value: "Continuously emitting red light and alarm sound",
      },
      {
        label: "Alarm Sound Level",
        value: ">85dB at 10 feet (3m)",
      },
      {
        label: "Temperature",
        value: "0°C - 50°C",
      },
      {
        label: "Humidity",
        value: "10%-90%RH, no condensation or icing",
      },
      {
        label: "Dimensions (LxWxH)",
        value: "FG-S01/FG-S02: ø107×35mm (FG-S03: ø130×40mm)",
      },
    ],
  },
  {
    id: "fg-731",
    categoryId: "conventional-fire-alarm",
    name: "CO Detector",
    model: "FG-731",
    description:
      "FG731 CO ALARMS ARE UL APPROVED STAND-ALONE CO DETECTORS POWERED FROM 5-YEAR LONG-LIFE INTERNAL BATTERIES.",
    image: "/products/detectors/fg-731.jpg",
    features: [
      "Advanced algorithms provide advanced detection discrimination",
      "Attractive housing design",
      "Japan-made highly reliable stable CO sensor, with automatic adjustment",
      "High immunity against unwanted alarms",
      "Loud 85 dB internal alarm sounder",
      "Dual function action button to temporarily silence unwanted alarms (Hush), and to verify alarm operation (Test)",
      "Separate indicators for Power, Alarm and Service",
      "Service sounder",
      "Low power consumption",
      "Low battery audible indication",
      "Easy installation. No programming required",
      '5-year "end-of-life" timer alerts owner to replace the unit',
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "fg-920",
    categoryId: "conventional-fire-alarm",
    name: "Gas Detector",
    model: "FG-920",
    description:
      "Standalone gas detector using FIGARO semiconductor sensor heads for accurate flammable gas detection. Available in methane (FG-920-N) and propane (FG-920-L) versions.",
    image: "/products/detectors/fg-920.jpg", 
    features: [
      "FIGARO semiconductor sensor heads used for accurate flammable Gas detection",
      "Using microprocessor for circuit control and gas monitoring to assure performance stability and reliability",
      "FG-920-N detects methane gas, FG-920-L detects propane gas in a continuous manner",
      "SMT circuit board design with FR4 double sides PCB satisfactory quality and reliability guaranteed",
      "Test button verifies alarm operation any time",
      "Sounding a loud alarm signal of exceeding 85 dB at 10ft",
      "Easy installation and maintenance",
      "Complying the UL-1484 standard and EN50194",
      "No battery is required for circuit control",
      "Ergonomic design of detector casing",
    ],
    certifications: ["UL-1484", "EN50194"],
    variants: [
      {
        model: "FG-920-N",
        description: "Detects methane gas",
      },
      {
        model: "FG-920-L",
        description: "Detects propane gas",
      },
    ],
  },
  
  // =========================================================
  //  EMERGENCY LIGHTING & FIRE CABLE
  // =========================================================
  {
    id: "distributed-controller",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Distributed Controller (Interface)",
    model: "FG-INT01",
    description:
      "It is responsible for information transfer within a certain area, thus increasing the number of subordinate devices and facilitating data.",
    image: "/products/emergency-signs/distributed-controller.jpg",
    specifications: [
      {
        label: "Model",
        value: "FG-INT01",
      },
      {
        label: "Voltage",
        value: "AC120V/0.035A or AC277/0.016A 50/60Hz",
      },
      {
        label: "AC Power",
        value: "3W",
      },
      {
        label: "Battery",
        value: "Ni-MH - AA 600MAH/4.8V",
      },
      {
        label: "Emergency Duration",
        value: "3 Hours",
      },
      {
        label: "Communication BUS",
        value: "CAN BUS AND 485 BUS",
      },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "corresponding-controller",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Corresponding Controller (Repeater)",
    model: "FG-REP01",
    description:
      "It is responsible for information transfer within a certain area, thus increasing the number of subordinate devices and facilitating data.",
    image: "/products/emergency-signs/corresponding-controller.jpg",
    specifications: [
      {
        label: "Model",
        value: "FG-REP01",
      },
      {
        label: "Voltage",
        value: "AC120V/0.035A or AC277/0.016A 50/60Hz",
      },
      {
        label: "AC Power",
        value: "3W",
      },
      {
        label: "Battery",
        value: "Ni-MH - AA 600MAH/4.8V",
      },
      {
        label: "Emergency Duration",
        value: "3 Hours",
      },
      {
        label: "Communication BUS",
        value: "485 BUS",
      },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "addressable-emergency-lights",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Addressable Emergency Lights",
    model: "FG-T632L/FG-T603L",
    description:
      "UL Listed addressable emergency lights with 485 BUS communication.",
    image: "/products/emergency-signs/addressable-emergency-lights.jpg",
    specifications: [
      {
        label: "Voltage",
        value: "AC120V/0.05A or AC277/0.025A 50/60Hz",
      },
      {
        label: "AC Power",
        value: "5.5W",
      },
      {
        label: "Battery",
        value: "Ni-MH SC 2200MAH/4.8V",
      },
      {
        label: "Emergency Duration",
        value: "3 Hours",
      },
      {
        label: "LED",
        value: "20pcs SMD2835",
      },
      {
        label: "Communication BUS",
        value: "485 BUS",
      },
    ],
    certifications: ["UL Listed"],
    variants: [
      {
        model: "FG-T632L",
        description: "Addressable emergency light",
      },
      {
        model: "FG-T604L",
        description: "Addressable emergency light",
      },
    ],
  },
  {
    id: "bulkhead-emergency-light-t603l",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Bulkhead Emergency Light",
    model: "FG-T603L",
    description:
      "UL Listed bulkhead emergency light with high lumen output.",
    image: "/products/emergency-signs/bulkhead-emergency-light.jpg",
    specifications: [
      {
        label: "Model",
        value: "FG-T603L",
      },
      {
        label: "Voltage",
        value: "85-265VAC 50/60Hz",
      },
      {
        label: "AC Power",
        value: "2W",
      },
      {
        label: "Battery",
        value: "Ni-MH - SC 4.8V / 2200MAH",
      },
      {
        label: "Emergency Duration",
        value: "≥ 3 Hours",
      },
      {
        label: "LED",
        value: "20 pcs SMD2835",
      },
      {
        label: "Lumen",
        value: ">250LM",
      },
      {
        label: "Color",
        value: "White",
      },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "bulkhead-emergency-light-t605l",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Bulkhead Emergency Light",
    model: "FG-T605L",
    description:
      "UL Listed bulkhead emergency light with high lumen output.",
    image: "/products/emergency-signs/bulkhead-emergency-light-2.jpg",
    specifications: [
      {
        label: "Model",
        value: "FG-T605L",
      },
      {
        label: "Voltage",
        value: "85-265VAC 50/60Hz",
      },
      {
        label: "AC Power",
        value: "2W",
      },
      {
        label: "Battery",
        value: "Ni-MH - SC 4.8V / 2200MAH",
      },
      {
        label: "Emergency Duration",
        value: "≥ 3 Hours",
      },
      {
        label: "LED",
        value: "1 pc SMD 3W",
      },
      {
        label: "Lumen",
        value: ">310LM",
      },
      {
        label: "Color",
        value: "White",
      },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "addressable-exit-sign-t741rg",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Addressable Emergency Exit Sign",
    model: "FG-T741R/G",
    description:
      "UL Listed addressable emergency exit sign with red or green LED options and 485 BUS communication.",
    image: "/products/emergency-signs/addressable-exit-sign-t741rg.jpg",
    specifications: [
      { label: "Model", value: "FG-T741R/G" },
      { label: "Input Voltage", value: "AC120V/0.038A or AC277/0.018A 50/60Hz" },
      { label: "AC Power", value: "3.5W" },
      { label: "Battery", value: "Ni-MH Battery: AA 600MAH/4.8V" },
      { label: "Emergency Duration", value: "3 Hours" },
      { label: "LED", value: "8 pcs Φ5 Red or Green" },
      { label: "Communication BUS", value: "485 BUS" },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "addressable-exit-sign-t740rg",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Addressable Emergency Exit Sign",
    model: "LX-T740R/G",
    description:
      "UL Listed addressable emergency exit sign with red or green LED options and 485 BUS communication.",
    image: "/products/emergency-signs/addressable-exit-sign-t740rg.jpg",
    specifications: [
      { label: "Model", value: "LX-T740R/G" },
      { label: "Input Voltage", value: "AC120V/0.038A or AC277/0.018A 50/60Hz" },
      { label: "AC Power", value: "3.5W" },
      { label: "Battery", value: "Ni-MH Battery: AA 600MAH/4.8V" },
      { label: "Emergency Duration", value: "3 Hours" },
      { label: "LED", value: "12 pcs Φ5 Red or Green" },
      { label: "Communication BUS", value: "485 BUS" },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "addressable-exit-sign-t705",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Addressable Emergency Exit Sign",
    model: "FG-T705",
    description:
      "UL Listed addressable emergency exit sign with running man pictogram and directional arrows. Supports 485 BUS communication.",
    image: "/products/emergency-signs/addressable-exit-sign-t705.jpg",
    specifications: [
      { label: "Model", value: "FG-T705" },
      { label: "Input Voltage", value: "AC120V/0.038A or AC277/0.018A 50/60Hz" },
      { label: "AC Power", value: "3.5W" },
      { label: "Battery", value: "Ni-MH Battery: AA 600MAH/4.8V" },
      { label: "Emergency Duration", value: "3 Hours" },
      { label: "LED", value: "14 pcs SMD2835" },
      { label: "Communication BUS", value: "485 BUS" },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "addressable-exit-sign-t741",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Addressable Emergency Exit Sign",
    model: "FG-T741",
    description:
      "UL Listed addressable emergency exit sign with running man pictogram and directional arrows. Supports 485 BUS communication.",
    image: "/products/emergency-signs/addressable-exit-sign-t741.jpg",
    specifications: [
      { label: "Model", value: "FG-T741" },
      { label: "Input Voltage", value: "AC120V/0.038A or AC277/0.018A 50/60Hz" },
      { label: "AC Power", value: "3.5W" },
      { label: "Battery", value: "Ni-MH Battery: AA 600MAH/4.8V" },
      { label: "Emergency Duration", value: "3 Hours" },
      { label: "LED", value: "14 pcs SMD2835" },
      { label: "Communication BUS", value: "485 BUS" },
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "fg-frc-180",
    categoryId: "emergency-signs-exit-lights-fire-cable",
    name: "Fire Resistant Cable",
    model: "FG FRC 180",
    description:
      "Fireguard fire performance cables are designed for augmented fire resistance in applications including the delivery of power and auxiliary control in fire alarm systems, voice alarm systems, and emergency lighting systems including those applications designed to meet BS5266. These cables will form part of the requirements of BS8519 for the installation of fire resistant power and control cable systems for life safety and fire-fighting applications.",
    image: "/products/emergency-signs/fg-frc-180.jpg",
    features: [
      "Halogen Free Flame retardant",
      "Low Smoke",
      "Supplied on robust plastic reels",
      "Safe & Easy to handle",
      "Weather & Moisture resistant",
    ],
    applications: [
      "Fire alarm systems",
      "Voice alarm systems",
      "Emergency lighting systems (BS5266)",
      "Life safety and fire-fighting applications (BS8519)",
    ],
    certifications: [
      "LPCB approved to BS 6387 CWZ",
      "EN 50200 for 2, 3 & 4 cores",
      "LPCB Ref. No. 1788a/01",
    ],
    specifications: [
      {
        label: "Conductor",
        value: "Solid bare copper (IEC/ EN 228, BS 6360, VDE 0295, HD 383)",
      },
      {
        label: "Insulation",
        value:
          "Fire resistant silicon rubber (HD 22.1, BS 7655 EI2), colors: BS7671/HD308 S2/VDE0293-308 (for more than 5 cores white core/black numbered)",
      },
      {
        label: "Separator",
        value: "Polyester tape",
      },
      {
        label: "Drain Wire",
        value: "0.80 mm Solid tinned copper",
      },
      {
        label: "Shield",
        value: "Aluminum laminated polyester tape",
      },
      {
        label: "Sheath",
        value:
          "HFFR, Red (RAL 3000) or White; EN 50290-2, VDE 0207 HM2, BS 7655 LTS1 / LTS3",
      },
      {
        label: "Conductor Resistance (max.)",
        value: "1 mm²: 18.1 Ω/km – 1.5 mm²: 12.1 Ω/km – 2.5 mm²: 7.41 Ω/km",
      },
      {
        label: "Insulation Resistance (min.)",
        value: "200 MΩ·km",
      },
      {
        label: "Operating Voltage",
        value: "300 V / 500 V  Test Voltage 2000 V",
      },
      {
        label: "Temperature Range",
        value: "Fixed -30 °C … +90 °C   Flexing -5 °C … +60 °C",
      },
      {
        label: "Min. Bending Radius",
        value: "Fixed 8 × Cable Diameter,  Flexing 15 × Cable Diameter",
      },
      {
        label: "Flame Tests",
        value: "IEC / EN 60332-1, IEC 60332-3-24, (BS 4066 part 1&3), EN 50266-2-4",
      },
      {
        label: "Insulation Integrity Smoke",
        value: "IEC 60331, BS 6387 C, W, Z, EN 50200 PH30",
      },
      {
        label: "Density",
        value: "IEC / EN 61034, BS 7622, HD 606",
      },
      {
        label: "Corrosive Gas Measurement",
        value: "IEC 60754-2, BS 6425, EN 50267",
      },
    ],
    variants: [
      // RE (Round/Enhanced?) series
      {
        model: "2 X 1 (RE)",
        description: "Cross section 2×1 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "6.00 mm (±10%)" },
          { label: "Conductor Resistance", value: "18.1 Ω/km" },
          { label: "Approx weight", value: "59 kg/km" },
        ],
      },
      {
        model: "2 X 1.5 (RE)",
        description: "Cross section 2×1.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "7.00 mm (±10%)" },
          { label: "Conductor Resistance", value: "12.1 Ω/km" },
          { label: "Approx weight", value: "77 kg/km" },
        ],
      },
      {
        model: "3 X 1.5 (RE)",
        description: "Cross section 3×1.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "7.60 mm (±10%)" },
          { label: "Conductor Resistance", value: "12.1 Ω/km" },
          { label: "Approx weight", value: "103 kg/km" },
        ],
      },
      {
        model: "4 X 1.5 (RE)",
        description: "Cross section 4×1.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "8.30 mm (±10%)" },
          { label: "Conductor Resistance", value: "12.1 Ω/km" },
          { label: "Approx weight", value: "126 kg/km" },
        ],
      },
      {
        model: "2 X 2.5 (RE)",
        description: "Cross section 2×2.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "9.00 mm (±10%)" },
          { label: "Conductor Resistance", value: "7.41 Ω/km" },
          { label: "Approx weight", value: "111 kg/km" },
        ],
      },
      {
        model: "3 X 2.5 (RE)",
        description: "Cross section 3×2.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "9.10 mm (±10%)" },
          { label: "Conductor Resistance", value: "7.41 Ω/km" },
          { label: "Approx weight", value: "151 kg/km" },
        ],
      },
      {
        model: "4 X 2.5 (RE)",
        description: "Cross section 4×2.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "10.10 mm (±10%)" },
          { label: "Conductor Resistance", value: "7.41 Ω/km" },
          { label: "Approx weight", value: "193 kg/km" },
        ],
      },
      // RM series
      {
        model: "2 X 1.5 (RM)",
        description: "Cross section 2×1.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "7.40 mm (±10%)" },
          { label: "Conductor Resistance", value: "7.41 Ω/km" },
          { label: "Approx weight", value: "81 kg/km" },
        ],
      },
      {
        model: "3 X 1.5 (RM)",
        description: "Cross section 3×1.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "8.00 mm (±10%)" },
          { label: "Conductor Resistance", value: "7.41 Ω/km" },
          { label: "Approx weight", value: "108 kg/km" },
        ],
      },
      {
        model: "4 X 1.5 (RM)",
        description: "Cross section 4×1.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "9.00 mm (±10%)" },
          { label: "Conductor Resistance", value: "7.41 Ω/km" },
          { label: "Approx weight", value: "138 kg/km" },
        ],
      },
      {
        model: "2 X 2.5 (RM)",
        description: "Cross section 2×2.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "8.80 mm (±10%)" },
          { label: "Conductor Resistance", value: "12.1 Ω/km" },
          { label: "Approx weight", value: "115 kg/km" },
        ],
      },
      {
        model: "3 X 2.5 (RM)",
        description: "Cross section 3×2.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "9.50 mm (±10%)" },
          { label: "Conductor Resistance", value: "12.1 Ω/km" },
          { label: "Approx weight", value: "154 kg/km" },
        ],
      },
      {
        model: "4 X 2.5 (RM)",
        description: "Cross section 4×2.5 mm²",
        specifications: [
          { label: "Approx. Overall Diameter", value: "10.60 mm (±10%)" },
          { label: "Conductor Resistance", value: "12.1 Ω/km" },
          { label: "Approx weight", value: "199 kg/km" },
        ],
      },
    ],
  },

  // =========================================================
  // FIRE EXTINGUISHERS
  // =========================================================

  {
    id: "fg-co2-2kg",
    categoryId: "fire-extinguishers",
    name: "CO2 Fire Extinguisher",
    model: "FGFC2 / FGC2",
    description:
      "CO2 fire extinguishers manufactured according to BS EN3 standards and are available in 2 sizes, 2kg stored pressure, and 5kg stored pressure, and are easy to use and limit damage to delicate equipment and materials. CO2 gas fire extinguishers are highly effective against fires involving electrical equipment like computers, photocopiers and generators.",
    image: "/products/fire-extinguishers/co2-2kg.jpg",
    certifications: ["BS EN3"],
     variants: [{
        model: 'FGFC2 / FGC2',
        specifications: [
          {
            label: "Capacity",
            value: "2 kg",
          }]
      },
      {
        model: 'FGFC5 / FGC5',
        specifications: [
          {
            label: "Capacity",
            value: "2 kg",
          },
          {
            label: "Capacity",
            value: "5 kg",
          }]
      }]
  },

  {
    id: "fgfp1",
    categoryId: "fire-extinguishers",
    name: "ABC Powder Fire Extinguisher",
    model: "FGFP1",
    description: "Description Mobile stored pressure ABC powder extinguishers are characterized by their high performance and simple method operation. The ABC Dry Powder Mobile type extinguisher contains high and thus has achieved highest fire rating.",
    image: "/products/fire-extinguishers/fgfp1.jpg",
    specifications: [
      {
        label: "Capacity",
        value: "1 kg",
      },
    ],
    variants:[{
      model:'FGFP1',
      specifications :[
        {
          label: "Capacity",
          value: "1 kg",
        }]
    },
    {
      model:'FGFP2',
      specifications :[
        {
          label: "Capacity",
          value: "2 kg",
        }]
    },
    {
      model:'FGP4R',
      specifications :[
        {
          label: "Capacity",
          value: "4 kg",
        }]
    }, 
    {
      model:'FGFP6',
      specifications :[
        {
          label: "Capacity",
          value: "6 kg",
        }]
    },
    {
      model:'FGFP9',
      specifications :[
        {
          label: "Capacity",
          value: "9 kg",
        }]
    },
    {
      model:'FGFP12',
      specifications :[
        {
          label: "Capacity",
          value: "12 kg",
        }]
    }]
  },

  {
    id: "fgwc6-f",
    categoryId: "fire-extinguishers",
    name: "Wet Chemical Fire Extinguisher",
    model: "FGWC6-F/FGWC9-F",
    description:
      "Wet chemical Fire extinguishers are the new innovation for cooking fat fires. Wet chemical is the most effective means for extinguishing fires involving deep fat friers. The solution cools and emulsifies when applied to burning fats and oils.",
    image: "/products/fire-extinguishers/fgwc6-f.jpg",
    variants:[{
      model:'FGWC6-F',
      specifications:[
      {
        label: "Capacity",
        value: "6 L",
      }]
    },
    {
      model:'FGWC9-F',
      specifications:[
      {
        label: "Capacity",
        value: "9 L",
      }]
    }]
  },

  {
    id: "fgff6",
    categoryId: "fire-extinguishers",
    name: "Foam Fire Extinguisher",
    model: "FGFF6/FGFF9",
    description:
      "Foam fire extinguishers are ideal for multi-risk environments, where the source of the fire could be freely burning solid materials, like wood and paper, or flammable liquids. Foam Fire Extinguishers provide a fast, powerful means of tackling class 'A' and class 'B' fires. FOAM Highly effective against petrol and volatile liquids, forming a flame smothering seal over the FIRE EXTINGUISHER surface and preventing re-ignition.",
    image: "/products/fire-extinguishers/fgff.jpg",
    variants:[{
      model:'FGFF6',
      specifications:[
      {
        label: "Capacity",
        value: "6 L",
      }]
    },
    {
      model:'FGFF9',
      specifications:[
      {
        label: "Capacity",
        value: "9 L",
      }]
    }]
  },

  {
    id: "fghfc-2",
    categoryId: "fire-extinguishers",
    name: "HFC236fa Clean Agent Fire Extinguisher",
    model: "FGHFC-2",
    description:
      "Research shows that short circuits in the electrical mains or in sensitive electronic equipment such as computers and television sets are the most common causes of fire in homes and offices. Powder-based extinguishers can certainly defeat these fires, but they cause serious collateral damage. That's where Fireguard's Clean Agent Extinguishers come in. Fireguard's cutting edge HFC236fa Clean Agent extinguishers are built to not only put out fires, but save sensitive electronic equipment too. Powered by one of the cleanest, most powerful extinguishing agents on the planet, these extinguishers are extremely lightweight, yet boast immense throw that penetrates even the finest mesh..",
    image: "/products/fire-extinguishers/fghfc-2.jpg",
    variants:[
      {
      model:'FGHFC-2',
      specifications:[
      {
        label: "Capacity",
        value: "2 kg",
      }]
    },
    {
      model:'FGHFC-4',
      specifications:[
      {
        label: "Capacity",
        value: "4 kg",
      }]
    },
    {
      model:'FGHFC-6',
      specifications:[
      {
        label: "Capacity",
        value: "6 kg",
      }]
    },
    {
      model:'FGHFC-9',
      specifications:[
      {
        label: "Capacity",
        value: "9 kg",
      }]
    }]
  },

  {
    id: "fgw9",
    categoryId: "fire-extinguishers",
    name: "Water Fire Extinguisher",
    model: "FGW9",
    description:
      "Description Water extinguishers are reliable and effective general purpose extinguishers, providing a cost effective solution for tackling freely burning material, such as paper, cloth, wood and furniture. Water is still one of the most useful of all available fire extinguishants used in fire extinguishers. It works through its cooling effect on fire and under pressure from a controllable-discharge extinguisher, can penetrate and knock out deep- seatedClass A fires. Operated.",
    image: "/products/fire-extinguishers/fgw9.jpg",
    specifications: [
      {
        label: "Capacity",
        value: "9 L",
      },
      {
        label: "Agent",
        value: "Water",
      },
    ],
  },

  {
    id: "powder-fire-extinguisher-mobile",
    categoryId: "fire-extinguishers",
    name: "Powder Fire Extinguishers (Mobile)",
    description:
      "Mobile stored pressure ABC powder extinguishers are characterized by their high performance and simple method of operation. The ABC Dry Powder Mobile type extinguisher contains high performance powder and thus has achieved highest fire rating.",
    image: "/products/fire-extinguishers/FGPT.jpg",
    features: [
      "High performance ABC dry powder",
      "Simple method of operation",
      "Highest fire rating",
      "Mobile stored pressure design",
    ],
    certifications: ["BSI"],
    variants: [
      {
        model: "FGPT-25S",
        description: "Capacity: 25 Kg",
      },
      {
        model: "FGPT-25C",
        description: "Capacity: 25 Kg",
      },
      {
        model: "FGPT-50S",
        description: "Capacity: 50 Kg",
      },
      {
        model: "FGPT-50C",
        description: "Capacity: 50 Kg",
      },
    ],
  },
  {
    id: "foam-fire-extinguisher-mobile",
    categoryId: "fire-extinguishers",
    name: "Foam Fire Extinguishers (Mobile)",
    description:
      "Mobile Stored Pressure and external cartridge operated Foam fire extinguishers are characterized by their high performance and simple method of operation. The extinguisher contains high performance extinguishing agent 6% AFFF foam and thus has achieved highest fire rating. Mobile Foam extinguishers are most suitable for fires involving flammable liquids and freely burning materials such as paper, cloth and wood.",
    image: "/products/fire-extinguishers/FGPT.jpg", 
    features: [
      "High performance 6% AFFF foam",
      "Simple method of operation",
      "Highest fire rating",
      "Suitable for flammable liquids and freely burning materials (paper, cloth, wood)",
      "Available as stored pressure or external cartridge operated",
    ],
    certifications: ["BSI"],
    variants: [
      {
        model: "FGFT50S",
        description: "Capacity: 50 Kg (Stored Pressure)",
      },
      {
        model: "FGFT50C",
        description: "Capacity: 50 Kg (External gas cartridge filled with CO2)",
      },
    ],
  },
  {
    id: "co2-fire-extinguisher-mobile",
    categoryId: "fire-extinguishers",
    name: "CO2 Fire Extinguishers (Mobile)",
    description:
      "Mobile CO2 fire extinguishers designed for high performance and reliability.",
    image: "/products/fire-extinguishers/FGC.jpg", 
    features: [
      "Cylinders made of seamless carbon-manganese pipes with high mechanical properties",
      "Cylinder designed to withstand high pressure and tested at 250 bar",
      "High-grade brass head valve ensures reliability and optimizes efficiency",
      "Head valves are either lever operated or rotary operated",
      "Unbreakable rising pipe made of aluminium to ensure long lasting life",
      "High gloss polyester powder painted, UV stabilized after shot-blasting for corrosion resistance under extreme conditions",
      "Safety valve fitted in each extinguisher for maximum safety",
      "Discharge nozzle designed to produce a jet of extinguishing gas",
    ],
    certifications: ["BSI"],
    variants: [
      {
        model: "FGC10",
        description: "Capacity: 10 Kg",
      },
      {
        model: "FGC20",
        description: "Capacity: 20 Kg",
      },
    ],
  },
  // =========================================================
  // FIRE EXTINGUISHING PANEL
  // =========================================================

  {
    id: "iq805",
    categoryId: "fire-extinguishing-panel",
    name: "IQ805 Intelligent Fire Extinguishing Control Panel",
    model: "IQ805",
    description:
      "Intelligent fire alarm control panel designed for fire extinguishing and hazard agent releasing applications.",
    image: "/products/fire-extinguishing-panel/iq805.jpg",

    specifications: [
      {
        label: "Devices",
        value: "Up to 252",
      },
      {
        label: "NACs",
        value: "2",
      },
      {
        label: "Relays",
        value: "3 Form-C",
      },
      {
        label: "Application",
        value: "Hazard agent releasing",
      },
    ],

    features: [
      "Dual hazard agent releasing",
      "SLC loop support",
      "Releasing-zone capability",
      "Suitable for new and retrofit installations",
    ],

    certifications: ["UL864", "CAN/ULC-S527"],
  },
  {
    id: "fgms-abort-and-release-station",
    categoryId: "fire-extinguishing-panel",
    name: "FGMS Abort and Release Station",
    description:
      "FGMS Manual Pull Station is a high-quality non-toxic die-cast manual pull station. Low profile design and smooth edges offer an attractive yet functional design. All components are prepainted or have plated surfaces to inhibit corrosion. Electrically the FGMS Manual pull station is unbeatable with 10 Amp snap action switch offered in all possible contact arrangements (including gold contacts). The FGMS pull station can be used with or without a break glass rod with replacement requiring no special tools.",
    image: "/products/fire-extinguishing-panel/FGMS.jpg",
    features: [
      "Lift and pull",
      "Break glass cover",
      "Weather and Explosion proof versions",
      "All stations offer hex screw or key lock access",
    ],
    specifications: [
      {
        label: "Electrical Switch",
        value: "10A @ 120VAC",
      },
      {
        label: "Dimensions Station",
        value: "Width: 3.200 in | Length: 4.750 in | Depth: 0.875 in",
      },
      {
        label: "Weight Mount",
        value: "15.5 oz / 420 grams Single gang",
      },
      {
        label: "Construction Material",
        value: "Painted Die Cast Housing, 14 Ga plated steel black plate, Corrosion Inhibited surfaces",
      },
      {
        label: "Terminal Block",
        value: "4 Position",
      },
      {
        label: "Mounting",
        value: "Single Gang Mounting",
      },
      {
        label: "Switch Type",
        value: "10 A, 120VAC snap Action Switch (S.P.S.T.)",
      },
    ],
  },
  // =========================================================
  //fire-extinguishing-system
  // =========================================================

  {
    id: "hfc-227ea-system",
    categoryId: "fire-extinguishing-system",
    name: "HFC-227ea Clean Agent Fire Suppression System",
    model: "IQ Series",
    description:
      "Clean agent fire suppression system using HFC-227ea as the extinguishing medium.",
    image: "/products//fire-extinguishing-system/hfc-227ea-system.jpg",
    features: [
      "Cylinder storage components",
      "Discharge nozzles and distribution piping",
      "Pressure gauge and supervisory components",
      "Electric and manual valve actuators",
      "Slave cylinder arrangement components",
      "Discharge pressure switch",
      "Manifold check valve",
    ],

    applications: [
      "High-value assets",
      "Occupied spaces",
      "Electrical equipment",
      "Areas where clean-up from other agents is problematic",
    ],

    certifications: ["NFPA 2001"],
  },
  {
    id: "aqrs-automatic-quick-response-suppression-system",
    categoryId: "fire-extinguishing-system",
    name: "Automatic Quick Response Suppression System (AQRS)",
    model: "AQRS",
    description:
      "Electrical mains, server racks, MCB, wiring tray, automobile engine & industrial machinery have one thing in common. These spaces are high-risk spaces because they are most vulnerable to fire. What's more, these spaces hide fires until it becomes too large to handle. The In-Panel Tube-Based System (AQRS) is an innovative firefighting solution that is ideal for enclosed electrical cabinets that are highly vulnerable to fire.",
    image: "/products//fire-extinguishing-system/aqrs.jpg",
    features: [
      "Classification: Works on class A, B, C fires and fires involving electrically charged devices and is effective on a wide range of flammable and combustible materials",
      "Self-actuated: Does not require any power supply and will function normally in the event of a power outage",
      "Electronics-Friendly: Shown to be electrically non conductive and safe for use on electrically charged equipment",
      "High-value Risk Protection: Suitable for protecting a range of high-value risks as it virtually eliminates damage to high-tech equipment, artwork and other delicate and sensitive objects",
      "No Clean-up Required After Discharge: After a discharge, the extinguishing agent can be removed by simple ventilation",
      "24-hour Protection: Automatic detection and actuation controls ensure fire protection is always 'on'",
      "Targeting the source of a fire rapidly and accurately, suppress the fire in seconds, preventing further damage and minimizing remedial work",
      "Multiple Enclosures or compartment protection with the use of single cylinder of extinguishing agent by routing additional tubing to each enclosed space",
      "No false activations",
    ],
    applications: [
      "Electrical Panels",
      "Electrical Cabinets",
      "Switching Areas",
      "Printing Press",
      "Server Racks",
      "Mobile Tower",
      "Diagnostic Machines",
      "UPS Rooms",
    ],
  },
  //  {
  //   id: "iq-hfc-227ea-nozzle",
  //   categoryId: "hfc-227ea",

  //   name: "HFC-227ea Discharge Nozzle",
  //   model: "IQ Discharge Nozzles",

  //   description:
  //     "Performance-tested discharge nozzles used to uniformly distribute HFC-227ea agent throughout the protected area.",

  //   image: "/products/hfc-227ea/discharge-nozzle.jpg",

  //   specifications: [
  //     {
  //       label: "Maximum nozzle height per tier",
  //       value: "5500 mm",
  //     },
  //     {
  //       label: "Radial nozzle",
  //       value: "360° / 8 port",
  //     },
  //     {
  //       label: "Sidewall nozzle",
  //       value: "180° / 8 port",
  //     },
  //   ],
  // },

  // =========================================================
  // WET CHEMICAL
  // =========================================================

  {
    id: "k12",
    categoryId: "wet-chemical",
    name: "K12 Wet Chemical Fire Suppression System",
    model: "K12-Series",
    description:
      "Fireguard K12 Commercial Kitchen Suppression Systems are a cutting-edge, automated,engineered solution that are designed to address the unique fire risks that a commercial kitchen environment poses. These systems are certified to the UL 300 standard and adhere to the NFPA 96/17A guidelines.",
    image: "/products/wet-chemical/k12.jpg",
    features :[
      "Only Two Nozzle Type. 15 degrees nozzle for the plenum , 40 degrees nozzle for all types of equipment.",
      "Chef-Friendly & Aesthetically Pleasing Design",
      "Powerful & Enviroment-friendly Extinguishing Agent",
      "Easy to Monitor System Readiness",
      "Fully Compliant to EN 16282-7",
      "Protects wide range of Equipment & Appliances",
      "Capable Of Protecting Small To Big Kitchen Hoods"
    ],
    variants :[
      {
        model:'K12-14E',
        specifications:[
          {
            label: "Cylinder size",
            value: "14 L",
          },
          {
            label: "Agent capacity",
            value: "9 L",
          },
          {
            label: "Nozzles",
            value: "3",
          },
        ]
      },
      {
        model:'K12-18E',
        specifications :[
          {
            label: "Cylinder size",
            value: "18 L",
          },
          {
            label: "Agent capacity",
            value: "12 L",
          },
          {
            label: "Nozzles",
            value: "4",
          },
        ]
      },
      {
        model:'K12-22E',
        specifications :[
          {
            label: "Cylinder size",
            value: "22 L",
          },
          {
            label: "Agent capacity",
            value: "16.5 L",
          },
          {
            label: "Nozzles",
            value: "7",
          },
        ]
      },
      {
        model:'K12-27E',
        specifications :[
          {
            label: "Cylinder size",
            value: "27 L",
          },
          {
            label: "Agent capacity",
            value: "20 L",
          },
          {
            label: "Nozzles",
            value: "10",
          },
        ]
      },
      {
        model:'K12-32E',
        specifications :[
          {
            label: "Cylinder size",
            value: "32 L",
          },
          {
            label: "Agent capacity",
            value: "24 L",
          },
          {
            label: "Nozzles",
            value: "12",
          },
        ]
      },
      {
        model:'K12-44E',
        specifications :[
          {
            label: "Cylinder size",
            value: "44 L",
          },
          {
            label: "Agent capacity",
            value: "30 L",
          },
          {
            label: "Nozzles",
            value: "14",
          },
        ]
      },
      {
        model:'K12-64E',
        specifications :[
          {
            label: "Cylinder size",
            value: "64 L",
          },
          {
            label: "Agent capacity",
            value: "45 L",
          },
          {
            label: "Nozzles",
            value: "18",
          },
        ]
      },
      {
        model:'K12-14M',
        specifications :[
          {
            label: "Cylinder size",
            value: "14 L",
          },
          {
            label: "Agent capacity",
            value: "9 L",
          },
          {
            label: "Nozzles",
            value: "3",
          },
        ]
      },
      {
        model:'K12-18M',
        specifications :[
          {
            label: "Cylinder size",
            value: "18 L",
          },
          {
            label: "Agent capacity",
            value: "12 L",
          },
          {
            label: "Nozzles",
            value: "4",
          },
        ]
      },
      {
        model:'K12-22M',
        specifications :[
          {
            label: "Cylinder size",
            value: "22 L",
          },
          {
            label: "Agent capacity",
            value: "16.5 L",
          },
          {
            label: "Nozzles",
            value: "7",
          },
        ]
      },
      {
        model:'K12-27M',
        specifications :[
          {
            label: "Cylinder size",
            value: "27 L",
          },
          {
            label: "Agent capacity",
            value: "20 L",
          },
          {
            label: "Nozzles",
            value: "10",
          },
        ]
      },
      {
        model:'K12-32M',
        specifications :[
          {
            label: "Cylinder size",
            value: "32 L",
          },
          {
            label: "Agent capacity",
            value: "24 L",
          },
          {
            label: "Nozzles",
            value: "12",
          },
        ]
      },
      {
        model:'K12-44M',
        specifications :[
          {
            label: "Cylinder size",
            value: "44 L",
          },
          {
            label: "Agent capacity",
            value: "30 L",
          },
          {
            label: "Nozzles",
            value: "14",
          },
        ]
      },
      {
        model:'K12-64M',
        specifications :[
          {
            label: "Cylinder size",
            value: "64 L",
          },
          {
            label: "Agent capacity",
            value: "45 L",
          },
          {
            label: "Nozzles",
            value: "18",
          },
        ]
      }
    ],
    certifications: ["UL 300", "NFPA 96/17A", "EN 16282-7"],
  },


  // =========================================================
  // FIREFIGHTING PUMP
  // =========================================================

  {
    id: "horizontal-split-case-pump",
    categoryId: "firefighting-pump",
    name: "Horizontal Split Case Fire Pump",
    description:
      "A horizontal split case pump is a unique type of Centrifugal Pump whose casing is divided into two distinct chambers, which is different from end suction pumps that are assembled with the suction nozzle,discharge nozzle and casing in one chamber.",
    image: "/products/firefighting-pump/horizontal-split-case.jpg",
    specifications: [
      {
        label: "Flow range",
        value: "300–8000 US GPM",
      },
      {
        label: "Pressure rating",
        value: "80–300 PSI",
      },
      {
        label: "Impeller",
        value: "Fully enclosed double suction impeller",
      },
    ],
    applications: [
      "Fire hose reels",
      "Fire hydrants",
      "Sprinkler systems",
    ],
  },

  {
    id: "horizontal-end-suction-pump",
    categoryId: "firefighting-pump",
    name: "Horizontal End Suction Fire Pump",
    description:
      "NFPA 20 - Standard for the installation of Stationery Pumps for Fire Protection defines End suction pumpsas follows: 'A single suction pump having its suction nozzle on the opposite side of the casing from the stuffing box and having the face of the suction nozzle perpendicular to the longitudinal axis of the shaft' The water flowing through an End suction pump makes a 90 degree radial turn from suction to discharge.",
    image: "/products/firefighting-pump/horizontal-end-suction.jpg",
    specifications: [
      {
        label: "Flow range",
        value: "50–750 US GPM",
      },
      {
        label: "Pressure rating",
        value: "80–300 PSI",
      },
      {
        label: "Impeller",
        value: "Dynamically balanced enclosed impeller",
      },
    ],
    applications: [
      "Fire hose reels",
      "Fire hydrants",
      "Sprinkler systems",
    ],
  },
  {
    id: "diesel-engine",
    categoryId: "firefighting-pump",
    name: "Diesel Engine",
    description:
      "CLARKE fire engines has the worlds largest range of UL/FM approved diesel fire pump drivers. Clarke Fire Engine covers UL/FM pump requirements from 31 kw to 764 kw with operating speeds from 1470 RPM to 3000 RPM. All Clarke engines are supplied with a standard 24 month manufacturer's warranty. Clarke Fire engine has innovative and patented Pressure Limited Driver diesel engine which protects the sprinkler system from over pressurization by varying engine RPM. Clarke fire engine has dual starting technology as well as the technology for dual ECM electronic injection engines. Both increased diesel engine reliability and performance. Its driveshaft style couplings solved field alignment problems, and significantly reduced the time needed for engine/fire pump installation and maintenance. Clarke has implemented an exciting, ongoing and continuous product improvement program which will provide even more high quality Clarke engine models to meet and exceed the demands. A deduction of 3% of the power is made for each 1000 feet rise in altitude above 300 feet and 1% for each 10 DegC above 77 DegC ambient temperature. Minimum instrumentation and control including adjustable speed governor, over speed shutdown device set approximate 20 above rated engine speed, tachometer with hour meter, oil pressure gauge and temperature gauge. Most diesel engines models work seamlessly with FIREGUARD fire pumps. Working together, they deliver the most efficient and reliable fire pump solutions. Our integrated diesel pump units make us stand out in the market. Optional: NM Fire Engine, Kirloskar.",
    image: "/products/firefighting-pump/diesel-engine.jpg", 
    features: [
      "UL/FM approved diesel fire pump drivers",
      "Power range: 31 kW to 764 kW",
      "Operating speeds: 1470 RPM to 3000 RPM",
      "Standard 24 month manufacturer's warranty",
      "Patented Pressure Limited Driver – protects sprinkler system from over pressurization by varying engine RPM",
      "Dual starting technology",
      "Dual ECM electronic injection engines",
      "Driveshaft style couplings – solves field alignment problems and reduces installation/maintenance time",
      "Minimum instrumentation: adjustable speed governor, overspeed shutdown, tachometer with hour meter, oil pressure & temperature gauges",
      "Optional brands: NM Fire Engine, Kirloskar",
    ],
    certifications: ["UL", "FM"],
  },
  {
    id: "electric-motors",
    categoryId: "firefighting-pump",
    name: "Electric Motors",
    description:
      "Marathon electric motors are setup in FIREGUARD fire pump solution. Marathon Motors has been leader in providing high quality motors with wide range of UL listed Fire pump drip-proof totally enclosed fan cooled TEFC / ODP. The features of Marathon fire pump motor included horse power range of 3 to 450 HP, 2 and 4 pole capabilities, Cast iron construction, ball bearings, red painted and 60/50 hz ratings, NEMA design B, Code G or less, EPAct efficiency. Marathon Fire pump motors meet NFPA 20 standards and are fully compliant with federal motor efficiency requirements as described in the energy independence and security act of 2007 also known as EISA. FIREGUARD also provides customization service to our customers. Customers can specify different motor brands on their own. Optional Brand Motors: WEG, Techtop.",
    image: "/products/firefighting-pump/electric-motors.jpg",
    features: [
      "UL listed Fire pump motors",
      "Drip-proof totally enclosed fan cooled (TEFC / ODP)",
      "Horse power range: 3 to 450 HP",
      "2 and 4 pole capabilities",
      "Cast iron construction",
      "Ball bearings",
      "Red painted",
      "60/50 Hz ratings",
      "NEMA design B, Code G or less",
      "EPAct efficiency",
      "Meets NFPA 20 standards",
      "Fully compliant with EISA (Energy Independence and Security Act of 2007)",
      "Customization available – customers can specify different motor brands",
      "Optional brands: WEG, Techtop",
    ],
    certifications: ["UL Listed"],
    variants: [
      {
        model: "ODP",
        description: "Open Drip Proof",
      },
      {
        model: "TEFC",
        description: "Totally Enclosed Fan Cooled",
      },
    ],
  },
  {
    id: "fire-pump-controllers",
    categoryId: "firefighting-pump",
    name: "Fire Pump Controllers",
    description:
      "Tornatech specializes in the conception and manufacturing of fire pump controllers listed by UL and approved by FM and in accordance with the widely recognized NFPA 20 standard. In addition, controllers are developed to meet various local standards and approvals such as A2P (France) and LPCB (UK), to name a few. All FIREGUARD approved pumps are equipped with Tornatech controllers. FIREGUARD branded jockey pumps can also be supplied with Tornatech jockey controllers as additional feature.",
    image: "/products/firefighting-pump/horizontal-end-suction.jpg",
    features: [
      "UL listed and FM approved",
      "In accordance with NFPA 20 standard",
      "Developed to meet local standards and approvals (A2P France, LPCB UK, and others)",
      "All FIREGUARD approved pumps are equipped with Tornatech controllers",
      "FIREGUARD branded jockey pumps can be supplied with Tornatech jockey controllers",
    ],
    certifications: ["UL Listed", "FM Approved", "NFPA 20", "A2P", "LPCB"],
  },
  {
    id: "fuel-system-tank",
    categoryId: "firefighting-pump",
    name: "Fuel System Tank",
    description:
      "FIREGUARD single wall or double wall standard construction fire pump fuel system tanks. Tanks and opening are fabricated and tested to the highest standard. Standard NPT fittings and leg brackets configuration as specified. C3 standard painting suitable for residential and commercial environment. High standard C4 painting is optional.",
    image: "/products/firefighting-pump/fuel-system-tank.jpg", 
    features: [
      "Single wall or double wall standard construction",
      "Fabricated and tested to the highest standard",
      "Standard NPT fittings",
      "Leg brackets configuration as specified",
      "C3 standard painting suitable for residential and commercial environment",
      "High standard C4 painting optional",
    ],
    specifications: [
      {
        label: "Construction",
        value: "Single wall or double wall",
      },
      {
        label: "Fittings",
        value: "Standard NPT",
      },
      {
        label: "Standard Painting",
        value: "C3 (residential and commercial)",
      },
      {
        label: "Optional Painting",
        value: "C4 (high standard)",
      },
    ],
  },
  {
    id: "flowmeters",
    categoryId: "firefighting-pump",
    name: "Flowmeters",
    description:
      "FIREGUARD has a wide range of well engineered flowmeters able to meet the specific needs of different customers. A comprehensive, approved range of innovative and reliable flowmeters are available for use in Fire Pump Testing from GVI and INFLUX.",
    image: "/products/firefighting-pump/flowmeters.jpg", 
    features: [
      "Wide range of well engineered flowmeters",
      "Meets specific needs of different customers",
      "Comprehensive approved range of innovative and reliable flowmeters",
      "Available for use in Fire Pump Testing",
      "Brands: GVI and INFLUX",
    ],
    certifications: ["UL Listed"],
  },
  {
    id: "automatic-control-valves",
    categoryId: "firefighting-pump",
    name: "Automatic Control Valves",
    description:
      "CLA-VAL has been a leading manufacturer of automatic control valves, serving waterworks, fire protection, aviation fueling and industrial customers throughout the world. Main relief valve is designed to relieve excess pressure in a fire protection system, while eliminating the damaging effects of cavitation. The valve features an adjustable pressure setting, fast opening to maintain steady line pressure, and gradual closing for surge free operation. Casing relief valve is designed to relieve excess pressure in a fire protection system, while eliminating the damaging effects of cavitation. The valve features an adjustable pressure setting, fast opening to maintain steady line pressure, and gradual closing for surge free operation. It is typically used in a fire protection system to trim water pressure, thus preventing pressure build-up whenever line pressure exceeds the setting of the spring. It will relieve excess pressure to atmosphere to prevent damage to the distribution network.",
    image: "/products/firefighting-pump/automatic-control-valves.jpg",
    features: [
      "Leading manufacturer of automatic control valves for fire protection",
      "Adjustable pressure setting",
      "Fast opening to maintain steady line pressure",
      "Gradual closing for surge-free operation",
      "Eliminates damaging effects of cavitation",
    ],
    certifications: ["FM Approved"],
    variants: [
      {
        model: "Main Relief Valve",
        description:
          "Designed to relieve excess pressure in a fire protection system while eliminating cavitation effects. Features adjustable pressure setting, fast opening, and gradual closing for surge-free operation.",
      },
      {
        model: "Casing Relief Valve",
        description:
          "Typically used to trim water pressure and prevent pressure build-up. Relieves excess pressure to atmosphere to protect the distribution network. Features adjustable pressure setting, fast opening, and gradual closing.",
      },
    ],
  },

  {
    id: "fgedj-fire-pump-set",
    categoryId: "firefighting-pump",
    name: "FGEDJ Fire Pump Set",
    description:
      "FGEDJ Fire Pump Set consists of End Suction Centrifugal Pump driven by Electric Motor, End Suction Diesel Pump, and Vertical Jockey Pump. Pumps are assembled with discharge line accessories as well as Control (100GPM - 2500GPM) and other capacity can be customized. Accessories include Suction pipe, Discharge pipe with Flanges, Battery, Gate Valves, Check Valves, Flexible Expansion Joints, Pressure Switches, Pressure Gauge, Base Frame, etc. Fire pumps are designed for whole operational life, the maximum reliability is always the first priority. The components are affixed onto a steel framing structure. Each controller has its own individual pressure sensing line. The suction line should never include a strainer. Check valve and butterfly valve in the discharge line.",
    image: "/products/firefighting-pump/fgedj-fire-pump-set.jpg" , 
    features: [
      "Switch automatically among the three pumps",
      "Both Manual and Automatic operation is available",
      "Can work when the power is off",
      "Easy Installation",
      "Customized size and pump group",
      "FGYE high efficient motor with protection IP55 class F – High performance and low power consumption",
      "Pump case with Anti-corrosive coating with quality NSK bearings, wear resistance mechanical seal",
      "Circuit available up on request",
      "Different Mounting Styles",
      "Low Maintenance Cost and available spare parts",
      "Electronic battery charger",
    ],
    applications: [
      "Fire fighting system",
    ],
    specifications: [
      {
        label: "Flow Range",
        value: "100 GPM – 2500 GPM (customizable)",
      },
      {
        label: "Pump Type",
        value: "End Suction Centrifugal (Electric) + End Suction Diesel + Vertical Jockey",
      },
    ],
    variants: [
      {
        model: "FGEDJ",
        description: "Fire pump set consists of Electric pump + Diesel pump + Jockey pump and all accessories",
      },
      {
        model: "FGDJ",
        description: "Fire pump set consists of Diesel pump + Jockey pump and all accessories",
      },
      {
        model: "FGEJ",
        description: "Fire pump set consists of Electric pump + Jockey pump and all accessories",
      },
      {
        model: "FGEEJ",
        description: "Fire pump set consists of Electric pump + Electric pump + Jockey pump and all accessories",
      },
    ],
  },

  {
    id: "pump-controller",
    categoryId: "firefighting-pump",
    name: "Pump Controller",
    description:
      "Equipped with integrated digitalization and network technologies for precise data measurement, alarm protection, remote control, measuring and communication. The fire pump control panel performs input (receives signals from alarm devices such as pressure operated switches or remote fire alarm equipment), output (provides electrical power to actuate the motor and sends signal to actuate the diesel engine), and monitoring (monitors the fire pump operation and performance). The pump consists of three separate controllers: electric, diesel and jockey controllers. Electrical components such as circuit breaker, switches, relays and other devices dedicated to the operation of fire pumps are SCHNEIDER products. All controllers are completely assembled, wired and tested by the manufacturer before shipment from factory.",
    image: "/products/firefighting-pump/pump-controller.jpg",
    features: [
      "Equipped with integrated digitalization and network technologies for precise data measurement, alarm protection, remote control, measuring and communication",
      "DOL, Star Delta starter or soft starter based on load or client requirement",
      "All controllers are completely assembled, wired and tested",
      "Self-acting to start, run and protect the driver",
      "Automatic or manual operation options",
      "Degree of protection IP55",
      "3 indicating lamps for phase status",
      "Available phase failure/phase sequence relay for larger capacity",
      "Available ammeter and voltmeter for larger capacity",
      "Available over/under voltage relay for larger capacity",
      "Custom made design based on request",
      "Soft starter for larger capacity or upon request",
    ],
    variants: [
      {
        model: "Electrical Pump Controller",
        description: "Controller for electric-driven fire pump",
      },
      {
        model: "Diesel Pump Controller",
        description: "Controller for diesel-driven fire pump",
      },
      {
        model: "Jockey Pump Controller",
        description: "Controller for jockey pump",
      },
    ],
  },
];


export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter((product) => product.categoryId === categoryId);
}
