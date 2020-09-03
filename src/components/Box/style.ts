import styled from "styled-components";

export const Content = styled.div<{ image?: string }>`
  background-image: ${({ image }) => `url(${image})`};
  width: 100%;
  height: 100%;
`;
