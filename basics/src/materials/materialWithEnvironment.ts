import { MeshStandardMaterial } from "three";
import { environmentsMap } from "../environments";
import { gui } from "../gui";

export const materialWithEnvironment = new MeshStandardMaterial();

materialWithEnvironment.metalness = 0.7;
materialWithEnvironment.roughness = 0.2;

const folder = gui.addFolder("Material with Environment");

folder.add(materialWithEnvironment, "metalness").min(0).max(1).step(0.0001);
folder.add(materialWithEnvironment, "roughness").min(0).max(1).step(0.0001);

materialWithEnvironment.envMap = environmentsMap[0];
