import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type FrameProps = {
  controls: OrbitControls;
};

export function createFrame({
  controls,
}: FrameProps): (seconds: number) => void {
  return () => {
    controls.update();
  };
}
