import React from "react";
import { Rnd } from "react-rnd";
import * as S from "./style";
import { BoxProps } from "~types";

const Box = ({
  image,
  opacity,
  size = { width: 0, height: 0 },
  ...props
}: BoxProps): JSX.Element => {
  if (!image) {
    return null;
  }
  return (
    <Rnd size={size} {...props}>
      <S.Content opacity={opacity} image={image} />
    </Rnd>
  );
};

export default Box;
