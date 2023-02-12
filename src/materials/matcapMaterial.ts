import { MeshMatcapMaterial } from "three";
import { gui } from "../gui";
import { matcaps } from "../textures/matcaps";

export const matcapMaterial = new MeshMatcapMaterial();

matcapMaterial.matcap = matcaps[0];
gui.add({ matcap: 0 }, "matcap", 0, 7, 1).onChange((value: number) => {
  matcapMaterial.matcap = matcaps[value];
});
