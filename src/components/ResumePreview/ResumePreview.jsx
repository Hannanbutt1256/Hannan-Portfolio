import { useEffect } from "react";

function ResumePreview({ resumeLink, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-4"
      style={{
        paddingTop: "calc(0.75rem + env(safe-area-inset-top))",
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass glass-hi flex h-[90dvh] w-full max-w-4xl flex-col overflow-hidden sm:h-[85vh]"
      >
        <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3 sm:px-6 sm:py-4">
          <h3 className="font-display text-base font-semibold sm:text-lg">Resume</h3>
          <div className="flex items-center gap-2">
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              download
              className="btn-glass !px-3 !py-2 !text-xs sm:!px-5 sm:!text-sm"
            >
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* iOS Safari/Chrome can't render PDFs inside iframes — show a fallback
            with a clear "Open" CTA. Hidden on sm+ where the iframe works fine. */}
        <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-surface-2 p-6 text-center sm:hidden">
          <p className="text-sm text-text-muted">
            PDFs don't preview reliably on mobile browsers.
          </p>
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="btn-accent"
          >
            Open Resume
          </a>
        </div>
        <div className="hidden flex-1 bg-surface-2 sm:block">
          <iframe
            src={`${resumeLink}#view=FitH`}
            title="Resume Preview"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
