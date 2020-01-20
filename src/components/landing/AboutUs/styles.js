import styled from 'styled-components';
import { colors, media } from 'utils';

export const Wrapper = styled.div`
  padding: 4rem 0;
  background: ${colors.white};
  position: relative;
  z-index: 10;

  ${media.tabletViewportWidth`
    width: 100%;
    max-width: 100%;
  `}
`;

export const AboutUsWrapper = styled.div`
  text-align: center;
  font-family: GothamLight;
  font-size: 15px;
  letter-spacing: 0.6px;

  ${media.tabletViewportWidth`
    width: 90%;
    margin: 0 auto;
  `}
`;
