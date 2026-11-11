import { useState, useEffect, useCallback } from 'react';

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Events', href: '#events' },
  { label: 'Domains', href: '#domains' },
  { label: 'Core Team', href: '#core-team' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

// Keep Events highlighted while scrolling through Event Chronicles (#pathway)
const TRACKED_SECTIONS = [
  { id: 'about', href: '#about' },
  { id: 'pillars', href: '#pillars' },
  { id: 'events', href: '#events' },
  { id: 'pathway', href: '#events' },
  { id: 'domains', href: '#domains' },
  { id: 'core-team', href: '#core-team' },
  { id: 'contact', href: '#contact' },
  { id: 'faq', href: '#faq' },
];

export function useActiveSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const headerEl = document.querySelector('.sbg-navbar');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 84;
      const activationLine = headerHeight + Math.min(window.innerHeight * 0.28, 220);

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;

      if (nearBottom) {
        setActiveSection('#faq');
        ticking = false;
        return;
      }

      let currentSection = '#about';
      for (const entry of TRACKED_SECTIONS) {
        const el = document.getElementById(entry.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= activationLine) {
          currentSection = entry.href;
        }
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleNavSelect = useCallback((href, event) => {
    const id = href?.startsWith('#') ? href.slice(1) : null;
    const target = id ? document.getElementById(id) : null;
    if (!target) return;

    event?.preventDefault();
    setActiveSection(href);

    const headerEl = document.querySelector('.sbg-navbar');
    const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 88;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });

    if (window.history?.replaceState) {
      window.history.replaceState(null, '', href);
    }
  }, []);

  return { isScrolled, activeSection, handleNavSelect };
}
