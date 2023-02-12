import { MeshStandardMaterial } from "three";
import { door } from "../textures/door";

export const doorMaterial = new MeshStandardMaterial();

doorMaterial.map = door.color;
doorMaterial.aoMap = door.ambientOcclusion;
doorMaterial.aoMapIntensity = 1;
doorMaterial.displacementMap = door.height;
doorMaterial.displacementScale = 0.05;
doorMaterial.metalnessMap = door.metalness;
doorMaterial.roughnessMap = door.roughness;
doorMaterial.normalMap = door.normal;

// doorMaterial.transparent = true;
// doorMaterial.alphaMap = door.alpha;
