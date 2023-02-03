import * as THREE from "three";
import { createCube } from "./createCube";

const canvas = document.querySelector<HTMLCanvasElement>("#app")!;

const scene = new THREE.Scene();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const axesHelper = new THREE.AxesHelper(5);

scene.add(axesHelper);

function makeScene() {
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
  );
  camera.position.z = 3;

  const cube1 = createCube(
    1,
    0xff0000,
    new THREE.Vector3(-2, 0, 0),
    new THREE.Euler(Math.PI / 4, 0, 0)
  );
  const cube2 = createCube(1, 0x00ff00, new THREE.Vector3(0, 0, 0));
  const cube3 = createCube(
    1,
    0x0000ff,
    new THREE.Vector3(2, 0, 0),
    new THREE.Euler(-Math.PI / 4, 0, 0)
  );
  const group = new THREE.Group();
  group.add(cube1, cube2, cube3);
  group.rotateZ(Math.PI / 4);

  return { camera, group };
}

const elements = makeScene();

Object.values(elements).forEach((element) => scene.add(element));

const { camera } = elements;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();
function animate() {
  const elapsedTime = clock.getElapsedTime();

  elements.group.rotation.z = (elapsedTime * Math.PI) / 4;
  elements.group.children.forEach((child) =>
    child.position.copy(
      child.position.normalize().multiplyScalar(2 + Math.sin(elapsedTime))
    )
  );
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
