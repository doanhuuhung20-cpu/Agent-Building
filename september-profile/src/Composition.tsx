import { Composition } from "remotion";
import { MainComp } from "./MainComp";
import "./index.css";

export const MyComposition = () => {
  return (
    <>
      <Composition
        id="DoanHuuHungProfile"
        component={MainComp}
        durationInFrames={3600} // 60s at 60fps
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
