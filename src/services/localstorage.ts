import { UnguessingUITypes } from "./../types";
const key = "UNGUESSING-UI";

export const GetFromLocalStorage = () => {
  const store = window.localStorage.getItem(key) || "{}";
  return JSON.parse(store);
};

export const SetFromLocalStorage = (store: UnguessingUITypes) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(store));
  } catch (error) {
    console.error(
      "File size larger than 10MB, please, try to a smaller or poor resolution one."
    );
  }
};

export const MergeInLocalStorage = (data: UnguessingUITypes, path: string) => {
  const prevStorage = GetFromLocalStorage();
  SetFromLocalStorage({ ...prevStorage, [path]: data });
};
