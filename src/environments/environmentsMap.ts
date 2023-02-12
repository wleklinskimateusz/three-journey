import { CubeTextureLoader } from "three";
import { loadingManager } from "../loadingManager";

const cubeTextureLoader = new CubeTextureLoader(loadingManager);

export const environmentsMap = new Array(4)
  .fill(null)
  .map((_, i) =>
    cubeTextureLoader.load([
      `textures/environmentMaps/${i}/px.jpg`,
      `textures/environmentMaps/${i}/nx.jpg`,
      `textures/environmentMaps/${i}/py.jpg`,
      `textures/environmentMaps/${i}/ny.jpg`,
      `textures/environmentMaps/${i}/pz.jpg`,
      `textures/environmentMaps/${i}/nz.jpg`,
    ])
  );
