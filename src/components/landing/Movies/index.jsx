import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import movies from 'components/common/Movie/movies';
import { Image } from 'components/common/Image';
import { YouTubeToggle } from 'components/common/YouTubeToggle';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Movies = () => (
  <Wrapper as={Container} id="movies">
    <h2>Film</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Grid>
        {movies.map(video => (
          <YouTubeToggle key={video.id} video={video} />
        ))}
      </Grid>
    </div>
  </Wrapper>
);
