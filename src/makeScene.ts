import {
  Mesh,
  SphereGeometry,
  MeshStandardMaterial,
  MeshMatcapMaterial,
  MeshBasicMaterial,
} from "three";
import { fonts } from "./fonts";
import { createTextGeometry } from "./geometries/createTextGeometry";
import { matcapMaterial } from "./materials/matcapMaterial";
import { createPlaneMesh } from "./meshes/createPlaneMesh";
import { createSphereMesh } from "./meshes/createSphereMesh";
import { createTorusMesh } from "./meshes/createTorusMesh";

export function makeScene() {
  // you can import any material from the materials folder
  const material = matcapMaterial as MeshStandardMaterial | MeshMatcapMaterial;

  const sphere = createSphereMesh(material);

  const plane = createPlaneMesh(material);

  const torus = createTorusMesh(material);

  if (!fonts.helvetiker) throw new Error("helvetiker font is not loaded");

  const text = new Mesh(
    createTextGeometry("Hello There", fonts.helvetiker),
    material
  );
  text.name = "text";
  text.position.y = 1;

  const getSphereCoords = (radius: number) => {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    return [
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
    ];
  };

  const entries = new Array(1000).fill(0).map((_, i) => {
    const starGeometry = new SphereGeometry(0.05, 8, 8);
    const starMaterial = new MeshBasicMaterial({ color: 0xff0000 });
    const star = new Mesh(starGeometry, starMaterial);
    const [x, y, z] = getSphereCoords(15);
    star.position.x = x;
    star.position.y = y;
    star.position.z = z;
    star.name = "star";
    return [i, star] as const;
  });

  const stars = Object.fromEntries(entries);

  return { sphere, plane, torus, text, ...stars };
}
