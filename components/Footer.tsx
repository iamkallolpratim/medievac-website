import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/">
              <Image src="/logo.png" alt="MediEvac" width={160} height={40} />
            </Link>
            <p className="footer-brand-desc">
              Worldwide Medical Transfers &amp; Emergency Medical Support. Operated by RescAeroMed
              Aviation Private Limited.
            </p>
            <div className="footer-emergency">
              <div className="footer-emergency-label">Emergency 24/7</div>
              <a className="footer-emergency-num" href="tel:+919999999999">
                +91 99999 99999
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><Link href="/services/air-ambulance">Air Ambulance</Link></li>
              <li><Link href="/services/medical-repatriation">Medical Repatriation</Link></li>
              <li><Link href="/services/ground-ambulance">Ground Ambulance</Link></li>
              <li><Link href="/services/medical-escort">Medical Escort</Link></li>
              <li><Link href="/services/organ-transport">Organ Transport</Link></li>
              <li><Link href="/services/standby-medical">Standby Medical</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/stories">Client Stories</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:operations@medievac.in">operations@medievac.in</a></li>
              <li><a href="mailto:enquiries@medievac.in">enquiries@medievac.in</a></li>
              <li><a>Jubilee Hills, Hyderabad</a></li>
              <li><a>Telangana — 500033, India</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 RescAeroMed Aviation Private Limited. All rights reserved.
          </div>
          <ul className="footer-legal">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
