import { Scene, Mesh, SphereGeometry, MeshBasicMaterial } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

    const stars = scene.children.filter(
      (child) => child.name === "star"
    ) as Mesh<SphereGeometry, MeshBasicMaterial>[];
    stars.forEach((star) => {
      const currentColor = star.material.color;
      // randomize the color a bit
      const newColor = currentColor
        .clone()
        .addScalar((Math.random() - 0.5) * 0.1);

      star.material.color = newColor;
    });

    const camera = controls.object;
    camera.position.x = Math.sin((seconds * 2 * Math.PI) / 50) * 4;
    camera.position.z = Math.cos((seconds * 2 * Math.PI) / 50) * 5;
    camera.position.y = Math.sin((seconds * 2 * Math.PI) / 4) * 0.1;

    controls.update();
  };
}
