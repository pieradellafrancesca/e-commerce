export const shortDescription = (str) =>
  str.split(" ").splice(0, 5).join(" ") + "...";

export const shortTitle = (str) => str.split("").splice(0, 15).join("") + "...";
