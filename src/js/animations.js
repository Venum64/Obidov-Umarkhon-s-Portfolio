import { useEffect } from 'react';

const useFadeEffects = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.85;
        const speed = el.getAttribute('data-speed') || '800';

        el.style.transition = `all ${speed}ms ease-out`;

        if (rect.top < triggerPoint && rect.bottom > 0) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверка при загрузке страницы

    return () => window.removeEventListener('scroll', handleScroll);
  }, [selector]);
};

export default useFadeEffects;