import { AmbientLight, AxesHelper, PointLight, WebGLRenderer } from "three";
import { addObjectGui } from "./gui";
import { makeScene } from "./makeScene";
import { setupCamera } from "./setupCamera";
import { Sizes } from "./types/Sizes";
import { gsap } from "gsap";

function setupElements({ sizes }: { sizes: Sizes }) {
  const camera = setupCamera({ sizes });
  const axesHelper = new AxesHelper(5);
  const light = new AmbientLight(0xfff, 0.5);
  const pointLight = new PointLight(0xfff, 0.5);
  pointLight.position.set(2, 3, 4);
  return { camera, axesHelper, light, pointLight };
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

  scene.add(...Object.values(initialElements), ...Object.values(elements));
  Object.entries(elements).forEach(([name, mesh]) => {
    addObjectGui({
      mesh,
      name,
      callbacks: {
        spin: () => {
          console.log("spin");
          gsap.to(mesh.rotation, {
            duration: 1,
            y: mesh.rotation.y + 2 * Math.PI,
          });
        },
      },
    });
  });

  const renderer = new WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
  return { camera, renderer };
}
