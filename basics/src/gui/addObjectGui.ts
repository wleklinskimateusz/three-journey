import { gui } from "./gui";
import type { AddObjectGuiProps, AttributesProps } from "./gui.d";
import { setAttributes } from "./setAttributes";
import { attributes } from "./const";

const defaults: AttributesProps = {
  position: { min: -3, max: 3, step: 0.01 },
  rotation: { min: 0, max: 2 * Math.PI, step: 0.1 },
  scale: { min: -3, max: 3, step: 0.01 },
};

export function addObjectGui<T extends string>({
  mesh,
  name,
  position = defaults.position,
  rotation = defaults.rotation,
  scale = defaults.scale,
  callbacks,
}: AddObjectGuiProps<T>) {
  const attributeValues: AttributesProps = {
    position,
    rotation,
    scale,
  };
  const folder = gui.addFolder(name);
  const buttons = folder.addFolder("callbacks");
  if (callbacks !== undefined)
    Object.keys(callbacks).forEach((key) => buttons.add(callbacks, key));

  folder.add(mesh.material, "visible");
  folder.addColor(mesh.material, "color");

  attributes.forEach((attribute) =>
    setAttributes(
      folder.addFolder(attribute),
      mesh[attribute],
      ["x", "y", "z"],
      attributeValues[attribute]
    )
  );
}
