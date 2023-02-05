import { AxesHelper, WebGLRenderer } from "three";
import { makeScene } from "./makeScene";
import { setupCamera } from "./setupCamera";
import { Sizes } from "./types/Sizes";

function setupElements({ sizes }: { sizes: Sizes }) {
  const camera = setupCamera({ sizes });
  const axesHelper = new AxesHelper(5);
  return { camera, axesHelper };
}

type RenderSceneProps = {
  scene: THREE.Scene;
  sizes: Sizes;
  canvas: HTMLCanvasElement;
};

export function renderScene({ scene, sizes, canvas }: RenderSceneProps) {
  const initialElements = setupElements({ sizes });
  const { camera } = initialElements;
  const elements = makeScene();
  [...Object.values(initialElements), ...Object.values(elements)].forEach(
    (element) => scene.add(element)
  );
  const renderer = new WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
  return { camera, renderer };
}
