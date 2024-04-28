export const nameToURL = (name: string) => {
  return name.replace(/ /g, "_");
};

export const urlToName = (url: string) => {
  return url.replace(/_/g, " ");
};
