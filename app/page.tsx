import Link from 'next/link';
import { serviceList } from '@/lib/services-data';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">24/7 Global Emergency Response</div>
            <h1 className="hero-title">
              Every
              <br />
              <span className="accent">Second</span>
              <br />
              <span className="serif">Matters.</span>
            </h1>
            <p className="hero-desc">
              MediEvac delivers world-class air ambulance, medical repatriation, and emergency
              medical support services across the globe — operated by RescAeroMed Aviation Private
              Limited.
            </p>
            <div className="hero-actions">
              <Link className="btn-primary" href="/contact">
                <span>Emergency Request</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link className="btn-outline" href="/services">
                Our Services
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-title">Operations at a Glance</div>
            <div className="hero-stat">
              <div className="hero-stat-num">
                24<span>/7</span>
              </div>
              <div className="hero-stat-label">Round-the-clock emergency response</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">
                50<span>+</span>
              </div>
              <div className="hero-stat-label">Countries covered globally</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">
                100<span>%</span>
              </div>
              <div className="hero-stat-label">Mission success rate</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">
                15<span>min</span>
              </div>
              <div className="hero-stat-label">Average response activation time</div>
            </div>
          </div>
        </div>
        <div className="hero-ecg">
          <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline
              points="0,40 100,40 130,40 145,10 160,70 175,20 190,55 205,40 350,40 380,40 395,10 410,70 425,20 440,55 455,40 600,40 630,40 645,10 660,70 675,20 690,55 705,40 850,40 880,40 895,10 910,70 925,20 940,55 955,40 1100,40 1130,40 1145,10 1160,70 1175,20 1190,55 1205,40 1350,40 1380,40 1395,10 1410,70 1425,20 1440,55 1455,40 1600,40 1630,40 1645,10 1660,70 1675,20 1690,55 1705,40 1850,40 1880,40 1895,10 1910,70 1925,20 1940,55 1955,40 2100,40 2130,40 2145,10 2160,70 2175,20 2190,55 2205,40 2400,40"
              stroke="#E8231A"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item">
            <div className="trust-icon">✈</div>
            <div>
              <div className="trust-text-num">Air Ambulance</div>
              <div className="trust-text-label">Fixed &amp; Rotary Wing</div>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🏥</div>
            <div>
              <div className="trust-text-num">ICU on Board</div>
              <div className="trust-text-label">Full Critical Care</div>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🌍</div>
            <div>
              <div className="trust-text-num">50+ Nations</div>
              <div className="trust-text-label">Global Coverage</div>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">⚡</div>
            <div>
              <div className="trust-text-num">15 Min Activation</div>
              <div className="trust-text-label">Emergency Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="section">
        <div className="section-label">What We Do</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <h2 className="section-title">
            Critical Care,
            <br />
            Delivered Worldwide
          </h2>
          <Link
            className="btn-outline"
            href="/services"
            style={{ flexShrink: 0, marginBottom: '20px' }}
          >
            View All Services
          </Link>
        </div>
        <div className="services-grid">
          {serviceList.map((svc, i) => (
            <Link key={svc.id} href={`/services/${svc.id}`} className="service-card" style={{ textDecoration: 'none' }}>
              <div className="service-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="service-icon-wrap">{svc.icon}</div>
              <div className="service-name">{svc.name}</div>
              <div className="service-desc">{svc.desc}</div>
              <span className="service-link">
                Learn More <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY MEDIEVAC */}
      <section
        className="section-full"
        style={{
          background: '#f5f6f8',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        <div className="section-inner">
          <div className="section-label">Why MediEvac</div>
          <div className="why-grid">
            <div className="why-features">
              <h2 className="section-title" style={{ marginBottom: '48px' }}>
                When Lives
                <br />
                Depend on It
              </h2>
              {[
                {
                  icon: '⚡',
                  title: 'Rapid Response',
                  desc: 'Our dedicated dispatch team activates missions within 15 minutes. Aircraft are pre-positioned and crews are briefed before wheels-up.',
                },
                {
                  icon: '🏥',
                  title: 'ICU-Level Care in the Air',
                  desc: 'Every air ambulance mission is staffed with intensive care physicians, specialist nurses, and full critical care equipment.',
                },
                {
                  icon: '🌍',
                  title: 'Truly Global Network',
                  desc: 'Over 50 countries, with local ground partners, preferred hospital agreements, and regulatory clearances pre-arranged.',
                },
                {
                  icon: '🤝',
                  title: 'Single Point of Contact',
                  desc: 'A dedicated case manager coordinates everything — from aircraft booking to hospital admission — so families focus on recovery.',
                },
              ].map((f) => (
                <div key={f.title} className="why-feature">
                  <div className="why-feature-icon">{f.icon}</div>
                  <div>
                    <div className="why-feature-title">{f.title}</div>
                    <div className="why-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="why-visual">
              <div className="why-visual-card">
                <div className="coverage-title">Global Coverage Map</div>
                <div className="coverage-map">
                  <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M80,150 Q100,100 140,120 L180,100 Q220,80 260,110 L310,90 Q360,70 400,100 L450,80 Q500,60 540,90 L580,80 Q620,70 660,100 L700,90 Q730,100 750,120 Q760,150 740,180 L720,220 Q710,260 680,280 L640,300 Q600,320 560,310 L520,330 Q480,350 440,330 L400,340 Q360,350 320,330 L280,340 Q240,350 200,330 L160,310 Q120,290 100,260 L80,220 Q70,180 80,150Z"
                      fill="none"
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="1"
                    />
                    <path
                      d="M380,200 Q400,180 420,200 L430,240 Q440,280 420,310 L400,330 Q380,320 370,300 L360,260 Q350,230 380,200Z"
                      fill="none"
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="1"
                    />
                    <path
                      d="M560,170 Q580,160 590,180 L600,210 Q590,240 570,250 L555,230 Q545,200 560,170Z"
                      fill="none"
                      stroke="rgba(0,0,0,0.12)"
                      strokeWidth="1"
                    />
                  </svg>
                  <div className="map-dot" style={{ top: '35%', left: '25%' }} />
                  <div className="map-dot" style={{ top: '40%', left: '48%', animationDelay: '0.5s' }} />
                  <div className="map-dot" style={{ top: '30%', left: '65%', animationDelay: '1s' }} />
                  <div className="map-dot" style={{ top: '45%', left: '72%', animationDelay: '1.5s' }} />
                  <div className="map-dot" style={{ top: '55%', left: '55%', animationDelay: '0.75s' }} />
                  <div className="map-dot" style={{ top: '38%', left: '35%', animationDelay: '0.25s' }} />
                </div>
                <div className="coverage-regions">
                  {['South Asia', 'Middle East', 'Europe', 'Africa', 'Southeast Asia', 'Americas'].map(
                    (r) => (
                      <div key={r} className="region-tag">
                        {r}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT STORIES PREVIEW */}
      <section className="section">
        <div className="section-label">Client Stories</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <h2 className="section-title">
            Missions That
            <br />
            Changed Lives
          </h2>
          <Link
            className="btn-outline"
            href="/stories"
            style={{ flexShrink: 0, marginBottom: '20px' }}
          >
            All Stories
          </Link>
        </div>
        <div className="testimonials-grid" style={{ marginTop: '48px' }}>
          {[
            {
              initials: 'RS',
              text: 'MediEvac mobilised an air ambulance within hours when my father collapsed in Dubai. Their medical team was extraordinary — calm, professional, and genuinely caring throughout a terrifying night.',
              name: 'Rajiv Sharma',
              role: 'Patient Family — Hyderabad to Dubai Repatriation',
            },
            {
              initials: 'DM',
              text: 'We needed a cardiac patient transferred across three countries within 24 hours. MediEvac handled everything flawlessly — flight permissions, hospital coordination, and the patient arrived stable and on time.',
              name: 'Dr. Mehra',
              role: 'Chief of Cardiology — Apollo Hospitals',
            },
            {
              initials: 'PK',
              text: "As an insurer, we've worked with many medical transport companies. MediEvac stands apart in professionalism, documentation, and most importantly — patient outcomes. Our preferred partner for critical cases.",
              name: 'Priya Kapoor',
              role: 'Claims Director — Global Health Insurance',
            },
          ].map((t) => (
            <div key={t.initials} className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <div>
            <h2 className="cta-title">
              Ready When
              <br />
              <span style={{ color: 'var(--red)' }}>You Need Us</span>
            </h2>
            <p className="cta-desc">Our operations centre is staffed 24 hours a day, 365 days a year.</p>
          </div>
          <div className="cta-actions">
            <Link className="btn-primary" href="/contact">
              Emergency Request
            </Link>
            <Link className="btn-outline" href="/contact">
              General Enquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
