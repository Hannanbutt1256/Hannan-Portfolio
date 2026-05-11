import { useState } from "react";
import { portfolioData } from "../../data/portfolio";

function Contact() {
  const { hero } = portfolioData;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    if (!validateEmail(email)) {
      e.preventDefault();
      setEmailError("Please enter a valid email address before submitting.");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr] md:gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-text-muted">
              Open to collaborations, freelance work, and full-time roles in AI
              engineering and frontend development. Drop a message — I reply
              within a day or two.
            </p>

            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-text-subtle">Email</dt>
                <dd className="min-w-0 flex-1">
                  <a
                    href={`mailto:${hero.email}`}
                    className="break-all text-text underline-offset-4 transition hover:text-text hover:underline"
                  >
                    {hero.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-text-subtle">Location</dt>
                <dd className="min-w-0 flex-1 text-text-muted">{hero.location}</dd>
              </div>
            </dl>
          </div>

          <form
            action="https://formspree.io/f/mblrlwlw"
            method="POST"
            onSubmit={handleSubmit}
            target="_blank"
            className="glass space-y-4 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" hidden>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
                className="input-glass"
              />
            </div>

            <div>
              <label htmlFor="email" hidden>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="input-glass"
              />
              {emailError && (
                <span className="mt-1 block text-xs text-red-400">
                  {emailError}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="message" hidden>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="input-glass resize-none"
              />
            </div>

            <button type="submit" className="btn-accent w-full sm:w-auto">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
