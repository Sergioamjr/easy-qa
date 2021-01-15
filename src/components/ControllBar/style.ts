import styled from "styled-components";

export const SmallBtn = styled.button<{ danger?: boolean }>`
  width: 30px;
  height: 30px;
  padding: 0;
  background: ${({ danger }) => (danger ? "#b52727" : "#437ebb")};
  border: 0;
  overflow: hidden;
  border-radius: 4px;
  font-size: 0;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 18px;
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 200px;
  border-radius: 4px;
  background-image: linear-gradient(45deg, #f182e7, #23b8bf, #47c330);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 14px;
  color: #fff;
  padding: 0 5px;
  input {
    margin: 0;
  }
`;
