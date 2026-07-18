import type { DenialPath, Source } from './models';

const accessed = '2026-07-18';
const source = (title: string, publisher: string, url: string): Source => ({ title, publisher, url, accessed });
const commonSteps = [
  'Keep the full notice and envelope or electronic delivery record.',
  'Write down the date you received it; do not rely on this site to calculate a deadline.',
  'Identify the action, stated reason, effective date, and appeal instructions.',
  'Request the criteria and records used to make the decision.',
  'Act promptly and ask a qualified advocate about continued services when that matters.'
];
const commonDocs = ['The complete notice', 'The original request', 'Relevant orders and evaluations', 'Prior authorizations or plans', 'A dated communication log'];

export const denialPaths: DenialPath[] = [
  {
    id: 'medi-cal-plan', label: 'Medi-Cal managed-care plan',
    identify: 'The notice names a Medi-Cal health plan and usually describes an adverse benefit determination or plan appeal.',
    action: 'The plan may be denying, reducing, delaying, modifying, or ending a requested covered service.',
    deadline: 'Use the deadline and instructions printed on the current notice. This site intentionally does not calculate it.',
    continuedServices: 'Continued services may be available in some situations if action is timely. Confirm the governing rule with the plan, State Hearings, or a qualified advocate.',
    immediateSteps: commonSteps, documents: commonDocs,
    records: 'Ask the plan for the clinical criteria, reviewer notes, records considered, and the complete case file available under current rules.',
    submit: 'Submit a plan appeal using the routes printed on the notice. A State Hearing may be available after the plan process in applicable cases.',
    help: [{ label: 'DHCS Medi-Cal Help', url: 'https://www.dhcs.ca.gov/medi-cal/help/' }, { label: 'Health Consumer Alliance', url: 'https://healthconsumer.org/' }],
    next: 'The plan should issue a written appeal decision. The notice should explain any next hearing or review option.',
    sources: [source('Medi-Cal Help', 'DHCS', 'https://www.dhcs.ca.gov/medi-cal/help/'), source('Medi-Cal Fair Hearing', 'DHCS', 'https://www.dhcs.ca.gov/services/medi-cal/Pages/Medi-CalFairHearing.aspx')], verified: accessed
  },
  {
    id: 'medi-cal-ffs', label: 'Fee-for-service Medi-Cal',
    identify: 'The notice comes from DHCS or a fee-for-service Medi-Cal process rather than a managed-care plan.',
    action: 'The notice states what Medi-Cal request or service is being denied, changed, or ended.',
    deadline: 'Follow the notice’s current State Hearing instructions and deadline; this site does not calculate it.',
    continuedServices: 'Ask State Hearings or a qualified advocate immediately whether continued services may apply to this specific notice.',
    immediateSteps: commonSteps, documents: commonDocs,
    records: 'Request the authorization record, medical-necessity criteria, and documents relied upon.',
    submit: 'Use the State Hearing route and submission options printed on the notice.',
    help: [{ label: 'DHCS State Hearings', url: 'https://www.dhcs.ca.gov/services/medi-cal/Pages/Medi-CalFairHearing.aspx' }, { label: 'Disability Rights California', url: 'https://www.disabilityrightsca.org/' }],
    next: 'State Hearings will provide current process information and any scheduled next step.',
    sources: [source('Medi-Cal Fair Hearing', 'DHCS', 'https://www.dhcs.ca.gov/services/medi-cal/Pages/Medi-CalFairHearing.aspx')], verified: accessed
  },
  {
    id: 'ccs', label: "California Children's Services (CCS)",
    identify: 'The notice references CCS eligibility, a Service Authorization Request, a county CCS program, DHCS, or Whole Child Model plan.',
    action: 'The decision may concern eligibility, authorization, provider, or a CCS-covered service.',
    deadline: 'The correct route depends on classic CCS, CCS-only or fee-for-service status, and Whole Child Model enrollment. Use the notice and obtain help promptly.',
    continuedServices: 'Do not assume continued services. Ask a CCS or California benefits expert to review the notice and current rule.',
    immediateSteps: commonSteps, documents: [...commonDocs, 'CCS case or Service Authorization Request number'],
    records: 'Ask for the CCS or plan record, criteria, and written explanation of responsibility.',
    submit: 'Use the grievance, appeal, or State Hearing pathway that matches the issuer and member arrangement shown on the notice.',
    help: [{ label: 'CCS grievance, appeal, and hearing information', url: 'https://www.dhcs.ca.gov/services/california-childrens-services/california-childrens-services-grievances-appeals-and-state-hearings/' }, { label: 'County CCS offices', url: 'https://www.dhcs.ca.gov/services/california-childrens-services/county-offices-for-california-childrens-services/' }],
    next: 'Confirm in writing who owns the decision: county CCS, DHCS, or the Medi-Cal plan.',
    sources: [source('CCS grievances, appeals and State Hearings', 'DHCS', 'https://www.dhcs.ca.gov/services/california-childrens-services/california-childrens-services-grievances-appeals-and-state-hearings/')], verified: accessed
  },
  {
    id: 'hcba', label: 'HCBA or a Waiver Agency',
    identify: 'The document names DHCS, HCBA, WPCS, or a local Waiver Agency.',
    action: 'It may address waiver eligibility, enrollment, a Plan of Treatment, WPCS, or another waiver service.',
    deadline: 'Use the notice’s current grievance or hearing instructions. Different problem types can use different routes.',
    continuedServices: 'Ask immediately whether continued services are available for this adverse action; do not rely on a general website statement.',
    immediateSteps: commonSteps, documents: [...commonDocs, 'Current Plan of Treatment and Waiver Agency correspondence'],
    records: 'Request the assessment, Plan of Treatment, reviewer notes, and records relied upon.',
    submit: 'Distinguish a service-quality concern, care-coordination grievance, and an adverse-action State Hearing before submitting.',
    help: [{ label: 'HCBS grievances and hearings', url: 'https://www.dhcs.ca.gov/services/home-and-community-based-services-hcbs-grievance-and-hearings/' }, { label: 'HCBA program page', url: 'https://www.dhcs.ca.gov/services/long-term-care-alternatives-home-and-community-based-service-options/home-and-community-based-alternatives-waiver-2/' }],
    next: 'The Waiver Agency or DHCS should identify the route and provide a written response or hearing information.',
    sources: [source('HCBS grievances and hearings', 'DHCS', 'https://www.dhcs.ca.gov/services/home-and-community-based-services-hcbs-grievance-and-hearings/')], verified: accessed
  },
  {
    id: 'regional-center', label: 'Regional Center',
    identify: 'The notice is a Notice of Action from a Regional Center or concerns Early Start, eligibility, or an IPP service.',
    action: 'The decision may deny eligibility or deny, reduce, or end a requested service.',
    deadline: 'Early Start and Lanterman Act matters have different processes. Follow the notice and current DDS materials.',
    continuedServices: 'Some disputes may allow services to continue if the appeal is timely. This is fact- and deadline-specific; obtain qualified review promptly.',
    immediateSteps: commonSteps, documents: [...commonDocs, 'IFSP or IPP and meeting notes'],
    records: 'Request evaluations, service records, meeting notes, and the information relied upon.',
    submit: 'Use the Early Start complaint or Lanterman appeal route that matches the notice.',
    help: [{ label: 'DDS appeals and complaints', url: 'https://www.dds.ca.gov/general/appeals-complaints-comments/' }, { label: 'Office of the Ombudsperson', url: 'https://www.dds.ca.gov/general/appeals-complaints-comments/office-of-the-ombudsperson/' }],
    next: 'Options may include an informal meeting, mediation, and hearing under the applicable process.',
    sources: [source('Appeals, complaints and comments', 'DDS', 'https://www.dds.ca.gov/general/appeals-complaints-comments/')], verified: accessed
  },
  {
    id: 'ihss', label: 'IHSS',
    identify: 'The county Notice of Action lists IHSS eligibility, service categories, or authorized hours.',
    action: 'The county may be denying, reducing, or ending recipient services or hours.',
    deadline: 'Follow the State Hearing instructions and deadline printed on the Notice of Action.',
    continuedServices: 'Ask State Hearings or a qualified IHSS advocate right away whether aid paid pending can apply to this notice.',
    immediateSteps: commonSteps, documents: [...commonDocs, 'Needs assessment, task worksheet, and current health-care forms'],
    records: 'Ask for the social worker’s assessment notes, task calculations, and county records used.',
    submit: 'Use the State Hearing route shown on the recipient Notice of Action. Provider-enrollment disputes use a different process.',
    help: [{ label: 'CDSS hearing requests', url: 'https://www.cdss.ca.gov/hearing-requests' }, { label: 'Disability Rights California', url: 'https://www.disabilityrightsca.org/' }],
    next: 'The State Hearings process will provide scheduling and next-step information.',
    sources: [source('Hearing requests', 'CDSS', 'https://www.cdss.ca.gov/hearing-requests'), source('IHSS for children', 'CDSS', 'https://www.cdss.ca.gov/ihss-for-children')], verified: accessed
  },
  {
    id: 'school', label: 'School district',
    identify: 'The document is from a school district or local education agency and concerns an IEP, 504 plan, nursing, related service, placement, or evaluation.',
    action: 'The district may be proposing or refusing an educational evaluation, service, placement, accommodation, or health support.',
    deadline: 'Complaint, mediation, due-process, and local routes differ. Use current procedural safeguards and qualified education-law advice.',
    continuedServices: 'A “stay put” rule may apply in some IDEA disputes, but it is not universal. Obtain individualized advice promptly.',
    immediateSteps: commonSteps, documents: [...commonDocs, 'Current IEP or 504 plan and prior written notice'],
    records: 'Request the student record, evaluations, service logs, health plans, and prior written notices.',
    submit: 'Choose the route that matches the issue: local resolution, CDE state complaint, mediation, or OAH due process.',
    help: [{ label: 'CDE complaint procedures', url: 'https://www.cde.ca.gov/sp/se/qa/cmplntproc.asp' }, { label: 'CDE IEP resources', url: 'https://www.cde.ca.gov/sp/se/sr/iepresources.asp' }],
    next: 'The selected process determines investigation, meeting, mediation, or hearing steps.',
    sources: [source('Special education complaint procedures', 'CDE', 'https://www.cde.ca.gov/sp/se/qa/cmplntproc.asp')], verified: accessed
  },
  {
    id: 'private-insurance', label: 'Private insurance',
    identify: 'The notice comes from an employer plan, health insurer, HMO, PPO, or utilization-review entity rather than Medi-Cal.',
    action: 'It may deny coverage, authorization, network access, or payment.',
    deadline: 'Use the notice and first identify the regulator: DMHC, California Department of Insurance, or federal ERISA rules may apply.',
    continuedServices: 'Continuation rules vary by plan and issue. Seek qualified help.',
    immediateSteps: commonSteps, documents: [...commonDocs, 'Plan Evidence of Coverage or benefit document'],
    records: 'Request the plan document, clinical criteria, reviewer identity where available, and complete appeal record.',
    submit: 'Use the internal appeal route on the notice, then the correct external review or regulator route when available.',
    help: [{ label: 'DMHC Help Center', url: 'https://www.dmhc.ca.gov/FileaComplaint.aspx' }, { label: 'California Department of Insurance', url: 'https://www.insurance.ca.gov/01-consumers/101-help/' }],
    next: 'The plan decision should explain any external review or regulator option.',
    sources: [source('File a complaint', 'California Department of Managed Health Care', 'https://www.dmhc.ca.gov/FileaComplaint.aspx'), source('Consumer help', 'California Department of Insurance', 'https://www.insurance.ca.gov/01-consumers/101-help/')], verified: accessed
  }
];
