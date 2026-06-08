import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { nav, identity } from "../../data/site";
import { Wordmark } from "../../ui";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-sans font-medium text-[0.95rem] tracking-[0.18em] uppercase transition-colors ${
      isActive ? "text-bone" : "text-bone/55 hover:text-bone"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-ink/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-5 md:px-16 md:py-[1.6rem]">
        <Link to="/" aria-label="Hannanlabs home" onClick={() => setOpen(false)}>
          <Wordmark size="1.1rem" />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-11 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
          <a
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-sans text-[0.95rem] font-medium uppercase tracking-[0.18em] text-bone/55 transition-colors hover:text-bone"
          >
            Résumé <span className="text-teal">↗</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex flex-col gap-[5px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[1.5px] w-6 bg-bone transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-bone transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col border-t hairline px-6 py-2 md:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b hairline py-4 font-sans text-lg uppercase tracking-[0.16em] ${
                  isActive ? "text-bone" : "text-bone/60"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 border-b hairline py-4 font-sans text-lg uppercase tracking-[0.16em] text-bone/60"
          >
            Résumé <span className="text-teal">↗</span>
          </a>
        </nav>
      )}
    </header>
  );
}
