import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/background2.jpg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  // display: flex;
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
  }

  @media screen and (min-width: 768px) {
    img {
      width: 500px;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 700px;
    }
  }
`;
