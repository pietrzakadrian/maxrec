import styled from 'styled-components';
import { colors, media } from 'utils';

export const Wrapper = styled.section`
  padding: 3rem 0 1.5rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
  font-family: 'GothamLight';
  letter-spacing: 2px;
  font-size: 14px;

  a {
    color: ${colors.white};
    text-transform: uppercase;
    font-weight: 700;
    display: none;

    img {
      width: 205px;
      height: auto;
    }
  }

  ${media.tabletViewportWidth`
    a {
      display: inline-block;
    }
  `}
`;
