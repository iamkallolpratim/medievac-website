import Link from 'next/link';

const serviceRows = [
  {
    id: 'air-ambulance',
    num: '01',
    icon: '✈',
    title: 'Air Ambulance Services',
    desc: 'Dedicated fixed-wing and rotary-wing air ambulances equipped with ICU-level medical equipment and crewed by critical care specialists. We operate globally and can deploy within hours of a request.',
    tags: ['Fixed Wing', 'Rotary Wing', 'ICU Equipped', 'Global'],
  },
  {
    id: 'medical-repatriation',
    num: '02',
    icon: '🏥',
    title: 'Medical Repatriation',
    desc: 'Full coordination of international patient repatriation — from country of illness back to the home hospital. We manage flight permits, customs clearance, stretcher arrangements, and receiving hospital coordination.',
    tags: ['International', 'Full Coordination', 'Insurance Liaison'],
  },
  {
    id: 'ground-ambulance',
    num: '03',
    icon: '🚑',
    title: 'Ground Ambulance Transport',
    desc: 'Advanced Life Support (ALS) and Basic Life Support (BLS) ground ambulances for inter-hospital transfers, airport connections, and local emergency transport with trained paramedic crews.',
    tags: ['ALS / BLS', 'Inter-Hospital', 'Airport Transfers'],
  },
  {
    id: 'medical-escort',
    num: '04',
    icon: '👨‍⚕️',
    title: 'Medical Escort Services',
    desc: 'Experienced physicians and nurses travel with patients on commercial flights, providing continuous monitoring, medication management, and in-flight medical intervention when required.',
    tags: ['Commercial Flight', 'Continuous Care', 'Cost Effective'],
  },
  {
    id: 'organ-transport',
    num: '05',
    icon: '❤',
    title: 'Organ & Tissue Transport',
    desc: 'Time-critical logistics for transplant organs and tissues, with dedicated ground and air transport teams, specialist packaging, and real-time chain-of-custody tracking.',
    tags: ['Time Critical', 'Chain of Custody', 'Specialist Handling'],
  },
  {
    id: 'standby-medical',
    num: '06',
    icon: '🛡',
    title: 'Standby Medical Support',
    desc: 'On-site medical teams for corporate events, film productions, sports events, expeditions, and remote industrial operations. We provide physician-level cover for any environment.',
    tags: ['Events', 'Remote Operations', 'Corporate'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <div className="services-hero">
        <div className="services-hero-inner">
          <div className="section-label">Our Services</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px,6vw,72px)',
              fontWeight: 800,
              lineHeight: 0.95,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}
          >
            Complete Medical
            <br />
            <span style={{ color: 'var(--red)' }}>Transfer Solutions</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#3a4055', maxWidth: '600px', lineHeight: 1.7 }}>
            From air ambulance to ground transport, organ logistics to event medical standby — we
            offer a comprehensive suite of aeromedical and emergency medical services for any
            situation, anywhere on earth.
          </p>
        </div>
      </div>

      {/* SERVICES LIST */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div className="services-list">
          {serviceRows.map((svc) => (
            <Link key={svc.id} href={`/services/${svc.id}`} className="service-row">
              <div className="service-row-num">{svc.num}</div>
              <div className="service-row-content">
                <div className="service-row-title">
                  <div className="s-icon">{svc.icon}</div>
                  {svc.title}
                </div>
                <div className="service-row-desc">{svc.desc}</div>
              </div>
              <div className="service-row-tags">
                {svc.tags.map((tag) => (
                  <div key={tag} className="service-row-tag">
                    {tag}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section" style={{ marginTop: '80px' }}>
        <div className="cta-inner">
          <div>
            <h2 className="cta-title">
              Need a Service?
              <br />
              <span style={{ color: 'var(--red)' }}>Call Now</span>
            </h2>
            <p className="cta-desc">
              Our medical coordination team is online 24/7 for enquiries and emergencies.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="btn-primary" href="/contact">
              Request a Service
            </Link>
            <a className="btn-outline" href="tel:+919999999999">
              +91 99999 99999
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
