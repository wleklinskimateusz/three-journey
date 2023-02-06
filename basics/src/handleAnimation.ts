import { Clock, Scene, Camera, WebGLRenderer } from "three";

const clock = new Clock();
type AnimateProps = {
  scene: Scene;
  camera: Camera;
  renderer: WebGLRenderer;
  callback: (seconds: number, scene: Scene) => void;
};
export function handleAnimation(props: AnimateProps) {
  const { scene, camera, renderer, callback } = props;
  const elapsedTime = clock.getElapsedTime();
  callback(elapsedTime, scene);
  renderer.render(scene, camera);
  requestAnimationFrame(() => handleAnimation(props));
}
