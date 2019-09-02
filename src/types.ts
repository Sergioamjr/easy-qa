export interface Store {
  fileName: string;
  image: string;
  width: number;
  height: number;
  opacity: number;
  translateX: number;
  translateY: number;
  scale: number;
  isOpen: boolean;
}

export const defaultState = {
  fileName: "",
  image: "",
  width: 0,
  height: 0,
  opacity: 0.5,
  translateX: 0,
  translateY: 0,
  scale: 1,
  isOpen: false
};
