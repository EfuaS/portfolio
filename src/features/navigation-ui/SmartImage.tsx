import { useCallback, useState } from "react";
import { ImageOff } from "lucide-react";

type FallbackVariant = "monogram" | "panel";

type SmartImageProps = {
  /** Image URL. May be undefined/empty — the fallback renders instead. */
  src?: string;
  alt: string;
  className?: string;
  /** Wrapper classes. The wrapper is what the shimmer/fallback fill. */
  wrapperClassName?: string;
  /** Text the fallback is built from (initials for monogram, caption for panel). */
  fallbackLabel?: string;
  fallbackVariant?: FallbackVariant;
  loading?: "lazy" | "eager";
};

/** "Lawrencia Efua Cobbina" -> "LC" */
function initialsOf(label: string) {
  const words = label.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/**
 * An <img> that degrades gracefully instead of showing a broken-image icon.
 *
 * Project screenshots are served from Firebase Storage, which can stop serving
 * them (plan downgrade, rotated download token, deleted object). When that
 * happens the page should still look deliberate, so we swap in an on-brand
 * placeholder rather than leaving a hole in the layout.
 *
 * Note on the loading state: the shimmer sits *behind* the image rather than
 * the image being hidden until a load event arrives. A cached or preloaded
 * image can finish before React wires up onLoad, and `load` does not bubble —
 * so a missed event is missed for good. Hiding the image on that path would
 * leave it invisible forever; letting it paint over the shimmer means the
 * worst case is a shimmer nobody ever sees.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  fallbackLabel,
  fallbackVariant = "monogram",
  loading = "lazy",
}: SmartImageProps) {
  const [failed, setFailed] = useState(!src);

  // Callback refs run after React has attached the load/error listeners, so an
  // image that already finished decoding is caught here instead of slipping by.
  const checkOnMount = useCallback((node: HTMLImageElement | null) => {
    if (!node || !node.complete) return;
    if (node.naturalWidth === 0) setFailed(true);
  }, []);

  const label = fallbackLabel ?? alt;

  return (
    <div
      className={`@container relative isolate size-full overflow-hidden bg-slate-800/40 ${wrapperClassName}`}
    >
      {!failed && src && (
        <>
          <div className="absolute inset-0 z-0 shimmer" aria-hidden="true" />
          <img
            ref={checkOnMount}
            src={src}
            alt={alt}
            loading={loading}
            decoding="async"
            onError={() => setFailed(true)}
            className={`relative z-10 ${className}`}
          />
        </>
      )}

      {failed &&
        (fallbackVariant === "monogram" ? (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0 grid place-content-center bg-linear-to-br from-teal-500/25 via-slate-800 to-slate-900"
          >
            <span className="text-[clamp(1.5rem,22cqw,7rem)] font-bold tracking-tight text-teal-200/80 select-none">
              {initialsOf(label)}
            </span>
          </div>
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-br from-slate-800 via-slate-900 to-slate-950 px-6 text-center"
          >
            <ImageOff className="text-teal-300/50" size={32} />
            <p className="text-sm font-medium text-slate-300">{label}</p>
            <p className="text-xs text-slate-500">Preview unavailable</p>
          </div>
        ))}
    </div>
  );
}
