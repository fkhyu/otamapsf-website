"use client";
import { useElementSize } from "@/hooks/useElementSize";

export default function Globe() {
  const [ref, size] = useElementSize<HTMLDivElement>();
  const { width } = size;

  const diameter = width;
  const radius = diameter / 2;

  // Adjust bottom arc radius
  const bottomArcHeight = radius * 0.15; // tweak this for more/less arc
  const cy = radius + bottomArcHeight;

  const path =
    width > 0
      ? `
        M 0 ${radius}
        A ${radius} ${radius} 0 0 1 ${diameter} ${radius}
        Q ${radius} ${radius + bottomArcHeight * 2} 0 ${radius}
        Z
      `.replace(/\s+/g, " ")
      : "";

  return (
    <div
      ref={ref}
      className="relative w-[120vw] h-[69vw] bg-[#44449D] shadow-2xl overflow-hidden mt-12"
      style={{
        clipPath: path ? `path("${path}")` : undefined,
        WebkitClipPath: path ? `path("${path}")` : undefined,
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_55.48%_55.48%_at_50.00%_50.00%,_#F2F2F2_0%,_rgba(180.62,_180.62,_180.62,_0)_100%)] opacity-80"></div>
        <div className="absolute w-full h-full opacity-80 bg-[#FFB974] mix-blend-color"></div>
        <div className="moving-svg-container">
          <img src="/map.png" alt="rotating world map" className="world-strip" />
          <img src="/map.png" alt="rotating world map" className="world-strip" />
        </div>
      </div>
    </div>
  );
}
