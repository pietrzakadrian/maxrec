import React from 'react';
import { ComponentWrapper, Container, PhotoGrid, PhotoWrapper } from 'components/common';
import { photos } from 'components/theme/Photography/photos';
import { H3 } from 'components/common/Typography';
// import LazyLoad from 'react-lazyload';

export const Photography = () => (
  <ComponentWrapper as={Container} id="photography">
    <H3>Fotografia</H3>

    <PhotoWrapper>
      <PhotoGrid>
        {photos.map(photo => (
          <a key={photo.id} className={`item-${photo.id}`} href={photo.link}>
            <img src={photo.image} alt="Maksymilian Grela Photography" />
          </a>
        ))}
      </PhotoGrid>
    </PhotoWrapper>
  </ComponentWrapper>
);
