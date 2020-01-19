import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/background2.jpg';

export const Wrapper = styled.div`
  padding: 5rem 4rem 4rem;
  background-image: url(${overlayIllustration});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #151515;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    padding: 9rem 4rem 6rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  color: #fff;
  font-family: 'GothamBook';
  line-height: 20px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    margin-bottom: 105px;
  }
`;

export const Col = styled.div`
  width: 100%;

  &:first-child {
    display: none;
  }

  @media screen and (min-width: 768px) {
    max-width: 250px;

    &:first-child {
      display: block;
    }
  }
`;

export const LinksWrapper = styled.div`
  margin: 0 auto;
  width: 200px;

  @media screen and (min-width: 768px) {
    margin: 0;
    width: 220px;
  }
`;

export const Heading = styled.div`
  text-transform: uppercase;
  padding: 0 0 30px;
  letter-spacing: 1.4px;
  font-size: 17px;
`;

export const FooterWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.8px;
  font-family: 'GothamLight';
  margin-bottom: 30px;
  margin-top: 3px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Description = styled.div`
  font-size: 14px;

  div {
    margin-bottom: 0.4rem;
    letter-spacing: 0.5px;
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
