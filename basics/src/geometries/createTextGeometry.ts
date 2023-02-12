import { Font } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

export const createTextGeometry = (text: string, font: Font) => {
  const geometry = new TextGeometry(text, {
    font,
    size: 0.5,
    height: 0.2,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 4,
  });
  centerText(geometry);
  return geometry;
};

function centerText(geometry: TextGeometry) {
  geometry.computeBoundingBox();
  if (!geometry.boundingBox) throw new Error("geometry.boundingBox is null");
  const centerOffset =
    -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  geometry.translate(centerOffset, 0, 0);
}
