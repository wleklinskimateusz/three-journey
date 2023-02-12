import {
  AmbientLight,
  AxesHelper,
  PointLight,
  WebGLRenderer,
  Mesh,
} from "three";
import { addObjectGui, gui } from "./gui";
import { makeScene } from "./makeScene";
import { setupCamera } from "./setupCamera";
import { Sizes } from "./types/Sizes";
import { matcapMaterial, matcapMaterialGui } from "./materials/matcapMaterial";
import { mirrorMaterial, mirrorMaterialGui } from "./materials/mirrorMaterial";
import { doorMaterial } from "./materials/doorMaterial";

function setupElements({ sizes }: { sizes: Sizes }) {
  const camera = setupCamera({ sizes });
  // const axesHelper = new AxesHelper(5);
  const light = new AmbientLight(0xffffff, 0.5);
  const pointLight = new PointLight(0xffffff, 0.5);
  pointLight.position.set(2, 3, 4);
  return { camera, light, pointLight };
}

type RenderSceneProps = {
  scene: THREE.Scene;
  sizes: Sizes;
  canvas: HTMLCanvasElement;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function renderScene({ scene, sizes, canvas }: RenderSceneProps) {
  const initialElements = setupElements({ sizes });
  const { camera } = initialElements;
  const elements = makeScene();
  scene.add(...Object.values(initialElements), ...Object.values(elements));

  const materials = ["mirror", "matcap", "door"] as const;

  gui
    .add({ material: "matcap" }, "material", materials)
    .onChange((value: typeof materials[number]) => {
      Object.values(elements)
        .filter((mesh) => mesh.name !== "star")
        .forEach((mesh) => {
          switch (value) {
            case "mirror":
              mesh.material = mirrorMaterial;
              mirrorMaterialGui.show();
              matcapMaterialGui.hide();
              break;
            case "matcap":
              mesh.material = matcapMaterial;
              mirrorMaterialGui.hide();
              matcapMaterialGui.show();
              break;
            case "door":
              mesh.material = doorMaterial;
              mirrorMaterialGui.hide();
              matcapMaterialGui.hide();
              break;
          }
        });
    });
  gui.add(
    {
      "Check out the code": () =>
        window.open(
          "https://github.com/wleklinskimateusz/three-journey-01-basics"
        ),
    },
    "Check out the code"
  );

  const renderer = new WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
  return { camera, renderer };
}
