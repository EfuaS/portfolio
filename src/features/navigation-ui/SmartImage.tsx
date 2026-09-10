import { useCallback, useState } from "react";
import { ImageOff } from "lucide-react";

type FallbackVariant = "monogram" | "panel";

type SmartImageProps = {
  /** Remote image URL. May be undefined/empty — the fallback renders instead. */
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
 * Remote assets live on Firebase Storage, which can stop serving them (plan
 * downgrade, expired token, deleted bucket object). When that happens the page
 * should still look deliberate, so we swap in an on-brand placeholder rather
 * than leaving a hole in the layout.
 *
 * Also shows a shimmer while the image is in flight so slow connections get
 * feedback instead of an empty box.
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
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    src ? "loading" : "error",
  );

  // Cached images can finish decoding before React attaches onLoad, so settle
  // the status from the node itself the moment it mounts.
  const measureOnMount = useCallback((node: HTMLImageElement | null) => {
    if (!node || !node.complete) return;
    setStatus(node.naturalWidth > 0 ? "loaded" : "error");
  }, []);

  const label = fallbackLabel ?? alt;
  const showFallback = status === "error";

  return (
    <div
      className={`@container relative isolate size-full overflow-hidden bg-slate-800/40 ${wrapperClassName}`}
    >
      {!showFallback && src && (
        <img
          ref={measureOnMount}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`${className} ${status === "loaded" ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        />
      )}

      {/* Shimmer placeholder while the bytes are still on the wire */}
      {status === "loading" && (
        <div className="absolute inset-0 shimmer" aria-hidden="true" />
      )}

      {showFallback &&
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
