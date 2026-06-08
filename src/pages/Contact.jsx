import { contact } from "../data/site";
import { Headline, Eyebrow } from "../ui";

const wrap = "mx-auto w-full max-w-[1440px] px-6 md:px-16";

export default function Contact() {
  return (
    <section className={`${wrap} pb-24 pt-20 md:pb-28 md:pt-28`}>
      <Eyebrow>{contact.eyebrow}</Eyebrow>
      <Headline
        solid={contact.headline.solid}
        outline={contact.headline.outline}
        className="mt-7 text-[3.6rem] leading-[0.88] md:text-[9.4rem]"
        stroke="1.8px"
      />
      <p className="mt-11 max-w-[640px] font-sans text-base leading-relaxed text-bone/80 md:text-[1.35rem] md:leading-[2.1rem]">
        {contact.intro}
      </p>

      <div className="mt-12">
        {contact.channels.map((c) => (
          <a
            key={c.k}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 border-t hairline py-7 last:border-b md:gap-10"
          >
            <span className="w-28 shrink-0 font-sans text-sm font-medium uppercase tracking-[0.16em] text-bone/45 md:w-40">
              {c.k}
            </span>
            <span className="display flex-1 text-[1.7rem] md:text-[2.9rem]">{c.v}</span>
            <span className="w-8 shrink-0 text-right text-xl text-teal transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
