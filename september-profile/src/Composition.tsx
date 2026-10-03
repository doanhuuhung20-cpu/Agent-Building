import { Composition } from "remotion";
import { Scene1 } from "./Scene1";
import "./index.css";

export const MyComposition = () => {
  return (
    <>
      <Composition
        id="DoanHuuHungProfile"
        component={Scene1}
        durationInFrames={600} // 10s at 60fps
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
