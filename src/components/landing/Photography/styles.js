import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const PhotographyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 380px);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media screen and (min-width: 768px) {
    a {
      &:last-child {
        display: none;
      }
    }

    .item-1 {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;

      img {
        min-width: 100%;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    a {
      &:last-child {
        display: block;
      }
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1024px) and (max-width: 1259px) {
    grid-template-columns: repeat(3, 300px);
  }
`;
