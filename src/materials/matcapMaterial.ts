import { MeshMatcapMaterial } from "three";
import { gui } from "../gui";
import { matcaps } from "../textures/matcaps";

export const matcapMaterial = new MeshMatcapMaterial();

matcapMaterial.matcap = matcaps[0];

export const matcapMaterialGui = gui.addFolder("Matcap Material");

matcapMaterialGui.add(
  {
    "shuffle material": () => {
      if (!matcapMaterial.matcap) return;
      let random = Math.floor(Math.random() * matcaps.length);
      while (random === matcaps.indexOf(matcapMaterial.matcap))
        random = Math.floor(Math.random() * matcaps.length);

      matcapMaterial.matcap = matcaps[random];
    },
  },
  "shuffle material"
);
