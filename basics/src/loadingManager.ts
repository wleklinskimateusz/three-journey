import { LoadingManager } from "three";

export const loadingManager = new LoadingManager();

let time: number;

loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
  time = new Date().getTime();
  console.log(
    `Started loading file: ${url}. Loaded ${itemsLoaded} of ${itemsTotal} files.`
  );
};

loadingManager.onLoad = () => {
  console.log("Loading complete!");
  console.log("Loaded on", new Date().getTime() - time, "ms");
};

loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
  console.log(
    `Loading file: ${url}. Loaded ${itemsLoaded} of ${itemsTotal} files.`
  );
};
