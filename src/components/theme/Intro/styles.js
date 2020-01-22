import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/header.jpg';
import { media, zIndex } from 'utils';
import { fadeIn } from 'utils/keyframes';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  height: 100vh;
  z-index: ${({ sidebar }) => (sidebar ? zIndex.level5 : zIndex.level2)};
  position: fixed;
  width: 100%;
  background-image: url(${overlayIllustration});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  animation: 1s ${fadeIn} ease-out;
`;

export const Thumbnail = styled.div`
  img {
    width: 85%;
    height: auto;
  }

  ${media.tabletViewportWidth`
    img {
      width: 500px;
    }
  `}

  ${media.tabletLandscapeViewportWidth`
    img {
      width: 700px;
    }
  `}
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  left: 0;

  img {
    transform: translateY(-50%);
  }

  ${media.tabletViewportWidth`
    img {
      transform: translateY(-35%);
    }
  `}
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 14.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 190px;

  ${media.tabletViewportWidth`
    width: 230px;
  `}
`;
