export const SITE_NAME = 'California Families for Children with Medical Complexity';
export const SITE_TAGLINE = 'Clear paths. Strong voices. Better systems.';
export const BASE_PATH = '/MedicallyComplexKidsCalifornia';
export const REVIEW_DATE = '2026-07-18';

export const href = (path = '/') => {
  const [, rawPath = '/', suffix = ''] = path.match(/^([^?#]*)(.*)$/) ?? [];
  const normalized = rawPath === '/' || rawPath === '' ? '/' : `/${rawPath.replace(/^\/+|\/+$/g, '')}/`;
  return `${BASE_PATH}${normalized}${suffix}`;
};

export const counties = [
  'Alameda', 'Alpine', 'Amador', 'Butte', 'Calaveras', 'Colusa', 'Contra Costa',
  'Del Norte', 'El Dorado', 'Fresno', 'Glenn', 'Humboldt', 'Imperial', 'Inyo',
  'Kern', 'Kings', 'Lake', 'Lassen', 'Los Angeles', 'Madera', 'Marin',
  'Mariposa', 'Mendocino', 'Merced', 'Modoc', 'Mono', 'Monterey', 'Napa',
  'Nevada', 'Orange', 'Placer', 'Plumas', 'Riverside', 'Sacramento', 'San Benito',
  'San Bernardino', 'San Diego', 'San Francisco', 'San Joaquin', 'San Luis Obispo',
  'San Mateo', 'Santa Barbara', 'Santa Clara', 'Santa Cruz', 'Shasta', 'Sierra',
  'Siskiyou', 'Solano', 'Sonoma', 'Stanislaus', 'Sutter', 'Tehama', 'Trinity',
  'Tulare', 'Tuolumne', 'Ventura', 'Yolo', 'Yuba'
] as const;

export const needs = [
  { id: 'home-care', label: 'More care at home' },
  { id: 'nursing', label: 'In-home nursing' },
  { id: 'equipment', label: 'Equipment or supplies' },
  { id: 'insurance', label: 'Medi-Cal or CCS' },
  { id: 'developmental', label: 'Regional Center services' },
  { id: 'caregiver', label: 'IHSS or paid family caregiving' },
  { id: 'school', label: 'School support' },
  { id: 'denial', label: 'A denial, reduction, or delay' },
  { id: 'transition', label: 'Transition to adulthood' },
  { id: 'emergency', label: 'Emergency planning' }
] as const;

export const officialLocators = {
  ccs: {
    label: 'California county CCS offices',
    url: 'https://www.dhcs.ca.gov/services/california-childrens-services/county-offices-for-california-childrens-services/'
  },
  regionalCenter: {
    label: 'DDS Regional Center directory and locator',
    url: 'https://www.dds.ca.gov/rc/listings/'
  },
  ihss: {
    label: 'CDSS county IHSS offices',
    url: 'https://www.cdss.ca.gov/inforesources/county-ihss-offices'
  },
  hcba: {
    label: 'DHCS HCBA Waiver agencies and application information',
    url: 'https://www.dhcs.ca.gov/services/long-term-care-alternatives-home-and-community-based-service-options/home-and-community-based-alternatives-waiver-2/'
  }
} as const;

export const reviewLabels = {
  'verified-primary': 'Checked against primary sources',
  'draft-expert-review': 'Draft — California expert review required',
  'translation-review-needed': 'Translation review required',
  'policy-approval-needed': 'Policy position not approved'
} as const;
