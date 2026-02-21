import { useEffect } from 'react';

const useFadeEffects = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const speed = el.getAttribute('data-speed') || '800';
          
          el.style.transition = `transform ${speed}ms ease-out, opacity ${speed}ms ease-out`;
          el.classList.add('active');
          
          observer.unobserve(el);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
};

export default useFadeEffects;