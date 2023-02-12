import { PerspectiveCamera } from "three";
import { Sizes } from "./types/Sizes";

type SetupCameraProps = {
  sizes: Sizes;
};

export function setupCamera({ sizes }: SetupCameraProps) {
  const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000);
  camera.position.z = 3.5;
  return camera;
}
