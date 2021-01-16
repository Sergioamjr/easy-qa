import styled from "styled-components";

export const Header = styled.header`
  background: #2d5f7d;
  height: 50px;
  div {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }
  * {
    color: #fff;
  }
`;

export const Logo = styled.h1`
  color: #fff;
  font-size: 1rem;
`;

export const Content = styled.div`
  height: calc(100% - 50px);
`;

export const A = styled.a`
  font-weight: 600;
  text-decoration: none;
  align-items: center;
  display: flex;
  svg {
    margin-left: 5px;
  }
`;
