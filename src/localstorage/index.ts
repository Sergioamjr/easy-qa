import { StateType } from "./../types";
const key = "REACT-PIXEL-PERFECT";

export const GetLocalStorage = (): StateType => {
  const store = window.localStorage.getItem(key) || "{}";
  return JSON.parse(store);
};

export const SetLocalStorage = (store: StateType): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(store));
  } catch (error) {
    console.error(
      "File size larger than 10MB, please, try to a smaller or poor resolution one."
    );
  }
};

export const CleanLocalStorage = (): void => {
  window.localStorage.setItem(key, JSON.stringify({}));
};
