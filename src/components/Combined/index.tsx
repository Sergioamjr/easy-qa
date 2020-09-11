import React, { useState, useEffect } from "react";
import Uploader from "~components/Uploader";
import Box from "~components/Box";
import ControllBar from "~components/ControllBar";
import { Size, Position, ImageType } from "~types";
import {
  SetLocalStorage,
  CleanLocalStorage,
  GetLocalStorage,
} from "~localstorage";

const Page = (): JSX.Element => {
  const [image, setImage] = useState<Partial<ImageType>>({});
  const [opacity, setOpacity] = useState(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [size, setSize] = useState<Partial<Size>>({});

  useEffect(() => {
    const store = GetLocalStorage();
    store?.image?.image && setImage(store.image);
    typeof store?.opacity === "number" && setOpacity(store.opacity);
    store?.position && setPosition(store.position);
    store?.size && setSize(store.size);
  }, []);

  useEffect(() => {
    if (
      (size.height, size.width, position.x, position.y, opacity, image.image)
    ) {
      SetLocalStorage({
        size,
        position,
        opacity,
        image,
      });
    }
  }, [size.height, size.width, position.x, position.y, opacity, image.image]);

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

    setOpacity(1);
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
    </div>
  );
};

export default Page;
