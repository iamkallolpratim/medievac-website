'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/services') return pathname === '/services';
    if (href === '/services/air-ambulance') return pathname.startsWith('/services/');
    return pathname.startsWith(href);
  };

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
      <Link className="nav-logo" href="/">
        <Image src="/logo.png" alt="MediEvac" width={144} height={36} priority />
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={isActive('/about') ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className={isActive('/services') ? 'active' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/services/air-ambulance"
            className={isActive('/services/air-ambulance') ? 'active' : ''}
          >
            Service Details
          </Link>
        </li>
        <li>
          <Link href="/stories" className={isActive('/stories') ? 'active' : ''}>
            Client Stories
          </Link>
        </li>
        <li>
          <Link href="/contact" className={`nav-cta${isActive('/contact') ? ' active' : ''}`}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
