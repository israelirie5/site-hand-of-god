import Image from "next/image";

export function CinematicImage({
  src,
  alt,
  className = "",
  priority = false,
  fit = "cover",
  position = "center top",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  position?: string;
}) {
  return (
    <div className={`image-grain relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={fit === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
