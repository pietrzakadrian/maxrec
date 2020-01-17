import React from 'react';
import { Container } from 'components/common';
import { Image } from 'components/common/Image';
import { photos } from 'components/common/Photography/photos';
import { Wrapper } from './styles';
import { Grid } from '../MusicVideos/styles';

export const Photography = () => (
  <Wrapper as={Container} id="photography">
    <h2>Fotografia</h2>

    <Grid>
      {photos.map(photo => (
        <a key={photo.id} href={photo.link}>
          <Image src={photo.image} />
        </a>
      ))}
    </Grid>
  </Wrapper>
);
