import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/header.jpg';
import { media } from 'utils';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  height: 100vh;
  z-index: 2;
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

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  img {
    width: 85%;
    height: auto;
    margin-bottom: 50px;
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

  ${media.tabletViewportWidth`
    img {
      transform: translateY(-60%);
    }
  `}
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 12.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 190px;

  ${media.tabletViewportWidth`
    width: 230px;
  `}
`;
