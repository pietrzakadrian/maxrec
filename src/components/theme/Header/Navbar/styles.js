import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 0 1.5rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
  font-family: 'GothamLight';
  letter-spacing: 2px;
  font-size: 14px;

  a {
    color: #fff;
    text-transform: uppercase;
    display: none;
  }

  @media screen and (min-width: 768px) {
    a {
      display: inline-block;
      font-weight: 700;
    }
  }
`;
