import { MeshStandardMaterial } from "three";
import { environmentsMap } from "../environments";
import { environments } from "../environments/environmentsMap";
import { gui } from "../gui";

export const mirrorMaterial = new MeshStandardMaterial();

mirrorMaterial.metalness = 1;
mirrorMaterial.roughness = 0;

mirrorMaterial.envMap = environmentsMap.alley;

export const mirrorMaterialGui = gui.addFolder("Mirror Material");
mirrorMaterialGui
  .add({ environment: environments[0] }, "environment", environments)
  .onChange((value: typeof environments[number]) => {
    mirrorMaterial.envMap = environmentsMap[value];
  });

mirrorMaterialGui.hide();
