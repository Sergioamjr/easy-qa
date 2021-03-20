import React, { useState, useEffect } from "react";
import Uploader from "../Uploader";
import Box from "../Box";
import ControllBar from "../ControllBar";
import { Size, ImageInfo, StateType, ComponentProps } from "../../types";
import {
  CleanLocalStorage,
  SetLocalStorage,
  GetLocalStorage,
} from "../../localstorage";
import * as S from "./style";

const defaultState = {
  opacity: 0.5,
  position: { x: 0, y: 0 },
  size: { width: 0, height: 0 },
  image: {},
};

const Main = ({
  children,
  saveOnLocalStorage = true,
}: ComponentProps): JSX.Element => {
  const [state, setState] = useState<StateType>(defaultState);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "Pixel Perfect is been used in production. Consider only to use it during the development."
      );
    }

    if (!saveOnLocalStorage) {
      console.log("Pixel Perfect is not using localstorage.");
    }
  }, []);

  useEffect(() => {
    if (saveOnLocalStorage) {
      const storage = GetLocalStorage();
      if (storage) {
        setState((prev) => ({
          ...prev,
          ...storage,
        }));
      }
    }
  }, []);

  useEffect(() => {
    if (saveOnLocalStorage) {
      SetLocalStorage(state);
    }
  }, [
    state.size.height,
    state.size.width,
    state.position.x,
    state.position.y,
    state.opacity,
    state.image.image,
  ]);

  const onDragStop = (_e, { x, y }) => {
    setState((prev) => ({ ...prev, position: { x, y } }));
  };

  const onResize = (_e, _direction, ref, _delta, position) => {
    setState((prev) => ({
      ...prev,
      size: { width: ref.style.width, height: ref.style.height },
      position,
    }));
  };

  const setImageInfoOnImageUpload = (image: ImageInfo) => {
    setState((prev) => ({
      ...prev,
      image,
    }));
  };

  const setSizeOnImageUpload = ({ width, height }: Size) => {
    setState((prev) => ({
      ...prev,
      image: { ...prev.image, width, height },
      size: { width, height },
    }));
  };

  const onControllClick = (type: string) => {
    if (type === "RESET_SIZE") {
      const { width, height } = state.image;
      setState((prev) => ({
        ...defaultState,
        ...prev,
        size: { width, height },
      }));
    }

    if (type === "RESET") {
      setState(defaultState);
      CleanLocalStorage();
    }
  };

  const onChangeOpacity = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      opacity: parseInt(value, 10) / 100,
    }));
  };

  return (
    <div data-testid="unguessing-ui-id">
      {children}
      <Box
        image={state.image.image}
        onResize={onResize}
        onDragStop={onDragStop}
        size={state.size}
        position={state.position}
        opacity={state.opacity}
      />
      <S.Float>
        {state.image.image ? (
          <ControllBar
            opacity={state.opacity}
            onChangeOpacity={onChangeOpacity}
            onControllClick={onControllClick}
          />
        ) : (
          <Uploader
            setSizeOnImageUpload={setSizeOnImageUpload}
            setImageInfoOnImageUpload={setImageInfoOnImageUpload}
          />
        )}
      </S.Float>
    </div>
  );
};

export default Main;
