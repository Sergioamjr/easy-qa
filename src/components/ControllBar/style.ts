import styled from "styled-components";

export const SmallBtn = styled.button`
  width: 30px;
  height: 30px;
  background: #437ebb;
  border: 0;
  overflow: hidden;
  border-radius: 4px;
  font-size: 0;
  cursor: pointer;
  text-decoration: none;
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 14px;
  color: #333;
  padding: 0 5px;
  input {
    margin: 0;
  }
`;
