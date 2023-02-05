import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

type HandleControlsProps = {
  camera: THREE.PerspectiveCamera;
  canvas: HTMLCanvasElement;
};

export function handleControls({ camera, canvas }: HandleControlsProps) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  return controls;
}
