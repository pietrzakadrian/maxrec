import styled from 'styled-components';
import { media, zIndex } from 'utils';

export const Wrapper = styled.div`
  padding: 4rem 0;
  position: relative;
  background: #fff;
  z-index: ${zIndex.level10};

  ${media.tabletViewportWidth`
    width: 100%;
    max-width: 100%;
  `}
`;

export const ContactFormWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const Typography = styled.div`
  text-align: center;
  font-family: 'GothamLight';
  font-size: 14px;
  margin: 15px 0 30px;
  font-weight: 700;
`;
