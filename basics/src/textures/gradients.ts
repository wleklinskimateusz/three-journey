import { textureLoader } from "./textureLoader";
const textureFilenames = ["3", "5"] as const;
export type TextureFilenames = typeof textureFilenames[number];

export const gradients = textureFilenames.map((filename) =>
  textureLoader.load(`/textures/gradients/${filename}.jpg`)
);
