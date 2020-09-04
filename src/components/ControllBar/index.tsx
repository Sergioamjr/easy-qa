import React from "react";
import * as S from "./style";

type ControllBarProps = {
  onChangeOpacity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasImage: boolean;
  opacity: number;
  onControllClick: (e: string) => void;
};

const ControllBar = ({
  onChangeOpacity,
  onControllClick,
  hasImage,
  opacity,
}: ControllBarProps): JSX.Element => {
  if (!hasImage) {
    return null;
  }
  return (
    <div>
      <S.SmallBtn onClick={() => onControllClick("RESET_SIZE")}>
        Resize
      </S.SmallBtn>
      <input
        onChange={onChangeOpacity}
        value={opacity * 100}
        type="range"
        min="0"
        max="100"
      />
      <S.SmallBtn onClick={() => onControllClick("RESET")}>Remove</S.SmallBtn>
    </div>
  );
};

export default ControllBar;
