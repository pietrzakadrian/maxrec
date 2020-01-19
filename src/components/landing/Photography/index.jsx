import React from 'react';
import { Container } from 'components/common';
import { photos } from 'components/landing/Photography/photos';
import { H2 } from 'components/common/Typography';
import { Wrapper, PhotographyWrapper, Grid } from './styles';

export const Photography = () => (
  <Wrapper as={Container} id="photography">
    <H2>Fotografia</H2>

    <PhotographyWrapper>
      <Grid>
        {photos.map(photo => (
          <a className={`item-${photo.id}`} key={photo.id} href={photo.link}>
            <img src={photo.image} alt="Maksymilian Grela Photography" />
          </a>
        ))}
      </Grid>
    </PhotographyWrapper>
  </Wrapper>
);
