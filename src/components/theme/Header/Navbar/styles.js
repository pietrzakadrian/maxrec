import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  align-items: center;
  justify-content: space-between;
  display: flex;

  a {
    color: #212121;
    text-transform: uppercase;
    display: none;
  }

  @media screen and (min-width: 768px) {
    a {
      display: inline-block;
    }
  }
`;
