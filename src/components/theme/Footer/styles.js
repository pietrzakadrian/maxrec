import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/background2.jpg';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url(${overlayIllustration});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #151515;

  @media (max-width: 1960px) {
    padding: 9rem 4rem 6rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    transition: 0.3s;

    &:hover {
      opacity: 0.5;
    }

    img {
      margin: 0;
    }
  }

  @media screen and (min-width: 768px) {
    a {
      img {
        margin: 0;
      }
    }
  }
`;

export const Details = styled.div`
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
