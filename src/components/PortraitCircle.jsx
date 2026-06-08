// Circular portrait. Falls back to a labelled ring when no image is set.
const PORTRAIT_SRC = "/hannan-portrait-removebg-preview.png";

export default function PortraitCircle({ className = "", showImage = true }) {
  return (
    <div
      className={`relative overflow-hidden rounded-full border hairline bg-raised ${className}`}
    >
      {showImage ? (
        <img
          src={PORTRAIT_SRC}
          alt="Hannan Butt"
          className="h-full w-full object-cover object-top grayscale"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-sans text-sm uppercase tracking-[0.18em] text-bone/35">
            Portrait
          </span>
        </div>
      )}
    </div>
  );
}
