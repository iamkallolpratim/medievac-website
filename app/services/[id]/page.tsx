import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, serviceIds } from '@/lib/services-data';

export function generateStaticParams() {
  return serviceIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services[id];
  if (!service) return {};
  return {
    title: `${service.name} — MediEvac`,
    description: service.lead,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services[id];
  if (!service) notFound();

  return (
    <>
      {/* HERO */}
      <div className="service-detail-hero">
        <div className="service-detail-hero-inner">
          <div>
            <div className="detail-breadcrumb">
              <Link href="/services" style={{ color: 'var(--red)', textDecoration: 'none' }}>
                ← Services
              </Link>
              <span style={{ color: '#5a6070' }}>/</span>
              <span style={{ color: '#111318' }}>{service.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <div className="service-icon-wrap" style={{ width: '60px', height: '60px', fontSize: '26px' }}>
                {service.icon}
              </div>
              <div>
                <div className="section-label" style={{ marginBottom: '4px' }}>
                  {service.subtitle}
                </div>
              </div>
            </div>
            <h1 className="detail-title">{service.name}</h1>
            <p className="detail-lead">{service.lead}</p>
            <ul className="detail-features-list">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="detail-sidebar-card">
              <div className="sidebar-title">Request This Service</div>
              <Link className="sidebar-btn" href="/contact">
                Emergency Request
              </Link>
              <Link className="sidebar-btn-outline" href="/contact">
                General Enquiry
              </Link>
              <div className="sidebar-contact-item">
                <span className="icon">📞</span>
                <span>+91 99999 99999</span>
              </div>
              <div className="sidebar-contact-item">
                <span className="icon">📧</span>
                <span>operations@medievac.in</span>
              </div>
              <div className="sidebar-contact-item">
                <span className="icon">⏱</span>
                <span>24/7 Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="detail-body">
        <div>
          <div className="detail-section-title">How It Works</div>
          <div className="process-steps">
            {service.process.map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              background: '#f5f6f8',
              border: '1px solid rgba(0,0,0,0.08)',
              padding: '32px',
              marginBottom: '24px',
            }}
          >
            <div className="sidebar-title">Other Services</div>
            <div className="sidebar-services-nav">
              {serviceIds.map((sid) => (
                <Link
                  key={sid}
                  href={`/services/${sid}`}
                  className={`sidebar-service-link${sid === id ? ' active' : ''}`}
                >
                  {services[sid].icon} {services[sid].name}
                </Link>
              ))}
            </div>
          </div>

          <div className="detail-sidebar-card" style={{ position: 'static' }}>
            <div className="sidebar-title">Tags</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {service.tags.map((tag) => (
                <span key={tag} className="service-row-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
