import styled from 'styled-components';
import { media } from 'utils';

export const VideoGrid = styled.div`
  grid-template-columns: 1fr;

  ${media.tabletViewportWidth`
    display: grid;
    align-items: center;
    grid-template-rows: 8fr;
    gap: 0rem 1.2rem;
    grid-template-columns: repeat(2, 340px);
  `}

  ${media.tabletLandscapeViewportWidth`
    gap: 1.2rem 1.2rem;
    grid-template-columns: repeat(3, 300px);
  `}

  ${media.desktopViewportWidth`
    grid-template-columns: repeat(3, 380px);
  `}
`;

export const PhotoGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  grid-template-columns: 1fr;

  ${media.tabletViewportWidth`
    grid-template-columns: repeat(2, 1fr);

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
    grid-template-columns: repeat(3, 300px);

    a {
      &:last-child {
        display: block;
      }
    }
  `}

  ${media.desktopViewportWidth`
    grid-template-columns: repeat(3, 380px);
  `}
`;
