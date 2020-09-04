export interface MouseEventsTypes {
  enableDrag: boolean;
  dragByMouse: boolean;
  mouseX: number;
  mouseY: number;
}

export interface UnguessingUITypes {
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

export interface State extends UnguessingUITypes {
  mouseEvents: MouseEventsTypes;
}

export const defaultState = {
  mouseEvents: {
    mouseX: 0,
    mouseY: 0,
    dragByMouse: false,
    enableDrag: false
  },
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