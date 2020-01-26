import React from 'react';
import { H3, Container, VideoGrid, YouTubeToggle, VideoWrapper, ComponentWrapper } from 'components/common';
import { movies } from 'components/theme/Movies/movies';

export const Movies = () => (
  <ComponentWrapper as={Container} id="movies">
    <H3>Film</H3>

    <VideoWrapper>
      <VideoGrid>
        {movies.map(video => (
          <YouTubeToggle key={video.id} video={video} />
        ))}
      </VideoGrid>
    </VideoWrapper>
  </ComponentWrapper>
);
