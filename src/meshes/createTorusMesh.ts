import {
  Mesh,
  TorusGeometry,
  BufferAttribute,
  MeshStandardMaterial,
  MeshMatcapMaterial,
} from "three";
import { isNotGlBufferAttribute } from "../utils/isNotGlBufferAttribute";

export function createTorusMesh(
  material: MeshStandardMaterial | MeshMatcapMaterial
) {
  const torus = new Mesh(new TorusGeometry(0.3, 0.2, 64, 128), material);
  torus.position.x = -1.5;
  const sphereUV = torus.geometry.attributes.uv;
  if (!isNotGlBufferAttribute(sphereUV))
    throw new Error("sphereUV is a GLBufferAttribute");

  torus.geometry.setAttribute("uv2", new BufferAttribute(sphereUV.array, 2));
  torus.position.x = 1.5;
  return torus;
}
