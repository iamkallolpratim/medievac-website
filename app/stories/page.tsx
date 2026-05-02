export default function StoriesPage() {
  const stories = [
    {
      featured: true,
      tag: 'Featured Mission',
      icon: '✈',
      bg: 'linear-gradient(135deg, #1a0a0a 0%, #2d1010 100%)',
      title: 'Critical Cardiac Patient — Dubai to Hyderabad in 6 Hours',
      excerpt:
        'A 58-year-old NRI suffered a massive myocardial infarction in Dubai. His family contacted MediEvac at 2 AM. Within 15 minutes, our medical coordinator had assessed the case, identified the nearest suitable hospital in Hyderabad, and began dispatching our ICU-equipped fixed-wing aircraft. The patient arrived at Apollo Hospitals Hyderabad in stable condition, underwent emergency bypass surgery, and was discharged 10 days later. His daughter called it "a miracle in the sky."',
      meta: ['✈ Dubai → Hyderabad', '🏥 Cardiac ICU Transfer', '⏱ 6 Hours Total'],
    },
    {
      featured: false,
      tag: 'Repatriation',
      icon: '🌍',
      bg: 'linear-gradient(135deg, #0a1020 0%, #0d1a30 100%)',
      title: 'Stroke Patient Repatriated from Singapore to Chennai',
      excerpt:
        'An elderly software professional suffered an ischaemic stroke while on a business trip. MediEvac coordinated a full medical repatriation, managing discharge paperwork, flight permits, and a direct ICU transfer to Kauvery Hospital Chennai within 72 hours of the event.',
      meta: ['✈ Singapore → Chennai', '⏱ 72 Hours'],
    },
    {
      featured: false,
      tag: 'Organ Transport',
      icon: '❤',
      bg: 'linear-gradient(135deg, #0a1a0a 0%, #0d2d0d 100%)',
      title: 'Cadaveric Kidney Transport — 4 Cities in 8 Hours',
      excerpt:
        "A cadaveric kidney needed to reach a recipient within a 24-hour viability window. MediEvac's organ transport team coordinated ground-air-ground logistics across four cities, preserving chain of custody and delivering on time. The transplant was successful.",
      meta: ['❤ Organ Transport', '⏱ 8 Hours, 4 Cities'],
    },
    {
      featured: false,
      tag: 'Medical Escort',
      icon: '👨‍⚕️',
      bg: 'linear-gradient(135deg, #1a1000 0%, #2d1e00 100%)',
      title: 'Post-Surgical Patient — Medical Escort on Commercial Flight',
      excerpt:
        'Following a hip replacement surgery in Germany, a 70-year-old patient needed to return home to Mumbai. A commercial flight with full medical escort — including in-flight monitoring and medication management — was arranged, saving significant cost over a full air ambulance mission.',
      meta: ['✈ Frankfurt → Mumbai', '👨‍⚕️ Medical Escort'],
    },
    {
      featured: false,
      tag: 'Remote Rescue',
      icon: '🚁',
      bg: 'linear-gradient(135deg, #100a1a 0%, #1e0d2d 100%)',
      title: 'Helicopter Evacuation from a Remote Construction Site',
      excerpt:
        'A worker suffered severe burns at a remote construction site in Rajasthan with no road access. MediEvac deployed a helicopter within 90 minutes, stabilised the patient on scene, and transferred him to a burns unit in Jaipur.',
      meta: ['🚁 Helicopter Rescue', '⏱ 90 min deployment'],
    },
    {
      featured: false,
      tag: 'Corporate',
      icon: '🛡',
      bg: 'linear-gradient(135deg, #0a0a1a 0%, #0d0d2d 100%)',
      title: 'Standby Medical Cover — International Film Production',
      excerpt:
        'A major international film production shooting in remote Ladakh retained MediEvac for three months of standby medical support. Our physician-led team provided on-site emergency care, altitude sickness management, and two successful helicopter evacuations during the shoot.',
      meta: ['🛡 Standby Support', '⏱ 3 Month Engagement'],
    },
  ];

  const testimonials = [
    {
      initials: 'SK',
      text: 'MediEvac handled our most complex international case with zero errors. The medical team\'s clinical judgment was outstanding, and the logistics team solved every regulatory obstacle without involving us. Truly world-class.',
      name: 'Dr. Suresh Kumar',
      role: 'Medical Director — Max Healthcare',
    },
    {
      initials: 'MR',
      text: 'When my son was injured in a road accident in Thailand, I called MediEvac in a panic. Within 20 minutes I had a case manager, a doctor on the phone, and a plan. The professionalism and empathy was incredible. They brought him home.',
      name: 'Meenakshi Raman',
      role: 'Parent — Patient Family, Bangkok',
    },
    {
      initials: 'JT',
      text: 'For our mining operations in remote Africa, we needed a medical partner we could trust completely. MediEvac has been on call for us for three years — two evacuations executed perfectly. They are genuinely a lifeline for our workforce.',
      name: 'James Torres',
      role: 'HSE Director — Global Mining Corp',
    },
  ];

  return (
    <>
      {/* HERO */}
      <div className="services-hero">
        <div className="services-hero-inner">
          <div className="section-label">Client Stories</div>
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
            Lives Saved,
            <br />
            <span style={{ color: 'var(--red)' }}>Borders Crossed</span>
          </h1>
          <p style={{ fontSize: '17px', color: '#3a4055', maxWidth: '600px', lineHeight: 1.7 }}>
            Every mission is a story of urgency, precision, and compassion. Here are some of the
            cases that remind us why we do what we do.
          </p>
        </div>
      </div>

      {/* STORIES GRID */}
      <section className="section">
        <div className="stories-grid">
          {stories.map((story, i) => (
            <div key={i} className={`story-card${story.featured ? ' featured' : ''}`}>
              <div className="story-visual" style={{ background: story.bg }}>
                <div className="story-tag">{story.tag}</div>
                <div className="story-icon-large">{story.icon}</div>
                {story.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60%',
                      background: 'linear-gradient(to top, rgba(26,10,10,0.9), transparent)',
                    }}
                  />
                )}
              </div>
              <div className="story-content">
                <div className="story-title">{story.title}</div>
                <p className="story-excerpt">{story.excerpt}</p>
                <div className="story-meta">
                  {story.meta.map((m, j) => (
                    <div key={j} className="story-meta-item">
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="section-full"
        style={{
          background: '#f5f6f8',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        <div className="section-inner">
          <div className="section-label">What They Say</div>
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonials-grid" style={{ marginTop: '48px' }}>
            {testimonials.map((t) => (
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
        </div>
      </section>
    </>
  );
}
