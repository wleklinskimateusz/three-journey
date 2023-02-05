import { textureLoader } from "./textureLoader";
// "color" | "alpha" | "height" | "normal" | "ambientOcclusion"
const textureFilenames = [
  "color",
  "alpha",
  "height",
  "normal",
  "ambientOcclusion",
] as const;
export type TextureFilenames = typeof textureFilenames[number];

export const door = Object.fromEntries(
  textureFilenames.map(
    (filename) =>
      [filename, textureLoader.load(`/textures/door/${filename}.jpg`)] as const
  )
);
