import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Scene1 } from "./Scene1";
import { CareerSection } from "./CareerSection";
import { LifestyleSection } from "./LifestyleSection";
import { GoalsSection } from "./GoalsSection";

export const MainComp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Camera coordinates
  // 0-600: (0,0)
  // 600-720: Move to (0, height)
  // 1500-1620: Move to (width, height)
  // 2400-2520: Move to (width, height * 2)

  const camY1 = interpolate(frame, [540, 660], [0, height], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const camX2 = interpolate(frame, [1440, 1560], [0, width], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const camY3 = interpolate(frame, [2340, 2460], [height, height * 2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const finalCamX = camX2;
  const finalCamY = camY1 > 0 && camY3 === height ? camY1 : camY3; 

  // Ending Animation (3300 - 3600)
  const endingFrame = frame - 3300;
  const globalScale = interpolate(endingFrame, [0, 60], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  
  // The Button that appears
  const btnScale = spring({ frame: endingFrame - 60, fps, config: { damping: 12 } });
  const btnMorph = interpolate(endingFrame, [120, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }); // 0: pill, 1: circle
  const btnWidth = interpolate(btnMorph, [0, 1], [300, 100]);
  const btnBg = btnMorph > 0.5 ? "#10B981" : "#2563EB";
  const btnRadius = interpolate(btnMorph, [0, 1], [50, 50]); // always round

  return (
    <AbsoluteFill style={{ backgroundColor: "#F8FAFC", overflow: "hidden" }}>
      
      {/* The One-Shot Canvas */}
      <div style={{
        position: "absolute",
        width: width * 2,
        height: height * 3,
        transform: `translate(${-finalCamX}px, ${-finalCamY}px) scale(${globalScale})`,
        transformOrigin: `${finalCamX + width/2}px ${finalCamY + height/2}px`,
      }}>
        
        {/* Scene 1 (0,0) */}
        <div style={{ position: "absolute", left: 0, top: 0, width, height }}>
          <Scene1 />
        </div>

        {/* Scene 2: Career (0, height) */}
        <div style={{ position: "absolute", left: 0, top: height, width, height }}>
          <CareerSection />
        </div>

        {/* Scene 3: Lifestyle (width, height) */}
        <div style={{ position: "absolute", left: width, top: height, width, height }}>
          <LifestyleSection />
        </div>

        {/* Scene 4: Goals (width, height * 2) */}
        <div style={{ position: "absolute", left: width, top: height * 2, width, height }}>
          <GoalsSection />
        </div>

      </div>

      {/* Ending Button */}
      {frame >= 3360 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{
            width: btnWidth, height: 100, backgroundColor: btnBg, borderRadius: btnRadius,
            display: "flex", justifyContent: "center", alignItems: "center",
            transform: `scale(${btnScale})`,
            color: "#FFFFFF", fontSize: 24, fontWeight: "bold",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            overflow: "hidden", transition: "background-color 0.3s"
          }}>
            {btnMorph > 0.5 ? "✔" : "September's Profile"}
          </div>
          
          {/* Agent Signature */}
          <div style={{ position: "absolute", bottom: 40, right: 40, fontSize: 16, color: "#94A3B8", opacity: interpolate(endingFrame, [200, 240], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}) }}>
            Hermes Agent
          </div>
        </AbsoluteFill>
      )}

    </AbsoluteFill>
  );
};
