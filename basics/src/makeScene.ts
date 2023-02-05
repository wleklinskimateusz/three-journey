import * as THREE from "three";

export function makeScene() {
  const geometry = new THREE.BufferGeometry();
  const triangles = 50;
  const positionsArray = new Float32Array(triangles * 3 * 3)
    // .fill(0)
    .map(() => (Math.random() - 0.5) * 10);
  const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
  geometry.setAttribute("position", positionsAttribute);

  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  });
  return { box: new THREE.Mesh(geometry, material) };
}
