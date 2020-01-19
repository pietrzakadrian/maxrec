import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
  background: #fff;
  position: relative;
  z-index: 10;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const MusicVideosWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const Grid = styled.div`
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    display: grid;
    align-items: center;
    grid-template-rows: 8fr;
    gap: 0rem 1.2rem;
    grid-template-columns: repeat(2, 340px);
  }

  @media screen and (min-width: 1024px) {
    gap: 1.2rem 1.2rem;
    grid-template-columns: repeat(3, 300px);
  }

  @media screen and (min-width: 1260px) {
    grid-template-columns: repeat(3, 380px);
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;
