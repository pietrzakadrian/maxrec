import React from 'react';
import { Container } from 'components/common';
import { musicVideos } from 'components/landing/MusicVideos/music-videos';
import { YouTubeToggle } from 'components/common/YouTubeToggle';
import { H2 } from 'components/common/Typography';
import { Wrapper, Grid, MusicVideosWrapper } from './styles';

export const MusicVideos = () => (
  <Wrapper as={Container} id="music-videos">
    <H2>Teledyski</H2>

    <MusicVideosWrapper>
      <Grid>
        {musicVideos.map(video => (
          <YouTubeToggle key={video.id} video={video} />
        ))}
      </Grid>
    </MusicVideosWrapper>
  </Wrapper>
);
