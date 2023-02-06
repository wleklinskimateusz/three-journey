import {
  AmbientLight,
  Mesh,
  MeshPhongMaterial,
  PlaneGeometry,
  PointLight,
  SphereGeometry,
  TorusGeometry,
} from "three";
import { lambertMaterial } from "./materials/lambertMaterial";
import { phongMaterial } from "./materials/PhongMaterial";

export function makeScene() {
  // you can import any material from the materials folder
  const material = new MeshPhongMaterial();

  const sphere = new Mesh(new SphereGeometry(0.5, 16, 16), material);
  sphere.position.x = -1.5;

  const plane = new Mesh(new PlaneGeometry(1, 1), material);

  const torus = new Mesh(new TorusGeometry(0.3, 0.2, 16, 32), material);
  torus.position.x = 1.5;

  return { sphere, plane, torus };
}
