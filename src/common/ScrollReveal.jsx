import { useRef, useEffect, useState } from "react";

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Always reveal after 2.5 s regardless — guards against observer failure on
    // iOS Safari and cases where the element is never scrolled into view.
    const safety = setTimeout(() => setIsVisible(true), 2500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(safety);
            setTimeout(() => setIsVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        // Trigger 60 px before the element enters the viewport so the
        // animation is already running when it becomes visible.
        rootMargin: "0px 0px 60px 0px",
      }
    );

    const el = domRef.current;
    if (el) observer.observe(el);

    return () => {
      clearTimeout(safety);
      if (el) observer.unobserve(el);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`${className} fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
