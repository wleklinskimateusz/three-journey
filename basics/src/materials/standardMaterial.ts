import { MeshStandardMaterial } from "three";
import { gui } from "../gui";
import { door } from "../textures/door";

export const standardMaterial = new MeshStandardMaterial();

standardMaterial.map = door.color;
standardMaterial.aoMap = door.ambientOcclusion;
standardMaterial.aoMapIntensity = 1;
standardMaterial.displacementMap = door.height;
standardMaterial.displacementScale = 0.05;
standardMaterial.metalnessMap = door.metalness;
standardMaterial.roughnessMap = door.roughness;
standardMaterial.normalMap = door.normal;

standardMaterial.transparent = true;
standardMaterial.alphaMap = door.alpha;

const folder = gui.addFolder("Standard Material");

folder.add(standardMaterial, "metalness", 0, 1, 0.01);
folder.add(standardMaterial, "roughness", 0, 1, 0.01);
folder.add(standardMaterial, "aoMapIntensity", 0, 10, 0.01);
folder.add(standardMaterial, "displacementScale", 0, 1, 0.01);
