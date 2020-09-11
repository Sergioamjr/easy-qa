import React, { useState } from "react";
import Uploader from "~components/Uploader";
import Box from "~components/Box";
import ControllBar from "~components/ControllBar";
import { Size, Position, ImageType } from "~types";
import { CleanLocalStorage } from "~localstorage";
import useSetAndGetOnLocalstorageOnMounting from "~hooks/useSetAndGetOnLocalstorageOnMounting";
import * as S from "./style";

const Page = (): JSX.Element => {
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

  const onDragStop = (e, { x, y }) => {
    setPosition({ x, y });
  };
  const onResize = (e, direction, ref) => {
    setSize({ width: ref.style.width, height: ref.style.height });
  };

  const onUploadImage = (UplodatedImage: ImageType) => {
    const { width, height } = UplodatedImage;
    setSize({
      width,
      height,
    });
    setImage(UplodatedImage);
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
    <div>
      <p>Page</p>
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
          <Uploader onUploadImage={onUploadImage} />
        )}
      </S.Float>
    </div>
  );
};

export default Page;
