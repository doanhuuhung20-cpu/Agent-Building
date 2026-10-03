import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const LifestyleSection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active from 1500 to 2400
  const localFrame = frame - 1500;

  // Slider animation
  const sliderProgress = interpolate(localFrame, [120, 180], [0, 50], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  
  // Pie chart drawing
  const pieProgress = interpolate(localFrame, [360, 420], [0, 360], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Stress Alert popup
  const alertSpring = spring({ frame: localFrame - 600, fps, config: { damping: 14 } });

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", gap: "40px", justifyContent: "center", alignItems: "center" }}>
      
      {/* 1. Slider */}
      <div style={{ width: 300, height: 200, backgroundColor: "#FFFFFF", borderRadius: 24, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, color: "#64748B", fontWeight: "bold" }}>
          <span>Introvert</span><span>Extrovert</span>
        </div>
        <div style={{ width: "100%", height: 8, backgroundColor: "#E2E8F0", borderRadius: 4, position: "relative" }}>
          <div style={{ position: "absolute", left: `${sliderProgress}%`, top: -8, width: 24, height: 24, backgroundColor: "#2563EB", borderRadius: "50%", transform: "translateX(-50%)", boxShadow: "0 4px 6px rgba(37, 99, 235, 0.3)" }} />
        </div>
        <div style={{ textAlign: "center", marginTop: 24, fontSize: 24, fontWeight: "bold", color: "#2563EB", opacity: sliderProgress === 50 ? 1 : 0.3 }}>Ambivert</div>
      </div>

      {/* 2. Pie Chart */}
      <div style={{ width: 300, height: 200, backgroundColor: "#FFFFFF", borderRadius: 24, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 120, height: 120, borderRadius: "50%", background: `conic-gradient(#2563EB ${pieProgress}deg, #E2E8F0 ${pieProgress}deg)` }} />
      </div>

      {/* 3. Stress Alert */}
      <div style={{ width: 300, height: 200, backgroundColor: "#FFFFFF", borderRadius: 24, padding: 24, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{
          position: "absolute",
          width: "110%", height: "110%",
          backgroundColor: "#FEF3C7",
          borderRadius: 24,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          transform: `scale(${alertSpring})`,
          opacity: alertSpring,
          boxShadow: "0 20px 40px rgba(245, 158, 11, 0.2)"
        }}>
          <div style={{ fontSize: 24, fontWeight: "bold", color: "#D97706" }}>Stress: 8/10</div>
          <div style={{ fontSize: 14, color: "#B45309", marginTop: 8 }}>Ngủ kém do thất thường</div>
        </div>
      </div>

    </div>
  );
};
