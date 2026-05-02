export interface ServiceProcess {
  title: string;
  desc: string;
}

export interface Service {
  icon: string;
  name: string;
  subtitle: string;
  lead: string;
  features: string[];
  process: ServiceProcess[];
  tags: string[];
}

export const services: Record<string, Service> = {
  'air-ambulance': {
    icon: '✈',
    name: 'Air Ambulance Services',
    subtitle: 'Fixed-Wing & Rotary-Wing Medical Transport',
    lead: 'MediEvac operates a global fleet of ICU-equipped air ambulances, providing the highest level of critical care during transport. Whether across a city or across continents, our aircraft are staffed with specialist medical crews and equipped with advanced life support systems.',
    features: [
      'ICU-equipped fixed-wing aircraft for long-distance transport',
      'Helicopter (rotary-wing) for remote or urban emergency retrieval',
      'Intensive care physician and specialist flight nurse on every mission',
      'Ventilator, defibrillator, infusion pumps, blood gas analysis',
      'Flight clearance and overflight permits managed end-to-end',
      'Coordination with receiving hospitals before wheels-down',
      '24/7 mission dispatch — activation within 15 minutes',
      'Insurance billing and case documentation provided',
    ],
    process: [
      { title: 'Emergency Assessment', desc: "Our medical coordinator assesses the patient's clinical status, current location, and destination requirements via phone within minutes of contact." },
      { title: 'Aircraft & Crew Dispatch', desc: 'The appropriate aircraft is identified, fuelled, and the medical crew briefed. Flight permissions and slot clearances are obtained simultaneously.' },
      { title: 'Bedside Pickup', desc: "The medical team arrives at the patient's location — hospital bedside, remote site, or scene — and stabilises the patient for transport." },
      { title: 'In-Flight Critical Care', desc: 'Full ICU-level monitoring and intervention throughout the flight. The receiving hospital is briefed in real time on patient status.' },
      { title: 'Safe Handover', desc: 'The patient is transferred directly to the receiving medical team at the destination hospital, with complete clinical documentation.' },
    ],
    tags: ['Fixed Wing', 'Rotary Wing', 'ICU Equipped', 'Global', '24/7'],
  },
  'medical-repatriation': {
    icon: '🏥',
    name: 'Medical Repatriation',
    subtitle: 'International Patient Repatriation Services',
    lead: 'When a patient falls seriously ill abroad, returning home safely is both a medical and logistical challenge. MediEvac provides end-to-end management of the repatriation journey — from hospital-to-hospital, across any distance, under continuous medical supervision.',
    features: [
      'Full coordination from country of illness to home hospital',
      'Medical assessment of fitness-to-fly and mode of transport',
      'Stretcher and wheelchair arrangements on commercial flights',
      'Flight permits, customs, and immigration documentation',
      'Receiving hospital admission and bed reservation',
      'Liaison with international insurance companies',
      'Family communication and updates throughout',
      'Available for any medical condition, including ICU patients',
    ],
    process: [
      { title: 'Case Assessment', desc: "We review medical records, assess current clinical status, and determine the safest mode of repatriation — commercial flight with escort or dedicated air ambulance." },
      { title: 'Logistics Planning', desc: 'Our team handles all documentation: flight permits, airline stretcher bookings, immigration pre-clearance, and customs for medical equipment.' },
      { title: 'Receiving Hospital Coordination', desc: "We confirm admission, ensure an appropriate bed is available, and brief the receiving team on the patient's clinical status." },
      { title: 'Supervised Transport', desc: 'A physician or specialist nurse accompanies the patient throughout the journey, providing continuous medical supervision.' },
      { title: 'Handover & Documentation', desc: 'Complete clinical handover at the receiving facility, with full documentation of the transport episode.' },
    ],
    tags: ['International', 'Commercial Flight', 'Air Ambulance', 'Insurance Liaison'],
  },
  'ground-ambulance': {
    icon: '🚑',
    name: 'Ground Ambulance Transport',
    subtitle: 'Advanced & Basic Life Support Ground Transport',
    lead: 'Our Advanced Life Support (ALS) and Basic Life Support (BLS) ground ambulances provide safe, monitored patient transport for inter-hospital transfers, airport connections, and local medical emergencies — staffed by trained paramedics and nurses.',
    features: [
      'ALS ambulances with cardiac monitors, ventilators, and defibrillators',
      'BLS ambulances for stable inter-hospital and airport transfers',
      'Trained paramedics and emergency nurses on every call',
      'GPS-tracked fleet for real-time status updates',
      'Neonatal transport capability with incubator-equipped units',
      'Bariatric patient transport available',
      'Available 24/7 for scheduled and emergency transfers',
      'Coordination with sending and receiving hospitals',
    ],
    process: [
      { title: 'Request & Triage', desc: 'Call received and patient details assessed to determine the appropriate level of care — ALS or BLS — and crew composition.' },
      { title: 'Nearest Unit Dispatch', desc: 'The nearest appropriate unit is dispatched. Real-time traffic routing ensures fastest possible response.' },
      { title: 'Patient Assessment On-Site', desc: 'Crew performs full clinical assessment, stabilises the patient, and communicates with both sending and receiving teams.' },
      { title: 'Monitored Transport', desc: 'Continuous monitoring throughout the transfer. All parameters recorded in digital patient care report.' },
      { title: 'Hospital Handover', desc: 'Direct handover to receiving clinical team with verbal and written report of the transport episode.' },
    ],
    tags: ['ALS', 'BLS', 'Local', 'Inter-Hospital', 'Airport Transfers', '24/7'],
  },
  'medical-escort': {
    icon: '👨‍⚕️',
    name: 'Medical Escort Services',
    subtitle: 'Qualified Medical Professional on Commercial Flights',
    lead: 'For stable patients who are medically cleared to fly commercially but require continuous professional supervision, a MediEvac medical escort provides cost-effective, high-quality care throughout the journey — on any commercial airline, worldwide.',
    features: [
      'Physicians, specialist nurses, and paramedics available as escorts',
      'Pre-flight medical assessment and fitness-to-fly clearance',
      'In-flight monitoring of vital signs and clinical status',
      'Medication administration and management during the flight',
      'Oxygen and portable medical equipment onboard',
      'Coordination with airline special assistance teams',
      'Wheelchair and stretcher assistance at airports',
      'Documentation and handover report at destination',
    ],
    process: [
      { title: 'Clinical Assessment', desc: 'We assess medical records and current condition to confirm suitability for commercial flight and determine the level of escort required.' },
      { title: 'Escort Assignment', desc: "A qualified medical professional is assigned — physician, nurse, or paramedic — matched to the patient's clinical needs." },
      { title: 'Travel Logistics', desc: 'Airline special assistance, wheelchair or stretcher booking, and any required medical equipment are arranged.' },
      { title: 'In-Flight Care', desc: 'The escort accompanies the patient throughout the journey, monitoring vitals, managing medications, and responding to any in-flight medical events.' },
      { title: 'Destination Handover', desc: 'The escort facilitates arrival assistance, transfers the patient to ground transport, and completes a full clinical handover.' },
    ],
    tags: ['Commercial Flight', 'Physician Escort', 'Nurse Escort', 'Worldwide', 'Cost Effective'],
  },
  'organ-transport': {
    icon: '❤',
    name: 'Organ & Tissue Transport',
    subtitle: 'Time-Critical Organ Logistics',
    lead: 'Every minute counts in organ transplantation. MediEvac provides dedicated, expert logistics for cadaveric and living donor organs and tissues — from procurement hospital to transplant centre — with real-time tracking, specialist handling, and absolute reliability.',
    features: [
      'Dedicated organ transport teams with specialist training',
      'Air and ground transport coordinated seamlessly',
      'Approved organ transport containers and perfusion systems',
      'Real-time chain-of-custody tracking throughout',
      'Coordination with transplant coordinators and surgical teams',
      'Available for any organ or tissue — kidney, heart, liver, cornea',
      '24/7 availability with sub-60-minute response times',
      'Compliance with national organ transplant authority guidelines',
    ],
    process: [
      { title: 'Transplant Coordinator Notification', desc: 'MediEvac receives notification from the transplant coordinator as soon as organ viability is confirmed and the recipient is identified.' },
      { title: 'Team & Aircraft Activation', desc: 'Dedicated transport team and aircraft activated simultaneously. Ground transport at both ends pre-positioned.' },
      { title: 'Procurement Hospital Dispatch', desc: 'Team arrives at procurement hospital, receives organ in approved container, confirms integrity, and begins the transport clock.' },
      { title: 'Expedited Transport', desc: 'Organ transported via fastest possible route — air and/or ground — with real-time updates to all surgical teams.' },
      { title: 'Transplant Centre Handover', desc: 'Formal handover to transplant surgical team with documentation of cold ischaemia time and chain of custody.' },
    ],
    tags: ['Cadaveric Organs', 'Tissue', '24/7', 'Sub-60min Response', 'Chain of Custody'],
  },
  'standby-medical': {
    icon: '🛡',
    name: 'Standby Medical Support',
    subtitle: 'On-Site Medical Teams for Events & Remote Operations',
    lead: 'MediEvac deploys physician-led medical teams for events, expeditions, film productions, corporate gatherings, and remote industrial operations — providing on-site emergency care, medical coverage, and rapid evacuation capability wherever you need it.',
    features: [
      'Physician-led medical teams for any event type or size',
      'Remote and wilderness medical coverage for expeditions',
      'Corporate health cover for remote industrial operations',
      'Full medical station setup with resuscitation capability',
      'Rapid evacuation plans and dedicated helicopter on standby',
      'Altitude, heat, and environmental medical specialists',
      'Short-term engagements (single day) to long-term deployments',
      'Post-event medical reporting and incident documentation',
    ],
    process: [
      { title: 'Risk Assessment', desc: 'We conduct a thorough risk assessment of the event or operation — environment, participant count, activity type, nearest medical facility, and evacuation routes.' },
      { title: 'Medical Plan Development', desc: 'A comprehensive medical plan is produced including team composition, equipment manifest, communication protocols, and evacuation procedures.' },
      { title: 'Team Deployment', desc: 'Medical team is deployed on-site in advance of the event. Equipment is staged, communications tested, and coordination with local EMS established.' },
      { title: 'On-Site Medical Cover', desc: 'Continuous medical presence throughout the event or operation. All incidents assessed, treated, and documented in real time.' },
      { title: 'Demobilisation & Report', desc: 'Safe demobilisation of the medical team at conclusion, followed by a full incident and medical report to the client.' },
    ],
    tags: ['Events', 'Remote Operations', 'Film Production', 'Corporate', 'Expeditions'],
  },
};

