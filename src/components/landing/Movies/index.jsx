import React from 'react';
import { Container } from 'components/common';
import { movies } from 'components/landing/Movies/movies';
import { YouTubeToggle } from 'components/common/YouTubeToggle';
import { H2 } from 'components/common/Typography';
import { Wrapper, Grid, Item, Content, Stats, MoviesWrapper } from './styles';

export const Movies = () => (
  <Wrapper as={Container} id="movies">
    <H2>Film</H2>

    <MoviesWrapper>
      <Grid>
        {movies.map(video => (
          <YouTubeToggle key={video.id} video={video} />
        ))}
      </Grid>
    </MoviesWrapper>
  </Wrapper>
);
