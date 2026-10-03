import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const GoalsSection: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active from 2400 to 3300
  const localFrame = frame - 2400;

  // Counter 0 to 100M
  const moneyCounter = Math.floor(interpolate(localFrame, [120, 240], [0, 100000000], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  // Drag and drop logic
  const fileX = interpolate(localFrame, [360, 420], [0, 200], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fileY = interpolate(localFrame, [360, 420], [0, 50], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fileOpacity = interpolate(localFrame, [410, 420], [1, 0]);
  
  const folderScale = spring({ frame: localFrame - 420, fps, config: { damping: 10 } });
  const finalFolderScale = interpolate(folderScale, [0, 1], [1, 1.2]);
  const folderColor = localFrame > 420 ? "#10B981" : "#E2E8F0";

  // List falling
  const listItems = ["Tự chủ tài chính", "Học AI", "Quản lý chuyên môn cao"];

  // Highlighter
  const highlightWidth = interpolate(localFrame, [720, 810], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      
      {/* 100M VND */}
      <div style={{ fontSize: 80, fontWeight: 900, color: "#0F172A", marginBottom: 40 }}>
        {moneyCounter.toLocaleString()} VNĐ <span style={{ color: "#10B981", transform: `scale(${moneyCounter === 100000000 ? 1.2 : 1})`, display: "inline-block", transition: "transform 0.3s" }}>💰</span>
      </div>

      <div style={{ display: "flex", gap: 100, alignItems: "center", marginBottom: 60, position: "relative" }}>
        {/* File */}
        <div style={{ 
          width: 100, height: 140, backgroundColor: "#FFFFFF", borderRadius: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          position: "absolute", left: -250 + fileX, top: fileY, opacity: fileOpacity,
          display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 10, fontSize: 14, fontWeight: "bold"
        }}>
          Tốt nghiệp Giỏi
        </div>
        
        {/* Folder */}
        <div style={{ 
          width: 160, height: 120, backgroundColor: folderColor, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
          transform: `scale(${finalFolderScale})`, transition: "background-color 0.3s"
        }}>
          <span style={{ fontWeight: "bold", color: "#FFFFFF" }}>DU HỌC</span>
        </div>
      </div>

      {/* List items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {listItems.map((item, i) => {
          const dropSpring = spring({ frame: localFrame - (500 + i * 20), fps, config: { damping: 12 } });
          return (
            <div key={item} style={{
              width: 400, padding: 20, backgroundColor: "#FFFFFF", borderRadius: 12, boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              transform: `translateY(${interpolate(dropSpring, [0,1], [-50, 0])}px)`,
              opacity: dropSpring,
              fontWeight: "bold", color: "#0F172A", textAlign: "center"
            }}>
              {item}
            </div>
          );
        })}
      </div>

      {/* Philosophy */}
      <div style={{ marginTop: 60, fontSize: 32, fontWeight: "bold", position: "relative" }}>
        Hạnh phúc: Tiền | Tin tưởng: <span style={{ position: "relative", zIndex: 1 }}>Sự trung thành</span>
        <div style={{ position: "absolute", right: 0, bottom: 0, width: `${highlightWidth}%`, height: "40%", backgroundColor: "#FDE047", zIndex: 0, opacity: 0.6 }} />
      </div>

    </div>
  );
};
