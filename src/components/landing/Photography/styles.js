import styled from 'styled-components';
import { media } from 'utils';

export const Wrapper = styled.div`
  padding: 2rem 0;
  background: #fff;
  position: relative;
  z-index: 10;

  ${media.tabletViewportWidth`
    width: 100%;
    max-width: 100%;
  `}
`;

export const PhotographyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  ${media.tabletViewportWidth`
    width: 90%;
  `}
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 380px);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  ${media.tabletViewportWidth`
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
  `}

  ${media.tabletLandscapeViewportWidth`
    a {
      &:last-child {
        display: block;
      }
    }
  `}

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
