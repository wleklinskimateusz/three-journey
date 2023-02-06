import { Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gui } from "./gui";

type FrameProps = {
  controls: OrbitControls;
};

const speed = {
  y: 0.1,
  x: 0.15,
};

gui.add(speed, "x", 0, 1, 0.1).name("rotationX");
gui.add(speed, "y", 0, 1, 0.1).name("rotationY");

export function createFrame({
  controls,
}: FrameProps): (seconds: number, scene: Scene) => void {
  return (seconds, scene) => {
    const meshes = scene.children.filter((child) => child.type === "Mesh");
    meshes.forEach((mesh) => {
      mesh.rotation.y = speed.y * seconds * 2 * Math.PI;
      mesh.rotation.x = speed.x * seconds * 2 * Math.PI;
    });
    controls.update();
  };
}