export const serviceIds = Object.keys(services);

export const serviceList = [
  { id: 'air-ambulance', icon: '✈', name: 'Air Ambulance Services', desc: 'Fixed and rotary wing air ambulance services with ICU-equipped aircraft and specialist medical crews ready for immediate deployment.', tags: ['Fixed Wing', 'Rotary Wing', 'ICU Equipped', 'Global'] },
  { id: 'medical-repatriation', icon: '🏥', name: 'Medical Repatriation', desc: 'Safe and dignified repatriation of patients back to their home country, coordinated with receiving hospitals and insurance providers.', tags: ['International', 'Full Coordination', 'Insurance Liaison'] },
  { id: 'ground-ambulance', icon: '🚑', name: 'Ground Ambulance', desc: 'Advanced life support ground ambulance transfers for inter-hospital movements, airport transfers, and point-to-point emergency transport.', tags: ['ALS / BLS', 'Inter-Hospital', 'Airport Transfers'] },
  { id: 'medical-escort', icon: '👨‍⚕️', name: 'Medical Escort', desc: 'Qualified medical professionals accompanying patients on commercial flights, providing continuous monitoring and care throughout the journey.', tags: ['Commercial Flight', 'Continuous Care', 'Cost Effective'] },
  { id: 'organ-transport', icon: '❤', name: 'Organ Transport', desc: 'Time-critical organ and tissue transport with dedicated coordination teams, specialist handling, and rapid deployment capabilities.', tags: ['Time Critical', 'Chain of Custody', 'Specialist Handling'] },
  { id: 'standby-medical', icon: '🛡', name: 'Standby Medical', desc: 'On-site medical teams for events, expeditions, remote operations, and corporate health coverage across challenging environments.', tags: ['Events', 'Remote Operations', 'Corporate'] },
];
