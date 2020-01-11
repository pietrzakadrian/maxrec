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
    opacity: .5;
    border: 2px solid #fff;
    background-color: transparent;
    text-transform: uppercase;
    font-family: Gotham Medium;

    &:hover {
      border: 2px solid #cb2027;
      color: #cb2027;
      opacity: 0.9;
    }
  `};
`;
