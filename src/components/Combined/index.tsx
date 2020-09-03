import React, { useState } from "react";
import Uploader from "~components/Uploader";
import Box from "~components/Box";
import { Size, Position, ImageType } from "~types";

const Page = (): JSX.Element => {
  const [image, setImage] = useState<Partial<ImageType>>({});
  const [position, setPosition] = useState<Position>({ x: 10, y: 20 });
  const [size, setSize] = useState<Size>({ width: 200, height: 200 });
  const onDragStop = (e, { x, y }) => {
    setPosition({ x, y });
  };
  const onResize = (e, direction, ref) => {
    setSize({ width: ref.style.width, height: ref.style.height });
  };

  const onUploadImage = (image: ImageType) => {
    const { width, height } = image;
    setSize({
      width,
      height,
    });
    setImage(image);
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
      />
      <Uploader onUploadImage={onUploadImage} />
    </div>
  );
};

export default Page;
