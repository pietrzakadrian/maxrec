import React from 'react';
import { H2, Container, VideoGrid, YouTubeToggle, VideoWrapper, ComponentWrapper } from 'components/common';
import { movies } from 'components/theme/Movies/movies';

export const Movies = () => (
  <ComponentWrapper as={Container} id="movies">
    <H2>Film</H2>

    <VideoWrapper>
      <VideoGrid>
        {movies.map(video => (
          <YouTubeToggle key={video.id} video={video} />
        ))}
      </VideoGrid>
    </VideoWrapper>
  </ComponentWrapper>
);
