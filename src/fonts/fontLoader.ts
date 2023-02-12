import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { loadingManager } from "../loadingManager";
import { fonts } from "./fonts";

export const fontLoader = new FontLoader(loadingManager);

fontLoader.load("fonts/helvetiker_regular.typeface.json", (font) => {
  fonts.helvetiker = font;
});
