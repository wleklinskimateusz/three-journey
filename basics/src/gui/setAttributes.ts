import GUI from "lil-gui";
import type { NumberValue, MinMax } from "./gui.d";

export function setAttributes<T extends Record<string, any>>(
  objectGui: GUI,
  object: T,
  attributes: NumberValue<T>[],
  minMax: MinMax
) {
  attributes.forEach((attribute) =>
    objectGui
      .add(object, attribute)
      .min(minMax.min)
      .max(minMax.max)
      .step(minMax.step)
  );
}
