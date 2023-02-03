import * as THREE from "three";

export function createCube(
  side: number,
  color: number,
  position: THREE.Vector3 = new THREE.Vector3(0, 0, 0),
  rotation: THREE.Euler = new THREE.Euler(0, 0, 0)
) {
  const geometry = new THREE.BoxGeometry(side, side, side);
  const material = new THREE.MeshBasicMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.copy(position);
  cube.rotation.copy(rotation);
  return cube;
}
