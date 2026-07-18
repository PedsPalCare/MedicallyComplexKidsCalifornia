export type ReviewState =
  | 'verified-primary'
  | 'draft-expert-review'
  | 'translation-review-needed'
  | 'policy-approval-needed';

export interface Source {
  title: string;
  publisher: string;
  url: string;
  accessed: string;
  effectiveDate?: string;
  language?: 'en' | 'es';
}

export interface Program {
  slug: string;
  title: string;
  shortTitle: string;
  question: string;
  summary: string;
  why: string[];
  mayQualify: string[];
  administeredBy: string[];
  firstSteps: string[];
  documents: string[];
  assessment: string[];
  afterApplying: string[];
  services: string[];
  differences: string[];
  barriers: string[];
  afterDenial: string[];
  help: { label: string; url: string }[];
  related: string[];
  sources: Source[];
  contentOwner: string;
  lastReviewed: string;
  nextReview: string;
  reviewState: ReviewState;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  categories: string[];
  counties: string[];
  ages: string[];
  languages: string[];
  delivery: ('virtual' | 'in-person' | 'phone' | 'directory')[];
  cost: 'free' | 'varies' | 'not verified';
  eligibility: string;
  url: string;
  sourceUrl: string;
  verified: string;
  statewide: boolean;
}

export interface DenialPath {
  id: string;
  label: string;
  identify: string;
  action: string;
  deadline: string;
  continuedServices: string;
  immediateSteps: string[];
  documents: string[];
  records: string;
  submit: string;
  help: { label: string; url: string }[];
  next: string;
  sources: Source[];
  verified: string;
}
