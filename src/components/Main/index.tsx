import React, { useState } from "react";
import Uploader from "../Uploader";
import Box from "../Box";
import ControllBar from "../ControllBar";
import { Size, Position, ImageType, ImageInfo } from "../../types";
import { CleanLocalStorage } from "../../localstorage";
import useSetAndGetOnLocalstorageOnMounting from "../../hooks/useSetAndGetOnLocalstorageOnMounting";
import * as S from "./style";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props): JSX.Element => {
  const [image, setImage] = useState<Partial<ImageType>>({});
  const [opacity, setOpacity] = useState(0.5);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [size, setSize] = useState<Partial<Size>>({});

  useSetAndGetOnLocalstorageOnMounting({
    image,
    setImage,
    opacity,
    setOpacity,
    position,
    setPosition,
    size,
    setSize,
  });

  const onDragStop = (_e, { x, y }) => {
    setPosition({ x, y });
  };
  const onResize = (_e, _direction, ref) => {
    setSize({ width: ref.style.width, height: ref.style.height });
  };

  const setImageInfoOnImageUpload = (imageInfo: ImageInfo) => {
    setImage((prev) => ({ ...prev, ...imageInfo }));
  };

  const setSizeOnImageUpload = ({ width, height }: Size) => {
    setImage((prev) => ({ ...prev, width, height }));
    setSize({ width, height });
  };

  const onControllClick = (type: string) => {
    if (type === "RESET_SIZE") {
      const { width, height } = image;
      setSize({ width, height });
    }

    if (type === "RESET") {
      setImage({});
      setSize({});
      CleanLocalStorage();
    }

    setOpacity(0.5);
    setPosition({ x: 0, y: 0 });
  };

  const onChangeOpacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const valueToInt = parseInt(value, 10);
    setOpacity(valueToInt / 100);
  };

  return (
    <div data-testid="unguessing-ui-id">
      {children}
      <Box
        image={image.image}
        onResize={onResize}
        onDragStop={onDragStop}
        size={size}
        position={position}
        opacity={opacity}
      />
      <S.Float>
        {image.image ? (
          <ControllBar
            opacity={opacity}
            onChangeOpacity={onChangeOpacity}
            hasImage={!!image.image}
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
