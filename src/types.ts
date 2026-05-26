export interface ProgramDetail {
  id: string;
  num: string;
  name: string;
  heroTagline: string;
  heroSub: string;
  overview: string;
  importanceTitle: string;
  importanceList: string[];
  coverage: {
    title: string;
    items: string[];
  }[];
  forWhom: {
    category: string;
    description: string;
  }[];
  approach: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
  ecosystemLink: string;
  ctaText: string;
  ctaButton: string;
}

export interface SportDetail {
  id: string;
  num: string;
  name: string;
  heroTagline: string;
  heroSub: string;
  overview: string;
  importanceTitle: string;
  importanceList: string[];
  focusAreas: {
    title: string;
    description: string;
  }[];
  forWhom: {
    category: string;
    description: string;
  }[];
  approach: string[];
  outcomes: string[];
  ecosystemLink: string;
  facilityNote?: string;
  whyThisSport: string;
  ctaText: string;
  ctaButton: string;
}

export interface ValueItem {
  name: string;
  description: string;
}

export type ProfileFormCategory = 'student' | 'coach' | 'school' | 'sponsor';
