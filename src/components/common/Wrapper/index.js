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

export const ComponentWrapper = styled.section`
  padding: ${({ large }) => (large ? '4rem 0' : '2rem 0')};
  background: ${colors.white};
  position: relative;
  z-index: ${zIndex.level10};

  ${media.tabletViewportWidth`
    width: 100%;
    max-width: 100%;
  `}
`;

export const TextWrapper = styled.div`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-family: GothamLight;
  font-size: 15px;
  letter-spacing: 0.6px;
  font-weight: 700;
  line-height: 20px;

  h2 {
    font-size: 15px;
    letter-spacing: 0.6px;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 0;
  }

  ${media.tabletViewportWidth`
    width: 90%;
    margin: 0 auto;
  `}
`;
