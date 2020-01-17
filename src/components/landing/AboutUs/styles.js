import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 500px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
