'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <>
      <div className="contact-hero">
        <div className="contact-hero-inner">
          <div>
            <div className="section-label">Contact Us</div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px,5vw,64px)',
                fontWeight: 800,
                lineHeight: 0.95,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                marginBottom: '24px',
              }}
            >
              Reach Us
              <br />
              <span style={{ color: 'var(--red)' }}>
                Anytime,
                <br />
                Anywhere
              </span>
            </h1>
            <p
              style={{ fontSize: '16px', color: '#3a4055', lineHeight: 1.8, marginBottom: '40px' }}
            >
              Whether it&apos;s an emergency requiring immediate air evacuation or a planned medical
              transfer, our operations team is available 24 hours a day, 7 days a week, 365 days a
              year.
            </p>

            <div className="emergency-bar">
              <div className="emergency-bar-left">
                <div className="emergency-pulse" />
                <div>
                  <div className="emergency-label">Emergency Hotline — 24/7</div>
                  <a className="emergency-number" href="tel:+919999999999">
                    +91 99999 99999
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <div className="contact-info-title">Registered Office</div>
                <div className="contact-info-text">
                  RescAeroMed Aviation Private Limited
                  <br />
                  Jubilee Hills, Hyderabad — 500033
                  <br />
                  Telangana, India
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">📧</div>
                <div className="contact-info-title">Email</div>
                <div className="contact-info-text">
                  <a href="mailto:operations@medievac.in">operations@medievac.in</a>
                  <br />
                  <a href="mailto:enquiries@medievac.in">enquiries@medievac.in</a>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">🌐</div>
                <div className="contact-info-title">Global Operations</div>
                <div className="contact-info-text">
                  Coordination centres across India, UAE, UK and Singapore. Network partners in 50+
                  countries.
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="form-title">Send a Request</div>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input className="form-input" type="text" placeholder="First name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input className="form-input" type="text" placeholder="Last name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input className="form-input" type="tel" placeholder="+91 ..." />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Organisation / Company</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Hospital, insurer, corporate..."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Service Required</label>
                <select className="form-select form-input">
                  <option value="">Select a service</option>
                  <option>Air Ambulance</option>
                  <option>Medical Repatriation</option>
                  <option>Ground Ambulance</option>
                  <option>Medical Escort</option>
                  <option>Organ / Tissue Transport</option>
                  <option>Standby Medical Support</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message / Case Details</label>
                <textarea
                  className="form-textarea"
                  placeholder="Briefly describe the patient's condition, location, and destination..."
                />
              </div>

              {!submitted ? (
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }}
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Submit Request'}
                  {!sending && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ) : (
                <div
                  style={{
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    padding: '16px',
                    textAlign: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: '#16a34a',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  ✓ Request Submitted — We&apos;ll respond within 30 minutes
                </div>
              )}

              <p
                style={{
                  fontSize: '12px',
                  color: '#5a6070',
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}
              >
                For emergencies, call our hotline directly.
                <br />
                Form responses within 30 minutes during business hours, 2 hours outside.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
