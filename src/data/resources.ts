import type { Resource } from './models';

const all = ['All California counties'];

export const resources: Resource[] = [
  {
    id: 'medi-cal-help', name: 'Medi-Cal Help',
    description: 'Official DHCS help routes for Medi-Cal members, including managed-care and fee-for-service questions.',
    categories: ['Benefits navigation', 'Care coordination', 'Home nursing', 'Equipment and supplies'],
    counties: all, ages: ['All ages'], languages: ['English', 'Spanish'], delivery: ['phone', 'virtual'],
    cost: 'free', eligibility: 'Medi-Cal members and applicants; route depends on the question.',
    url: 'https://www.dhcs.ca.gov/medi-cal/help/', sourceUrl: 'https://www.dhcs.ca.gov/medi-cal/help/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'ccs-offices', name: 'County CCS office directory',
    description: 'Official statewide directory for California Children’s Services county offices.',
    categories: ['Benefits navigation', 'Care coordination', 'Children’s hospitals', 'Equipment and supplies'],
    counties: all, ages: ['Children and youth'], languages: ['English'], delivery: ['directory', 'phone'],
    cost: 'free', eligibility: 'Contact the county office to confirm current CCS application and service routes.',
    url: 'https://www.dhcs.ca.gov/services/california-childrens-services/county-offices-for-california-childrens-services/',
    sourceUrl: 'https://www.dhcs.ca.gov/services/california-childrens-services/county-offices-for-california-childrens-services/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'hcba', name: 'HCBA Waiver information and agency route',
    description: 'Official DHCS program page with application, Waiver Agency, enrollment, and grievance information.',
    categories: ['Benefits navigation', 'Care at home', 'Care coordination', 'Home nursing', 'Respite'],
    counties: all, ages: ['All ages'], languages: ['English'], delivery: ['directory', 'virtual'],
    cost: 'free', eligibility: 'Eligibility and enrollment are determined through the official HCBA process.',
    url: 'https://www.dhcs.ca.gov/services/long-term-care-alternatives-home-and-community-based-service-options/home-and-community-based-alternatives-waiver-2/',
    sourceUrl: 'https://www.dhcs.ca.gov/services/long-term-care-alternatives-home-and-community-based-service-options/home-and-community-based-alternatives-waiver-2/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'regional-centers', name: 'Regional Center directory',
    description: 'Official DDS list and locator for California’s 21 Regional Centers.',
    categories: ['Benefits navigation', 'Care coordination', 'Early childhood', 'Respite', 'Transition to adulthood'],
    counties: all, ages: ['All ages', 'Birth to 3', 'Transition age'], languages: ['English', 'Spanish'], delivery: ['directory', 'phone'],
    cost: 'free', eligibility: 'The correct Regional Center is based on residence; program eligibility is separately determined.',
    url: 'https://www.dds.ca.gov/rc/listings/', sourceUrl: 'https://www.dds.ca.gov/rc/listings/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'ihss-offices', name: 'County IHSS office directory',
    description: 'Official CDSS directory of county IHSS program websites and contact routes.',
    categories: ['Benefits navigation', 'Care at home', 'Financial assistance', 'Paid family caregiving'],
    counties: all, ages: ['All ages'], languages: ['English', 'Spanish'], delivery: ['directory', 'phone'],
    cost: 'free', eligibility: 'County IHSS determines eligibility and service hours under current rules.',
    url: 'https://www.cdss.ca.gov/inforesources/county-ihss-offices', sourceUrl: 'https://www.cdss.ca.gov/inforesources/county-ihss-offices', verified: '2026-07-18', statewide: true
  },
  {
    id: 'drc', name: 'Disability Rights California',
    description: 'Statewide disability-rights information, advocacy, and legal resources. Service availability depends on the issue and capacity.',
    categories: ['Advocacy', 'Legal assistance', 'Education', 'Benefits navigation'],
    counties: all, ages: ['All ages'], languages: ['English', 'Spanish', 'Other languages'], delivery: ['phone', 'virtual'],
    cost: 'free', eligibility: 'Intake and service criteria vary; the organization cannot represent every caller.',
    url: 'https://www.disabilityrightsca.org/', sourceUrl: 'https://www.disabilityrightsca.org/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'hca', name: 'Health Consumer Alliance',
    description: 'Free help with health coverage, access, and consumer problems through a statewide network of legal-service organizations.',
    categories: ['Legal assistance', 'Benefits navigation', 'Advocacy'],
    counties: all, ages: ['All ages'], languages: ['English', 'Spanish', 'Other languages'], delivery: ['phone', 'virtual'],
    cost: 'free', eligibility: 'Call or use the official site to confirm service scope and local partner.',
    url: 'https://healthconsumer.org/', sourceUrl: 'https://healthconsumer.org/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'family-voices', name: 'Family Voices of California',
    description: 'Family-led statewide education, policy, and leadership resources for families of children and youth with special health care needs.',
    categories: ['Family support', 'Advocacy', 'Youth leadership', 'Care coordination'],
    counties: all, ages: ['Children and youth', 'Transition age'], languages: ['English', 'Spanish'], delivery: ['virtual'],
    cost: 'free', eligibility: 'Program availability varies; confirm on the official site.',
    url: 'https://familyvoicesofca.org/', sourceUrl: 'https://familyvoicesofca.org/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'frcnca', name: 'Family Resource Centers Network of California',
    description: 'Directory and network of family resource centers that support families of children with disabilities.',
    categories: ['Family support', 'Benefits navigation', 'Education', 'Early childhood'],
    counties: all, ages: ['Children and youth'], languages: ['English', 'Spanish', 'Other languages'], delivery: ['directory', 'phone', 'in-person', 'virtual'],
    cost: 'free', eligibility: 'Local center services and languages vary.',
    url: 'https://frcnca.org/', sourceUrl: 'https://frcnca.org/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'cde-special-ed', name: 'California special-education resources',
    description: 'Official CDE entry point for special education, IEP resources, complaints, and procedural information.',
    categories: ['Education', 'School health', 'Transition to adulthood'],
    counties: all, ages: ['School age', 'Transition age'], languages: ['English', 'Spanish'], delivery: ['virtual', 'directory'],
    cost: 'free', eligibility: 'School eligibility and services are determined through applicable education processes.',
    url: 'https://www.cde.ca.gov/sp/se/', sourceUrl: 'https://www.cde.ca.gov/sp/se/', verified: '2026-07-18', statewide: true
  },
  {
    id: 'medical-baseline', name: 'CPUC Medical Baseline information',
    description: 'Official overview and utility links for California Medical Baseline programs.',
    categories: ['Emergency preparedness', 'Utility assistance'],
    counties: all, ages: ['All ages'], languages: ['English', 'Spanish'], delivery: ['virtual', 'directory'],
    cost: 'free', eligibility: 'Eligibility and certification use current utility rules. Enrollment does not guarantee uninterrupted power.',
    url: 'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/medical-baseline',
    sourceUrl: 'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/medical-baseline', verified: '2026-07-18', statewide: true
  },
  {
    id: 'cal-oes-afn', name: 'Cal OES Access and Functional Needs',
    description: 'State emergency-preparedness information focused on people with access and functional needs.',
    categories: ['Emergency preparedness'], counties: all, ages: ['All ages'], languages: ['English'],
    delivery: ['virtual'], cost: 'free', eligibility: 'Public information; local alerts and response programs remain county- or utility-specific.',
    url: 'https://www.caloes.ca.gov/office-of-the-director/policy-administration/access-functional-needs/',
    sourceUrl: 'https://www.caloes.ca.gov/office-of-the-director/policy-administration/access-functional-needs/', verified: '2026-07-18', statewide: true
  }
];

export const resourceCategories = Array.from(new Set(resources.flatMap((resource) => resource.categories))).sort();
