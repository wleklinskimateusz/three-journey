import { DoubleSide, MeshBasicMaterial } from "three";
import { gui } from "../gui";
import { door } from "../textures/door";
import { gradients } from "../textures/gradients";
import { matcaps } from "../textures/matcaps";

export const basicMaterial = new MeshBasicMaterial({
  map: door.color,
});
gui.add({ matcap: 0 }, "matcap", 0, 7, 1).onChange((value: number) => {
  basicMaterial.map = matcaps[value];
});
gui.add({ gradient: 0 }, "gradient", 0, 1, 1).onChange((value: number) => {
  basicMaterial.map = gradients[value];
});
basicMaterial.transparent = true;
basicMaterial.alphaMap = door.alpha;
basicMaterial.side = DoubleSide;
