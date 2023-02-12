import { CubeTextureLoader } from "three";
import { loadingManager } from "../loadingManager";

const cubeTextureLoader = new CubeTextureLoader(loadingManager);

export const environments = ["alley", "field", "street", "town"] as const;

export const environmentsMap = Object.fromEntries(
  environments.map((environment) => [
    environment,
    cubeTextureLoader.load([
      `textures/environmentMaps/${environment}/px.jpg`,
      `textures/environmentMaps/${environment}/nx.jpg`,
      `textures/environmentMaps/${environment}/py.jpg`,
      `textures/environmentMaps/${environment}/ny.jpg`,
      `textures/environmentMaps/${environment}/pz.jpg`,
      `textures/environmentMaps/${environment}/nz.jpg`,
    ]),
  ])
);
