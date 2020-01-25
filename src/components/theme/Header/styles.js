import styled from 'styled-components';
import { fadeIn } from 'utils/keyframes';
import { zIndex, colors } from 'utils';

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  animation: 2s ${fadeIn} ease-out;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: ${zIndex.level4};	
	`}
`;
