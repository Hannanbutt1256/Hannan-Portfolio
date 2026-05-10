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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass glass-hi flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-4">
          <h3 className="font-display text-lg font-semibold">Resume Preview</h3>
          <div className="flex items-center gap-2">
            <a href={resumeLink} download className="btn-glass">
              Download PDF
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-surface-2">
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
