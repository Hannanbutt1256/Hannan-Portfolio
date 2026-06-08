import { Wordmark } from "../../ui";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t hairline px-6 py-7 md:px-16">
      <Wordmark size="0.95rem" />
      <span className="hidden font-sans text-[0.8rem] font-medium uppercase tracking-[0.18em] text-bone/45 md:inline">
        Build &amp; Create
      </span>
      <span className="font-sans text-[0.85rem] font-medium tracking-[0.02em] text-bone/45">
        @hannanlabs
      </span>
    </footer>
  );
}
