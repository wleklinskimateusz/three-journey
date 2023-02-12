import {
  BufferGeometry,
  BufferAttribute,
  MeshBasicMaterial,
  Mesh,
} from "three";

export function createBufferGeometry() {
  const geometry = new BufferGeometry();
  const triangles = 50;
  const positionsArray = new Float32Array(triangles * 3 * 3).map(
    () => (Math.random() - 0.5) * 10
  );
  const positionsAttribute = new BufferAttribute(positionsArray, 3);
  geometry.setAttribute("position", positionsAttribute);

  const material = new MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  });
  return new Mesh(geometry, material);
}
