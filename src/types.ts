export interface CraneService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  idealFor: string[];
  capacities: string;
}

export interface CraneTruck {
  id: string;
  name: string;
  type: 'boom_truck' | 'all_terrain' | 'rough_terrain' | 'heavy_haul' | 'knuckle_boom';
  categoryLabel: string;
  capacity: string;
  maxTipHeight: string;
  boomLength: string;
  image: string;
  features: string[];
  description: string;
  isPopular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'hvac' | 'construction' | 'industrial' | 'infrastructure';
  location: string;
  craneUsed: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  projectType: string;
  date: string;
}
