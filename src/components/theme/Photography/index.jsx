import React from 'react';
import { ComponentWrapper, Container, PhotoGrid, PhotoWrapper } from 'components/common';
import { photos } from 'components/theme/Photography/photos';
import { H2 } from 'components/common/Typography';

export const Photography = () => (
  <ComponentWrapper as={Container} id="photography">
    <H2>Fotografia</H2>

    <PhotoWrapper>
      <PhotoGrid>
        {photos.map(photo => (
          <a className={`item-${photo.id}`} key={photo.id} href={photo.link}>
            <img src={photo.image} alt="Maksymilian Grela Photography" />
          </a>
        ))}
      </PhotoGrid>
    </PhotoWrapper>
  </ComponentWrapper>
);
