import { Scene } from "three";
import { handleAnimation } from "./handleAnimation";
import { createOnResize } from "./onEvents/createOnResize";
import { createOnDoubleClick } from "./onEvents/createOnDoubleClick";
import { handleControls } from "./handleControls";
import { Sizes } from "./types/Sizes";
import "./style.css";
import { createFrame } from "./createFrame";
import { renderScene } from "./renderScene";
import { loadingManager } from "./loadingManager";
import { fonts } from "./fonts";

const canvas = document.querySelector<HTMLCanvasElement>("#app")!;

const scene = new Scene();

const sizes: Sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

loadingManager.onLoad = () => {
  const { camera, renderer } = renderScene({ scene, sizes, canvas });
  const controls = handleControls({ camera, canvas });
  handleAnimation({
    scene,
    camera,
    renderer,
    callback: createFrame({ controls }),
  });
  window.addEventListener(
    "resize",
    createOnResize({ sizes, camera, renderer })
  );
  window.addEventListener("dblclick", createOnDoubleClick({ canvas }));
};
