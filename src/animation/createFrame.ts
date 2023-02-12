import { Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gui } from "../gui";

type FrameProps = {
  controls: OrbitControls;
};

const speed = {
  y: 0.1,
  x: 0.15,
};

export function animationFrame({
  controls,
}: FrameProps): (seconds: number, scene: Scene) => void {
  return (seconds, scene) => {
    const meshes = scene.children
      .filter((child) => child.type === "Mesh")
      .filter((child) => child.name !== "text");
    meshes.forEach((mesh) => {
      mesh.rotation.y = speed.y * seconds * 2 * Math.PI;
      mesh.rotation.x = speed.x * seconds * 2 * Math.PI;
    });
    const text = scene.getObjectByName("text");
    if (!text) throw new Error("text not found");
    const sinFunc =
      Math.pow(Math.sin((seconds * 2 * Math.PI) / 3), 2) * 0.5 + 0.5;
    text.scale.set(sinFunc, sinFunc, sinFunc);
    text.rotation.y = (seconds * 2 * Math.PI) / 3;
    controls.update();
  };
}
