import {
  Mesh,
  SphereGeometry,
  BufferAttribute,
  MeshStandardMaterial,
  MeshMatcapMaterial,
} from "three";
import { isNotGlBufferAttribute } from "../utils/isNotGlBufferAttribute";

export function createSphereMesh(
  material: MeshStandardMaterial | MeshMatcapMaterial
) {
  const sphere = new Mesh(new SphereGeometry(0.5, 64, 64), material);
  const sphereUV = sphere.geometry.attributes.uv;
  if (!isNotGlBufferAttribute(sphereUV))
    throw new Error("sphereUV is a GLBufferAttribute");

  sphere.geometry.setAttribute("uv2", new BufferAttribute(sphereUV.array, 2));
  sphere.position.x = -1.5;
  return sphere;
}
