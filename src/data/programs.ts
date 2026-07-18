import type { Program, Source } from './models';

const accessed = '2026-07-18';

const sources = {
  kidsTeens: {
    title: 'Medi-Cal for Kids & Teens', publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/services/Medi-Cal-For-Kids-and-Teens/Pages/home.aspx', accessed
  },
  managedCare: {
    title: 'Medi-Cal Managed Care', publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/services/Pages/Medi-CalManagedCare.aspx', accessed
  },
  hearings: {
    title: 'Medi-Cal Fair Hearing', publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/services/medi-cal/Pages/Medi-CalFairHearing.aspx', accessed
  },
  ccs: {
    title: "California Children's Services", publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/services/california-childrens-services/', accessed
  },
  ccsOffices: {
    title: 'County CCS offices', publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/services/california-childrens-services/county-offices-for-california-childrens-services/', accessed
  },
  wcm: {
    title: 'CCS Whole Child Model', publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/services/california-childrens-services/california-childrens-services-whole-child-model/', accessed
  },
  hcba: {
    title: 'Home and Community-Based Alternatives Waiver', publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/services/long-term-care-alternatives-home-and-community-based-service-options/home-and-community-based-alternatives-waiver-2/', accessed
  },
  regionalCenters: {
    title: 'Regional Centers', publisher: 'California Department of Developmental Services',
    url: 'https://www.dds.ca.gov/rc/', accessed
  },
  earlyStart: {
    title: 'Early Start', publisher: 'California Department of Developmental Services',
    url: 'https://www.dds.ca.gov/services/early-start/', accessed
  },
  sdp: {
    title: 'Self-Determination Program', publisher: 'California Department of Developmental Services',
    url: 'https://www.dds.ca.gov/initiatives/sdp/', accessed
  },
  ddsAppeals: {
    title: 'Appeals, complaints and comments', publisher: 'California Department of Developmental Services',
    url: 'https://www.dds.ca.gov/general/appeals-complaints-comments/', accessed
  },
  ihss: {
    title: 'In-Home Supportive Services', publisher: 'California Department of Social Services',
    url: 'https://www.cdss.ca.gov/in-home-supportive-services', accessed
  },
  ihssOffices: {
    title: 'County IHSS offices', publisher: 'California Department of Social Services',
    url: 'https://www.cdss.ca.gov/inforesources/county-ihss-offices', accessed
  },
  stateHearings: {
    title: 'State Hearings Division', publisher: 'California Department of Social Services',
    url: 'https://www.cdss.ca.gov/inforesources/state-hearings', accessed
  },
  specialEd: {
    title: 'Special Education', publisher: 'California Department of Education',
    url: 'https://www.cde.ca.gov/sp/se/', accessed
  },
  safeguards: {
    title: 'Procedural safeguards and referrals', publisher: 'California Department of Education',
    url: 'https://www.cde.ca.gov/sp/se/qa/pseng.asp', accessed
  },
  palliative: {
    title: 'Palliative-care policies', publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/providers-partners/palliative-care-policies/', accessed
  },
  hospice: {
    title: 'Concurrent care for children in Medicaid and CHIP', publisher: 'Centers for Medicare & Medicaid Services',
    url: 'https://www.medicaid.gov/federal-policy-guidance/downloads/smd10018.pdf', accessed
  },
  partners: {
    title: 'Partners for Children program status', publisher: 'California Department of Health Care Services',
    url: 'https://www.dhcs.ca.gov/services/partners-for-children/', accessed
  },
  baseline: {
    title: 'Medical Baseline Allowance', publisher: 'California Public Utilities Commission',
    url: 'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/medical-baseline-allowance', accessed
  },
  preparedness: {
    title: 'Individual and family preparedness', publisher: "California Governor's Office of Emergency Services",
    url: 'https://www.caloes.ca.gov/wp-content/uploads/Preparedness/Documents/Cal_OES_Family_Readiness_GuideENG.pdf', accessed
  },
  ssi: {
    title: 'SSI for children and age-18 redetermination', publisher: 'Social Security Administration',
    url: 'https://www.ssa.gov/ssi/text-child-ussi.htm', accessed
  },
  decisionMaking: {
    title: 'Conservatorship and alternatives', publisher: 'California Department of Developmental Services',
    url: 'https://www.dds.ca.gov/individuals-and-families/conservatorship/', accessed
  }
} satisfies Record<string, Source>;

