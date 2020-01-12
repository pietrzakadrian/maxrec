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
		background: #001F3F;
  `};

  ${({ transparent }) =>
    transparent &&
    `
    opacity: .7;
    border: 1.8px solid #fff;
    background-color: transparent;
    text-transform: uppercase;
    font-family: 'GothamLight';
    padding-top: 15px;
    font-size: 12px;
    letter-spacing: 2px;

    &:hover {
      border: 2px solid #cb2027;
      color: #cb2027;
      opacity: 1;
    }

    @media screen and (min-width: 768px) {
      padding-top: 18px;
      font-size: 14px;
    }
  `};
`;
