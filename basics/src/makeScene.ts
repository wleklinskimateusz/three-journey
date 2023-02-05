import gsap from "gsap";
import { addObjectGui } from "./gui";
import { createCube } from "./makers/createCube";
import { door } from "./textures/door";

export function makeScene() {
  const box = createCube(2, {
    map: door.color,
  });
  addObjectGui({
    mesh: box,
    name: "box",
    callbacks: {
      spin: () => {
        console.log("spin");
        gsap.to(box.rotation, { duration: 1, y: box.rotation.y + 2 * Math.PI });
      },
    },
  });

  return { box };
}
