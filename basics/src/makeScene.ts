import {
  BufferAttribute,
  GLBufferAttribute,
  InterleavedBufferAttribute,
  Mesh,
  PlaneGeometry,
  SphereGeometry,
  TorusGeometry,
} from "three";
import { fonts } from "./fonts";
import { createTextGeometry } from "./geometries/createTextGeometry";

import { materialWithEnvironment } from "./materials/materialWithEnvironment";

function isNotGlBufferAttribute<
  T extends GLBufferAttribute | BufferAttribute | InterleavedBufferAttribute
>(attribute: T): attribute is Exclude<T, GLBufferAttribute> {
  return (attribute as { array: unknown }).array !== undefined;
}

export function makeScene() {
  // you can import any material from the materials folder
  const material = materialWithEnvironment;

  const sphere = new Mesh(new SphereGeometry(0.5, 64, 64), material);
  sphere.position.x = -1.5;
  const sphereUV = sphere.geometry.attributes.uv;
  if (!isNotGlBufferAttribute(sphereUV))
    throw new Error("sphereUV is a GLBufferAttribute");

  sphere.geometry.setAttribute("uv2", new BufferAttribute(sphereUV.array, 2));

  const plane = new Mesh(new PlaneGeometry(1, 1, 100, 100), material);
  const planeUV = plane.geometry.attributes.uv;
  if (!isNotGlBufferAttribute(planeUV))
    throw new Error("planeUV is a GLBufferAttribute");
  plane.geometry.setAttribute("uv2", new BufferAttribute(planeUV.array, 2));

  const torus = new Mesh(new TorusGeometry(0.3, 0.2, 64, 128), material);

  const torusUV = torus.geometry.attributes.uv;
  if (!isNotGlBufferAttribute(torusUV))
    throw new Error("torusUV is a GLBufferAttribute");

  torus.position.x = 1.5;
  torus.geometry.setAttribute("uv2", new BufferAttribute(torusUV.array, 2));

  if (!fonts.helvetiker) throw new Error("helvetiker font is not loaded");

  const text = new Mesh(
    createTextGeometry("Hello There", fonts.helvetiker),
    material
  );
  text.position.y = 1;
  text.name = "text";

  return { sphere, plane, torus, text };
}
