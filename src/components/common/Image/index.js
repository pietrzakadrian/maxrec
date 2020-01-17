import styled from 'styled-components';

export const Image = styled.div`
  background-image: ${({ src }) => `url('${src}')`};
  height: 224px;
  width: 100%;
  background-size: contain;
  transition: 0.2s;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    background-image: ${({ hover }) => `url('${hover}')`};
    cursor: pointer;
  }
`;
