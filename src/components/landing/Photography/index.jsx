import React from 'react';
import { Container } from 'components/common';
import { Image } from 'components/common/Image';
import { photos } from 'components/common/Photo/photos';
import { Photo } from 'components/common/Photo';
import { Wrapper, PhotographyWrapper, Grid } from './styles';

export const Photography = () => (
  <Wrapper as={Container} id="photography">
    <h2>Fotografia</h2>

    <PhotographyWrapper>
      <Grid>
        {photos.map(photo => (
          <a className={`item-${photo.id}`} key={photo.id} href={photo.link}>
            <Photo src={photo.image} />
          </a>
        ))}
      </Grid>
    </PhotographyWrapper>
  </Wrapper>
);
