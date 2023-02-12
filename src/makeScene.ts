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

  let entries = new Array(400).fill(0).map((_, i) => {
    const starGeometry = new SphereGeometry(0.05, 8, 8);
    const starMaterial = new MeshBasicMaterial({ color: 0xff0000 });
    const star = new Mesh(starGeometry, starMaterial);
    star.position.x = (Math.random() - 0.5) * 50;
    star.position.y = (Math.random() - 0.5) * 50;
    star.position.z = 13;
    star.name = "star";
    return [i, star];
  });

  entries = entries.concat(
    new Array(400).fill(0).map((_, i) => {
      const starGeometry = new SphereGeometry(0.05, 8, 8);
      const starMaterial = new MeshBasicMaterial({ color: 0xff0000 });
      const star = new Mesh(starGeometry, starMaterial);
      star.position.x = (Math.random() - 0.5) * 50;
      star.position.y = (Math.random() - 0.5) * 50;
      star.position.z = -13;
      star.name = "star";
      return [i + entries.length, star];
    })
  );

  entries = entries.concat(
    new Array(400).fill(0).map((_, i) => {
      const starGeometry = new SphereGeometry(0.05, 8, 8);
      const starMaterial = new MeshBasicMaterial({ color: 0xff0000 });
      const star = new Mesh(starGeometry, starMaterial);
      star.position.x = (Math.random() - 0.5) * 50;
      star.position.y = 13;
      star.position.z = (Math.random() - 0.5) * 50;
      star.name = "star";
      return [i + entries.length, star];
    })
  );

  entries = entries.concat(
    new Array(400).fill(0).map((_, i) => {
      const starGeometry = new SphereGeometry(0.05, 8, 8);
      const starMaterial = new MeshBasicMaterial({ color: 0xff0000 });
      const star = new Mesh(starGeometry, starMaterial);
      star.position.x = (Math.random() - 0.5) * 50;
      star.position.y = -13;
      star.position.z = (Math.random() - 0.5) * 50;
      star.name = "star";
      return [i + entries.length, star];
    })
  );

  entries = entries.concat(
    new Array(400).fill(0).map((_, i) => {
      const starGeometry = new SphereGeometry(0.05, 8, 8);
      const starMaterial = new MeshBasicMaterial({ color: 0xff0000 });
      const star = new Mesh(starGeometry, starMaterial);
      star.position.x = -13;
      star.position.y = (Math.random() - 0.5) * 50;
      star.position.z = (Math.random() - 0.5) * 50;
      star.name = "star";
      return [i + entries.length, star];
    })
  );

  entries = entries.concat(
    new Array(400).fill(0).map((_, i) => {
      const starGeometry = new SphereGeometry(0.05, 8, 8);
      const starMaterial = new MeshBasicMaterial({ color: 0xff0000 });
      const star = new Mesh(starGeometry, starMaterial);
      star.position.x = 13;
      star.position.y = (Math.random() - 0.5) * 50;
      star.position.z = (Math.random() - 0.5) * 50;
      star.name = "star";
      return [i + entries.length, star];
    })
  );

  const stars = Object.fromEntries(entries);

  return { sphere, plane, torus, text, ...stars };
}
