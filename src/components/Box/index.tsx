import React from "react";
import { Rnd } from "react-rnd";
import * as S from "./style";
import { BoxProps } from "~types";

const Box = ({ image, opacity, ...props }: BoxProps): JSX.Element => {
  if (!image) {
    return null;
  }
  return (
    <Rnd {...props}>
      <S.Content opacity={opacity} image={image} />
    </Rnd>
  );
};

export default Box;
