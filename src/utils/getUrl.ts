export function getUrl(url: string) {
  return process.env.NODE_ENV === "development"
    ? url
    : "https://wleklinskimateusz.github.io/three-journey-01-basics" + url;
}
