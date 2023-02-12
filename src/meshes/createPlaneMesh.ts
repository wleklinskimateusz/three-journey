import {
  Mesh,
  PlaneGeometry,
  BufferAttribute,
  MeshStandardMaterial,
  MeshMatcapMaterial,
} from "three";
import { isNotGlBufferAttribute } from "../utils/isNotGlBufferAttribute";

export function createPlaneMesh(
  material: MeshStandardMaterial | MeshMatcapMaterial
) {
  const plane = new Mesh(new PlaneGeometry(1, 1, 100, 100), material);
  const planeUV = plane.geometry.attributes.uv;
  if (!isNotGlBufferAttribute(planeUV))
    throw new Error("planeUV is a GLBufferAttribute");
  plane.geometry.setAttribute("uv2", new BufferAttribute(planeUV.array, 2));
  return plane;
}
