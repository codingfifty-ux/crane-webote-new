import { CraneService, CraneTruck, ProjectItem, Testimonial } from '../types';

export const CRANE_SERVICES: CraneService[] = [
  {
    id: 'mobile-crane-hire',
    title: 'Mobile Hydraulic Crane Rental',
    shortDesc: 'Late-model mobile hydraulic cranes from 5 to 150+ tons with NCCCO certified operators and rigging crews.',
    fullDesc: 'RAS Crane provides rapid-deployment mobile hydraulic truck cranes engineered for versatile high-tonnage lifting. Equipped with continuous 360-degree rotation, multi-stage telescoping booms, and fast hydraulic outrigger stabilization, our mobile cranes deliver unmatched stability on both tight metropolitan job sites and massive commercial infrastructure projects.',
    image: '/assets/crane/crane-service.webp',
    features: [
      'Capacities ranging from 5 to 150+ Tons',
      'Rapid set-up with computerized outriggers',
      'Certified NCCCO operators and master riggers included',
      'Compact footprint designed for congested street access',
      'Daily, weekly, and monthly bare or fully-manned rental'
    ],
    idealFor: ['Urban building construction', 'Steel framing picks', 'Bridge girder installations', 'High-capacity industrial lifts'],
    capacities: '5 - 150+ Tons'
  },
  {
    id: 'boom-truck-services',
    title: 'Boom Truck & Knuckleboom Services',
    shortDesc: 'Articulating knucklebooms and stiff-boom trucks for rapid setup, low overhead clearance, and street access.',
    fullDesc: 'Our fleet of Peterbilt and Western Star boom trucks and articulating knuckleboom cranes offer maximum maneuverability in congested city streets and tight alleys. Perfect for rapid material hoisting, glass curtain wall placement, and mechanical lifting without blocking entire traffic corridors.',
    image: '/assets/crane/crane-truck-1.jpg',
    features: [
      'Articulating knucklebooms for low-clearance overhangs',
      'Highway roadable at legal speeds with quick 15-min setup',
      'Radio remote control for operator line-of-sight precision',
      'Integrated cargo beds for material haul-and-hoist'
    ],
    idealFor: ['Tight urban alleyways', 'Balcony material delivery', 'Sign and pylon installation', 'Residential tree and beam lifting'],
    capacities: '15 - 50 Tons'
  },
  {
    id: 'hvac-rooftop-lifting',
    title: 'Rooftop HVAC & Chiller Placement',
    shortDesc: 'Turnkey rooftop hoisting for chillers, cooling towers, compressors, and packaged AC units with zero downtime.',
    fullDesc: 'We specialize in mechanical contractor crane support. Our team coordinates street closures, rigging, and swift placement of rooftop HVAC units, chillers, condensers, and air handling equipment with zero building disruption and millimetric accuracy. We routinely handle weekend and after-hours street permits to eliminate commercial tenant disruptions.',
    image: '/assets/crane/crane-work-1.jpg',
    features: [
      'Weekend, early morning & night crane dispatch',
      'Engineered spreader beams & nylon non-marking rigging',
      'DOB & DOT street closure permits managed end-to-end',
      'Same-day multi-unit swap and placement capabilities'
    ],
    idealFor: ['Commercial office towers', 'Hospitality & hotels', 'Industrial warehouses', 'Hospitals and school campuses'],
    capacities: 'Up to 240 ft reach'
  },
  {
    id: 'structural-steel-erection',
    title: 'Structural Steel & Construction Erection',
    shortDesc: 'Precision heavy beam setting, precast concrete panels, bridge girders, and commercial framing.',
    fullDesc: 'Our high-tonnage mobile hydraulic and all-terrain cranes deliver ironclad stability for complex steel framing projects. Working hand-in-hand with your ironworkers, erectors, and general contractors, our operators maintain steady picks and safe multi-tier structural lifts in accordance with ASME B30.5 and OSHA 1926.1400 regulations.',
    image: '/assets/crane/crane-work-2.jpg',
    features: [
      'Tandem crane lift coordination for oversized girders',
      'PE-stamped engineered lift plans & CAD rigging drawings',
      'Precast wall panel erection and tilt-up support',
      'High-reach lattice swingaway jibs available'
    ],
    idealFor: ['Steel warehouse framing', 'Highway bridge structures', 'Multi-tier parking decks', 'Commercial high-rise framing'],
    capacities: 'Up to 150 Tons'
  },
  {
    id: 'industrial-machinery-moving',
    title: 'Industrial Machinery & Plant Rigging',
    shortDesc: 'Heavy factory equipment rigging, transformer extraction, printing press moves, and generator hoisting.',
    fullDesc: 'Moving sensitive industrial equipment requires specialized rigging gear and steady hands. RAS Crane handles factory machinery extraction, transformer swaps, injection molding machines, and heavy generator placements safely and efficiently with hydraulic skidding systems and master rigger oversight.',
    image: '/assets/crane/crane-truck-2.jpg',
    features: [
      'Licensed master rigger certified on-site crew',
      'Hydraulic dollies, machinery skates & toe jacks',
      'Indoor tight-clearance and overhead crane solutions',
      'Factory decommissioning & clean-room equipment repositioning'
    ],
    idealFor: ['Manufacturing plants', 'Electrical substations', 'Data centers & server rooms', 'Pharmaceutical facilities'],
    capacities: 'Custom Rigging Packages'
  },
  {
    id: 'dob-permits-engineering',
    title: 'DOB Crane Permits & Rigging Plans',
    shortDesc: 'Full-service NYC DOB crane notices, DOT street/sidewalk closures, and stamped engineering lift drawings.',
    fullDesc: 'Navigating municipal crane compliance is complex. RAS Crane provides complete turnkey permit expediting including NYC Department of Buildings (DOB) crane notifications (CD-4, CD-5), Department of Transportation (DOT) street and sidewalk closures, traffic management plans, and PE-stamped engineered rigging lift drawings.',
    image: '/assets/crane/hero-crane.webp',
    features: [
      'NYC DOB Crane & Derrick notice filings',
      'NYC DOT Street & sidewalk closure coordination',
      'Professional Engineer (PE) stamped lift plans',
      'Certified flaggers, traffic barricades & pedestrian protection'
    ],
    idealFor: ['General contractors', 'Mechanical engineers', 'Property managers', 'Architects & structural engineers'],
    capacities: 'Turnkey Permitting'
  },
  {
    id: 'emergency-crane-dispatch',
    title: '24/7 Emergency Crane & Storm Recovery',
    shortDesc: 'Immediate 24/7 emergency dispatch for fallen trees, structural collapses, and urgent industrial breakdowns.',
    fullDesc: 'When disasters happen, timing is critical. Our emergency response team operates 24/7/365 with rapid crane truck dispatch to stabilize compromised structures, lift fallen trees off commercial buildings, clear highway obstructions, and extract damaged equipment.',
    image: '/assets/crane/ras-crane-main.jpg',
    features: [
      'Immediate 2-hour response dispatch available',
      'Storm damage & fallen tree extraction from structures',
      'Emergency power transformer and generator crane picks',
      'Full hazard risk assessment on arrival'
    ],
    idealFor: ['Emergency utility repairs', 'Severe storm damage', 'Structural stabilization', 'Highway clearance'],
    capacities: '24/7 Rapid Dispatch'
  },
  {
    id: 'heavy-haul-transport',
    title: 'Heavy Hauling & Equipment Transport',
    shortDesc: 'Lowboy RGN trailers, flatbeds, and heavy machinery transport paired with on-site crane offloading.',
    fullDesc: 'RAS Crane provides turn-key heavy transport services. We transport your oversize loads, construction machinery, and industrial components directly from fabrication shop or rail yard to job site, providing immediate crane offloading upon arrival.',
    image: '/assets/crane/crane-service.webp',
    features: [
      'Heavy-duty lowboy & hydraulic drop deck trailers',
      'DOT permitted oversize and overweight load transport',
      'Single-source haul and lift convenience',
      'Comprehensive $10M cargo insurance coverage'
    ],
    idealFor: ['Earthmoving equipment', 'Prefab concrete pieces', 'Steel coils & structural beams', 'Heavy industrial tanks'],
    capacities: 'Up to 85 Ton Haul'
  }
];

