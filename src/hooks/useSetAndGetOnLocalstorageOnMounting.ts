import { Size, Position, ImageType } from "./../types";
import { GetLocalStorage, SetLocalStorage } from "./../localstorage";
import { useEffect } from "react";

type UseSetAndGetOnLocalstorageOnMounting = {
  size: Partial<Size>;
  position: Position;
  opacity: number;
  image: Partial<ImageType>;
  setPosition: (p: Position) => void;
  setSize: (s: Partial<Size>) => void;
  setImage: (image: Partial<ImageType>) => void;
  setOpacity: (n: number) => void;
};

const useSetAndGetOnLocalstorageOnMounting = ({
  size,
  position,
  opacity,
  image,
  setPosition,
  setSize,
  setImage,
  setOpacity,
}: UseSetAndGetOnLocalstorageOnMounting): void => {
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
};

export default useSetAndGetOnLocalstorageOnMounting;
