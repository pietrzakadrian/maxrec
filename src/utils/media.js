import { css } from 'styled-components';

export const sizes = {
  desktopViewportWidth: 1260,
  tabletLandscapeViewportWidth: 1024,
  tabletViewportWidth: 768,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