export const CRANE_FLEET: CraneTruck[] = [
  {
    id: 'manitex-30102c',
    name: 'RAS Mobile Hydraulic Crane Truck',
    type: 'boom_truck',
    categoryLabel: 'Mobile Crane Truck',
    capacity: '30 - 45 Tons',
    maxTipHeight: '142 ft',
    boomLength: '102 ft 4-section telescoping',
    image: '/assets/crane/ras-crane-main.jpg',
    features: [
      'Commercial heavy-duty chassis with hydraulic outriggers',
      'Rapid urban street setup with minimal traffic interruption',
      'Remote control line-of-sight precision hoisting',
      'Ideal for HVAC rooftop equipment and structural steel'
    ],
    description: 'The core RAS Crane workhorse. Fast mobilization across all 5 NYC boroughs and tri-state metro corridors.',
    isPopular: true
  },
  {
    id: 'palfinger-pk-53002',
    name: 'Heavy Knuckleboom Articulating Crane',
    type: 'knuckle_boom',
    categoryLabel: 'Knuckleboom / Articulating',
    capacity: '40 Tons',
    maxTipHeight: '120 ft',
    boomLength: 'Continuous rotation articulating boom',
    image: '/assets/crane/crane-truck-1.jpg',
    features: [
      'Articulating joint folds around building overhangs and balconies',
      'Ultra-compact turning radius for narrow NYC side streets',
      'High-speed hoist winch with precise inching controls',
      'Equipped with hydraulic glass-lifting suction attachments'
    ],
    description: 'The premier choice for tight metropolitan street setups where straight booms cannot articulate around eaves or tight balconies.',
    isPopular: true
  },
  {
    id: 'terex-bt5092',
    name: 'Commercial Mobile Boom Truck',
    type: 'boom_truck',
    categoryLabel: 'Boom Truck',
    capacity: '25 Tons',
    maxTipHeight: '135 ft',
    boomLength: '92 ft boom + 44 ft swing-on jib',
    image: '/assets/crane/crane-truck-2.jpg',
    features: [
      'Heavy-duty tandem axle chassis with dual control stations',
      'Internal anti-two-block sensor with load moment indicator',
      'Continuous 360-degree rotation under full rated load',
      'Fast 15-minute jobsite setup and breakdown'
    ],
    description: 'Perfect for sign installation, light framing, pylon banners, and mid-range commercial utility projects.',
    isPopular: false
  },
  {
    id: 'grove-tms9000e',
    name: 'Heavy Hydraulic All-Terrain Crane',
    type: 'all_terrain',
    categoryLabel: 'Heavy All-Terrain',
    capacity: '110 Tons',
    maxTipHeight: '237 ft',
    boomLength: '142 ft 5-section Megaform full-power boom',
    image: '/assets/crane/hero-crane.webp',
    features: [
      'Megaform boom technology with Twin-Lock pinning',
      'Bi-fold swingaway extension jib with hydraulic luffing',
      'Full highway travel speeds with modular counterweight packages',
      'Heavy structural steel and multi-tier bridge picks'
    ],
    description: 'Exceptional heavy lifting reach on a highway-ready truck chassis. High capacity for highway bridges, towers, and multi-story commercial framing.',
    isPopular: true
  },
  {
    id: 'liebherr-ltm-1090',
    name: 'High-Reach City Mobile Crane',
    type: 'all_terrain',
    categoryLabel: 'All-Terrain Crane',
    capacity: '100 Tons',
    maxTipHeight: '250 ft',
    boomLength: '197 ft telescopic boom with lattice extension',
    image: '/assets/crane/crane-work-1.jpg',
    features: [
      '4-axle compact chassis with all-wheel steer for tight job turns',
      'VarioBallast adjustable counterweight system for cramped yards',
      'ECOdrive fuel-efficient low-noise engine technology',
      'High-altitude reach for high-rise equipment placements'
    ],
    description: 'The industry benchmark for versatility, offering long telescopic reach and incredible tight-quarter turning capability.',
    isPopular: true
  },
  {
    id: 'terex-rt670',
    name: 'Heavy Rigging & Hoisting Truck',
    type: 'heavy_haul',
    categoryLabel: 'Rigging & Transport',
    capacity: '70 - 85 Tons',
    maxTipHeight: '175 ft',
    boomLength: 'Multi-axle heavy transport with lowboy RGN',
    image: '/assets/crane/crane-work-2.jpg',
    features: [
      'Heavy haul lowboy with detachable gooseneck',
      'Integrated rigging hardware and counterweight transport',
      'Full pick-and-carry capability on site grounds',
      'DOT permitted oversize transport'
    ],
    description: 'Turnkey heavy hauling and machinery offloading rig serving regional infrastructure and industrial facilities.',
    isPopular: false
  }
];

