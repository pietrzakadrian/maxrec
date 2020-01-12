import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
    text-transform: uppercase;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

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
					color: #fff;
					text-transform: initial;
					font-size: 2.188rem;
					font-family: 'GothamBook';

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
