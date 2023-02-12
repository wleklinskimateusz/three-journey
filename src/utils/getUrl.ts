export function getUrl(url: string) {
  // get from .env file base url
  const baseUrl =
    "https://wleklinskimateusz.github.io/three-journey-01-basics/";
  return baseUrl ? baseUrl + url : url;
}
