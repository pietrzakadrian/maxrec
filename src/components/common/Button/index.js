import styled from 'styled-components';
import { colors } from 'utils';

export const Button = styled.button`
  cursor: pointer;
  padding: 1.1rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${colors.white};
  background: #cb2027;
  transition: 0.3s;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
    background: ${colors.black};
    text-transform: uppercase;
    font-family: 'GothamLight';
    font-size: 13px;
    width: 100%;
    padding: 16px 0 14px;
    letter-spacing: 0.5px;
    transition: 0.3s;

    &:hover {
      background: #353535;
    }
  `};

  ${({ transparent }) =>
    transparent &&
    `
    opacity: .7;
    border: 1.8px solid #fff;
    background-color: transparent;
    text-transform: uppercase;
    font-family: 'GothamLight';
    font-weight: 700;
    font-size: 12.5px;
    letter-spacing: 1.7px;

    &:hover {
      border: 1.8px solid #cb2027;
      color: #cb2027;
      opacity: 1;
    }

  `};
`;
