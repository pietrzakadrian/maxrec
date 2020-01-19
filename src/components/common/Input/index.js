import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid transparent;
  background-color: #ecf0f3;
  padding: 1rem 1rem 0.9rem;
  border-radius: 0;
  margin-bottom: 0.1rem;
  transition: 0.3s;
  font-family: 'GothamLight';
  letter-spacing: 0.7px;
  font-size: 14px;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #a7a7a7;
  }

  &:focus {
    border: 1px solid #010101;
  }
`;
