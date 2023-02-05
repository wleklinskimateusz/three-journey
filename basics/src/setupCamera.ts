import * as THREE from "three";
import { Sizes } from "./types/Sizes";

type SetupCameraProps = {
  sizes: Sizes;
};

export function setupCamera({ sizes }: SetupCameraProps) {
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    1,
    1000
  );
  camera.position.z = 4;
  return camera;
}
