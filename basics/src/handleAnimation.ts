import * as THREE from "three";

const clock = new THREE.Clock();
type AnimateProps = {
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  callback: (seconds: number) => void;
};
export function handleAnimation(props: AnimateProps) {
  const { scene, camera, renderer, callback } = props;
  const elapsedTime = clock.getElapsedTime();
  callback(elapsedTime);
  renderer.render(scene, camera);
  requestAnimationFrame(() => handleAnimation(props));
}
