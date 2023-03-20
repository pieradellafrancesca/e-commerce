export const shortDescription = (str) =>
  str.split(" ").splice(0, 4).join(" ") + "...";

export const shortTitle = (str) => str.split("").splice(0, 20).join("") + "...";
