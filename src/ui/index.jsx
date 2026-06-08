// Shared inky-editorial primitives.

export function Headline({ solid, outline, className = "", stroke = "1.5px" }) {
  return (
    <div className={className}>
      <span className="display block">{solid}</span>
      <span
        className="display display-outline block"
        style={{ WebkitTextStroke: `${stroke} #F4F1EA` }}
      >
        {outline}
      </span>
    </div>
  );
}

export function Eyebrow({ children, className = "" }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

export function Spark() {
  return <span className="spark" aria-hidden="true" />;
}

export function Wordmark({ className = "", size = "1.25rem" }) {
  return (
    <span className={`inline-flex items-baseline gap-[3px] ${className}`}>
      <span
        className="font-sans font-semibold uppercase tracking-[0.22em] text-bone"
        style={{ fontSize: size }}
      >
        HANNANLABS
      </span>
      <Spark />
    </span>
  );
}

// Reveal-on-scroll wrapper using IntersectionObserver.
import { useEffect, useRef, useState } from "react";

export function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