const common = {
  contentOwner: 'Unassigned — appoint a California subject-matter owner before launch',
  lastReviewed: accessed,
  nextReview: '2026-10-18',
  reviewState: 'draft-expert-review' as const
};

export const programs: Program[] = [
  {
    ...common,
    slug: 'medi-cal-kids', title: 'Medi-Cal for children', shortTitle: 'Medi-Cal',
    question: 'How can I get health coverage and medically necessary services?',
    summary: 'Medi-Cal is California’s Medicaid program. Children may receive coverage through a managed-care plan or fee-for-service Medi-Cal, and the pathway affects who authorizes care and where an appeal begins.',
    why: ['Medi-Cal for Kids & Teens is California’s name for the federal EPSDT benefit.', 'A request may involve the health plan, DHCS, CCS, a county, or more than one system.', 'Private insurance and Medi-Cal can coordinate; families should not assume one replaces the other.'],
    mayQualify: ['Eligibility depends on current Medi-Cal rules and the child’s circumstances.', 'Some disability-related pathways use rules different from income-only enrollment.', 'Coverage does not itself guarantee that every requested service will be authorized.'],
    administeredBy: ['DHCS oversees Medi-Cal.', 'Managed-care plans administer most covered services for their members.', 'Counties and other programs may handle enrollment or specific service pathways.'],
    firstSteps: ['Confirm whether coverage is managed care or fee-for-service.', 'Ask the treating clinician to describe the requested service and medical need in writing.', 'Send the request to the responsible plan or program and keep proof of submission.'],
    documents: ['Current plan card or eligibility notice', 'Prescription or order', 'Letter of medical necessity', 'Relevant evaluations and prior treatment history', 'A dated communication log'],
    assessment: ['Describe function, safety, supervision, and care needs across a typical day and night.', 'Use specific examples without exaggerating.', 'Ask how the reviewer will measure medical necessity and request the criteria in writing.'],
    afterApplying: ['Track the date, recipient, and confirmation number.', 'Ask for any decision in writing.', 'If more information is requested, confirm the due date shown by the plan or agency.'],
    services: ['Preventive and medically necessary care for eligible children', 'Home health and nursing when coverage requirements are met', 'Therapies, equipment, supplies, transportation, and care coordination when covered and authorized'],
    differences: ['Managed-care plan networks and processes differ.', 'CCS and Whole Child Model responsibilities vary by county and enrollment.', 'Local availability can affect access even after authorization.'],
    barriers: ['Unclear responsibility between programs', 'Network or vendor shortages', 'Requests closed without a clear written decision', 'Authorized care that cannot be staffed'],
    afterDenial: ['Read the entire notice and identify the issuing entity.', 'Do not rely on this site to calculate a deadline; act promptly and use the deadline printed on the notice.', 'Use the Denials hub to find the matching pathway and official help.'],
    help: [{ label: 'Medi-Cal for Kids & Teens', url: sources.kidsTeens.url }, { label: 'Health Consumer Alliance', url: 'https://healthconsumer.org/' }],
    related: ['ccs', 'hcba-wpcs', 'equipment-supplies-therapies', 'care-at-home'],
    sources: [sources.kidsTeens, sources.managedCare, sources.hearings]
  },
  {
    ...common,
    slug: 'ccs', title: "California Children's Services", shortTitle: 'CCS',
    question: 'Could CCS help coordinate or authorize specialty care?',
    summary: 'CCS is a state-and-county program with medical eligibility, care coordination, authorization, and specialty-provider roles. It is not simply another insurance plan.',
    why: ['CCS may be involved in specialty care for eligible conditions.', 'The Whole Child Model changes how CCS services are delivered for some Medi-Cal managed-care members in participating counties.', 'The county office or plan should explain who is responsible for a request.'],
    mayQualify: ['CCS uses medical, residential, and financial or program-status rules.', 'A diagnosis alone does not establish eligibility.', 'Confirm current criteria with the county CCS office.'],
    administeredBy: ['DHCS oversees CCS statewide.', 'County CCS programs administer classic CCS functions.', 'In Whole Child Model counties, participating Medi-Cal plans coordinate covered CCS services for enrolled members.'],
    firstSteps: ['Use the official county directory to find the child’s CCS office.', 'Ask whether the child is in classic CCS or the Whole Child Model.', 'Submit the referral or application through the office’s current process.'],
    documents: ['Referral or application', 'Specialty records and diagnostic information', 'Insurance and Medi-Cal information', 'Requested service or authorization documents'],
    assessment: ['Ask which eligibility or authorization question is being reviewed.', 'Keep the Service Authorization Request number when one exists.', 'Confirm whether a CCS-approved provider or center is required.'],
    afterApplying: ['Ask who is assigned and how to check status.', 'Request written notice of eligibility and service decisions.', 'Coordinate the CCS response with the health plan and private insurance.'],
    services: ['Diagnostic and treatment services within CCS rules', 'Case management and specialty-care coordination', 'Medical Therapy Program services for eligible children'],
    differences: ['Classic CCS and Whole Child Model arrangements differ.', 'County processes and contact routes differ.', 'Provider approval and network rules may affect the pathway.'],
    barriers: ['Unclear plan-versus-county responsibility', 'Authorization or provider delays', 'Transition planning begun too late'],
    afterDenial: ['Identify whether the notice came from the county CCS program, DHCS, or a managed-care plan.', 'Use the instructions and deadline printed on the notice.', 'Seek California legal or benefits-navigation help promptly if the pathway is unclear.'],
    help: [{ label: 'County CCS office directory', url: sources.ccsOffices.url }, { label: 'CCS Whole Child Model', url: sources.wcm.url }],
    related: ['medi-cal-kids', 'equipment-supplies-therapies', 'life-transitions'],
    sources: [sources.ccs, sources.ccsOffices, sources.wcm]
  },
  {
    ...common,
    slug: 'hcba-wpcs', title: 'HCBA Waiver and Waiver Personal Care Services', shortTitle: 'HCBA & WPCS',
    question: 'Could a waiver help my child live safely at home?',
    summary: 'The HCBA Waiver serves people at risk of institutional placement who meet current program requirements. Waiver agencies provide care management, and WPCS may be part of an approved plan for enrolled participants.',
    why: ['HCBA adds care management and waiver services to Medi-Cal State Plan services.', 'Application routes differ by ZIP code and whether a person is at home or in a facility.', 'Enrollment capacity and waiting-list information can change and should be checked on the DHCS page.'],
    mayQualify: ['Applicants must meet current waiver eligibility and institutional level-of-care requirements.', 'The care-management assessment determines individual needs.', 'This site does not determine waiver eligibility.'],
    administeredBy: ['DHCS oversees the waiver.', 'A designated Waiver Agency handles applications and care management in its service area.', 'DHCS provides the application route for areas without a local Waiver Agency.'],
    firstSteps: ['Open the current DHCS HCBA page.', 'Use the official service-area information to identify the correct application route for the ZIP code.', 'Ask for the current application instructions and keep proof of submission.'],
    documents: ['Medi-Cal status information', 'Current care plan and medication list', 'Recent medical records relevant to level of care', 'Current IHSS, nursing, and other service authorizations', 'A 24-hour care-needs description'],
    assessment: ['Describe both authorized and actually staffed care.', 'Explain safety risks, night care, backup plans, and caregiver availability.', 'Ask for a copy of the assessment and proposed Plan of Treatment when available.'],
    afterApplying: ['Confirm the application date and responsible Waiver Agency.', 'Request written status information.', 'Document changes in health, discharge plans, or service availability while waiting.'],
    services: ['Care management', 'Waiver services listed in the current approved waiver', 'WPCS when authorized in an enrolled participant’s plan'],
    differences: ['Waiver Agency service areas are location-specific.', 'Needs and authorized services are individualized.', 'HCBA, IHSS, EPSDT, Regional Center, and plan services can interact but are not interchangeable.'],
    barriers: ['Capacity or waiting-list delays', 'Wrong application destination', 'Incomplete picture of night care or unstaffed services', 'Coordination gaps across programs'],
    afterDenial: ['Identify whether the decision came from DHCS or a Waiver Agency and preserve the full notice.', 'Follow the official appeal directions on the notice and act promptly.', 'Use a benefits advocate or legal-aid organization for individualized advice.'],
    help: [{ label: 'Official HCBA page, agency list, and dashboard', url: sources.hcba.url }, { label: 'Disability Rights California', url: 'https://www.disabilityrightsca.org/' }],
    related: ['medi-cal-kids', 'ihss', 'care-at-home'],
    sources: [sources.hcba]
  },
  {
    ...common,
    slug: 'regional-centers', title: 'Regional Centers and developmental services', shortTitle: 'Regional Centers',
    question: 'How do I request developmental services or Early Start?',
    summary: 'California’s nonprofit Regional Centers coordinate developmental services under state law and contracts with DDS. Early Start serves eligible infants and toddlers; later eligibility and services use different rules.',
    why: ['The correct Regional Center depends on where the family lives.', 'Early Start, Regional Center eligibility after Early Start, and individual service decisions are separate questions.', 'Services are planned through an IFSP, IPP, or Self-Determination process as applicable.'],
    mayQualify: ['Early Start and post–Early Start eligibility use different criteria.', 'Program definitions are not the same as Medi-Cal, CCS, IHSS, or school eligibility.', 'Ask for a written eligibility decision.'],
    administeredBy: ['DDS oversees the statewide system.', 'Twenty-one Regional Centers coordinate local intake and services.', 'Local education agencies also participate in early-intervention transitions.'],
    firstSteps: ['Use the DDS locator to identify the correct Regional Center.', 'Request intake or a service in writing.', 'Ask what evaluations and timelines the center will use; rely on current official notices, not this site, for legal deadlines.'],
    documents: ['Developmental and medical evaluations', 'School or Early Start plans', 'Current service schedule', 'A family statement describing priorities, routines, and unmet needs'],
    assessment: ['Connect the request to the person’s needs, goals, health, safety, and community participation.', 'Document generic resources already explored when relevant.', 'Ask for interpreter and accessible-format support if needed.'],
    afterApplying: ['Participate in the IFSP or IPP meeting.', 'Review the written plan before agreeing.', 'Request a written Notice of Action when a requested service is denied, reduced, or ended.'],
    services: ['Service coordination', 'Early intervention for eligible infants and toddlers', 'Services identified through an IPP', 'Self-Determination Program participation for eligible consumers'],
    differences: ['Regional Center catchment areas can split a county.', 'Vendor availability and local implementation vary.', 'School and health-plan responsibilities remain separate.'],
    barriers: ['Verbal decisions without a Notice of Action', 'Generic-resource disputes', 'Translation or meeting-access barriers', 'Insufficient transition planning'],
    afterDenial: ['Ask for the Notice of Action and the records relied upon.', 'Read the appeal options and deadlines on the notice.', 'Contact the DDS ombudsperson or a qualified advocate when needed.'],
    help: [{ label: 'Find a Regional Center', url: sources.regionalCenters.url }, { label: 'DDS appeals and complaints', url: sources.ddsAppeals.url }],
    related: ['ihss', 'school-health', 'life-transitions'],
    sources: [sources.regionalCenters, sources.earlyStart, sources.sdp, sources.ddsAppeals]
  },
  {
    ...common,
    slug: 'ihss', title: 'IHSS for children', shortTitle: 'IHSS',
    question: 'Can IHSS support care at home or a parent provider?',
    summary: 'IHSS is a county-administered program that may authorize specific in-home tasks for eligible people, including children. The county assesses the individual need for covered services.',
    why: ['Potentially relevant categories include personal care, paramedical services, and protective supervision when current rules are met.', 'Parent-provider rules are specific and should be confirmed with the county.', 'IHSS hours are not the same as nursing, respite, school services, or WPCS.'],
    mayQualify: ['Eligibility and service hours are individually assessed.', 'Age-appropriate parental responsibility is considered in assessments for children.', 'The presence of medical complexity does not guarantee a specific service or number of hours.'],
    administeredBy: ['CDSS sets statewide policy.', 'County social services agencies take applications and conduct assessments.', 'The State Hearings Division handles appeals.'],
    firstSteps: ['Contact the county IHSS office to apply.', 'Ask which health-care certification and task forms are current.', 'Prepare a task-by-task description of what help is needed and why.'],
    documents: ['Application and current county forms', 'Health-care certification', 'Paramedical-services documentation when relevant', 'Daily care log and school schedule', 'Current nursing, WPCS, or other service authorizations'],
    assessment: ['Describe each task, frequency, duration, and safety need.', 'Explain what is age-typical versus disability-related.', 'Do not count the same task twice across programs; explain how services coordinate.'],
    afterApplying: ['Attend the home assessment and keep notes.', 'Review the Notice of Action and authorized task breakdown.', 'Request reassessment when needs materially change.'],
    services: ['Covered domestic and related services when applicable', 'Personal care', 'Paramedical services with required documentation', 'Protective supervision when current criteria are met'],
    differences: ['County contact and assessment practices vary.', 'Parent-provider qualification is distinct from the child’s service authorization.', 'WPCS and IHSS use different authorities and assessment processes.'],
    barriers: ['Needs described only by diagnosis rather than tasks', 'Missing paramedical documentation', 'School or nursing hours not clearly reconciled', 'Verbal advice treated as a formal decision'],
    afterDenial: ['Use the Notice of Action to identify what changed and the stated reason.', 'Act promptly and follow the State Hearing instructions on the notice.', 'Ask for the assessment notes and task calculations.'],
    help: [{ label: 'County IHSS office directory', url: sources.ihssOffices.url }, { label: 'State Hearings Division', url: sources.stateHearings.url }],
    related: ['hcba-wpcs', 'care-at-home', 'regional-centers'],
    sources: [sources.ihss, sources.ihssOffices, sources.stateHearings]
  },
  {
    ...common,
    slug: 'care-at-home', title: 'Care at home', shortTitle: 'Care at home',
    question: 'How can I build a safer and more reliable home-care plan?',
    summary: 'Home support can come from several programs at once: nursing, home health, personal care, respite, care management, family caregiving, and home modifications may each have a different payer and authorization path.',
    why: ['An authorization is not the same as a staffed shift.', 'A discharge plan should identify the responsible program, provider, backup plan, and escalation route.', 'Families can document unmet authorized care without blaming individual workers.'],
    mayQualify: ['Each service uses its own eligibility and medical-necessity rules.', 'The same task generally should not be billed twice.', 'A child may qualify for one pathway and not another.'],
    administeredBy: ['Medi-Cal plans or fee-for-service pathways', 'HCBA Waiver Agencies', 'Counties through IHSS', 'Regional Centers for eligible developmental services', 'Private insurers and local providers'],
    firstSteps: ['List the care needed across a full week.', 'Match each task to a possible responsible program.', 'Ask each payer for a written authorization or denial and a named escalation route.'],
    documents: ['24-hour care schedule', 'Authorized-versus-staffed log', 'Discharge readiness checklist', 'Training and competency needs', 'Emergency backup plan'],
    assessment: ['Include night care, two-person tasks, travel time, and caregiver sleep.', 'Separate skilled nursing from personal care and respite.', 'Describe what happens when a shift is unstaffed.'],
    afterApplying: ['Keep agency outreach and staffing responses.', 'Report unstaffed authorized hours to the responsible plan or program.', 'Ask the discharge team for a documented contingency plan.'],
    services: ['Private-duty or shift nursing when covered', 'Intermittent home health', 'Personal care and WPCS', 'Respite and care management', 'Home modifications through applicable programs'],
    differences: ['Availability varies by region and workforce.', 'Coverage definitions differ across payers.', 'Rural and cross-county service areas may require additional escalation.'],
    barriers: ['Authorized but unstaffed hours', 'Fragmented care coordination', 'Unsafe assumptions about unpaid family availability', 'No backup vendor or equipment plan'],
    afterDenial: ['Identify the payer or program responsible for the specific service.', 'Request a written decision rather than relying on a vendor’s availability statement.', 'Use the matching denial pathway.'],
    help: [{ label: 'Medi-Cal for Kids & Teens', url: sources.kidsTeens.url }, { label: 'HCBA Waiver', url: sources.hcba.url }],
    related: ['medi-cal-kids', 'hcba-wpcs', 'ihss', 'equipment-supplies-therapies'],
    sources: [sources.kidsTeens, sources.hcba, sources.ihss]
  },
  {
    ...common,
    slug: 'equipment-supplies-therapies', title: 'Equipment, supplies, and therapies', shortTitle: 'Equipment & therapies',
    question: 'How do I make a clearer request and respond to a vendor or authorization problem?',
    summary: 'A strong request identifies the item or therapy, the functional or medical need, alternatives considered, and the responsible payer. Vendor availability and coverage are separate questions.',
    why: ['Equipment, repairs, replacement, supplies, and therapy may follow different rules.', 'School responsibility and health coverage can overlap without being identical.', 'A vendor saying “we cannot provide it” is not always a formal coverage decision.'],
    mayQualify: ['Coverage depends on the program, benefit, medical necessity, and authorization rules.', 'Use the payer’s current criteria.', 'Do not assume a product category is categorically covered or excluded without a written response.'],
    administeredBy: ['Medi-Cal plans or fee-for-service Medi-Cal', 'CCS or Whole Child Model pathways', 'Private insurance', 'School districts for education-related access', 'Regional Centers or waiver programs in limited circumstances'],
    firstSteps: ['Identify the item, repair, supply quantity, or therapy being requested.', 'Ask the clinician for a detailed order and letter.', 'Confirm the responsible payer and in-network or approved vendors.'],
    documents: ['Prescription or order', 'Letter of medical necessity', 'Therapy evaluation or equipment trial', 'Growth, safety, repair, or failure documentation', 'Prior authorization and vendor correspondence'],
    assessment: ['Describe function, positioning, skin, breathing, feeding, communication, transport, and caregiver safety as relevant.', 'Explain why lower-cost or previously tried alternatives are insufficient.', 'Include home and school environments when they differ.'],
    afterApplying: ['Track authorization and vendor steps separately.', 'Ask for written reasons for any denial or delay.', 'Escalate urgent repair or supply interruptions to the responsible plan.'],
    services: ['Durable medical equipment', 'Enteral, respiratory, incontinence, and other covered supplies', 'Repair and replacement', 'Covered therapies and assistive technology'],
    differences: ['Plan networks and vendor contracts differ.', 'CCS involvement varies.', 'School-provided equipment is tied to education access and may not replace home equipment.'],
    barriers: ['Vendor and payer pointing to each other', 'Incomplete repair documentation', 'Recurring supply quantity mismatches', 'No temporary equipment plan'],
    afterDenial: ['Ask who made the coverage decision and obtain it in writing.', 'Request the criteria and records used.', 'Use the plan, CCS, school, or private-insurance appeal pathway that matches the notice.'],
    help: [{ label: 'Medi-Cal for Kids & Teens', url: sources.kidsTeens.url }, { label: 'CCS', url: sources.ccs.url }],
    related: ['medi-cal-kids', 'ccs', 'school-health'],
    sources: [sources.kidsTeens, sources.ccs, sources.specialEd]
  },
  {
    ...common,
    slug: 'school-health', title: 'Education and school health', shortTitle: 'School support',
    question: 'What supports can help my child attend and participate in school?',
    summary: 'Special education, Section 504, school nursing, specialized physical health-care services, related services, and temporary home or hospital instruction are different pathways with different purposes.',
    why: ['An IEP is based on special-education eligibility and educational need.', 'A 504 plan addresses disability-related access and accommodations.', 'A health plan at school should connect daily and emergency care to safe participation.'],
    mayQualify: ['Eligibility is determined through the applicable education process.', 'A medical diagnosis does not automatically establish special-education eligibility.', 'Temporary disability services should not be treated as interchangeable with special education.'],
    administeredBy: ['Local education agencies and school districts', 'California Department of Education oversight', 'Federal IDEA and Section 504 requirements'],
    firstSteps: ['Make a dated written request describing the concern and requested evaluation or meeting.', 'Share relevant health orders and emergency plans through the school’s secure process.', 'Ask who coordinates nursing and specialized health-care services.'],
    documents: ['Parent concerns and goals', 'Relevant evaluations', 'Medication, seizure, respiratory, feeding, or emergency orders', 'Attendance and access information', 'Assistive-technology or transportation needs'],
    assessment: ['Describe participation across the full school day.', 'Include transportation, field trips, extracurriculars, and absences.', 'Plan for staff training and backup coverage.'],
    afterApplying: ['Review proposed assessments and plans.', 'Ask how progress and health-plan implementation will be monitored.', 'Keep written notices and meeting records.'],
    services: ['Special education and related services', '504 accommodations', 'School nursing and specialized physical health-care services', 'Assistive technology and transportation', 'Home and hospital instruction when applicable'],
    differences: ['District staffing models differ, but local practice does not replace governing rights.', 'Health-care coverage and school responsibility may address different purposes.', 'Transition planning should connect education, health, and adult systems.'],
    barriers: ['No plan for nurse absence', 'Health orders not translated into classroom access', 'Home instruction used without a return plan', 'Medical and educational teams communicating only through the family'],
    afterDenial: ['Ask for prior written notice or the district’s written decision.', 'Review procedural safeguards and dispute-resolution options.', 'Contact a Parent Training and Information Center or qualified education advocate.'],
    help: [{ label: 'CDE Special Education', url: sources.specialEd.url }, { label: 'CDE procedural safeguards', url: sources.safeguards.url }],
    related: ['regional-centers', 'equipment-supplies-therapies', 'life-transitions'],
    sources: [sources.specialEd, sources.safeguards]
  },
  {
    ...common,
    slug: 'pediatric-palliative-hospice', title: 'Pediatric palliative care and hospice', shortTitle: 'Palliative & hospice care',
    question: 'How do I ask for added symptom, communication, and family support?',
    summary: 'Pediatric palliative care can be provided alongside disease-directed treatment. Hospice is a distinct benefit and model; eligible children in Medicaid may receive concurrent hospice and curative treatment under federal rules.',
    why: ['Palliative care supports symptoms, communication, decisions, coordination, and quality of life.', 'Hospice eligibility and benefit rules are separate from receiving palliative care.', 'Service availability and Medi-Cal plan pathways vary across California.'],
    mayQualify: ['Referral criteria vary by program and health plan.', 'Families can ask the child’s clinical team or health plan what pediatric options are available.', 'This site does not make hospice eligibility determinations.'],
    administeredBy: ['Health systems and community palliative-care programs', 'Medi-Cal managed-care plans under applicable pathways', 'Medicare- or Medicaid-certified hospice agencies'],
    firstSteps: ['Ask the clinical team for pediatric palliative-care options.', 'Ask the health plan what home-based palliative services are covered and how to request them.', 'For hospice questions, request a pediatric-informed hospice evaluation without assuming enrollment is required.'],
    documents: ['Current goals and priorities', 'Symptom and care-coordination needs', 'Existing home services', 'Names of the clinicians who should communicate'],
    assessment: ['Center the child’s comfort, function, relationships, and family priorities.', 'Ask which services occur at home and who is available after hours.', 'Clarify which team remains responsible for medications, equipment, and emergencies.'],
    afterApplying: ['Confirm referral receipt and expected contact.', 'Ask for written plan or coverage decisions.', 'If no pediatric provider is available, ask the plan how it will arrange an appropriate service.'],
    services: ['Symptom support', 'Communication and care planning', 'Psychosocial and spiritual support', 'Hospice interdisciplinary services for eligible enrollees'],
    differences: ['Availability differs by county and plan.', 'Palliative care and hospice are not interchangeable.', 'The former Partners for Children waiver should not be described as a currently enrolling pathway without current verification.'],
    barriers: ['Palliative care confused with stopping treatment', 'No pediatric-capable home provider', 'Unclear medication or after-hours ownership'],
    afterDenial: ['Ask the plan or provider to state what was denied and why.', 'Use the Medi-Cal or private-insurance appeal route shown on the notice.', 'Request assistance from a benefits advocate when access responsibility is unclear.'],
    help: [{ label: 'DHCS palliative-care information', url: sources.palliative.url }, { label: 'Federal Medicaid hospice benefit', url: sources.hospice.url }],
    related: ['medi-cal-kids', 'care-at-home', 'emergency-preparedness'],
    sources: [sources.palliative, sources.hospice, sources.partners]
  },
  {
    ...common,
    slug: 'emergency-preparedness', title: 'Emergency and disaster preparedness', shortTitle: 'Emergency planning',
    question: 'How do I prepare for wildfire, earthquake, heat, flood, or a power shutoff?',
    summary: 'A practical plan connects equipment, backup power, medications, formula, oxygen, transportation, communication, school, utility, and county alerts. Medical Baseline may provide benefits but does not guarantee uninterrupted power.',
    why: ['Different hazards require different shelter and evacuation choices.', 'Power-dependent care needs more than a single battery.', 'Plans should work when cell service, roads, refrigeration, or a usual caregiver are unavailable.'],
    mayQualify: ['Utility Medical Baseline programs use current utility-specific eligibility and certification rules.', 'County registries and alert programs differ.', 'Emergency services do not replace routine backup planning.'],
    administeredBy: ['Utilities and CPUC oversight for Medical Baseline', 'County and local emergency-management agencies', 'Cal OES and public-safety partners', 'Schools and care providers for their own emergency plans'],
    firstSteps: ['Enroll in county emergency alerts and utility outage alerts.', 'Ask the utility about Medical Baseline and current backup-power programs.', 'Create a one-page emergency information sheet and test an evacuation route.'],
    documents: ['Emergency information form', 'Medication and supply list', 'Equipment power requirements and battery runtime', 'Utility and vendor contacts', 'Evacuation and transportation plan'],
    assessment: ['Calculate power needs with the equipment manufacturer or qualified professional.', 'Plan for heat, smoke, refrigeration, oxygen, feeding, suction, and communication as relevant.', 'Identify at least two backup contacts and destinations.'],
    afterApplying: ['Confirm utility enrollment and renewal requirements.', 'Update plans after equipment, address, or caregiver changes.', 'Practice the plan with school and home-care teams.'],
    services: ['Medical Baseline allowance when eligible', 'Utility notifications and available resiliency programs', 'County alerts and accessible emergency information', 'School emergency planning'],
    differences: ['Utilities and counties offer different programs.', 'Some backup resources are time-limited or availability-dependent.', 'Medical Baseline does not guarantee priority restoration or continuous electricity.'],
    barriers: ['Battery runtime assumed rather than tested', 'No plan for evacuation transportation', 'Supplies stored in only one place', 'Outdated emergency contacts'],
    afterDenial: ['Ask the utility or agency for the reason and any correction or review process.', 'Use disability or emergency-management assistance for access barriers.', 'Do not wait for an appeal before making a safe backup plan.'],
    help: [{ label: 'CPUC Medical Baseline', url: sources.baseline.url }, { label: 'Cal OES preparedness', url: sources.preparedness.url }],
    related: ['care-at-home', 'equipment-supplies-therapies', 'school-health'],
    sources: [sources.baseline, sources.preparedness]
  },
  {
    ...common,
    slug: 'life-transitions', title: 'Life transitions', shortTitle: 'Life transitions',
    question: 'What should we prepare for as systems change with age?',
    summary: 'Transitions happen at different ages in Early Start, school, decision-making, SSI, CCS, and health care. The safest approach is to start early, verify the rule for each program, and assign a named person to each next step.',
    why: ['Age cutoffs and planning requirements differ by program.', 'Turning 18 changes legal decision-making unless another valid arrangement applies.', 'SSI applies an adult disability standard in its age-18 redetermination process.'],
    mayQualify: ['Ongoing eligibility must be confirmed separately in each program.', 'Regional Center services, Medi-Cal, SSI, school services, and CCS use different rules.', 'Alternatives to conservatorship should be considered individually with qualified advice.'],
    administeredBy: ['Regional Centers and DDS', 'Schools and CDE', 'SSA', 'DHCS, CCS, and health plans', 'California courts for legal decision-making processes'],
    firstSteps: ['Create a transition list by program, not one master cutoff.', 'Ask each program to confirm its current age rules and next review in writing.', 'Begin adult health-care and decision-support planning before an urgent transfer.'],
    documents: ['Current IFSP, IEP, IPP, and health-care plans', 'Benefits and eligibility notices', 'Decision-support preferences', 'Adult-provider referral status', 'Employment and community-participation goals'],
    assessment: ['Center the young person’s preferences, communication, autonomy, relationships, and goals.', 'Use supported decision-making where appropriate.', 'Plan for medication, equipment, nursing, benefits, and emergency continuity.'],
    afterApplying: ['Track each referral and redetermination separately.', 'Request accessible information for the young person.', 'Escalate gaps before the prior service ends.'],
    services: ['Early Start-to-school transition', 'Education transition planning', 'Adult health-care transfer', 'SSI redetermination', 'Supported decision-making and other legal options', 'Adult Regional Center and Medi-Cal services'],
    differences: ['Programs use different ages and definitions.', 'Diploma, certificate, and school-completion pathways affect timing differently.', 'Adult-provider availability varies by region and specialty.'],
    barriers: ['All transitions treated as one event', 'Young person excluded from planning', 'No adult clinician accepting the transfer', 'Benefits or authorizations allowed to lapse'],
    afterDenial: ['Identify which program made the decision and use its specific notice.', 'Do not assume one appeal protects services in another system.', 'Seek qualified benefits or legal help for age-of-majority decisions.'],
    help: [{ label: 'SSA child SSI and age-18 review', url: sources.ssi.url }, { label: 'California Courts: alternatives to conservatorship', url: sources.decisionMaking.url }],
    related: ['regional-centers', 'school-health', 'ccs', 'medi-cal-kids'],
    sources: [sources.earlyStart, sources.specialEd, sources.ssi, sources.decisionMaking, sources.ccs]
  }
];

export const programBySlug = Object.fromEntries(programs.map((program) => [program.slug, program])) as Record<string, Program>;
