import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <div className="about-hero">
        <div className="about-hero-inner">
          <div>
            <div className="section-label">About MediEvac</div>
            <h1 className="about-hero-title">
              Saving Lives
              <br />
              Across
              <br />
              <span style={{ color: 'var(--red)' }}>Borders</span>
            </h1>
          </div>
          <div>
            <p className="about-hero-text">
              MediEvac, operated by RescAeroMed Aviation Private Limited, is a leading provider of
              worldwide medical transfers and emergency medical support. Founded on the conviction that
              exceptional medical care must transcend geography, we have built one of the most capable
              air medical transport networks in the region.
            </p>
            <p className="about-hero-text">
              Our team of medical directors, intensive care physicians, specialist flight nurses, and
              logistics coordinators work in concert to deliver seamless, life-saving missions across
              more than 50 countries — every day, around the clock.
            </p>
            <p className="about-hero-text">
              We partner with leading hospitals, insurance providers, corporate clients, and government
              agencies who trust us with their most critical patients.
            </p>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <section className="section">
        <div className="section-label">Our Values</div>
        <h2 className="section-title">
          The Principles
          <br />
          We Fly By
        </h2>
        <div className="about-values">
          {[
            {
              num: '01',
              icon: '❤',
              title: 'Patient First',
              desc: "Every decision, every protocol, every innovation centres on the patient's safety, dignity, and clinical outcome. There is no second priority.",
            },
            {
              num: '02',
              icon: '⚡',
              title: 'Speed & Precision',
              desc: 'We move fast without compromising accuracy. Rapid response is meaningless without the precision to deliver care correctly under pressure.',
            },
            {
              num: '03',
              icon: '🌍',
              title: 'Global Reach',
              desc: "Medical emergencies don't respect borders. Our global network ensures that world-class care is accessible wherever a patient may be.",
            },
            {
              num: '04',
              icon: '🤝',
              title: 'Trust & Transparency',
              desc: 'Families and partners can rely on us for honest communication, clear documentation, and accountability at every step of a mission.',
            },
          ].map((v) => (
            <div key={v.num} className="value-card" data-num={v.num}>
              <div className="value-icon">{v.icon}</div>
              <div className="value-title">{v.title}</div>
              <div className="value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section
        className="section-full"
        style={{
          background: '#f5f6f8',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        <div className="section-inner">
          <div className="section-label">Leadership</div>
          <h2 className="section-title">
            The Team Behind
            <br />
            Every Mission
          </h2>
          <div className="team-grid">
            {[
              {
                initials: 'MD',
                name: 'Dr. Arjun Mehta',
                role: 'Chief Medical Officer',
                bio: 'Intensive care physician with 18 years in aeromedical transport. Former lead physician at a national air rescue service.',
              },
              {
                initials: 'OD',
                name: 'Capt. Vijay Rao',
                role: 'Director of Operations',
                bio: 'Former commercial airline captain with 12,000 flight hours. Specialist in aeromedical route planning and regulatory compliance.',
              },
              {
                initials: 'NC',
                name: 'Priya Nair',
                role: 'Head of Case Management',
                bio: 'Certified flight nurse and case coordinator with expertise in international patient logistics and insurance liaison.',
              },
              {
                initials: 'GC',
                name: 'Rahul Gupta',
                role: 'Director of Partnerships',
                bio: 'Former hospital administrator who has built our network of 200+ hospital affiliates across Asia, the Middle East, and Europe.',
              },
            ].map((member) => (
              <div key={member.initials} className="team-card">
                <div className="team-photo">
                  <div className="team-photo-bg" />
                  <div className="team-initials">{member.initials}</div>
                </div>
                <div className="team-info">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <div className="team-bio">{member.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="section-label">By the Numbers</div>
        <h2 className="section-title">Our Track Record</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginTop: '48px',
          }}
        >
          {[
            { num: '2500', suffix: '+', label: 'Missions Completed' },
            { num: '50', suffix: '+', label: 'Countries Served' },
            { num: '200', suffix: '+', label: 'Hospital Partners' },
            { num: '100', suffix: '%', label: 'Mission Success Rate' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-num">
                {stat.num}
                <span>{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-inner">
          <div>
            <h2 className="cta-title">Partner With Us</h2>
            <p className="cta-desc">
              Hospitals, insurers, and corporate clients — let&apos;s discuss how we can serve your
              patients.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="btn-primary" href="/contact">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
