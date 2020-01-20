import styled from 'styled-components';
import { colors } from 'utils';

export const Wrapper = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
	text-transform: uppercase;
  }

  ${({ footer }) =>
    footer &&
    `
		  display: flex!important;
		  flex-direction: column;
		
		  a {
				text-transform: initial;
				color: ${colors.white};
				font-size: 14px;
				margin-bottom: 0.4rem;

					&:last-child {
							margin-bottom: unset;
					}
		  }
	`}
 }

  ${({ desktop, footer }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1.3rem;
					transition: 0.3s;
					font-weight: 700;

					&:hover {
						${!footer && 'color: #cb2027;'};
					}

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 0 3rem;
			display: flex;
			flex-direction: column;
			height: 100%;
			display: flex
			justify-content: center;
			align-items: center;

			a {
					line-height: 70px;
					color: ${colors.white};
					text-transform: initial;
					font-size: 2.188rem;
					font-family: 'GothamLight';

					&:last-child {
						margin-bottom: unset;
					}
			}
	`}
`;