export const RECENT_PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Manhattan High-Rise HVAC Chiller Replacement',
    category: 'hvac',
    location: 'Midtown Manhattan, NY',
    craneUsed: 'Grove TMS9000E 110-Ton Hydraulic Crane',
    image: '/assets/crane/crane-work-1.jpg',
    description: 'Hoisted four 6-ton commercial chillers onto a 22-story commercial building roof in a 7-hour Sunday street closure window with full DOB & DOT permits.'
  },
  {
    id: 'p2',
    title: 'Brooklyn Industrial Machinery & Stamping Press Rig',
    category: 'industrial',
    location: 'Brooklyn Navy Yard, NY',
    craneUsed: 'Liebherr LTM 1090-4.2 All-Terrain',
    image: '/assets/crane/crane-truck-2.jpg',
    description: 'Dual crane tandem pick and skate extraction of a 68,000-lb hydraulic stamping press through factory roof hatches with 1-inch clearance tolerances.'
  },
  {
    id: 'p3',
    title: 'Queens Highway Overpass Steel Girders',
    category: 'infrastructure',
    location: 'Queens Expressway Corridor, NY',
    craneUsed: 'Tandem 110-Ton Hydraulic Truck Cranes',
    image: '/assets/crane/hero-crane.webp',
    description: 'Nighttime erection of pre-stressed concrete bridge girders under active highway traffic control with certified master riggers and NYPD escort.'
  },
  {
    id: 'p4',
    title: 'Multi-Story Steel Warehouse Framework',
    category: 'construction',
    location: 'Industrial Logistics Park, NY/NJ',
    craneUsed: 'Manitex 30-Ton & Terex 70-Ton',
    image: '/assets/crane/crane-work-2.jpg',
    description: 'Continuous structural steel erection for a 140,000 sq.ft distribution warehouse, setting columns, perimeter rafters, and roof joists.'
  },
  {
    id: 'p5',
    title: 'High-Rise Balcony Glass Curtain Wall Installation',
    category: 'construction',
    location: 'Long Island City Waterfront, NY',
    craneUsed: 'Palfinger PK 53002 Knuckleboom',
    image: '/assets/crane/crane-truck-1.jpg',
    description: 'Articulating knuckleboom lifted and placed custom glass curtain panels beneath overhangs with precision vacuum lifters.'
  },
  {
    id: 'p6',
    title: 'Power Substation Transformer Rig & Emergency Swap',
    category: 'industrial',
    location: 'Regional Energy Substation',
    craneUsed: 'Grove 110-Ton & Kenworth Heavy Hauler',
    image: '/assets/crane/ras-crane-main.jpg',
    description: 'Emergency extraction and replacement of a failed 52-ton oil-cooled transformer unit with zero power interruption to surrounding grid.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Mark Henderson',
    role: 'Senior Project Executive',
    company: 'Apex Commercial Builders NYC',
    content: 'RAS Crane has been our exclusive lifting partner on multi-million dollar structural projects across NYC. Their operators arrive early, handle street permits flawlessly, and place steel with surgical precision.',
    rating: 5,
    projectType: 'Structural Steel Erection',
    date: '1 week ago'
  },
  {
    id: 't2',
    author: 'David Rodriguez',
    role: 'VP of Mechanical Operations',
    company: 'Metro HVAC & Mechanical Corp',
    content: 'When we have an 8-unit rooftop chiller replacement on a tight weekend timeline, RAS Crane is the only dispatch number we dial. Their boom trucks handle tight NYC streets and their rigging crew is second to none.',
    rating: 5,
    projectType: 'Commercial Rooftop HVAC',
    date: '3 weeks ago'
  },
  {
    id: 't3',
    author: 'Salim Tariq',
    role: 'Plant Maintenance Director',
    company: 'Tri-State Heavy Industrial Group',
    content: 'We had an unexpected press breakdown that halted our entire production line. RAS Crane dispatched a 100-ton crane and licensed master rigging team within 90 minutes. They saved our company huge operational downtime.',
    rating: 5,
    projectType: 'Emergency Machinery Rigging',
    date: '1 month ago'
  }
];

export const COMPANY_INFO = {
  name: 'RAS Crane Service',
  legalName: 'RAS Crane & Heavy Rigging Services LLC',
  tagline: 'Professional NYC Crane Rental, Mobile Boom Trucks & Master Rigging',
  phone: '(470) 321-7112',
  localPhone: '(347) 447-2987',
  tollFreePhone: '(800) 727-2726',
  emergencyPhone: '(470) 321-7112',
  email: 'dispatch@rascrane.com',
  address: 'New York City, NY & Metro Area (Serving All 5 Boroughs & Tri-State)',
  coverageArea: 'Manhattan, Brooklyn, Queens, Bronx, Staten Island, Long Island, NJ & Tri-State',
  hours: '24 Hours / 7 Days a Week Emergency Dispatch',
  instagram: 'https://www.instagram.com/rascrane/',
  instagramHandle: '@rascrane',
  license: 'NYC DOB Licensed Master Riggers & NCCCO Certified Operators',
  insurance: '$10,000,000 General Riggers Liability & Fully Bonded',
  certifications: ['Licensed NYC Master Riggers', 'NCCCO Certified Operators', 'OSHA 1926.1400 Compliant', 'NYC DOB Approved', 'SC&RA Member']
};
