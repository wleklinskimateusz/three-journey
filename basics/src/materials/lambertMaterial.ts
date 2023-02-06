import { MeshLambertMaterial } from "three";
import { gui } from "../gui";

export const lambertMaterial = new MeshLambertMaterial();
lambertMaterial.emissive.set("black");
gui.addColor(lambertMaterial, "color");
