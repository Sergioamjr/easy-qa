import React from "react";
import { Rnd } from "react-rnd";
import * as S from "./style";
import { BoxProps } from "~types";

const Box = (props: BoxProps) => (
  <Rnd {...props}>
    <S.Content />
  </Rnd>
);

export default Box;
