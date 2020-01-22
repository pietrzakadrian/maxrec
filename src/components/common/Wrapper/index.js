import styled from 'styled-components';
import { colors, media, zIndex } from 'utils';

export const ContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  transform: translateY(100vh);
  z-index: ${zIndex.level2};
  background: ${colors.white};
`;

export const VideoWrapper = styled.div`
  ${media.tabletViewportWidth`
    display: flex;
    justify-content: space-around;
  `}
`;

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  ${media.tabletViewportWidth`
    width: 90%;
  `}
`;

export const ComponentWrapper = styled.div`
  padding: ${({ large }) => (large ? '4rem 0' : '2rem 0')};
  background: ${colors.white};
  position: relative;
  z-index: ${zIndex.level10};

  ${media.tabletViewportWidth`
    width: 100%;
    max-width: 100%;
  `}
`;
