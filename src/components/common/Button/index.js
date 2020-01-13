import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 0.9rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
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
    background: #000;
    text-transform: uppercase;
    font-family: 'GothamLight';
    font-size: 13px;
    width: 100%;
    padding: 16px 0 14px;

    &:hover {
      background: #151515;
    }
  `};

  ${({ transparent }) =>
    transparent &&
    `
    opacity: .7;
    border: 1.8px solid #fff;
    background-color: transparent;
    text-transform: uppercase;
    font-family: 'GothamBook';
    padding-top: 24px;
    font-size: 12px;
    letter-spacing: 1.1px;

    &:hover {
      border: 1.8px solid #cb2027;
      color: #cb2027;
      opacity: 1;
    }

    @media screen and (min-width: 768px) {
      padding-top: 24px;
      font-size: 14px;
    }
  `};
`;
