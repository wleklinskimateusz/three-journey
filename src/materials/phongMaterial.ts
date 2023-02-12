import { Color, MeshPhongMaterial } from "three";

export const phongMaterial = new MeshPhongMaterial();
phongMaterial.shininess = 100;
phongMaterial.specular = new Color("tomato");
