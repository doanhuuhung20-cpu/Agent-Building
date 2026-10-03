import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Img } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont();

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Timing (assuming 60fps)
  const searchBarAppearFrame = 60;
  const cursorAppearFrame = 120;
  const clickFrame = 160;
  const typingStart = 180;
  const morphStart = 360;
  const avatarAppear = 420;
  const textAppear = 480;

  // 1. Search Bar Appear (60-120)
  const searchBarOpacity = interpolate(frame, [searchBarAppearFrame, searchBarAppearFrame + 20], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  
  // 2. Morph to Card (360-420)
  const morphProgress = spring({
    frame: frame - morphStart,
    fps,
    config: { mass: 1, stiffness: 100, damping: 14 } // Smooth but snappy
  });

  // Calculate Search Bar vs Card properties
  // Search bar: width 400px, height 60px, borderRadius 100px
  // Card: width 80% (approx 1024px for 1280), height 80% (approx 576px for 720), borderRadius 24px
  const targetWidth = width * 0.8;
  const targetHeight = height * 0.8;
  
  const boxWidth = interpolate(morphProgress, [0, 1], [400, targetWidth]);
  const boxHeight = interpolate(morphProgress, [0, 1], [60, targetHeight]);
  const boxRadius = interpolate(morphProgress, [0, 1], [100, 24]);
  const boxShadowY = interpolate(morphProgress, [0, 1], [4, 12]);
  const boxBlur = interpolate(morphProgress, [0, 1], [12, 24]);

  // 3. Typing Effect
  const textToType = "Đoàn Hữu Hùng";
  const typedLength = Math.floor(
    interpolate(frame, [typingStart, typingStart + 90], [0, textToType.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const currentText = textToType.substring(0, typedLength);
  const showPlaceholder = frame < typingStart;
  const displayText = morphProgress > 0 ? "" : (showPlaceholder ? "Tìm kiếm hồ sơ..." : currentText);
  const textOpacity = interpolate(morphProgress, [0, 0.2], [1, 0]); // fade out text when morphing

  // 4. Cursor Simulation
  const cursorX = interpolate(frame, [cursorAppearFrame, clickFrame], [width + 50, width / 2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cursorY = interpolate(frame, [cursorAppearFrame, clickFrame], [height + 50, height / 2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cursorScale = spring({ frame: frame - clickFrame, fps, config: { damping: 12 } });
  const cursorFinalScale = interpolate(cursorScale, [0, 0.5, 1], [1, 0.8, 1]);
  const cursorOpacity = interpolate(morphProgress, [0, 0.2], [1, 0]); // Hide cursor after morph

  // 5. Avatar Appear
  const avatarScale = spring({ frame: frame - avatarAppear, fps, config: { mass: 1, stiffness: 120, damping: 14 } });
  
  // 6. Text Details Appear
  const nameY = interpolate(spring({ frame: frame - textAppear, fps }), [0, 1], [20, 0]);
  const nameOpacity = interpolate(spring({ frame: frame - textAppear, fps }), [0, 1], [0, 1]);

  // Global Camera Zoom
  const cameraZoom = interpolate(frame, [540, 600], [1, 1.05], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#F8FAFC", fontFamily, transform: `scale(${cameraZoom})` }}>
      
      {/* Noise Overlay */}
      <AbsoluteFill style={{ opacity: 0.02, backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')" }} />

      {/* Center Container */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        
        {/* Search Bar / Card Morph */}
        <div style={{
          width: boxWidth,
          height: boxHeight,
          backgroundColor: "#FFFFFF",
          borderRadius: boxRadius,
          boxShadow: `0 ${boxShadowY}px ${boxBlur}px rgba(0,0,0,0.05)`,
          display: "flex",
          justifyContent: morphProgress > 0.5 ? "flex-start" : "center",
          alignItems: morphProgress > 0.5 ? "flex-start" : "center",
          opacity: searchBarOpacity,
          position: "relative",
          overflow: "hidden",
          padding: morphProgress > 0.5 ? "40px" : "0"
        }}>
          
          {/* Inner Search Text */}
          <div style={{ opacity: textOpacity, fontSize: 24, color: showPlaceholder ? "#94A3B8" : "#0F172A", display: morphProgress > 0.5 ? "none" : "block" }}>
            {displayText}
            <span style={{ opacity: frame % 30 < 15 ? 1 : 0, color: "#2563EB" }}>|</span>
          </div>

          {/* Card Content (Visible after morph) */}
          <div style={{ opacity: morphProgress, display: morphProgress > 0.1 ? "flex" : "none", flexDirection: "column" }}>
            
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              {/* Avatar */}
              <div style={{ 
                width: 120, height: 120, 
                borderRadius: "50%", 
                background: "linear-gradient(45deg, #2563EB, #10B981)",
                padding: 4,
                transform: `scale(${avatarScale})`,
                opacity: avatarScale
              }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#E2E8F0" }} />
              </div>

              {/* Text Info */}
              <div style={{ transform: `translateY(${nameY}px)`, opacity: nameOpacity, display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <h1 style={{ margin: 0, fontSize: 40, fontWeight: 700, color: "#0F172A", letterSpacing: "-0.02em" }}>Đoàn Hữu Hùng</h1>
                  <div style={{ backgroundColor: "#DBEAFE", color: "#1E40AF", padding: "4px 12px", borderRadius: 100, fontSize: 16, fontWeight: 600 }}>September</div>
                </div>
                <div style={{ fontSize: 18, color: "#64748B", marginTop: 4 }}>Sinh năm: 2004</div>
                <div style={{ fontSize: 18, color: "#64748B" }}>Location: Hà Nội, Việt Nam</div>
              </div>
            </div>

          </div>

        </div>
      </AbsoluteFill>

      {/* Simulated Cursor */}
      <div style={{
        position: "absolute",
        left: cursorX,
        top: cursorY,
        transform: `scale(${cursorFinalScale})`,
        opacity: cursorOpacity,
        zIndex: 9999
      }}>
        {/* Simple SVG Cursor */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 2.5L13.5 29.5L17.5 17.5L29.5 13.5L5.5 2.5Z" fill="black" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

    </AbsoluteFill>
  );
};
