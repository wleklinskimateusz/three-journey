import { getUrl } from "../utils/getUrl";
import { textureLoader } from "./textureLoader";
const textureFilenames = [
  "alpha",
  "ambientOcclusion",
  "color",
  "height",
  "metalness",
  "normal",
  "roughness",
] as const;
export type TextureFilenames = typeof textureFilenames[number];

export const door = Object.fromEntries(
  textureFilenames.map(
    (filename) =>
      [
        filename,
        textureLoader.load(getUrl(`/textures/door/${filename}.jpg`)),
      ] as const
  )
);
