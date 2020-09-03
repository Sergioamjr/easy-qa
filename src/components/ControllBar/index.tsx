import React from "react";
import * as S from "./style";

type ControllBarProps = {
  hasImage: boolean;
  onControllClick: (e: string) => void;
};

const ControllBar = ({
  onControllClick,
  hasImage,
}: ControllBarProps): JSX.Element => {
  if (!hasImage) {
    return null;
  }
  return (
    <div>
      <S.SmallBtn onClick={() => onControllClick("RESET_SIZE")}>
        Resize
      </S.SmallBtn>
      <input type="range" />
      <S.SmallBtn onClick={() => onControllClick("RESET")}>Remove</S.SmallBtn>
    </div>
  );
};

export default ControllBar;
