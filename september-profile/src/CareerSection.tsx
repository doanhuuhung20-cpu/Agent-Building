import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const CareerSection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Section runs globally, but is in focus between frame 600 and 1500
  // Local frame reference starting at 600
  const localFrame = frame - 600;

  // HUST Card Animation
  const hustScale = spring({
    frame: localFrame - 120, // Hover at 2s into scene (720)
    fps,
    config: { mass: 1, stiffness: 120, damping: 14 }
  });
  const hustFinalScale = interpolate(hustScale, [0, 1], [1, 1.05]);

  // Modal Morph (Click at 15s -> local 300)
  const modalProgress = spring({
    frame: localFrame - 420,
    fps,
    config: { mass: 1, stiffness: 100, damping: 14 }
  });

  const cardWidth = interpolate(modalProgress, [0, 1], [300, 800]);
  const cardHeight = interpolate(modalProgress, [0, 1], [100, 400]);
  const cardX = interpolate(modalProgress, [0, 1], [0, -350]); // expand to left
  const cardY = interpolate(modalProgress, [0, 1], [0, -150]); // expand up

  // Icons staggering
  const iconNames = ["Ps", "Ai", "Pr", "Ae", "Fg", "Bl", "Cv"];
  
  // GPA Progress (start at local 720)
  const gpaProgress = interpolate(localFrame, [720, 810], [0, 95], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", gap: "40px", justifyContent: "center" }}>
      
      {/* HUST Card */}
      <div style={{
        width: 300, height: 100,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        boxShadow: `0 10px 25px rgba(0,0,0,${interpolate(hustScale, [0,1], [0.05, 0.15])})`,
        transform: `scale(${hustFinalScale})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexDirection: "column",
        opacity: localFrame > 0 ? 1 : 0
      }}>
        <div style={{ fontSize: 24, fontWeight: "bold", color: "#0F172A" }}>HUST</div>
        <div style={{ fontSize: 14, color: "#64748B" }}>Ngôn ngữ Anh kỹ thuật</div>
      </div>

      {/* Nha Khoa Card -> Modal */}
      <div style={{ position: "relative", width: 300, height: 100 }}>
        <div style={{
          position: "absolute",
          left: cardX, top: cardY,
          width: cardWidth, height: cardHeight,
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
          borderRadius: interpolate(modalProgress, [0, 1], [16, 24]),
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          opacity: localFrame > 0 ? 1 : 0,
          overflow: "hidden"
        }}>
          {modalProgress < 0.5 ? (
            <div style={{ fontSize: 20, fontWeight: "bold", color: "#0F172A" }}>Nha Khoa Răng Hà Nội</div>
          ) : (
            <div style={{ padding: 40, width: "100%" }}>
              <div style={{ fontSize: 32, fontWeight: "bold", color: "#0F172A", textAlign: "center", marginBottom: 40 }}>Graphic Design & Video Editor</div>
              
              <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 40 }}>
                {iconNames.map((name, i) => {
                  const s = spring({ frame: localFrame - (500 + i * 10), fps, config: { damping: 12 } });
                  return (
                    <div key={name} style={{
                      width: 60, height: 60, borderRadius: 12, backgroundColor: "#E2E8F0",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: "bold", fontSize: 20,
                      transform: `scale(${s}) translateY(${interpolate(s, [0,1], [30, 0])}px)`
                    }}>
                      {name}
                    </div>
                  );
                })}
              </div>

              {/* Progress Bar */}
              <div style={{ width: "100%", height: 16, backgroundColor: "#E2E8F0", borderRadius: 100, overflow: "hidden" }}>
                <div style={{ width: `${gpaProgress}%`, height: "100%", backgroundColor: "#2563EB" }} />
              </div>
              <div style={{ textAlign: "right", marginTop: 8, fontWeight: "bold", color: "#2563EB" }}>GPA 9+</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
