import React, { useState } from "react";
import * as S from "./style";
import useParseImageInto64Base from "~hooks/useParseImageInto64Base";

const Uploader = () => {
  const [image, setImage] = useState(null);
  const updateFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    useParseImageInto64Base(event, (e) => {
      setImage(e);
    });
  };

  console.log(image);

  return (
    <S.Uploader>
      <S.Input onChange={updateFileHandler} type="file" />
      Escolha a imagem
    </S.Uploader>
  );
};

export default Uploader;
