import { MeshToonMaterial } from "three";
import { gradients } from "../textures/gradients";

export const toonMaterial = new MeshToonMaterial();
toonMaterial.gradientMap = gradients[1];
