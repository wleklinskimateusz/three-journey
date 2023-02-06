import { MeshNormalMaterial } from "three";
import { door } from "../textures/door";

export const normalMaterial = new MeshNormalMaterial();

normalMaterial.flatShading = true;

normalMaterial.normalMap = door.height;
