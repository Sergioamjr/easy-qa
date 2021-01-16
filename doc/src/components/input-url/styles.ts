import styled from "styled-components";

export const H2 = styled.h2`
  color: #333;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  padding-top: 40px;
  text-align: center;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  font-size: 1rem;
  max-width: 370px;
  width: 100%;
  color: #7b7b7b;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 7px 10px;
  border: 0;
  border-radius: 4px;
  background: #2d5f7d;
  color: #fff;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
  cursor: not-allowed;
  opacity: 0.8;
  `}
`;
