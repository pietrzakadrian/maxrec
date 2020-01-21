import styled from 'styled-components';
import { colors, media } from 'utils';

export const AboutUsWrapper = styled.div`
  text-align: center;
  font-family: GothamLight;
  font-size: 15px;
  letter-spacing: 0.6px;
  font-weight: 700;

  ${media.tabletViewportWidth`
    width: 90%;
    margin: 0 auto;
  `}
`;
